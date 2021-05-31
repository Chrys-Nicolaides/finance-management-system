import React, { useState } from "react";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";

import { IoClose, IoLocationSharp, IoCalendarClear } from "react-icons/io5";
import { HiOutlineExclamationCircle } from "react-icons/hi";

import {
  FetchTransactions,
  CreateTransaction,
} from "../services/api/Transaction";
import Card from "./Card";
import Modal from "./Modal";
import Dropdown from "./Dropdown";

const schema = yup.object().shape({
  description: yup.string().required().min(2),
  amount: yup.string().required(),
});

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

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onBlur",
  });

  // Post transaction

  const onSubmit = async (data) => {
    event.preventDefault();
    const tempObject = { ...values };
    tempObject.description = data.description;
    tempObject.amount = data.amount;
    CreateTransaction(profile?.id, tempObject, accessToken);
    getTransactions();
    setShowModal(false);
  };

  // Date format
  dayjs.extend(customParseFormat);
  const today = dayjs().format("DD.MM.YYYY");

  return (
    <Modal className="overflow-y-hidden">
      <Card
        fullWidth={false}
        additionalClasses={
          "flex-grow max-w-sm sm:max-w-2xl h-screen sm:h-auto pb-20 sm:pb-8 pt-4 sm:pt-6 sm:rounded-xl rounded-none"
        }
      >
        <form
          // className="flex sm:flex-row flex-col gap-x-8 p-2 w-full h-full"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="flex justify-between pb-4 p-2">
            <h3 className="text-lg font-semibold">Add new transaction</h3>

            <IoClose
              type="button"
              onClick={() => setShowModal(false)}
              strokeWidth={6}
              className="cursor-pointer stroke-current stroke-4 stroke text-indigo-500 hover:text-indigo-700 dark:text-gray-400 dark:hover:text-gray-200 "
            />
          </div>
          <div className="flex sm:flex-row flex-col gap-x-8 p-2 w-full h-full sm:flex-grow flex-grow-0">
            <div className="flex flex-col sm:w-1/2 w-full">
              <div>
                <div className="info-container">
                  <div className="info-icon-container ">
                    <IoLocationSharp className="info-icon w-6 h-6" />
                  </div>
                  <div className="py-2">
                    <h6 className="info-subtitle">Location</h6>
                    <h5 className="info-title">Home</h5>
                  </div>
                </div>
                <div className="info-container mt-3 mb-6">
                  <div className="info-icon-container">
                    <IoCalendarClear className="info-icon" />
                  </div>
                  <div className="py-2">
                    <h6 className="info-subtitle">Date</h6>
                    <h5 className="info-title">{today}</h5>
                  </div>
                </div>
              </div>

              {/* Here is where the amount starts */}

              <label>Description</label>
              {errors.description?.message ? (
                <div>
                  <input
                    className="form-input input-error"
                    type="text"
                    {...register("description")}
                  />
                  <div className="error-container">
                    <HiOutlineExclamationCircle className="error-icon" />
                    <p className="error-message">
                      {errors.description?.message &&
                      errors.description?.type === "required"
                        ? "Please enter a valid description"
                        : (errors.description?.type === "minLength",
                          "Minimum of 2 characters required")}
                    </p>
                  </div>
                </div>
              ) : (
                <input
                  className="form-input description-input"
                  type="text"
                  {...register("description")}
                />
              )}

              {/* Here is where the Amount starts */}

              <div className="flex sm:flex-row flex-col w-full sm:mb-0 mb-auto">
                <div className="flex flex-row w-full">
                  <div className="amount-div justify-start w-3/5 mr-6">
                    <label>Amount</label>
                    <div className="amount-container sm:mb-0 mb-auto">
                      <div className="currency-container">
                        <span className="currency-span">{currencySymbol}</span>
                      </div>
                      <input
                        type="number"
                        {...register("amount")}
                        className={`amount-input ${
                          errors.amount?.message ? "input-error" : null
                        }`}
                        placeholder="0.00"
                      />
                    </div>

                    {errors.amount?.message ? (
                      <div className="error-container mb-0 pt-1">
                        <HiOutlineExclamationCircle className="error-icon" />
                        <p className="error-message">
                          {errors.amount?.message
                            ? "Please enter a valid amount"
                            : null}
                        </p>
                      </div>
                    ) : null}
                  </div>

                  {/* Here is where the currency starts */}

                  <div className="currency-div justify-end w-2/5 sm:mb-0 mb-auto">
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
              </div>
            </div>

            {/* Here is where the recurring switch starts */}

            <div className="flex flex-col sm:w-1/2 w-full content-end flex-grow ">
              <div className="sm:mt-0 mt-6">
                <label className="mb-1 z-0">Recurring</label>
                <label className="dark:bg-gray-700 bg-gray-100 h-12 rounded-md flex justify-between items-center cursor-pointer mt-1 px-3  hover:border-indigo-400 hover:border-2 border-2 border-transparent mb-6">
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
              </div>

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
                  dropdownPosition={true}
                />
              </div>

              {/* Here is where the buttons start */}

              <div className="flex flex-row mt-auto">
                <button
                  type="button"
                  className="button-secondary text-sm w-1/2 mr-2 p-0 h-10"
                  onClick={() => setShowModal(false)}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="button-primary font-medium text-sm w-1/2 ml-2 p-0 h-10"
                >
                  Save transaction
                </button>
              </div>
            </div>
          </div>
        </form>
      </Card>
    </Modal>
  );
};

export default ModalForm;
