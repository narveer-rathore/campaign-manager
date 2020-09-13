import React from 'react';
import PropTypes from 'prop-types';

import Modal from '../../components/Modal';
import CampaignMeta from '../../components/CampaignMeta';

import defaultImage from '../../assets/images/default-game-thumbnail.png';

import './styles.scss';

const PRICING_OPTIONS = {
    "month_1": "1 Week - 1 Month",
    "month_6": "6 Months",
    "month_12": "1 Year"
}

const PricingModal = ({ data, isOpen, close }) => {
    return (
        <Modal isOpen={isOpen} close={close}>
            {data && <div>
                <CampaignMeta
                    banner
                    title={data.name}
                    subtitle={data.region}
                    image={data.image_url || defaultImage}
                />
                <h2 className="data-title">Pricing</h2>
                <ul className="data-list">
                    {Object.keys(PRICING_OPTIONS).map(mode => {
                        return <li className="data-item">
                            <p className="data-label">{PRICING_OPTIONS[mode]}</p>
                            <p className="data-value">{data.pricing && data.pricing[mode] ? data.pricing[mode] : '-'}</p>
                        </li>;
                    })}
                </ul>
            </div>}
        </Modal>
    );
};

PricingModal.propTypes = {
};

export default PricingModal;
