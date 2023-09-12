import { React } from 'react';

import './ExpensesFilter.css';

//Listen to dropdown change and selected year is then forwarded to the Expenses component (parent), 
//there you store it in a state. 

//Controlled component: real logic happens in parent. Here only structuring the filter,
//while value and changes to the value are being handled in the parent component

const ExpensesFilter = (props) => { //props to receive function from Expenses.js
  const dropdownChangeHandler = (event) => {
    const year= event.target.value;
    props.onChangeFilter(year); //forward to Expenses.js
  };

  //Value in the dropdown will be passed to the parent component through props (see above)
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