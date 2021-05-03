import React, { useState } from "react";

import { IoClose, IoLocationSharp, IoCalendarClear } from "react-icons/io5";
import { CreateTransaction } from "../services/api/Transaction";
import { CreateCategories } from "../services/api/Categories";
import Card from "./Card";
import Modal from "./Modal";
import Dropdown from "./Dropdown";
import * as yup from "yup";

const ModalForm = ({ setShowModal, accessToken, profile, categoryList }) => {
  const [values, setValues] = useState({
    description: "",
    day: "1",
    amount: "",
    currency: "EUR",
    recurring: false,
    recurringType: "Weekly",
    categoryId: "",
  });
  const [currency, setCurrency] = useState("EUR");
  const [isRecurring, setIsRecurring] = useState(false);
  const [recurring, setRecurring] = useState("Please select");
  const [category, setCategory] = useState("Please select");
  const [isValid, setIsValid] = useState(false);

  const currencyList = [
    {
      prettyName: "euro",
      name: "EUR",
      symbol: "€",
    },
    {
      prettyName: "rand",
      name: "ZAR",
      symbol: "R",
    },
    {
      prettyName: "dollar",
      name: "USD",
      symbol: "$",
    },
  ];

  const recurringTypeList = [
    { name: "Weekly" },
    { name: "Monthly" },
    { name: "Quarterly" },
    { name: "Annually" },
  ];

  let currencySymbol = [...currencyList].filter(
    (item) => item.name == currency
  )[0].symbol;

  const getTransactions = async () => {
    const res = await FetchTransactions(profile.id, accessToken, 1, 10);
    setTransactions(res);
    setLoading(false);
  };

  const handleChange = (input, setter, field) => {
    event.preventDefault();
    setter(input);
    const tempValues = { ...values };
    tempValues[field] = input;
    setValues(tempValues);
  };

  /////// CATEGORY IS  DOWN BELOW

  const handleCategoryChange = (input, setter) => {
    event.preventDefault();
    setter(input);
    let tempValues = { ...values };
    tempValues.categoryId = categoryList.find(
      (category) => category.name == input
    )?.id;
    setValues(tempValues);
  };

  const handleInputChange = (input, field) => {
    event.preventDefault();
    const tempValues = { ...values };
    tempValues[field] = input;
    setValues(tempValues);
  };

  const schema = yup.object().shape({
    description: yup
      .string()
      .required()
      .min(2, "Please enter a valid description"),
    amount: yup.string().required("Please enter a valid amount"),
  });

  const postNewTransaction = async () => {
    event.preventDefault();
    let valid = await schema
      .validate(values, { abortEarly: false })
      .catch((e) => console.error(e.errors, "ehhhh"));
    setIsValid(!isValid);
    if (valid) {
      CreateTransaction(profile?.id, values, accessToken);
      getTransactions();
      setShowModal(false);
      setIsValid(isValid);
    }
  };

  return (
    <Modal>
      <Card fullWidth={false} additionalClasses={"flex-grow sm:max-w-sm"}>
        <form className="flex flex-col p-2 w-full">
          <div className="flex justify-between pb-6">
            <h3 className="text-lg font-semibold">Add new transaction</h3>

            <IoClose
              type="button"
              onClick={() => setShowModal(false)}
              strokeWidth={6}
              className="cursor-pointer stroke-current stroke-4 stroke text-indigo-500 hover:text-indigo-700 dark:text-gray-400 dark:hover:text-gray-200 "
            />
          </div>
          <div>
            <div className="location-container bg-indigo-50 dark:bg-indigo-300 h-14 w-full rounded-md flex items-center">
              <div className="category-container bg-indigo-200 dark:bg-indigo-400 h-10 w-10 p-0 ml-2">
                <IoLocationSharp className="fill-current text-indigo-400 dark:text-indigo-500 w-6 h-6" />
              </div>
              <div className="py-2">
                <h6 className="font-semibold text-indigo-300 dark:text-indigo-400">
                  Location
                </h6>
                <h5 className="font-semibold text-indigo-400 dark:text-indigo-500">
                  Nike
                </h5>
              </div>
            </div>
            <div className="date-container bg-indigo-50 dark:bg-indigo-300 h-14 w-full rounded-md flex items-center mt-3 mb-6">
              <div className="category-container bg-indigo-200 dark:bg-indigo-400 h-10 w-10 p-0 ml-2">
                <IoCalendarClear className="fill-current text-indigo-400 dark:text-indigo-500 w-5 h-5" />
              </div>
              <div className="py-2">
                <h6 className="font-semibold text-indigo-300 dark:text-indigo-400">
                  Date
                </h6>
                <h5 className="font-semibold text-indigo-400 dark:text-indigo-500">
                  Today 01/04/2021
                </h5>
              </div>
            </div>
          </div>

          {/* Here is where the description starts */}

          <label className="">Description</label>
          <input
            className="form-input mb-6 text-sm focus:text-gray-700 text-gray-600 dark:text-gray-200 dark:focus:text-gray-100"
            type="text"
            id="description"
            name="description"
            value={values.description}
            onChange={() =>
              handleInputChange(event.target.value, "description")
            }
          />
          {/* {!isValid ? alert("Danger! Danger!") : ""} */}

          {/* Here is where the Amount starts */}

          <div className="flex flex-row w-full">
            <div className=" amount-div justify-start w-3/5 mr-6">
              <label>Amount</label>
              <div
                className="mb-2 mt-1.5 relative rounded-md bg-gray-100 dark:bg-gray-700 h-12 
                            hover:border-indigo-400"
              >
                <div className="absolute left-0 pl-3 flex items-center pointer-events-none h-12 mt-0 mb-0 ">
                  <span className="text-gray-400 dark:text-gray-500 text-sm dark:bg-transparent">
                    {currencySymbol}
                  </span>
                </div>
                <input
                  type="number"
                  id="amount"
                  name="amount"
                  value={values.amount}
                  onChange={() =>
                    handleInputChange(event.target.value, "amount")
                  }
                  className="absolute pl-7 h-full w-full text-sm rounded-md 
                  bg-transparent dark:bg-transparent outline-none focus:outline-none 
                  placeholder-gray-400 dark:placeholder-gray-500 
                  dark:border-transparent dark:ring-opacity-0 dark:hover:border-indigo-400 dark:focus:ring-indigo-600 
                  border-transparent      ring-opacity-0      hover:border-indigo-400      focus:ring-indigo-200 active:border-indigo-400 focus:border-indigo-400  border-2"
                  placeholder="0.00"
                />
              </div>
            </div>

            {/* Here is where the currency starts */}

            <div className="currency-div justify-end w-2/5">
              <div className=" w-full z-50">
                <Dropdown
                  label={"Currency"}
                  field="currency"
                  value={currency}
                  setter={setCurrency}
                  handleChange={handleChange}
                  data={currencyList}
                  dropdownPosition={true}
                />
              </div>
            </div>
          </div>

          {/* Here is where the recurring switch starts */}

          <label className="dark:bg-gray-700 bg-gray-100 h-12 rounded-md flex justify-between items-center cursor-pointer mt-6 px-3  hover:border-indigo-400 hover:border-2 border-2 border-transparent mb-6">
            <label
              className={
                (isRecurring
                  ? " dark:text-indigo-bright text-indigo-500 font-semibold  "
                  : "dark:text-gray-500 text-gray-400 font-normal dark:font-normal ") +
                " toggle-text text-sm "
              }
            >
              Recurring
            </label>
            <div className="relative mr-1.5 ">
              <input
                className="hidden "
                type="checkbox"
                id="recurring"
                name="recurring"
                value={recurring}
                // onChange={() =>
                //   handleInputChange(event.target.checked, "recurring")
                // }
                onClick={() => {
                  handleInputChange(!isRecurring, "recurring");
                  setIsRecurring(!isRecurring);
                }}
              />

              <div
                className={
                  isRecurring
                    ? "toggle-path bg-indigo-400 "
                    : "toggle-path bg-gray-400 "
                }
              ></div>
              <div
                className={
                  isRecurring
                    ? "toggle-circle bg-indigo-600  transform translate-x-full"
                    : "toggle-circle bg-gray-300 "
                }
              ></div>
            </div>
          </label>

          {/* Here is where the recurring dropdown starts */}

          <div
            className={
              "recurring-container " + (isRecurring ? " active z-50" : "")
            }
          >
            <div className="recurring-animation mb-6 ">
              <Dropdown
                label="Recurring type"
                field="recurringType"
                value={recurring}
                setter={setRecurring}
                handleChange={handleChange}
                data={recurringTypeList}
                dropdownPosition={true}
              />
            </div>
          </div>

          {/* Here is where the category dropdown starts */}

          <div className="mb-7">
            <Dropdown
              field="category"
              label={"Category"}
              value={category}
              setter={setCategory}
              handleChange={handleCategoryChange}
              data={categoryList}
              dropdownPosition={false}
              additionalClasses={" -top-72 inset-y-0"}
            />
          </div>

          {/* Here is where the buttons start */}

          <div className="flex flex-row">
            <button
              type="button"
              className="button-secondary text-sm w-1/2 mr-2 p-0 h-10"
              onClick={() => setShowModal(false)}
            >
              Cancel
            </button>
            <button
              // type="submit"
              className="button-primary font-medium  text-sm w-1/2 ml-2 p-0 h-10"
              onClick={() => postNewTransaction()}
            >
              {/* {!isValid ? alert("Danger! Danger!") : ""} */}
              Save transaction
            </button>
          </div>
        </form>
      </Card>
    </Modal>
  );
};

export default ModalForm;
