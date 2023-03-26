import { useState } from "react";
import Layout from "../components/Layout";
import DashboardEmpty from "../components/DashboardEmpty";
import CardActivity from "../components/CardActivity";

import "../styles/App.css";

function Dashboard() {
  return (
    <Layout>
      <div className="flex justify-between my-5 mx-7 lg:my-12 lg:mx-56">
        <h1
          data-cy="activity-title"
          className="text-base lg:text-4xl font-bold text-Title"
        >
          Activity
        </h1>
        <Button
          data-cy="activity-add-button"
          className="w-24 h-9 lg:w-40 lg:h-14 bg-BgBlue text-white text-xs lg:text-lg text-center font-semibold rounded-full py-2.5 lg:py-3.5"
          label="+ Tambah"
        />
      </div>
      <DashboardEmpty />
    </Layout>
  );
}

export default Dashboard;
