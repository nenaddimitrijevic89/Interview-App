import React from 'react';
import { DatePicker, Col } from 'react-materialize';

const DateSelector = ({ setDate }) => {
    let interviewDate;

    const handleDateChange = (dateObj) => {
        interviewDate = dateObj.target.value;
    }

    const onChangeDate = (newDate) => {
        handleDateChange({
            target: {
                id: "myDate",
                value: newDate
            }
        })
    }

    return (
        <Col l={4}>
            <DatePicker
                id="DatePicker-5"
                label='Interview Date:'
                required
                onChange={onChangeDate}
                options={{
                    autoClose: false,
                    container: null,
                    defaultDate: null,
                    disableDayFn: null,
                    disableWeekends: false,
                    events: [],
                    firstDay: 0,
                    format: 'mmm dd, yyyy',
                    i18n: {
                        cancel: 'Cancel',
                        clear: 'Clear',
                        done: 'Ok',
                        months: [
                            'January',
                            'February',
                            'March',
                            'April',
                            'May',
                            'June',
                            'July',
                            'August',
                            'September',
                            'October',
                            'November',
                            'December'
                        ],
                        monthsShort: [
                            'Jan',
                            'Feb',
                            'Mar',
                            'Apr',
                            'May',
                            'Jun',
                            'Jul',
                            'Aug',
                            'Sep',
                            'Oct',
                            'Nov',
                            'Dec'
                        ],
                        nextMonth: '›',
                        previousMonth: '‹',
                        weekdays: [
                            'Sunday',
                            'Monday',
                            'Tuesday',
                            'Wednesday',
                            'Thursday',
                            'Friday',
                            'Saturday'
                        ],
                        weekdaysAbbrev: [
                            'S',
                            'M',
                            'T',
                            'W',
                            'T',
                            'F',
                            'S'
                        ],
                        weekdaysShort: [
                            'Sun',
                            'Mon',
                            'Tue',
                            'Wed',
                            'Thu',
                            'Fri',
                            'Sat'
                        ]
                    },
                    isRTL: false,
                    maxDate: null,
                    minDate: null,
                    onClose: (() => { setDate(interviewDate) }),
                    onDraw: null,
                    onOpen: null,
                    onSelect: null,
                    parse: null,
                    setDefaultDate: false,
                    showClearBtn: false,
                    showDaysInNextAndPreviousMonths: false,
                    showMonthAfterYear: false,
                    yearRange: 10
                }}
            />
        </Col>
    )
}

export { DateSelector };