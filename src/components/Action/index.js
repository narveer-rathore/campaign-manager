import React from 'react';

import { default as classnames } from 'classnames';

import './index.scss';

const Action = ({ title, icon, color, onClick }) => {
    return (
        <button className="action-wrap" onClick={onClick} title={title}>
            <span className={classnames({
                "action-icon": true,
                [icon]: !!icon,
                [color]: !!color
            })}></span>
            <span className="action-text">{title}</span>
        </button>
    );
};

Action.propTypes = {

};

export default Action;
