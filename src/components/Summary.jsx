export default function Summary({ expenses }) {
  const totals = {};

  for (const expense of expenses) {
    if (!totals[expense.category]) {
      totals[expense.category] = 0;
    }
    totals[expense.category] += expense.amount;
  }

  return (
    <div>
      <h2>Spending Summary</h2>
      <ul>
        {Object.entries(totals).map(([category, total]) => (
          <li key={category}>
            {category}: {total}円
          </li>
      ))}
      </ul>
    </div>
  )
}
