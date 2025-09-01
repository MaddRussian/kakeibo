import React from "react";
import { categories } from "../categories";

export default function Summary({ expenses }) {
  const totals = {};

  categories.forEach((categoryName) => {
    totals[categoryName] = 0;
  });

  expenses.forEach((expense) => {
    totals[expense.category] += Number(expense.amount);
  })

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
