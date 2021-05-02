import React, { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const Dropdown = (props, additionalClasses, dropdownPosition) => {
  const [isOpen, setIsOpen] = useState(false);

  let classes =
    " flex flex-col appearance-none text-gray-500 bg-gray-100 dark:bg-gray-700 outline-none py-2 rounded-md text-sm dark:focus:text-gray-300 shadow z-50 relative";

  classes += additionalClasses ? " " + additionalClasses : "";

  if (dropdownPosition === true) {
    classes += " inset-x-0  z-50";
  }

  return (
    <div>
      <label className="mb-1 z-0">{props.label}</label>
      <div className="mt-1 rounded-md bg-gray-100 dark:bg-gray-700 h-12 text-gray-400 relative ">
        <button
          type="button"
          onChange={() => handleChange(event, value)}
          onClick={() => setIsOpen(!isOpen)}
          className="form-input flex justify-between items-center w-full rounded-md text-left  mb-1.5 z-0
                    bg-gray-100 dark:bg-gray-700 
                    text-gray-400 focus:text-gray-500 dark:text-gray-400 dark:focus:text-gray-300 text-sm
                     border-transparent          hover:border-indigo-400      focus:ring-indigo-200  focus:border-indigo-400 focus:ring-1"
        >
          {props.value}
          {isOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
        </button>
        {isOpen ? (
          <div className={classes}>
            {props.list.map((item, key) => {
              return (
                <button
                  key={key}
                  className="p-2 mx-2.5 rounded-md text-left hover:bg-indigo-100 hover:text-indigo-500  focus:outline-none focus:text-indigo-600 dark:bg-gray-700 dark:hover:bg-gray-800 dark:text-gray-400 dark:hover:text-gray-300 dark:focus:text-gray-200 z-50 relative"
                  onClick={() => {
                    setIsOpen(false);
                    props.handleListChange(item.code, props.setter);
                  }}
                >
                  {item.code}
                </button>
              );
            })}
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Dropdown;
