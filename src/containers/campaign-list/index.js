import React from 'react';
import PropTypes from 'prop-types';
import { FixedSizeList as List } from 'react-window';

import { withTranslation } from 'react-i18next';

import { connect } from 'react-redux';
import Modal from '../../components/Modal';
import Datepicker from '../../components/Datepicker';

import './styles.scss';

import { updateCampaign } from '../../actions/events';
import CampaignRowItem from '../../components/CampaignRowItem';

const CAMPAIGNS_TABLE_COLUMS = [
    {
        id: "date",
        title: "Date",
    },
    {
        id: "campaign",
        title: "Campaign"
    },
    {
        id: "view",
        title: "View"
    },
    {
        id: "action",
        title: "Action"
    }
]
class CampaignList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {},
            isPricingModalOpen: false,
            isDatePickerOpen: false
        }

    }

    hidePricingModal = () => {
        this.setState({
            data: {},
            isPricingModalOpen: false
        })
    }

    hideDateModal = () => {
        this.setState({
            data: {},
            isDatePickerOpen: false
        })
    }

    dateChanged = (date) => {
        const { data } = this.state;
        if (date) {
            this.props.updateCampaign({
                id: data.id,
                date: date.getTime()
            });
        }
        this.hideDateModal();
    }

    rowClicked = (type, row) => {
        switch(type) {
            case 'pricing':
                this.setState({
                    data: row,
                    isPricingModalOpen: true
                })
                break;
            case 'schedule':
                this.setState({
                    data: row,
                    isDatePickerOpen: true
                })
                break;
        }
    }

    render() {
        const { isDatePickerOpen, isPricingModalOpen, data } = this.state;
        const { t, list, nullMessage } = this.props;

        return (
            <div className = "list-wrap" >
                <div className="list-item head">
                    {CAMPAIGNS_TABLE_COLUMS.map(item => {
                        return <p className="list-col" key={item.id}>{item.title}</p>
                    })}
                </div>
                { list.length > 0 &&
                <div>
                    {list.map(row => {
                        return <CampaignRowItem
                            row={row}
                            action={this.rowClicked}
                            key={row.id}
                        />
                    })}
                </div>}
                { !list.length && <h2 className="list-null">{nullMessage}</h2> }
                <Modal
                    isOpen={isPricingModalOpen}
                    close={this.hidePricingModal}
                    >
                    {data.name}
                </Modal>
                <Datepicker
                    date={data.scheduledOn}
                    isOpen={isDatePickerOpen}
                    onChange={this.dateChanged}
                    title={t('Reschedule')}
                />
            </div >
        );
    }

};

CampaignList.propTypes = {

};

const mapDispathToProps = (dispatch) => {
    return {
        updateCampaign: (payload) => {
            dispatch(updateCampaign(payload))
        }
    }
};

export default withTranslation()(connect(null, mapDispathToProps)(CampaignList));
