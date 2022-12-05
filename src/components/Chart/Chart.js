import React, {useState} from "react";
import ChartBar from "./ChartBar";
import ChartBarModel from "../../models/ChartBar";
import './Chart.css';
import expenses from "../Expense/Expenses";

export default function Chart(prop) {
    const [maxAmount, setMaxAmount] = useState(0);
    const chartsData = []

    for (let monthNumber = 0; monthNumber < 12; monthNumber++) {
        const chartBarModel = new ChartBarModel(0, monthNumber + 1);

        prop.expenses.forEach(expense => {
            if (expense.date.getMonth() === monthNumber) {
                chartBarModel.updateAmount(expense.amount);
            }
        });

        chartsData.push(chartBarModel);

        if (chartBarModel.amount > maxAmount) {
            setMaxAmount(chartBarModel.amount);
        }
    }

    return <div className={'chart'}>
        {chartsData.map(chart => <ChartBar key={(chart.amount + 1) * Math.random()} maxAmount={maxAmount} chardBar={chart} />)}
    </div>
}