import React, { useContext, useState } from "react";

import "./ExpenseForm.css";
import { addDoc, collection, doc, setDoc } from "firebase/firestore";
import { db } from "../../firebase/Firebase";
import { AuthContext } from '../../firebase/AuthContext'

const ExpenseForm = (props) => {
  const { currentUser } = useContext(AuthContext);
  // console.log("Hhdsofk",currentUser.displayName );
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
    // console.log(curentUser.uid);
  };
  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
    
  };
  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
   
  };
  const addExpenseToFirestore = async (title, amount, date) => {
    try {
      const expenseData = {
        Title: title,
        Amount: amount,
        ExpenseDate: date,
        CreatedAt:new Date(),
      };

      const userExpenseCollectionRef = collection(db, "UserExpense", currentUser.uid,"expenses");
      await addDoc(userExpenseCollectionRef, expenseData);

      console.log("Expense added to Firestore:", expenseData);
    } catch (error) {
      console.error("Error adding expense:", error);
    }
  };
  const submitHandler = async(event) => {
    event.preventDefault();
    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };
    props.onSaveExpenseData(expenseData);
  
    addExpenseToFirestore(enteredTitle,enteredAmount,enteredDate);
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="numbers"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" value={enteredDate} onChange={dateChangeHandler} />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
       
      </div>
    
    </form>
  );
};
export default ExpenseForm;
