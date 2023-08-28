import { React } from 'react';

import './ExpensesFilter.css';

//Listen to dropdown change and selected year is then forwarded to the Expenses component, 
//there you store it in a state

const ExpensesFilter = (props) => { //props to receive function from Expenses.js
  const dropdownChangeHandler = (event) => {
    const year= event.target.value;
    props.onChangeFilter(year); //forward to Expenses.js
  };

  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter by year</label>
        <select value={props.selected} onChange={dropdownChangeHandler}>
          <option value='2022'>2022</option>
          <option value='2021'>2021</option>
          <option value='2020'>2020</option>
          <option value='2019'>2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;