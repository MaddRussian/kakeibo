import { useState } from "react";

export default function BudgetForm({ setBudget, setBills }) {
  const [inputBudget, setInputBudget] = useState("");
  const [inputBills, setInputBills] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setInputBudget(Number(inputBudget));
    setBills(Number(inputBills));
    setInputBudget("");
    setInputBills("");
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 border rounded">
      <h2 className="text-lg font-bold mb-2">Set Monthly Budget</h2>

      <input
        type="number"
        placeholder="Monthly budget"
        value={inputBudget}
        onChange={(e) => setInputBudget(Number(e.target.value))}
        className="border p-2 mr-2"
        />

      <input
        type="number"
        placeholder="Monthly bills"
        value={inputBills}
        onChange={(e) => setInputBills(Number(e.target.value))}
        className="border p-2 mr-2"
        />

      <button type="submit" className="bg-blue-500 text-white px-3 py-1 rounded">
        Save
      </button>

    </form>
  );
}
