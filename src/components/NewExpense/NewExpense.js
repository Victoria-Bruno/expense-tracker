import React from "react";
import { ExpenseForm } from "./ExpenseForm";
import "./NewExpense.css"

//STEP 4: accept the props parameter, 
//pass to the child the function in the parent from props
//pass to the parent the enriched parameter (expenseData) to the child
export const NewExpense = (props) => {
    const saveExpenseDataHandler = (enteredExpenseData) => {    //this argument will come from the child component (check ExpenseForm)
        const expenseData = {
        ...enteredExpenseData, 
        id: Math.random().toString()
    };
    props.onAddExpense(expenseData)
};

    return <div className='new-expense'>
    <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
};

