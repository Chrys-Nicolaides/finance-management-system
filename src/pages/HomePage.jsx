import React, { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useHistory } from "react-router";

import { FetchProfile } from "../services/api/Profile";
import Header from "../components/Header";
import Balance from "../components/Balance";
import TransactionsRecent from "../components/TransactionsRecent";
import Chart from "../components/Chart";
import { DefaultLayout } from "./Layouts";

const HomePage = ({ themeChange, darkTheme }) => {
  const { getAccessTokenSilently } = useAuth0();
  const [profile, setProfile] = useState({});
  const [loading, setLoading] = useState(true);
  const history = useHistory();

  useEffect(() => {
    const getProfile = async () => {
      const accessToken = await getAccessTokenSilently({
        audience: import.meta.env.VITE_AUDIENCE,
        scopes: ["read:profile"],
      });

      const profileResponse = await FetchProfile(1, accessToken);
      setProfile(profileResponse);
      setLoading(false);
    };

    getProfile();
  }, [history]);

  if (loading) {
    return "Loading...";
  }

  return (
    <DefaultLayout>
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
