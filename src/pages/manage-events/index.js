import React from 'react';
import { withTranslation } from 'react-i18next';
import { connect } from 'react-redux';

import DefaultLayout from '../../layouts/default';
import TabList from '../../components/TabList';
import CampaignList from '../../containers/campaign-list'

import { default as moment } from 'moment';

const TABS = [
  {
    id: "upcoming",
    title: "Upcoming Campaigns",
  }, {
    id: "live",
    title: "Live Campaigns",
  }, {
    id: "past",
    title: "Past Campaigns",
  }
]

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

    let tabIndex = TABS.findIndex(item => item.id === tab);

    if (tabIndex < 0) {
      tabIndex = 0;
      toSet = 'upcoming';
    } else {
      toSet = TABS[tabIndex].id;
    }

    if (qTab !== toSet) {
      query.set('tab', toSet);
      window.location.search = query.toString();
    } else {
      this.setState({ activeTabIndex: tabIndex })
    }
  }

  tabChanged = (index) => {
    this.changeView(TABS[index].id)
  }

  render () {
    const { t, campaigns } = this.props;
    const { activeTabIndex } = this.state;

    const filter = TABS[activeTabIndex].id;

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

    const ERROR_MESSAGES = {
      "upcoming": t('No upcoming campaigns'),
      "live": t('No live campaigns'),
      "past": t('No past campaigns'),
    }

    return (
      <DefaultLayout>
        <h1>{t("Manage Campaigns")}</h1>
        <TabList tabs={TABS} activeIndex={activeTabIndex} onChange={this.tabChanged} />
        <CampaignList
          list={list}
          nullMessage={ERROR_MESSAGES[filter]}
          onItem
        />
      </DefaultLayout>
    );
  }
}

const mapStateToProps = (state) => ({
  campaigns: state.campaigns
})

export default withTranslation()(connect(mapStateToProps)(Page));

