import React from "react";
import ModalDelete from "./ModalDelete";

function CardActivity(props) {
  return (
    <div
      data-cy="activity-item"
      className="grid content-between w-36 h-36 lg:w-52 lg:h-52 bg-white pt-3 pb-4 px-4 lg:px-7 lg:py-6 rounded-xl shadow-md cursor-pointer"
    >
      <div onClick={props.onNavigate}>
        <h1
          data-cy="activity-item-title"
          className="text-Title text-sm lg:text-lg font-bold"
        >
          {props.title}
        </h1>
      </div>
      <div className="flex justify-between">
        <p
          data-cy="activity-item-date"
          className="text-Line1 text-xs lg:text-sm font-medium"
        >
          {props.date}
        </p>
        <ModalDelete title={props.deleteTitle} />
      </div>
    </div>
  );
}

export default CardActivity;
