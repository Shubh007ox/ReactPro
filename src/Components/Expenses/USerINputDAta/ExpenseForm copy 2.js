import React, {useState} from "react";
import "./ExpenseForm.css";
function ExpenseForm() {
  const [enterTitle,setUseState] = useState('')
  const [enterAmount,setAmountstate] = useState('')
  const [enterDate,setDatestate] = useState('')
  
  function click4Handler(event) {
    setUseState(event.target.value);
  }
  function amountChangeHandler(event){
    setAmountstate(event.target.value)
  }
  function dateChangeHandler(event){
    setDatestate(event.target.value)
  }
  return (
    <div className="new-expense__controls">
      <form>
        <div className="new-expense__controls">
          <label>Title</label>
          <input type="text" onChange={click4Handler}></input>
        </div>
        <div className="new-expense__controls">
          <label>Amount</label>
          <input type="number" min="0.01" step="0.01" onChange={amountChangeHandler}></input>
        </div>
        <div className="new-expense__controls">
          <label>Date</label>
          <input type="date" min="2019-01-01" max="2022-12-31" onChange={dateChangeHandler}></input>
        </div>
        <div className="new-expense__actions">
          <button type="submit" >Add Expenses</button>
        </div>
      </form>
    </div>
  );
}

export default ExpenseForm;
