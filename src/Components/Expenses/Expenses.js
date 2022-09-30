import './Expenses.css'
import ExpenseSetItem from './ExpenseSetItem';
import Card from '../UI/Card';
import React from 'react';

function Expenses(props) {
    return <Card className="expenses">
       <ExpenseSetItem title={props.items[0].title} amount={props.items[0].amount} date={props.items[0].date}></ExpenseSetItem>
       <ExpenseSetItem title={props.items[1].title} amount={props.items[1].amount} date={props.items[1].date}></ExpenseSetItem>
       <ExpenseSetItem title={props.items[2].title} amount={props.items[2].amount} date={props.items[2].date}></ExpenseSetItem>
       <ExpenseSetItem title={props.items[3].title} amount={props.items[3].amount} date={props.items[3].date}></ExpenseSetItem>

    </Card>

}

export default Expenses;