import "./ExpensesList.css";
import React from "react";
import ExpenseSetItem from "./ExpenseSetItem";

const ExpensesList = (props) => {
  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback">Found No expenses.</h2>;
  }else if(props.items.length === 1){
    return (<h2 className="expenses-list__fallback">Only 1 item add more</h2>)
  }
  return (
    <ul className="expenses-list">
      {props.items.map((expense) => (
        <ExpenseSetItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
      ;
    </ul>
  );
};

export default ExpensesList;
