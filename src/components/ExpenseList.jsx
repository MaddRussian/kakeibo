export default function ExpenseList({ expenses }) {
  if (expenses.length === 0) {
    return <p>No expenses yet. Add one above!</p>;
  }

  return (
    <ul>
      {expenses.map((expense, index) => (
        <li key={index}>
          {expense.amount}円 - {expense.category} ({expense.date.toLocaleDateString()})
        </li>
      ))}
    </ul>
  );
}
