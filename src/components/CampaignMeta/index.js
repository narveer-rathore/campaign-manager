import React from 'react';

import { default as classnames } from 'classnames';

import { withTranslation } from 'react-i18next';

import './styles.scss';

const CampaignMeta = ({ title, subtitle, banner, type = '', image, t}) => {
    return (
        <div className={classnames({
                "action-meta": true,
                "action-banner": !!banner
            })}
            >
            {image && <div className="action-image">
                <img src={image} alt={t('Thumbnail image of ') + title}></img>
            </div>}
            <div className="action-detail">
                <p className={classnames({
                    "title": true,
                    [type]: !!type
                })}>{title}</p>
                <p className={classnames({
                    "subtitle": true,
                    [type]: !!type
                })}>{subtitle}</p>
            </div>
        </div>
    );
};

CampaignMeta.propTypes = {

};

export default withTranslation()(CampaignMeta);
