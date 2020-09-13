import React from 'react';
import { withTranslation } from 'react-i18next';
import { connect } from 'react-redux';

import DefaultLayout from '../../layouts/default';
import TabList from '../../components/TabList';
import CampaignList from '../campaign-list'

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

  tabChanged = (index) => {
    this.setState({activeTabIndex: index})
  }

  render () {
    const { t, campaigns } = this.props;
    const { activeTabIndex } = this.state;
    const list = campaigns[TABS[activeTabIndex].id];
    console.log(campaigns[TABS[activeTabIndex].id], TABS[activeTabIndex])
    return (
      <DefaultLayout>
        <h1>{t("Manage Campaigns")}</h1>
        <TabList tabs={TABS} activeIndex={activeTabIndex} onChange={this.tabChanged} />
        <CampaignList
          list={list}
          nullMessage={t('No campaign here')}
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

