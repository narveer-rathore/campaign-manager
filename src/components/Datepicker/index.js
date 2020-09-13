import DatePicker, { registerLocale } from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import moment from 'moment'

import { withTranslation } from 'react-i18next';

import de from "date-fns/locale/de";

import { LANG_TO_LOCALE } from '../../constants';

import Modal from '../../components/Modal';

import './index.scss';

import React from 'react';
import PropTypes from 'prop-types';

registerLocale("de", de); // register it with the name you want

const Datepicker = ({ date, isOpen, onChange, title, i18n }) => {
    const dateObject = moment(date).toDate();
    return (
        <Modal isOpen={isOpen} close={() => onChange(null)}>
            <div className="text-center">
                <h2>{title}</h2>
                <DatePicker
                    locale={LANG_TO_LOCALE[i18n.language]}
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

export default withTranslation()(Datepicker);
