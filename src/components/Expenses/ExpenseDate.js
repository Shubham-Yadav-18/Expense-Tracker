import "./ExpenseDate.css";
import React from 'react';
const ExpenseDate=(props)=> {
  const parts = props.date.split("/");

  const month = props.date.toLocaleString("en-US", { month: "long" });
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  const year = parseInt(parts[2], 10);
  return (
    <div className="expense-date">
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__year">{year}</div>
      <div className="expense-date__day">{day}</div>
      
    </div>
  );
}
export default ExpenseDate;
