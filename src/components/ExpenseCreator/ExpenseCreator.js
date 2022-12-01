import React, {useState} from "react";
import './ExpenseCreator.css';
import ExpenseForm from "./ExpenseForm";

export default function ExpenseCreator(props) {
    let [isFormDisplayed, setIsFormDisplayed] = useState(false);

    function changeFormStatus() {
        setIsFormDisplayed(!isFormDisplayed);
    }

    function displayForm() {
        if (isFormDisplayed) {
            return <ExpenseForm closeForm={changeFormStatus} addNewExpense={props.addNewExpense} />;
        }

        return <button onClick={changeFormStatus}>Add new Expenses</button>
    }

    return <div className="expense-creator">
        {displayForm()}
    </div>
}