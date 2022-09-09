import Expenses from "./components/Expense/Expenses";

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

    return (
        <header className="App-header">
            <Expenses expenses={expenses} />
        </header>
    );
}

export default App;
