import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";

import { ReactComponent as Loading } from "../images/loading.svg";
import { DefaultLayout } from "../pages/Layouts";
import Modal from "../components/Modal";
import Card from "../components/Card";
import MyTable from "../components/Table";
import { HiArrowLeft } from "react-icons/hi";
import DatePicker from "../components/DatePicker";

import { FetchTransactions } from "../services/api/Transaction";

const columns = ["category", "description", "created", "amount"];

const TransactionsHistoryPage = ({
  themeChange,
  darkTheme,
  accessToken,
  // loading,
  profile,
}) => {
  const [startDate, setStartDate] = useState(
    dayjs().subtract(1, "month").format("DD/MM/YYYY")
  );
  const [endDate, setEndDate] = useState(dayjs().format("DD/MM/YYYY"));
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const getTransactions = async () => {
      const res = await FetchTransactions(
        profile.id,
        accessToken,
        1,
        50,
        dateFormat(startDate),
        dateFormat(endDate)
      );
      setTransactions(res);
      // setLoading(false);
    };
    if (profile?.id) {
      getTransactions();
    }
  }, [startDate, endDate]);

  dayjs.extend(customParseFormat);

  const dateFormat = (input) => {
    return dayjs(input, "DD/MM/YYYY").format("YYYY-MM-DD");
  };

  return (
    <DefaultLayout themeChange={themeChange} darkTheme={darkTheme}>
      {/* {loading ? (
        <Modal>
          <Loading />
        </Modal>
      ) : (
        ""
      )} */}
      <div className="bg-gray-100 dark:bg-gray-900 h-screen">
        <Link
          className="flex items-center pt-6 sm:pb-0.5 pb-4 text-gray-500 pl-4"
          to="/dashboard"
        >
          <HiArrowLeft />
          <h5 className="items-center pl-2.5 text-base">Back</h5>
        </Link>
        <Card
          fullWidth={false}
          additionalClasses={
            "lg:p-16 p-0 lg:m-10 m-0 text-gray-800 dark:text-gray-300"
          }
        >
          <div className="flex lg:justify-between lg:flex-row flex-col w-full pb-8 sm:pt-2 pt-0 ">
            <h3 className="items-center md:text-2xl text-lg lg:pl-0 pl-4 lg:pt-0 pt-6">
              Transaction history
            </h3>
            <div className="flex xl:flex-row flex-col lg:pt-0 pt-4 px-4 md:px-0">
              <DatePicker
                setInputValue={setStartDate}
                inputValue={startDate}
                placeholder="Start date"
                darkTheme={darkTheme}
              />
              <DatePicker
                setInputValue={setEndDate}
                inputValue={endDate}
                placeholder="End date"
                darkTheme={darkTheme}
              />
            </div>
          </div>
          <MyTable data={transactions} columns={columns} profile={profile} />{" "}
        </Card>
      </div>
    </DefaultLayout>
  );
};

export default TransactionsHistoryPage;
