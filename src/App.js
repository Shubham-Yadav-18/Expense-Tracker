// import ExpenseItem from "./components/ExpenseItem";
import React ,{useState}from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
const DUMMY_EXPENSE = [
  
];
const App=()=> {
  const [expenses,setExpenses]=useState(DUMMY_EXPENSE);
  // fetch('http://localhost/sample-api/api/read.php').then(
  //   response =>{
  //     return response.json();
  //   }
  // ).then(
  //   data =>{
  //     console.log(data);
  //     setExpenses(data);
  //   }
  // );

  const addExpensehandler=(expense)=>{
    const updatedExpense=[expense,...expenses];
        setExpenses(updatedExpense);
  }

  return (
    <div>
      <NewExpense onAddExpense={addExpensehandler}/>
      <Expenses item={expenses}></Expenses>
    </div>
  );
}

export default App;
