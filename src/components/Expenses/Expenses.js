import {React, useState}  from 'react';
import './Expenses.css';
import Card from '../UI/Card';
import ExpensesFilter from '../ExpenseFilter/ExpensesFilter';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';

const Expenses = (props) => {
  const [filterYear, setFilterYear] = useState("");
  const filterChangeHandler = (selectedYear) => { //that we receive as a parameter
  setFilterYear(selectedYear)
}

//This is going to return true if the years match, thus only those items will be kept
const filteredExpenses = props.item.filter(expense => {
  return expense.date.getFullYear().toString() === filterYear;
});

//Using map I transform the object in App.js with the entries to the JSX element <ExpenseItem>
//Using && operator conditional rendering if I have no items in filtered year
  return (
    <Card className="expenses">
      <ExpensesChart expenses={filteredExpenses}/>
      <ExpensesFilter selected={filterYear} onChangeFilter={filterChangeHandler}/>
      <ExpensesList items={filteredExpenses}/>
    </Card>
  );
};

export default Expenses