import React from "react";
import './ChartBar.css';

export default function ChartBar(props) {
    function calculateHeight() {
        if (props.chardBar.amount > 0) {
            return Math.round(props.chardBar.amount / props.maxAmount * 100) + '%';
        }

        return '0%';
    }

    return <div className={'chart-bar'}>
        <div className={'chart-bar__inner'}>
            <div className='chart-bar__fill' style={{height: calculateHeight()}}></div>
        </div>
        <div className='chart-bar__label'>{props.chardBar.month}</div>
    </div>
}