import './Expenses.css'
import ExpenseItem from "./ExpenseItem";
import Card from "../Card";
import YearFilter from "../Filter/YearFilter";
import Chart from "../Chart/Chart";


function Expenses(props) {
    const { expenses } = props;

    function createExpenseItem(expenses, index) {
        return <ExpenseItem key={index} title={expenses.title} amount={expenses.amount} date={expenses.date}/>
    }

    return (
        <Card className="expenses">
            <YearFilter filter={props.filter} />
            <Chart expenses={expenses}/>
            {expenses.map(createExpenseItem)}
        </Card>
    )
}

export default Expenses;