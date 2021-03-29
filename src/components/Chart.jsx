import React from "react";
import Card from "./Card";

const Chart = () => {
  return (
    <Card fullWidth={true}>
      <h3>Expenses by category</h3>
      <div className="rounded-xl w-full bg-white dark:bg-gray-900 py-20 mt-6 shadow-sm dark:shadow-md border-2 border-gray-100 dark:border-gray-900"></div>
      <h3 className="pt-4">Monthly overview</h3>
      <div className="rounded-xl w-full bg-white dark:bg-gray-900 py-20 mt-6 shadow-sm dark:shadow-md border-2 border-gray-100 dark:border-gray-900"></div>
    </Card>
  );
};

export default Chart;
