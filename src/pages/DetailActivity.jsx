import React, { useState, useEffect } from "react";
import axios from "axios";

import { WithRouter } from "../utils/Navigation";
import Layout from "../components/Layout";
import Button from "../components/Button";
import { TbChevronLeft, TbPencil } from "react-icons/tb";
import DetailEmpty from "../components/DetailEmpty";
import Sort from "../components/Sort";

function DetailActivity(props) {
  const [datas, setDatas] = useState([]);

  const datasArray = Object.keys(datas).map((k) => datas[k]);
  console.log(datasArray);

  useEffect(() => {
    fetchDetail();
  }, []);

  function fetchDetail() {
    const { id } = props.params;
    axios
      .get(`https://todo.api.devcode.gethired.id/activity-groups/${id}`)
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
    <div data-cy="activity-item">
      <Layout>
        <div className="flex justify-between my-5 mx-7 lg:my-12 lg:mx-56">
          <div className="flex justify-between items-center gap-9">
            <TbChevronLeft
              className="text-4xl text-Title cursor-pointer`"
              data-cy="todo-back-button"
            />

            <input
              type="text"
              data-cy="todo-title"
              className="w-56 h-14 focus:w-96 bg-transparent text-base placeholder:text-4xl placeholder:text-Title lg:text-4xl font-bold text-Title outline-none border focus:border-b-Title cursor-pointer"
              placeholder={datasArray[1]}
            />
            <TbPencil
              className="text-xl text-Line3 cursor-pointer"
              data-cy="todo-title-edit-button"
            />
          </div>
          <div className="flex gap-4">
            <Sort />
            <Button
              data-cy="todo-add-button"
              className="w-24 h-9 lg:w-40 lg:h-14 bg-BgBlue text-white text-xs lg:text-lg text-center font-semibold rounded-full py-2.5 lg:py-3.5"
              label="+ Tambah"
            />
          </div>
        </div>
        <DetailEmpty />
      </Layout>
    </div>
  );
}

export default WithRouter(DetailActivity);
