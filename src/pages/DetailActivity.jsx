import React, { useState, useEffect } from "react";
import axios from "axios";

import { WithRouter } from "../utils/Navigation";
import Layout from "../components/Layout";
import Button from "../components/Button";
import { TbChevronLeft, TbPencil } from "react-icons/tb";
import DetailEmpty from "../components/DetailEmpty";
import Sort from "../components/Sort";
import modalAddTodo from "../components/modalAddTodo";
import ModalAddTodo from "../components/modalAddTodo";

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

  function addListItems() {
    axios
      .post(`https://todo.api.devcode.gethired.id/todo-items`, {
        activity_group_id: { id },
        title: { title },
      })
      .then(() => {
        location.reload();
      })
      .catch(() => {
        alert("failed to add new activity");
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
          <div className="flex justify-center items-center gap-4">
            <Sort />
            <ModalAddTodo />
          </div>
        </div>
        <DetailEmpty />
      </Layout>
    </div>
  );
}

export default WithRouter(DetailActivity);
