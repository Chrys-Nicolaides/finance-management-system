import React from "react";
import dayjs from "dayjs";

import { currencyHelper } from "../helpers";

import * as ReactIcon from "react-icons/ai";

const MyTable = ({ data }) => {
  return (
    <div>
      <div className="flex flex-row justify-between border-b border-gray-300 dark:border-gray-600 mb-4 text-gray-400">
        <h4 className="text-base font-medium pb-2">Description</h4>
        <h4 className="text-base font-medium pb-2 text-center pl-6 sm:block hidden">
          Date
        </h4>
        <h4 className="text-base font-medium pb-2">Amount</h4>
      </div>
      {data.map((item, index) => (
        <RowComponent data={item} key={index} />
      ))}
    </div>
  );
};

const iconComponent = (input) => {
  let categoryClass;
  let icon;

  if (input) {
    switch (input.toLowerCase()) {
      case "rent":
        categoryClass = " bg-indigo-400 text-indigo-900";
        icon = "AiOutlineHome";
        break;
      case "utilities":
        categoryClass = " bg-indigo-200 text-indigo-700";
        icon = "AiOutlineThunderbolt";
        break;
      case "internet":
        categoryClass = " bg-indigo-100 text-indigo-600";
        icon = "AiOutlineWifi";
        break;
      case "food and groceries":
        categoryClass = " bg-teal-200 text-teal-800";
        icon = "AiOutlineShoppingCart";
        break;
      case "subscriptions":
        categoryClass = " bg-red-200 text-red-800";
        icon = "AiOutlineInteraction";
        break;
      case "other":
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
      <div className={"category-container h-10 w-10  " + categoryClass}>
        <div className="transform scale-125">{iconDiv}</div>
      </div>
    );
  } else {
    return null;
  }
};

const RowComponent = (props) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const {
    data: { description, amount, created, currency },
    canOpen,
  } = props;
  const category = props.data.Category;

  const opener = () => {
    if (canOpen) {
      setIsOpen(!isOpen);
    }
  };

  const computedamount = (amount, currency) => {
    if (amount > 0) {
      return `- ${currencyHelper(currency)} ${Math.abs(amount)}`;
    } else {
      return `${currencyHelper(currency)} ${Math.abs(amount)}`;
    }
  };

  console.log(props);

  return (
    <div onClick={opener} className="flex flex-row items-center w-full ">
      <div className="py-4 lg:py-0">{iconComponent(category.name)}</div>
      <div className="flex flex-col-3 w-full justify-between">
        <div className="text-left w-1/3">
          <h5 className="text-gray-700 dark:text-gray-300 text-base font-medium">
            {description}
          </h5>
          <h6 className="text-gray-400 dark:text-gray-500 text-xs">
            {category.name}
          </h6>
        </div>
        <h6 className="text-gray-400 dark:text-gray-500 text-center pt-1 w-1/3 sm:block hidden text-xs">
          {dayjs(created).format("DD.MM.YYYY")}
        </h6>
        <h5 className="text-gray-700 dark:text-gray-300 text-right w-1/3 text-base font-medium">
          {computedamount(amount, currency)}
        </h5>
      </div>
      {isOpen ? (
        <div>
          <h6>{dayjs(created).format("DD.MM.YYYY")}</h6>
          <button>Edit</button>
          <button>Delete</button>
        </div>
      ) : null}
    </div>
  );
};

export default MyTable;
