import React, {useState} from 'react';
import ExpenseDate from './ExpenseDate';
import './ExpenseSetItem.css'
import Card from '../UI/Card';

function ExpenseSetItem(props){
    const [title, setTitle] = useState(props.title);
    const [amount,setAmount] = useState(props.amount);
    const ClickHandler = () => {
        setTitle('upDated')
        console.log('Clicked BC')
    }
    function Click2Handler(){
        console.log('Deleted')
    }
    const Click3Handler = () => {
        setAmount(100)

    }
    return (
        <Card className="expense-item">
            <ExpenseDate date={props.date} />
            <div className="expense-item__description">
                <h2>{title}</h2>
            </div>
            <div className="expense-item__price">
                <h3>${amount}</h3><button onClick={Click3Handler}>change Amount</button></div>
            <button onClick={ClickHandler}>Click ME!!!</button>
            <button onClick={Click2Handler}>Delete</button>
        </Card>
    )


}
export default ExpenseSetItem;


Some ANSwerss
The title get updated but the it didn't get reflected on to the DOM because react doesn't work like that..React calls every component function which has JSX also calls those functions which are returned by previous functions untill there no function left and then it evealutes the over-all result and translate it into DOM instructions so this process occur in react but problem is react didn't repeat itself thats our titlte did'nt changes because it doesn't get re-evaulated by thr react

2 .. useState function return the array datatype with 2 elements in it...first is for title what we have given and another is for setitle to updated the title ..

3.. Calling like title = 'new Title does not assign new value, setTitle is a special variable it managed by the react in the memory and when we call SPy variable it did not just recieve a new value .. The Component Function in which we have

initialized the state of USestate will be excuted again and so it will tell react the component in which the State is registered should be re-evaluated

4.Async function these state update functions did not change the values right away but instead they Schedules this state update

5.. Only the corresponding title get updated because of the usestate which we use in react it gives every function different states so our ExpensetItem function get called four times and every time it get called a new separate state get created and managed independently by react only just specific Instance is only get updated or being re-evaluated

6.. const is used because we re not assigning a value with equal operator sign instead we are calling this State function and the concreate value is simply managed somewhere else..by calling react we tell react it should manage Some value for us ..we never see the variable itself we just call a function and never assign a new value toa function with equal operator thast how const Usage is fine

7.. when we call the component first time time in that time useState is inisialize the state

8.when we update the state using settitle React will re-execute  and the component function then it get re-evaluated whenever the state changes and the it gets updated..




