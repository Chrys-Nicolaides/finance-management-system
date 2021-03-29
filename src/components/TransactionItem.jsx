import React from "react";
import * as ReactIcon from "react-icons/ai";

const TransactionItem = ({ transaction, index }) => {
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
      case "Water & Electricity":
        categoryClass = " bg-indigo-600";
        icon = "AiOutlineThunderbolt";
        // icon = "AiOutlinePoweroff";
        break;
      case "Internet":
        categoryClass = " bg-indigo-200";
        icon = "AiOutlineWifi";
        break;
      case "Food & Groceries":
        categoryClass = " bg-teal-300 text-teal-800";
        icon = "AiOutlineShoppingCart";
        // icon = "AiOutlineShopping";
        break;
      case "Subscriptions":
        categoryClass = " bg-red-200 text-red-800";
        icon = "AiOutlineSync";
        // icon = "AiOutlineInteraction";
        // icon = "AiOutlineEuro";
        break;
      case "Other":
        categoryClass = " bg-orange-200 text-orange-900";
        // icon = "AiOutlineCreditCard";
        icon = "AiOutlineShop";
        break;
      default:
        break;
    }

    const iconDiv = React.createElement(ReactIcon[icon]);

    return (
      <div className={"category-container" + categoryClass}>{iconDiv}</div>
    );
  };

  return (
    <div className={"flex" + firstClass}>
      <IconComponent input={transaction.category} />
      <div className="w-full flex items-center justify-between">
        <h5 className="justify-start">{transaction.description}</h5>
        <h5 className="justify-end">€ {transaction.amount}</h5>
      </div>
    </div>
  );
};

export default TransactionItem;
