import React from 'react';
import { default as classnames } from 'classnames';

import './styles.scss';


const TabItem = ({ title, onClick, isActive }) => {
    const classes = classnames({"tab-item": true, "active": isActive})
    return (
        <button className={classes} onClick={onClick}>
            {title}
        </button>
    );
};


export default TabItem;
