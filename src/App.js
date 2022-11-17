import Expenses from "./components/Expense/Expenses";
import ExpenseCreator from "./components/ExpenseCreator/ExpenseCreator";

function App() {
    const expenses = [
        {
            title: 'Lego toy',
            amount: 15.94,
            date: new Date(2022, 7, 12, 15, 7)
        },
        {
            title: 'Break',
            amount: 1.94,
            date: new Date(2022, 7, 12, 16, 23)
        },
        {
            title: 'Bus ticket',
            amount: 0.5,
            date: new Date(2022, 7, 12, 16, 50)
        },
        {
            title: 'YouTube Subscribe',
            amount: 9.99,
            date: new Date(2022, 7, 12, 23, 41)
        }
    ]

    function addNewExpense(expense) {
        expenses.push(expense);
        console.log(expenses);
    }

    return (
        <header className="App-header">
            <ExpenseCreator addNewExpense={addNewExpense} />
            <Expenses expenses={expenses} />
        </header>
    );
}

export default App;
