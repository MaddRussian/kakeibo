import { useEffect, useState } from "react";
import AddExpenseForm from "./components/AddExpenseForm";
import ExpenseList from "./components/ExpenseList";
import Summary from "./components/Summary";
import BudgetForm from "./components/BudgetForm";
import ExpenseChart from "./components/ExpenseChart";
import "./App.css";


function App() {
  const [expenses, setExpenses] = useState(() => {
    const saved = localStorage.getItem("expenses");
    return saved ? JSON.parse(saved) : [];
  });

  const [budget, setBudget] = useState(0);
  const [bills, setBills] = useState(0);

  let totalExpenses = 0;
  expenses.forEach((e) => {
    totalExpenses += e.amount;
  });

  const available = budget - bills - totalExpenses

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
    <div className="app-container">
      <h1>Welcome to Kakeibo</h1>
      <h2>Your Personal Budget Buddy</h2>

      <div className="grid-container">

        <div className="budget section">
      <BudgetForm
        budget={budget}
        setBudget={setBudget}
        bills={bills}
        setBills={setBills}
        />
        </div>

        <div className="overview section">
      <p>
        Budget: {budget}円 | Bills: {bills}円 | Available: {available}円
      </p>
        </div>

        <div className="add-expense section">
          <AddExpenseForm onAdd={addExpense} />
        </div>

        <div className="expense-list section">
          <ExpenseList expenses={expenses} onDelete={handleDeleteExpense} />
        </div>

        <ExpenseChart expenses={expenses} />

        <div className="summary section">
          <Summary expenses={expenses} />
        </div>

      </div>
    </div>
  );
}

export default App
