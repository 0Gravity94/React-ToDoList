import { useState } from "react";
import Layout from "../components/Layout";
import Button from "../components/Button";
import activityEmptyState from "../assets/activityEmptyState.png";
import activityEmptyStateMobile from "../assets/activityEmptyStateMobile.png";
import CardActivity from "../components/CardActivity";

import "../styles/App.css";

function Dashboard() {
  return (
    <div data-cy="dashboard-empty-state">
      <Layout>
        <div className="flex justify-between my-5 mx-7 lg:my-12 lg:mx-56">
          <h1 className="text-base lg:text-4xl font-bold text-Title">
            Activity
          </h1>
          <Button
            className="w-24 h-9 lg:w-40 lg:h-14 bg-BgBlue text-white text-xs lg:text-lg text-center font-semibold rounded-full py-2.5 lg:py-3.5"
            label="+ Tambah"
          />
        </div>
        {/* <div
          data-cy="activity-empty-state"
          className="grid justify-items-center lg:flex lg:flex-wrap justify-center mx-5 mt-36 lg:mx-80 lg:mt-16 lg:mb-64"
        >
          <img
            src={activityEmptyState}
            alt="activity-empty"
            className="hidden lg:block w-3/4"
          />
          <img
            src={activityEmptyStateMobile}
            alt="activity-empty"
            className="lg:hidden w-80"
          />
          <h1 className="lg:hidden text-gray-600 text-base font-semibold text-center mt-9 mx-20">
            Buat activity pertamamu
          </h1>
        </div> */}
        {/* <CardActivity /> */}
      </Layout>
    </div>
  );
}

export default Dashboard;
