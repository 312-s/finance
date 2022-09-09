import './ExpenseTime.css'

function ExpenseTime(props) {
    const day = props.date.toLocaleString('ru-RU', {day: '2-digit'});
    const month = props.date.toLocaleString('ru-RU', {month: 'long'});
    const year = props.date.getFullYear();

    return (
        <div className="expense-time">
            <span className="expense-time__month">{month}</span>
            <span className="expense-time__year">{year}</span>
            <span className="expense-time__day">{day}</span>
        </div>
    )
}

export default ExpenseTime;