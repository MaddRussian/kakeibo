import { useEffect, useState } from "react";
import AddExpenseForm from "./components/AddExpenseForm";
import ExpenseList from "./components/ExpenseList";
import Summary from "./components/Summary";

function App() {
  const [expenses, setExpenses] = useState(() => {
    const saved = localStorage.getItem("expenses");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }, [expenses]);

  const addExpense = (expense) => {
    setExpenses([...expenses, expense]);
  };

  const handleDeleteExpense = (indexToDelete) => {
    setExpenses((prev) => prev.filter((_, i) => i !== indexToDelete));
  };

  return (
    <div className="App">
      <h1>Welcome to Kakeibo</h1>
      <AddExpenseForm onAdd={addExpense} />
      <ExpenseList expenses={expenses} onDelete={handleDeleteExpense} />
      <Summary expenses={expenses} />
    </div>
  );
}

export default App
