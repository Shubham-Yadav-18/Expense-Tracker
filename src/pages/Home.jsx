import React, { useState } from 'react'
import NewExpense from '../components/NewExpense/NewExpense'
import Expenses from '../components/Expenses/Expenses'
import { auth } from '../firebase/Firebase';
import { signOut } from 'firebase/auth';
const DUMMY_EXPENSE = [];
const Home = () => {

    const [expenses, setExpenses] = useState(DUMMY_EXPENSE);
  const addExpensehandler = (expense) => {
  const updatedExpense = [expense, ...expenses];
  setExpenses(updatedExpense);
  };

  return (
    <div>
        <button onClick={()=>signOut(auth)}>logout</button>
       <NewExpense onAddExpense={addExpensehandler} />
      <Expenses item={expenses}></Expenses>
    </div>
  )
}

export default Home
