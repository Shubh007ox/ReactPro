import React from 'react';
import ExpenseDate from './ExpenseDate';
import './ExpenseSetItem.css'
import Card from '../UI/Card';


function ExpenseSetItem(props){
    return (
        <Card className="expense-item">
            <ExpenseDate date={props.date} />
            <div className="expense-item__description">
                <h2>{props.title}</h2>
            </div>
            <div className="expense-item__price"><h3>${props.amount}</h3></div>
        </Card>
    )


}
export default ExpenseSetItem;