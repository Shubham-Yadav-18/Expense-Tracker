import React, { useContext, useState, useEffect } from "react";
import { AuthContext } from '../../firebase/AuthContext';
import { collection, query, orderBy, getDocs } from "firebase/firestore";
import { db } from "../../firebase/Firebase";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";


const Expenses = (props) => {
  const { currentUser } = useContext(AuthContext);
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    const fetchExpenses = async () => {
      try {
        const userExpenseCollectionRef = collection(db, "UserExpense", currentUser.uid, "expenses");
        const sortedQuery = query(userExpenseCollectionRef, orderBy("CreatedAt", "desc"));
        const querySnapshot = await getDocs(sortedQuery);

        const fetchedExpenses = [];
        querySnapshot.forEach((doc) => {
          const expenseData = doc.data();
          fetchedExpenses.push(expenseData);
        });

        setExpenses(fetchedExpenses);
      } catch (error) {
        console.error("Error fetching expenses:", error);
      }
    };

    fetchExpenses();
  }, [currentUser]);

  return (
    <div className="expenses">
        {expenses.map((expense, index) => (
          <ExpenseItem 
          title={expense.Title}
          amount={expense.Amount}
          date={expense.ExpenseDate}
          key={index}
          />
        ))}
      </div>
  );
};

export default Expenses;
