import React from "react";
import "./table.css";
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";

import * as ReactIcon from "react-icons/ai";

const MyTable = ({ data, columns, index, categories, values, dateFormat }) => {
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
      <Thead className="t-head  hidden lg:table-header-group ">
        <Tr className="text-left h-20">
          {columns.map((column, columnIndex) => {
            if (column === "category") {
              return <Td key={columnIndex} className="hidden"></Td>;
            }
            if (column === "amount") {
              return (
                <Th key={columnIndex} className="text-right font-medium pr-8">
                  {column}
                </Th>
              );
            } else {
              return (
                <Th key={columnIndex} className="font-medium pl-5">
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
            <Tr key={transactionIndex} className="t-row smmx-6">
              {columns.map((column, columnIndex, columnArray) => {
                if (column === "amount") {
                  return (
                    <Td
                      key={columnIndex}
                      className="font-medium text-gray-700 dark:text-gray-400 text-right pr-4 md:text-lg text-xs"
                    >
                      € {transaction[column]}
                    </Td>
                  );
                }
                if (column === "description") {
                  return (
                    <Td key={columnIndex}>
                      <div className="flex sm:justify-start sm:items-center lg:py-3 pb-2 pl-4">
                        <IconComponent
                        // input={categoryId ? isCategories(categories) : "hey"}
                        />
                        <div className="flex flex-col lg:gap-y-1 lg:py-2 pl-2.5">
                          <div className="md:text-lg text-base font-medium text-gray-700 dark:text-gray-400">
                            {transaction.description}
                          </div>
                          <div className="md:text-sm text-xs font-normal">
                            {/* {values.categoryId ? category.name : "test"} */}
                            {/* {isCategories(values.category?.id)} */}
                          </div>
                        </div>
                      </div>
                    </Td>
                  );
                } else if (column === "category") {
                  return <Td key={columnIndex} className="hidden-td"></Td>;
                } else {
                  return (
                    <Td
                      key={columnIndex}
                      className="font-normal text-gray-400 dark:text-gray-500 place-items-center py-8 md:text-lg text-xs"
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
