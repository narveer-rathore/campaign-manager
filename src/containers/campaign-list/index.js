import React from 'react';
import PropTypes from 'prop-types';
import { FixedSizeList as List } from 'react-window';
import { default as moment } from 'moment';

import Modal from '../../components/Modal';

import './styles.scss';

import defaultImage from '../../assets/images/default-game-thumbnail.png';

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
            isPricingModalOpen: false
        }
    }

    showPricing = (row) => {
        console.log("setting state")
        this.setState({
            data: row,
            isPricingModalOpen: true
        })
    }

    hidePricingModal = () => {
        this.setState({
            data: {},
            isPricingModalOpen: false
        })
    }

    render() {
        const { isPricingModalOpen, data } = this.state;
        const { list, nullMessage } = this.props;

        return (
            <div className = "list-wrap" >
                <div className="list-item head">
                    {CAMPAIGNS_TABLE_COLUMS.map(item => {
                        return <p className="list-col" key={item.id}>{item.title}</p>
                    })}
                </div>
                { list.length > 0 && <List
                    height={Math.max(500, window.innerHeight - 400)}
                    itemCount={list.length}
                    itemSize={70}
                    width={Math.min(1080, window.innerWidth - 70)}
                    >
                    {({ index, style }) => {
                        const row = list[index];
                        return <div className="list-item" style={style}>
                            <div className="list-col">
                                <p className="title">{moment(row.createdOn).format('MMM YYYY, D')}</p>
                                <p className="subtitle">{moment(row.createdOn).fromNow()}</p>
                            </div>
                            <div className="list-col">
                                <div className="campaign-meta">
                                    <div className="campaign-image">
                                        <img src={defaultImage}></img>
                                    </div>
                                    <div className="campaign-text">
                                        <p className="title light">{row.name}</p>
                                        <p className="subtitle light">{row.region}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="list-col campaign-group" onClick={() => this.showPricing(row)}>
                                <button className="campaign-action">
                                    <span className="campaign-icon icon-price yellow"></span>
                                    View Pricing
                                </button>
                            </div>
                            <div className="list-col campaign-group">
                                <button className="campaign-action">
                                    <span className="campaign-icon icon-file green"></span>
                                    CSV
                                </button>
                                <button className="campaign-action">
                                    <span className="campaign-icon icon-statistics-report red"></span>
                                    Report
                                </button>
                                <button className="campaign-action">
                                    <span className="campaign-icon icon-calendar blue"></span>
                                    Schedule Again
                                </button>
                            </div>
                        </div>
                    }}
                </List>}
                { !list.length && <h2 className="list-null">{nullMessage}</h2> }
                <Modal isOpen={isPricingModalOpen} close={this.hidePricingModal}>
                    {data.name}
                </Modal>
            </div >
        );
    }

};

CampaignList.propTypes = {

};

export default CampaignList;
