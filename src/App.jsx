import { useEffect, useState } from "react";
import AddExpenseForm from "./components/AddExpenseForm";
import ExpenseList from "./components/ExpenseList";
import Summary from "./components/Summary";
import BudgetForm from "./components/BudgetForm";

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
    <div className="App">
      <h1>Welcome to Kakeibo</h1>

      <BudgetForm
        budget={budget}
        setBudget={setBudget}
        bills={bills}
        setBills={setBills}
      />
      <h3>Your Personal Budget Buddy</h3>
      <p>
        Budget: {budget}円 | Bills: {bills}円 | Available: {available}円
      </p>

      <AddExpenseForm onAdd={addExpense} />
      <ExpenseList expenses={expenses} onDelete={handleDeleteExpense} />
      <Summary expenses={expenses} />
    </div>
  );
}

export default App
