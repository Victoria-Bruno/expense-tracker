import {React, useState}  from 'react';
import ExpenseItem from './ExpenseItem';
import './Expenses.css';
import Card from '../UI/Card';
import ExpensesFilter from '../ExpenseFilter/ExpensesFilter';

const Expenses = (props) => {
  const [filterYear, setFilterYear] = useState("2020");
  const filterChangeHandler = (selectedYear) => { //that we receive as a parameter
  setFilterYear(selectedYear)
}

  return (
    <Card className="expenses">
      <ExpensesFilter selected={filterYear} onChangeFilter={filterChangeHandler}/>
      
      {/* Using map I transform the object in App.js with the entries to the JSX element <ExpenseItem>  */}
      {props.item.map(expense => <ExpenseItem title={expense.title} amount={expense.amount} date={expense.date}/>)}
     
    </Card>
  );
};

export default Expenses