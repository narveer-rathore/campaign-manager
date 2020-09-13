import React from 'react';

import TabItem from '../TabItem';

import './styles.scss';

const TabList = ({ tabs, onChange, activeIndex } ) => {
    return (
        <div className="tab-list">
            {tabs.map((item, index) => {
                return <TabItem
                    key={item.id}
                    title={item.title}
                    isActive={index === activeIndex}
                    index={index}
                    onClick={() => {
                        // Do not change trigger if already on same tab
                        if (index !== activeIndex) {
                            onChange(index)
                    }}}
                />
            })}
        </div>
    );
};

export default TabList;
