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
        <option value="Coffee">Coffee</option>
        <option value="Transport">Transport</option>
        <option value="Entertainment">Entertainment</option>
        <option value="Shopping">Shopping</option>
        <option value="Utilities">Utilities</option>
        <option value="Other">Other</option>
      </select>

      <button type="submit">Add</button>
    </form>
  );
}
