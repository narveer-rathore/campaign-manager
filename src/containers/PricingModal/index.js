import React from 'react';
import PropTypes from 'prop-types';
import { withTranslation } from 'react-i18next';

import './styles.scss';

import Modal from '../../components/Modal';
import CampaignMeta from '../../components/CampaignMeta';
import defaultImage from '../../assets/images/default-game-thumbnail.png';
import { PRICING_OPTIONS } from '../../constants';

import { formatCurrency } from '../../utils';


const PricingModal = ({ data, isOpen, close, t, i18n }) => {
    return (
        <Modal isOpen={isOpen} close={close}>
            {data && <div>
                <CampaignMeta
                    banner
                    title={data.name}
                    subtitle={data.region}
                    image={data.image_url || defaultImage}
                />
                <h2 className="data-title">{t('Pricing')}</h2>
                <ul className="data-list">
                    {Object.keys(PRICING_OPTIONS).map(mode => {
                        return <li className="data-item" key={mode}>
                            <p className="data-label">{PRICING_OPTIONS[mode]}</p>
                            <p className="data-value">
                                {data.price && data.price[mode] ? formatCurrency(data.price[mode], i18n.language) : '-'}
                            </p>
                        </li>;
                    })}
                </ul>
            </div>}
        </Modal>
    );
};

PricingModal.propTypes = {
};

export default withTranslation()(PricingModal);
