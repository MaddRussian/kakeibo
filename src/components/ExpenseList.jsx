export default function ExpenseList({ expenses, onDelete }) {
  if (expenses.length === 0) {
    return <p>Nothing to see here, folks!</p>;
  }
  console.log(expenses);

  return (

    <ul>
      {expenses.map((expense, index) => (
        <li key={index}>
          {expense.amount}円 - {expense.category} on {new Date(expense.date).toLocaleDateString()}
          <button
            onClick = {() => onDelete(index)}
            style={{ backgroundColor: "transparent" }}
          >🗑️</button>
        </li>
      ))}
    </ul>
  );
}
