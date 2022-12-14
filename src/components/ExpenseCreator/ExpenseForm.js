import React from "react";
import Expense from "../../models/Expense";
import "./ExpenseForm.css"

export default function ExpenseForm(props) {
    function getFormExpense(event) {
        event.preventDefault();

        const fieldsData = new FormData(event.target);
        props.addNewExpense(new Expense(fieldsData.get('title'), fieldsData.get('amount'), fieldsData.get('date')));

        props.closeForm();
    }

    return <div><form onSubmit={getFormExpense}>
        <div className="expense-form__controls">
            <div className="expense-form__control">
                <label>Title</label>
                <input required type="text" name='title'/>
            </div>
            <div className="expense-form__control">
                <label>Amount</label>
                <input required type="number" name="amount" min="0.01" step="1"/>
            </div>
            <div className="expense-form__control">
                <label>Date</label>
                <input required type="date" name="date" min="2020-01-01" max="2023-01-01"/>
            </div>
        </div>
        <div className="expense-form__actions">
            <button onClick={props.closeForm}>Cancel</button>
            <button type="submit">Add</button>
        </div>
    </form></div>
}