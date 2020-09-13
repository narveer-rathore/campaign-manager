import React from 'react';
import { default as moment } from 'moment';
import PropTypes from 'prop-types';
import { withTranslation } from 'react-i18next';

import './styles.scss';

import defaultImage from '../../assets/images/default-game-thumbnail.png';

const CampaignRowItem = ({ t, row, action }) => {
    return (
        <div className="list-item">
            <div className="list-col">
                <p className="title">{moment(row.scheduledOn).format('MMM YYYY, D')}</p>
                <p className="subtitle">{moment(row.scheduledOn).fromNow()}</p>
            </div>
            <div className="list-col mr-1">
                <div className="action-meta">
                    <div className="action-image">
                        <img src={defaultImage}></img>
                    </div>
                    <div className="action-detail">
                        <p className="title light">{row.name}</p>
                        <p className="subtitle light">{row.region}</p>
                    </div>
                </div>
            </div>
            <div className="list-col action-group mr-full" onClick={() => action('pricing', row)}>
                <button className="action-action">
                    <span className="action-icon icon-price yellow"></span>
                    <span className="action-text">{t('View Pricing')}</span>
                </button>
            </div>
            <div className="list-col action-group">
                <button className="action-action">
                    <span className="action-icon icon-file green"></span>
                    <span className="action-text">CSV</span>
                </button>
                <button className="action-action">
                    <span className="action-icon icon-statistics-report red"></span>
                    <span className="action-text">{t('Report')}</span>
                </button>
                <button className="action-action" onClick={() => action('schedule', row)}>
                    <span className="action-icon icon-calendar blue"></span>
                    <span className="action-text">{t('Schedule Again')}</span>
                </button>
            </div>
        </div>
    );
};

CampaignRowItem.propTypes = {

};

export default withTranslation()(CampaignRowItem);
