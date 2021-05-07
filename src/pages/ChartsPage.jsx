import React, { useState } from "react";
import { Link } from "react-router-dom";

import { DefaultLayout } from "../pages/Layouts";
import { ReactComponent as Loading } from "../images/loading.svg";
import Card from "../components/Card";
import Modal from "../components/Modal";
import { HiArrowLeft } from "react-icons/hi";

const ChartsPage = (
  themeChange,
  darkTheme,
  accessToken,
  profile,
  transactions
) => {
  const [loading, setLoading] = useState(true);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const getCategories = async () => {
      const res = await FetchCategories(profile.id, accessToken);
      console.log(res);
      setCategories(res);
    };
    if (profile?.id) {
      getCategories();
    }
  }, []);

  return (
    <DefaultLayout themeChange={themeChange} darkTheme={darkTheme}>
      {loading ? (
        <Modal>
          <Loading />
        </Modal>
      ) : (
        ""
      )}
      <div className="bg-gray-100 dark:bg-gray-900 ">
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
              Expenses by Category
            </h3>
          </div>
        </Card>
      </div>
    </DefaultLayout>
  );
};

export default ChartsPage;
