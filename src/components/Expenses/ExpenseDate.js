import "./ExpenseDate.css";
import React from 'react';

const ExpenseDate = (props) => {
  const parts = props.date.split("-");
  const day = parseInt(parts[0], 10);
  const month = parseInt(parts[1], 10);
  const year = parseInt(parts[2], 10);

  // Get the month name using toLocaleString
  const monthString = new Date(year, month - 1, day).toLocaleString('en-US', { month: 'long' });

  return (
    <div className="expense-date">
      <div className="expense-date__month">{monthString}</div>
      <div className="expense-date__year">{year}</div>
      <div className="expense-date__day">{day}</div>
    </div>
  );
};

export default ExpenseDate;
