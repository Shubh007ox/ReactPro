import "./Expenses.css";
import ExpenseSetItem from "./ExpenseSetItem";
import Card from "../UI/Card";
import React, { useState } from "react";
import ExpensesFilter from "./ExpensesFilter";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2020");

  function filterChangeHandler(selectedYear) {
    setFilteredYear(selectedYear);
  }
  const filterExpenses = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear
  })
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          yearSelect={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        {filterExpenses.map((expense) => (
          <ExpenseSetItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
      </Card>
    </div>
  );
}

export default Expenses;
