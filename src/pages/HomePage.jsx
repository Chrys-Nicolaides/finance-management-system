import React, { useEffect, useState } from "react";

// import { CreateProfile, FetchProfile } from "../services/api/Profile";
import Header from "../components/Header";
import Balance from "../components/Balance";
import TransactionsRecent from "../components/TransactionsRecent";
import Chart from "../components/Chart";
import { DefaultLayout } from "./Layouts";
import Modal from "../components/Modal";
import { ReactComponent as Loading } from "../images/loading.svg";

import {
  FetchTransactions,
  CreateTransaction,
} from "../services/api/Transaction";

const HomePage = ({ themeChange, darkTheme, accessToken, profile }) => {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getTransactions = async () => {
      const res = await FetchTransactions(profile.id, accessToken, 1, 4);
      setTransactions(res);
      setLoading(false);
    };
    if (profile?.id) {
      getTransactions();
    }
  }, []);

  const getTransactions = async () => {
    const res = await FetchTransactions(profile.id, accessToken, 1, 4);
    setTransactions(res);
    setLoading(false);
  };

  if (!window.navigator.platform.toLowerCase().includes("mac")) {
    import("../Font.css");
  }

  return (
    <DefaultLayout themeChange={themeChange} darkTheme={darkTheme}>
      {loading ? (
        <Modal>
          <Loading />
        </Modal>
      ) : (
        ""
      )}

      <Header />

      <div className="flex w-full gap-8">
        <div className="flex flex-col justify-start w-2/3 pb-8 mt-6 h-full gap-4">
          <Chart className="md:flex-row md:w-full flex-grow" />
          <h3 className="pb-4 pt-2">Recent transactions</h3>
          <TransactionsRecent
            accessToken={accessToken}
            transactions={transactions}
            profile={profile}
            getTransactions={getTransactions}
            className="md:flex-row md:w-full md:order-1 flex-grow"
          />
        </div>
        <div className="flex w-1/3 justify-end mt-6 mb-8">
          <Balance profile={profile} />
        </div>
      </div>
    </DefaultLayout>
  );
};

export default HomePage;
