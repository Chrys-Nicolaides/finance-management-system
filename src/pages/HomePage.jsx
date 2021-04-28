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
      const res = await FetchTransactions(profile.id, accessToken, 35, 99);
      setTransactions(res);
      setLoading(false);
    };
    if (profile?.id) {
      getTransactions();
    }
  }, []);

  const getTransactions = async () => {
    const res = await FetchTransactions(profile.id, accessToken, 35, 99);
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
      <Balance profile={profile} />
      <div className="flex flex-col md:flex-row flex-grow h-full pb-6 mt-32">
        <TransactionsRecent
          accessToken={accessToken}
          transactions={transactions}
          profile={profile}
          getTransactions={getTransactions}
          className="md:flex-row md:w-full md:order-1"
        />
        <Chart className="md:flex-row md:w-full" />
      </div>
    </DefaultLayout>
  );
};

export default HomePage;
