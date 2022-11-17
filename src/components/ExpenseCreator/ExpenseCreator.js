import React from "react";
import './ExpenseCreator.css';
import ExpenseForm from "./ExpenseForm";

export default function ExpenseCreator(props) {
    return <div className="expense-creator">
        <ExpenseForm addNewExpense={props.addNewExpense} />
    </div>
}