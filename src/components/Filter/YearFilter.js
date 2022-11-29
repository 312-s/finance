import React from "react";

import './YearFilter.css';

export default function YearFilter(props) {
    function setOptions(year, index) {
        return <option key={index} value={year}>{year}</option>
    }

    const defaultSelectValue = 'none';

    function applyFilter(event) {
        const selectedValue = event.target.value;

        if (selectedValue === defaultSelectValue) {
            props.filter.filter(null);
        }

        props.filter.filter(Number(selectedValue));
    }

    return <div className={'year-filter'}>
        <p className={'year-filter__title'}>Filter by Year</p>
        <select onChange={applyFilter} name="year" className={'year-filter__selector'}>
            <option defaultValue={defaultSelectValue}>{defaultSelectValue}</option>
            {props.filter.years.map(setOptions)}
        </select>
    </div>
}