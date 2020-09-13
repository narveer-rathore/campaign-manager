import React from 'react';

import { connect } from 'react-redux';
import { withTranslation } from 'react-i18next';

import './styles.scss';

import Datepicker from '../../components/Datepicker';
import { CAMPAIGNS_TABLE_COLUMS } from '../../constants';
import { updateCampaign } from '../../actions/actions';
import CampaignRowItem from '../../components/CampaignRowItem';
import PricingModal from '../PricingModal';

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

    // On picking a date
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


    // Check type of action triggered on a row and
    // perform it
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

            default:
                return;
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
                <PricingModal
                    data={data}
                    isOpen={isPricingModalOpen}
                    close={this.hidePricingModal}
                />
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

const mapDispatchToProps = (dispatch) => {
    return {
        updateCampaign: (payload) => {
            dispatch(updateCampaign(payload))
        }
    }
};

export default withTranslation()(connect(null, mapDispatchToProps)(CampaignList));
