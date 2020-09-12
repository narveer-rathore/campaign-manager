import React from 'react';
import PropTypes from 'prop-types';

import { FixedSizeList as List } from 'react-window';

import './styles.scss';

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

const CampaignList = ({ list = [], nullMessage}) => {

    return (
        <div className="list-wrap">
            <div className="list-item head">
                {CAMPAIGNS_TABLE_COLUMS.map(item => {
                    return <p className="list-col" key={item.id}>{item.title}</p>
                })}
            </div>
            {list.length > 0 && <List
                height={Math.max(500, window.innerHeight - 400)}
                itemCount={list.length}
                itemSize={70}
                width={Math.min(1080, window.innerWidth - 70)}
            >
                {({ index, style }) => {
                    return <div className="list-item" style={style}>
                        <div className="list-col">
                            {list[index].name}
                        </div>
                        <div className="list-col">
                            {list[index].name}
                        </div>
                        <div className="list-col">
                            {list[index].name}
                        </div>
                        <div className="list-col">
                            {list[index].name}
                        </div>
                    </div>
                }}
            </List>}
            {!list.length && <h2 className="list-null">{nullMessage}</h2>}
        </div>
    );
};

CampaignList.propTypes = {

};

export default CampaignList;
