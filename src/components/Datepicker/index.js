import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { default as moment } from 'moment';

import Modal from '../../components/Modal';

import './index.scss';

import React from 'react';
import PropTypes from 'prop-types';

const Datepicker = ({ date, isOpen, onChange, title }) => {
    const dateObject = moment(date).toDate();

    return (
        <Modal isOpen={isOpen} close={() => onChange(null)}>
            <div className="text-center">
                <h2>{title}</h2>
                <DatePicker
                    selected={dateObject}
                    onChange={date => onChange(date)}
                    inline
                    calendarClassName="datepicker-wrap"
                />
            </div>
        </Modal>
    );
};

Datepicker.propTypes = {
    date: PropTypes.any,
    isOpen: PropTypes.bool
};

export default Datepicker;
