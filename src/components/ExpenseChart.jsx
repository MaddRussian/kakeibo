import React from "react";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

function ExpenseChart({ expenses }) {
  const categoryTotals = {};
  expenses.forEach((expense) => {
    if (!categoryTotals[expense.category]) {
      categoryTotals[expense.category] = 0;
    }
    categoryTotals[expense.category] += expense.amount;
  });

  const data = Object.entries(categoryTotals).map(([category, total]) => ({
    name: category,
    value: Number(total),
  }));

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"]

  return (
    <div>
      <h2>Expenses by Category</h2>
      <PieChart width={400} height={300}>
        <Pie
          data={data}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          outerRadius={100}
          label
        >
          {data.map((entry, index) => (
            <Cell
              key={`cell-${index}`}
              fill={COLORS[index % COLORS.length]}
            />
          ))}
          </Pie>
          <Tooltip> </Tooltip>
          <Legend></Legend>
        </PieChart>
    </div>
  );
}

export default ExpenseChart;
