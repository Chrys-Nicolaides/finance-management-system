import React from "react";
import "./table.css";
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";

import * as ReactIcon from "react-icons/ai";

const MyTable = ({ data, columns, index }) => {
  let firstClass =
    index === 0 ? "" : " divide-y divide-gray-300 dark:divide-gray-700";

  let IconComponent = ({ input }) => {
    let categoryClass;
    let icon;

    switch (input) {
      case "Rent":
        categoryClass = " bg-indigo-400 text-indigo-800";
        icon = "AiOutlineHome";
        break;
      case "Utilities":
        categoryClass = " bg-indigo-300 text-indigo-700";
        icon = "AiOutlineThunderbolt";
        break;
      case "Internet":
        categoryClass = " bg-indigo-100 text-indigo-500";
        icon = "AiOutlineWifi";
        break;
      case "Food & Groceries":
        categoryClass = " bg-teal-300 text-teal-800";
        icon = "AiOutlineShoppingCart";
        break;
      case "Subscriptions":
        categoryClass = " bg-red-200 text-red-800";
        icon = "AiOutlineInteraction";
        break;
      case "Other":
        categoryClass = " bg-orange-200 text-orange-900";
        icon = "AiOutlineShop";
        break;
      default:
        categoryClass = " bg-orange-200 text-orange-900";
        icon = "AiOutlineShop";
        break;
    }

    const iconDiv = React.createElement(ReactIcon[icon]);

    return (
      <div className={"category-container h-11 w-11  " + categoryClass}>
        <div className="transform scale-125">{iconDiv}</div>
      </div>
    );
  };

  return (
    <Table className="p-2">
      <Thead className="t-head">
        <Tr className="text-left h-20 py-6">
          {columns.map((column, columnIndex) => {
            if (column === "category") {
              return <Td className="block"></Td>;
            }
            if (column === "amount") {
              return <Th className="text-right font-normal pr-8">{column}</Th>;
            } else {
              return (
                <Th key={columnIndex} className="font-normal first:pl-12 ">
                  {column}
                </Th>
              );
            }
          })}
        </Tr>
      </Thead>
      <Tbody className="divide-y divide-gray-300 dark:divide-gray-700">
        {data.map((transaction, transactionIndex, transactionArray) => {
          return (
            <Tr key={transactionIndex} className="t-row">
              {columns.map((column, columnIndex, columnArray) => {
                if (column === "amount") {
                  return (
                    <Td
                      key={columnIndex}
                      className="font-medium text-gray-700 dark:text-gray-400 text-right pr-8"
                    >
                      € {transaction[column]}
                    </Td>
                  );
                }
                if (column === "description") {
                  return (
                    <Td key={columnIndex}>
                      <div className="flex sm:justify-start sm:items-center lg:py-3 pb-2">
                        <IconComponent
                          input={transaction.category}
                          className=""
                        />
                        <div className="flex flex-col lg:gap-y-1 lg:py-2 pl-2.5">
                          <div className="sm:text-lg text-sm font-medium text-gray-700 dark:text-gray-400">
                            {transaction.description}
                          </div>
                          <div className="sm:text-sm text-xs font-normal">
                            {transaction.category}
                          </div>
                        </div>
                      </div>
                    </Td>
                  );
                } else if (column === "category") {
                  return <Td></Td>;
                } else {
                  return (
                    <Td
                      key={columnIndex}
                      className="font-normal text-gray-400 dark:text-gray-500"
                    >
                      {transaction[column]}
                    </Td>
                  );
                }
              })}
            </Tr>
          );
        })}
      </Tbody>
    </Table>
  );
};

export default MyTable;
