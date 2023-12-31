import ExpensesList from "./ExpensesList";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpenseFilter";
import { useState } from "react";
import ExpensesChart from "./ExpensesChart";

function Expense(props) {
  const [filteredYear, setFilteredYear] = useState("2020");

  function filterChangeHandler(selectedYear) {
    setFilteredYear(selectedYear);
  }

  const filteredExpense = props.item.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  })

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      <ExpensesChart expense={filteredExpense}/>
      <ExpensesList item={filteredExpense}/>
    </Card>
  );
}

export default Expense;
