import React, { useState } from "react";
import { TbPencil, TbTrash } from "react-icons/tb";

function ListItems(props) {
  return (
    <div
      data-cy="todo-item"
      className="flex justify-between h-20 bg-white lg:mt-14 lg:mx-52 lg:py-7 lg:px-5 shadow-md rounded-xl"
    >
      <div className="flex items-center gap-4 ">
        <input
          data-cy="todo-item-checkbox"
          type="checkbox"
          className="focus:bg-BgBlue"
        />
        <div
          data-cy="todo-item-priority-indicator"
          className="w-2 h-2 bg-PriorityRed rounded-full"
        ></div>
        <p data-cy="todo-item-title" className="text-lg text-Line1 font-medium">
          {props.title}
        </p>
        <TbPencil
          data-cy="todo-item-edit-button"
          className="text-gray-400 text-lg cursor-pointer"
        />
      </div>
      <div>
        <TbTrash
          data-cy="todo-item-delete-button"
          onClick={props.onClick}
          className="text-Line1 text-lg cursor-pointer"
        />
      </div>
    </div>
  );
}

export default ListItems;
