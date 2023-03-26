import { useState, useEffect } from "react";
import axios from "axios";
import { WithRouter } from "../utils/Navigation";
import Layout from "../components/Layout";
import Button from "../components/Button";
import moment from "moment/moment";
import DashboardEmpty from "../components/DashboardEmpty";
import CardActivity from "../components/CardActivity";
import ModalDelete from "../components/ModalDelete";

import "../styles/App.css";

function Dashboard(props) {
  const [datas, setDatas] = useState([]);

  const datasArray = Object.keys(datas).map((k) => datas[k]);
  console.log(datasArray);

  useEffect(() => {
    fetchActivities();
  }, []);

  function addActivity() {
    axios
      .post(
        `https://todo.api.devcode.gethired.id/activity-groups?email=reitodoapp@ymail.co`,
        {
          email: "reitodoapp@ymail.co",
          title: "New Activity",
        }
      )
      .then(() => {
        location.reload();
      })
      .catch((err) => {
        const { data } = err.response;
        alert("failed to add new activity");
      });
  }

  function fetchActivities() {
    axios
      .get(
        `https://todo.api.devcode.gethired.id/activity-groups?email=reitodoapp@ymail.co`
      )
      .then((res) => {
        const results = res.data;
        setDatas(results);
        console.log(results);
      })
      .catch((err) => {
        alert(err.toString());
      });
  }

  return (
    <Layout>
      <div className="flex justify-between my-5 mx-7 lg:my-12 lg:mx-56">
        <h1
          data-cy="activity-title"
          className="text-base lg:text-4xl font-bold text-Title"
        >
          Activity
        </h1>
        <button
          data-cy="activity-add-button"
          className="w-24 h-9 lg:w-40 lg:h-14 bg-BgBlue text-white text-xs lg:text-lg text-center font-semibold rounded-full py-2.5 lg:py-3.5"
          onClick={addActivity}
        >
          + Tambah
        </button>
      </div>
      <ModalDelete />
      {/* <DashboardEmpty /> */}
      {datasArray[3] !== null ? (
        <div className="grid grid-flow-row auto-rows-max grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-20 mt-11 mx-5 lg:mx-56">
          {datasArray[3]?.map((data) => (
            <CardActivity
              title={data.title}
              date={moment(data.created_at).format("LL")}
              onNavigate={() => props.navigate(`/detail/${data.id}`)}
              // delete={() => handleDelete(data)}
            />
          ))}
        </div>
      ) : (
        <DashboardEmpty />
      )}
    </Layout>
  );
}

export default WithRouter(Dashboard);
