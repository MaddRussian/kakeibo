import { useState } from "react";

export default function AddExpenseForm({ onAdd }) {
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("Food");

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd({ amount, category, date: new Date().toISOString() });
    setAmount("");
    setCategory("Food");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="Food">Food</option>
        <option value="Food">Transport</option>
        <option value="Food">Entertainment</option>
        <option value="Food">Shopping</option>
        <option value="Food">Utilities</option>
        <option value="Food">Other</option>
      </select>

      <button type="submit">Add</button>
    </form>
  );
}
