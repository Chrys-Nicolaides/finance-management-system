import React, { useState } from "react";
import Card from "./Card";
import Dropdown from "../components/Dropdown";

const Chart = () => {
  const [sortBy, setSortBy] = useState("sort by");

  const sortByList = [
    { name: "Weekly" },
    { name: "Monthly" },
    { name: "Quarterly" },
    { name: "Annually" },
  ];

  const handleChange = (input, setter, field) => {
    event.preventDefault();
    setter(input);
    const tempValues = { ...values };
    tempValues[field] = input;
    setValues(tempValues);
  };

  return (
    <Card fullWidth={true}>
      <div className="flex justify-between items-center border-b border-gray-500 pt-6 pl-6 pb-2">
        <h3 className="text-gray-500 dark:text-gray-400 text-lg font-medium">
          Expenses by category
        </h3>
        <h3 className="text-gray-500 dark:text-gray-400 text-lg font-medium">
          Expenses overview
        </h3>
        <div className="justify-end flex w-28">
          <div className=" w-full">
            <Dropdown
              field="sortBy"
              value={sortBy}
              setter={setSortBy}
              handleChange={handleChange}
              data={sortByList}
              dropdownPosition={true}
            />
          </div>
        </div>
      </div>
      <div className="rounded-xl w-full py-20 mt-6 "></div>
    </Card>
  );
};

export default Chart;
