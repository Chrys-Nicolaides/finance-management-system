import React, { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useHistory } from "react-router";

import { CreateProfile, FetchProfile } from "../services/api/Profile";
import Header from "../components/Header";
import Balance from "../components/Balance";
import TransactionsRecent from "../components/TransactionsRecent";
import Chart from "../components/Chart";
import { DefaultLayout } from "./Layouts";
import Modal from "../components/Modal";
import { FetchProfileEmail } from "../services/api/Profile";

const HomePage = ({ themeChange, darkTheme }) => {
  const { getAccessTokenSilently, user } = useAuth0();
  const [profile, setProfile] = useState({});
  const [loading, setLoading] = useState(true);
  const history = useHistory();

  let accessToken;

  useEffect(() => {
    const getProfile = async () => {
      accessToken = await getAccessTokenSilently({
        audience: import.meta.env.VITE_AUDIENCE,
        scopes: ["read:profile"],
      });

      const profileResponse = await FetchProfileEmail(user.email, accessToken);
      setProfile(profileResponse);
      setLoading(false);
    };
    getProfile();
  }, [history]);

  // console.log(window.navigator.platform);

  if (!window.navigator.platform.toLowerCase().includes("mac")) {
    import("../Font.css");
  }

  return (
    <DefaultLayout
      themeChange={themeChange}
      darkTheme={darkTheme}
      accessToken={accessToken}
    >
      {loading ? <Modal>Loading...</Modal> : ""}

      <Header />
      <Balance profile={profile} />
      <div className="flex flex-col md:flex-row pb-6 mt-32">
        <TransactionsRecent className="md:flex-row md:w-full md:order-1" />
        <Chart className="md:flex-row md:w-full" />
      </div>
    </DefaultLayout>
  );
};

export default HomePage;
