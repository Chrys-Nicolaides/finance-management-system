import React, { useState, useEffect } from "react";

import { useLilius } from "use-lilius";

import {
  addDays,
  endOfMonth,
  format,
  getDate,
  getDay,
  getMonth,
  getYear,
  isToday,
  isValid,
  lastDayOfMonth,
  parse,
  startOfMonth,
} from "date-fns";

const DatePicker = ({ inputValue, setInputValue, placeholder }) => {
  const {
    calendar,
    clearSelected,
    clearTime,
    inRange,
    isSelected,
    select,
    selected,
    setViewing,
    toggle,
    viewing,
    viewNextMonth,
    viewPreviousMonth,
    viewToday,
  } = useLilius();

  const [isOpen, setIsOpen] = useState(false);
  // const [inputValue, setInputValue] = useState("");

  const onInputChange = (input) => {
    setInputValue(input.trim().replace(/[^\d/]+/g, ""));
  };

  const onInputBlur = () => {
    if (inputValue === "") {
      clearSelected();
      return;
    }

    const parts = inputValue.split("/");
    const partsAsNumber = parts.map((p) => parseInt(p, 10));

    if (parts.length < 1) {
      parts[0] = `${getMonth(viewing)}`;
    } else if (partsAsNumber[0] < 1) {
      parts[0] = "1";
    } else if (partsAsNumber[0] > 12) {
      parts[0] = "12";
    }

    if (parts.length < 2) {
      parts[1] = "1";
    } else if (partsAsNumber[1] < 1) {
      parts[1] = "1";
    } else if (partsAsNumber[1] > getDate(lastDayOfMonth(viewing))) {
      parts[1] = `${getDate(lastDayOfMonth(viewing))}`;
    }

    if (parts.length < 3) {
      parts[2] = `${getYear(viewing)}`;
    } else if (partsAsNumber[2] > 9 && partsAsNumber[2] < 100) {
      parts[2] = `${
        Math.round(getYear(viewing) / 1000) * 1000 + partsAsNumber[2]
      }`;
    }

    const parsed = parse(parts.join("/"), "MM/dd/yyyy", new Date());

    if (isValid(parsed)) {
      select(parsed, true);
    } else if (selected.length > 0) {
      setInputValue(format(selected[0], "MM/dd/yyyy"));
    } else {
      setInputValue("");
    }
  };

  useEffect(() => {
    setInputValue(selected.length > 0 ? format(selected[0], "MM/dd/yyyy") : "");
    setViewing(selected.length > 0 ? selected[0] : new Date());
  }, [selected]);

  return (
    <div className="App flex ml-5 lg:mb-0 mb-2 ">
      <div className="relative text-gray-600">
        <span className="absolute top-0 right-0 flex items-center pl-2">
          <button
            className="bg-indigo-500 hover:bg-indigo-600 focus:bg-indigo-600 text-white px-4 py-2 rounded-l-none rounded-lg focus:outline-none shadow "
            onClick={() => setIsOpen(!isOpen)}
          >
            Open
          </button>
        </span>
        <input
          className="bg-gray-100 placeholder-gray-600 font-medium outline-none bg-opacity-90 px-4 py-2 rounded-lg shadow w-72"
          onBlur={() => onInputBlur()}
          onChange={(e) => onInputChange(e.target.value)}
          placeholder={placeholder}
          value={inputValue}
        />
        {isOpen ? (
          <div className="bg-gray-400 absolute rounded-lg shadow-lg mt-0.5 w-full">
            <div className="flex justify-between text-white bg-indigo-500 rounded-t-lg pt-2 px-4 pb-2">
              <button
                className="px-2 py-1 -ml-2 focus:outline-none rounded hover:bg-indigo-700"
                onClick={() => select(clearTime(new Date()), true)}
              >
                Today
              </button>
              <button
                className="px-2 py-1 -mr-2  focus:outline-none rounded hover:bg-indigo-700"
                onClick={() => select(addDays(clearTime(new Date()), 1), true)}
              >
                Tomorrow
              </button>
            </div>
            <div className="flex justify-between items-center bg-gray-50 px-2 py-2">
              <button
                className="hover:bg-gray-200 rounded px-2 pt-1 pb-2 focus:outline-none font-black text-gray-500 text-lg"
                aria-label="Previous Month"
                onClick={viewPreviousMonth}
              >
                {"<"}
              </button>
              <h6 className="font-semibold text-lg">
                {format(viewing, "MMMM yyyy")}
              </h6>
              <button
                className="hover:bg-gray-200 rounded px-2 pt-1 pb-2 focus:outline-none font-black text-gray-500"
                aria-label="Next Month"
                onClick={viewNextMonth}
              >
                {">"}
              </button>
            </div>
            <div className="flex justify-between px-4 pt-2 pb-1 bg-indigo-200 text-indigo-800 font-semibold">
              {calendar.length > 0 &&
                calendar[0].map((day) => (
                  <div key={`${day}`} className="">
                    {
                      ["Sun", "Mon", "Tue", "Wed", "Tue", "Thu", "Fri", "Sat"][
                        getDay(day)
                      ]
                    }
                  </div>
                ))}
            </div>
            <div className="px-3 pb-2.5 pt-1.5 bg-indigo-50 ">
              {calendar.map((week) => (
                <div
                  className="flex justify-between mx-0 "
                  key={`week-${week[0]}`}
                >
                  {week.map((day) => {
                    let classes = "";
                    if (
                      !inRange(day, startOfMonth(viewing), endOfMonth(viewing))
                    ) {
                      classes += " text-gray-400 hover:text-gray-600";
                    }
                    if (isToday(day)) {
                      classes += " font-bold";
                    }
                    if (isSelected(day)) {
                      classes +=
                        " hover:bg-indigo-600 hover:text-white bg-indigo-600 text-white";
                    } else {
                      classes +=
                        " hover:bg-indigo-200 hover:text-indigo-700 hover:font-semibold";
                    }
                    return (
                      <div
                        className={
                          "px-2.5 py-1 rounded-lg cursor-pointer " + classes
                        }
                        data-in-range={inRange(
                          day,
                          startOfMonth(viewing),
                          endOfMonth(viewing)
                        )}
                        data-selected={isSelected(day)}
                        data-today={isToday(day)}
                        key={`${day}`}
                        onClick={() => {
                          toggle(day, true);
                        }}
                      >
                        <p>{format(day, "dd")}</p>
                      </div>
                    );
                  })}
                </div>
              ))}
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default DatePicker;
