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

//This is going to return true if the years match, thus only those items will be kept
const filteredExpenses = props.item.filter(expense => {
  return expense.date.getFullYear().toString() === filterYear;
});


let expensesOutput = <p>No expenses found</p>

if (filteredExpenses.length > 0) {
  expensesOutput = filteredExpenses.map((expense) => 
  <ExpenseItem 
    key={expense.id}
    title={expense.title} 
    amount={expense.amount} 
    date={expense.date}
  />
)
} 

//Using map I transform the object in App.js with the entries to the JSX element <ExpenseItem>
//Using && operator conditional rendering if I have no items in filtered year
  return (
    <Card className="expenses">
      <ExpensesFilter selected={filterYear} onChangeFilter={filterChangeHandler}/>
      {expensesOutput}
    </Card>
  );
};

export default Expenses