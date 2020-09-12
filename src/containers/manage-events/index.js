import React from 'react';
import { withTranslation } from 'react-i18next';

import DefaultLayout from '../../layouts/default';

import TabList from '../../components/TabList';

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
    const { t } = this.props;
    const { activeTabIndex } = this.state;

    return (
      <DefaultLayout>
        <h1>{t("Manage Campaigns")}</h1>
        <TabList tabs={TABS} activeIndex={activeTabIndex} onChange={this.tabChanged}></TabList>
      </DefaultLayout>
    );
  }
}

export default withTranslation()(Page);
