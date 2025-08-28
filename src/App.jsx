import { useState } from "react";
import AddExpenseForm from "./components/AddExpenseForm";
import ExpenseList from "./components/ExpenseList";

function App() {
  const [expenses, setExpenses] = useState([]);

  const addExpense = (expense) => {
    setExpenses([...expenses, expense]);
  };

  return (
    <div className="App">
      <h1>Welcome to Kakeibo</h1>
      <AddExpenseForm onAdd={addExpense} />
      <ExpenseList expenses={expenses} />
    </div>
  );
}

export default App
