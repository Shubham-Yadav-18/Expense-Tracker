import React, { useContext, useState } from 'react'
import NewExpense from '../components/NewExpense/NewExpense'
import Expenses from '../components/Expenses/Expenses'
import { auth, db } from '../firebase/Firebase';
import { signOut } from 'firebase/auth';
import { collection, getDocs, orderBy, query } from 'firebase/firestore';
import { AuthContext } from '../firebase/AuthContext';
const DUMMY_EXPENSE = [];
const Home = () => {
  const { currentUser } = useContext(AuthContext);

    const [expenses, setExpenses] = useState(DUMMY_EXPENSE);
  const addExpensehandler = (expense) => {
  const updatedExpense = [expense, ...expenses];
  setExpenses(updatedExpense);
  
  };
  
  // fetchExpenses();


  return (
    <div>
        <button onClick={()=>signOut(auth)}>logout</button>
       <NewExpense onAddExpense={addExpensehandler} />
      <Expenses item={expenses}></Expenses>
      
    </div>
    
  )
}

export default Home
