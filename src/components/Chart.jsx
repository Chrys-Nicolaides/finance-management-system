import React, { useState } from "react";
import Card from "./Card";
import Dropdown from "../components/Dropdown";
import { ReactComponent as ChartPicDark } from "../images/ChartPicDark.svg";
import { ReactComponent as ChartPicLight } from "../images/ChartPicLight.svg";

import BarChartPage from "../charts/BarChartPage";
import DoughnutChartPage from "../charts/DoughnutChartPage";

const Chart = ({ darkTheme, profile }) => {
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
    <Card fullWidth={true} additionalClasses={"mb-16"}>
      {profile ? (
        <div className="flex flex-col">
          <div className="flex justify-between items-center border-b border-gray-500 pt-6 pl-6 pb-2">
            <h3 className="text-gray-500 dark:text-gray-400 text-sm md:text-lg font-medium">
              Expenses by category
            </h3>
            <h3 className="text-gray-500 dark:text-gray-400 text-sm md:text-lg font-medium">
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
          <div className="flex 2xl:flex-row flex-col">
            <DoughnutChartPage />
            <BarChartPage />
          </div>
        </div>
      ) : (
        <div className="flex justify-center flex-col w-full items-center h-full">
          <h3 className="dark:text-gray-400 text-gray-600 pb-6 text-center">
            No data yet
          </h3>
          {darkTheme ? (
            <ChartPicDark className="flex items-center" />
          ) : (
            <ChartPicLight className="flex items-center" />
          )}
          <h2 className="dark:text-gray-500 text-gray-500 text-sm sm:text-lg text-center mt-8 w-1/2">
            Add your first transaction below to get started!
          </h2>
        </div>
      )}
    </Card>
  );
};

export default Chart;
