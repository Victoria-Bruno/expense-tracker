import { useState } from "react";
import { ExpenseForm } from "./ExpenseForm";
import "./NewExpense.css"

//STEP 4: accept the props parameter, 
//pass to the child the function in the parent from props
//pass to the parent the enriched parameter (expenseData) to the child
export const NewExpense = (props) => {
    const [onDisplay, setOnDisplay] = useState('')

    //Setting a parament that will tell us when the (starting) button is clicked
    const [clickStatus, setClickStatus] = useState('unclicked')
     const clickHandler = (event) => {
        if(clickStatus === 'unclicked') {
            setClickStatus('clicked')
        }
        }
    
    //Assigning the JSX to a dynamic variable that is returned
    let cardOutput = <div className="new-expense">
    <button onClick={clickHandler}>Add New Expense</button>
    </div>

    const saveExpenseDataHandler = (enteredExpenseData) => {    //this argument will come from the child component (check ExpenseForm)
        const expenseData = {
        ...enteredExpenseData, 
        id: Math.random().toString()
    };
    props.onAddExpense(expenseData)
};

//I am missing how to reset to initial state - the else if here is wrong
    if (clickStatus === 'clicked') {
        return <div className='new-expense'>
        <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
        </div>
    } else if (cardOutput === null) {
        setClickStatus('unclicked')
    }

    return (<div>
        {cardOutput}
    </div>)
}
