import React from "react";
import Button from "../components/Button";
import activityEmptyState from "../assets/activityEmptyState.png";
import activityEmptyStateMobile from "../assets/activityEmptyStateMobile.png";

function DashboardEmpty() {
  return (
    <div data-cy="dashboard-empty-state">
      <div className="grid justify-items-center lg:flex lg:flex-wrap justify-center mx-5 mt-36 lg:mx-80 lg:mt-16 lg:mb-64">
        <img
          data-cy="activity-empty-state"
          src={activityEmptyState}
          alt="activity-empty"
          className="hidden lg:block w-3/4"
        />
        <img
          data-cy="activity-empty-state"
          src={activityEmptyStateMobile}
          alt="activity-empty"
          className="lg:hidden w-80"
        />
        <h1 className="lg:hidden text-gray-600 text-base font-semibold text-center mt-9 mx-20">
          Buat activity pertamamu
        </h1>
      </div>
    </div>
  );
}

export default DashboardEmpty;
