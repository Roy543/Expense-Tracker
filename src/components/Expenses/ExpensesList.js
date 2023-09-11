import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

function ExpensesList(props) {
  if (props.item.length === 0) {
    return <h2 className="expense-list__fallback">Found no expense.</h2>;
  }

  return (
    <ul className="expense-list">
      {props.item.map((expenses) => (
        <ExpenseItem
          key={expenses.id}
          title={expenses.title}
          amount={expenses.amount}
          date={expenses.date}
        />
      ))}
    </ul>
  );
}

export default ExpensesList;
