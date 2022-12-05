import Expenses from "./components/Expense/Expenses";
import ExpenseCreator from "./components/ExpenseCreator/ExpenseCreator";
import Chart from "./components/Chart/Chart";
import {useState} from "react";

function App() {

    const [expenses, setExpenses] = useState([])
    const [filteredExpenses, setFilteredExpenses] = useState([]);
    const [years, setYears] = useState([]);

    function updateYearsList(expenseYear) {
        const wasAdded = years.findIndex(year => expenseYear === year) === -1;
        if (wasAdded) {
            setYears(prevState => [...prevState, expenseYear].sort((a, b) => b - a))
        }
    }

    function addNewExpense(expense) {
        setExpenses(prevState => [expense, ...prevState]);

        updateYearsList(expense.date.getFullYear());
    }

    function applyFilter(year) {
        if (year === null) {
            setFilteredExpenses([]);
        } else {
            setFilteredExpenses(expenses.filter(expense => {
                const expenseDate = expense.date.getFullYear();
                return year === expenseDate;
            }));
        }
    }

    const filterProps = {
        filter: applyFilter,
        years: years,
    }

    return (
        <header className="App-header">
            <ExpenseCreator addNewExpense={addNewExpense}/>
            <Expenses filter={filterProps} expenses={filteredExpenses.length ? filteredExpenses : expenses}/>
        </header>
    );
}

export default App;
