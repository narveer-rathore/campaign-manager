import React from 'react';
import { withTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet'
import PropTypes from 'prop-types';

import DefaultLayout from '../../layouts/default';
import TabList from '../../components/TabList';
import Loader from '../../components/Loader';
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

    // Check if a text passed in query params is a valid tab, otherwise
    // fallback to default tab and update view
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
        const { t, campaigns = [], loading } = this.props;
        const { activeTabIndex } = this.state;
        const filter = CAMPAIGN_TABS[activeTabIndex].id;

        // Check current view and filter relevant items for rendering
        // We should have used a virtualized rendering solution like agGrid
        // or react-virtualized but due to some time constraints have to go
        // this way
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
                        {loading && <Loader />}
                        {!loading &&
                        <CampaignList
                            list={list}
                            nullMessage={CAMPAIGN_ERROR_MESSAGES[filter]}
                            onItem
                        />
                    }
                </DefaultLayout>
            </>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        campaigns: state.campaigns,
        loading: state.isloading
    }
}

Page.propTypes = {
    loading: PropTypes.bool,
    campaigns: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string,
        report: PropTypes.string,
        csv: PropTypes.string,
        region: PropTypes.string,
        createdOn: PropTypes.number,
        scheduledOn: PropTypes.number,
        image_url: PropTypes.string,
        price: PropTypes.shape({
            month_1: PropTypes.oneOfType([
                PropTypes.string,
                PropTypes.number
            ]),
            month_6: PropTypes.oneOfType([
                PropTypes.string,
                PropTypes.number
            ]),
            month_12: PropTypes.oneOfType([
                PropTypes.string,
                PropTypes.number
            ])
        })
    }))
}

export default withTranslation()(connect(mapStateToProps)(Page));

