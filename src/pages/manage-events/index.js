import React from 'react';
import { withTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet'

import DefaultLayout from '../../layouts/default';
import TabList from '../../components/TabList';
import CampaignList from '../../containers/campaign-list'
import { CAMPAIGN_TABS, CAMPAIGN_ERROR_MESSAGES } from '../../constants';

import moment from 'moment'

class Page extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTabIndex: 0
    }
  }

  componentDidMount() {
    this.changeView();
  }

  changeView = (tabId) => {
    const query = new URLSearchParams(window.location.search)
    const qTab = query.get('tab');
    let tab = tabId ? tabId : qTab, toSet;

    let tabIndex = CAMPAIGN_TABS.findIndex(item => item.id === tab);

    if (tabIndex < 0) {
      tabIndex = 0;
      toSet = 'upcoming';
    } else {
      toSet = CAMPAIGN_TABS[tabIndex].id;
    }

    if (qTab !== toSet) {
      query.set('tab', toSet);
      window.location.search = query.toString();
    } else {
      this.setState({ activeTabIndex: tabIndex })
    }
  }

  tabChanged = (index) => {
    this.changeView(CAMPAIGN_TABS[index].id)
  }

  render () {
    const { t, campaigns } = this.props;
    const { activeTabIndex } = this.state;

    const filter = CAMPAIGN_TABS[activeTabIndex].id;

    const list = campaigns.filter((item) => {
      switch(filter) {
        case 'upcoming':
          return moment().isBefore(moment(item.scheduledOn), 'day');
        case 'live':
          return moment(item.scheduledOn).isSame(moment(), 'day')
        case 'past':
          return moment(item.scheduledOn).isBefore(moment(), 'day');
        default :
          return true;
      }
    })

    return (
      <>
        <Helmet>
            <title>{t('Manage Campaigns')}</title>
        </Helmet>
        <DefaultLayout>
            <h1>{t("Manage Campaigns")}</h1>
            <TabList tabs={CAMPAIGN_TABS} activeIndex={activeTabIndex} onChange={this.tabChanged} />
            <CampaignList
            list={list}
            nullMessage={CAMPAIGN_ERROR_MESSAGES[filter]}
            onItem
            />
        </DefaultLayout>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  campaigns: state.campaigns
})

export default withTranslation()(connect(mapStateToProps)(Page));

