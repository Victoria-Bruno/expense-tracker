import { React, useState} from "react";
import "./ExpenseForm.css"

export const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState(" ") 
  const [enteredAmount, setEnteredAmount] = useState(" ") 
  const [enteredDate, setEnteredDate] = useState(" ") 
  
  // Option to combine all inputs in one object
  // const [userInput, setUserInput]=useState({
  //   enteredTitle: '',
  //   enteredAmount: '',
  //   enteredDate: '',
  // })

// Here I am making sure that tha change of state depends on the previous state and not the initial state at load 
// For each key in the useState object
  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value)
    // Uncomment lines below and comment the line above in case of using the object in the useState
    // setUserInput((prevState) => {
    //   return {...prevState, enteredTitle: event.target.value};
    // })
  }

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value)
    // Uncomment lines below and comment the line above in case of using the object in the useState
    // setUserInput((prevState) => {
    //   return {...prevState, enteredTitle: event.target.value};
    // })
  }

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value)
    // Uncomment lines below and comment the line above in case of using the object in the useState
    // setUserInput((prevState) => {
    //   return {...prevState, enteredTitle: event.target.value};
    // })
  }


  const submitHandler = (event) => {
    event.preventDefault();
    
    const expenseData = {
    title : enteredTitle,
    amount : enteredAmount,
    date : new Date(enteredDate) 
    };
    console.log(expenseData);

   //Here with props I am passing the function to the Parent component NewExpense
   //I can pass the expenseData above as an argument for the function
    props.onSaveExpenseData(expenseData)
    // Here I am clearing the form for new inputs
    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');  
  };

  return <form onSubmit={submitHandler}>
    <div className="new-expense__controls">
    <div className="new-expense__control">
    <label>Title</label>
    <input type="text" value={enteredTitle} onChange={titleChangeHandler}/>
    </div>
    <div className="new-expense__control">
    <label>Amount</label>
    <input type="number" min='0.01' step='0.01' value={enteredAmount} onChange={amountChangeHandler}/>
    </div>
    <div className="new-expense__control">
    <label>Date</label>
    <input type="date"  min='2019-01-01' max='2033-12-31' value={enteredDate} onChange={dateChangeHandler}/>
    </div>
    </div>
    <div className='new-expense__actions'>
      <button type='submit'>Add Expense</button>
    </div>
  </form>;
};
