import React from 'react';

import PropTypes from 'prop-types';
import { withTranslation } from 'react-i18next';

import CampaignMeta from '../CampaignMeta';

import Action from '../Action';

import defaultImage from '../../assets/images/default-game-thumbnail.png';

import { localDate } from '../../utils';

import './styles.scss';

const CampaignRowItem = ({ t, row, action }) => {
    console.log(localDate(row.scheduledOn));
    return (
        <div className="list-item">
            <div className="list-col">
                <CampaignMeta
                    title={localDate(row.scheduledOn).format('MMM YYYY, D')}
                    subtitle={localDate(row.scheduledOn).fromNow()}
                />
            </div>
            <div className="list-col mr-1">
                <CampaignMeta
                    title={row.name}
                    subtitle={row.region}
                    image={row.image_url || defaultImage}
                />
            </div>
            <div className="list-col action-group">
                <Action
                  title={t('View Pricing')}
                  icon="icon-price"
                  color="yellow"
                  onClick={() => action('pricing', row)}
                />
            </div>
            <div className="list-col action-group">
              <Action
                title="CSV"
                icon="icon-file"
                color="green"
              />
              <Action
                title={t('Report')}
                icon="icon-statistics-report"
                color="red"
              />
              <Action
                title={t('Schedule Again')}
                icon="icon-calendar"
                color="blue"
                onClick={() => action('schedule', row)}
              />
            </div>
        </div>
    );
};

CampaignRowItem.propTypes = {

};

export default withTranslation()(CampaignRowItem);
