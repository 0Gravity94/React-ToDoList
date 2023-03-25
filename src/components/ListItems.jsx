import React from "react";
import { TbPencil, TbTrash } from "react-icons/tb";

function ListItems(props) {
  return (
    <div
      data-cy="list-item"
      className="flex justify-between h-20 bg-white lg:mt-14 lg:mx-52 lg:py-7 lg:px-5 shadow-md rounded-xl"
    >
      <div className="flex items-center gap-4 ">
        <input type="checkbox" className="focus:bg-BgBlue" />
        <div className="w-2 h-2 bg-PriorityRed rounded-full"></div>
        <p className="text-lg text-Line1 font-medium">Telur Ayam</p>
        <TbPencil className="text-gray-400 text-lg cursor-pointer" />
      </div>
      <div>
        <TbTrash
          onClick={props.onClick}
          className="text-Line1 text-lg cursor-pointer"
        />
      </div>
    </div>
  );
}

export default ListItems;
