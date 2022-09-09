import './ExpenseItem.css';
import './ExpenseTime'
import ExpenseTime from "./ExpenseTime";
import Card from "../Card";

function ExpenseItem(props) {
    return (
        <Card className="expense-item">
            <ExpenseTime date={props.date} />
            <div className="expense-item__description">
                <h2>{props.title}</h2>
                <p className="expense-item__price">${props.amount}</p>
            </div>
        </Card>
    )
}

export default ExpenseItem;