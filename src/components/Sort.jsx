import React, { useState } from "react";
import Button from "../components/Button";
import {
  TbArrowsSort,
  TbSortDescending,
  TbSortAscending,
  TbSortAscendingLetters,
  TbSortDescendingLetters,
} from "react-icons/tb";

function Sort() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      data-cy="sort"
      className="flex flex-col justify-center items-center w-14 h-14 rounded-full border border-Line1/30"
    >
      <Button
        data-cy="todo-sort-button"
        className="relative text-2xl text-Line1"
        label={<TbArrowsSort />}
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      />
      {isOpen && (
        <ul
          data-cy="sort-parent"
          className="absolute grid self-center mt-80 bg-white w-56 right-56 rounded-md shadow-md  py-3"
        >
          <li
            data-cy="sort-latest"
            className="flex items-center border border-t-0 border-b-Line1/30 px-6 pb-3"
          >
            <div className="flex items-center gap-5">
              <TbSortDescending className="text-BgBlue" />
              <span className="text-Line2 text-base font-normal">Terbaru</span>
            </div>
          </li>
          <li
            data-cy="sort-oldest"
            className="flex items-center border border-t-0 border-b-Line1/30 px-6 py-3"
          >
            <div className="flex items-center gap-5">
              <TbSortAscending className="text-BgBlue" />
              <span className="text-Line2 text-base font-normal">Terlama</span>
            </div>
          </li>
          <li
            data-cy="sort-az"
            className="flex items-center border border-t-0 border-b-Line1/30 px-6 py-3"
          >
            <div className="flex items-center gap-5">
              <TbSortAscendingLetters className="text-BgBlue" />
              <span className="text-Line2 text-base font-normal">A - Z</span>
            </div>
          </li>
          <li
            data-cy="sort-za"
            className="flex items-center border border-t-0 border-b-Line1/30 px-6 py-3"
          >
            <div className="flex items-center gap-5">
              <TbSortDescendingLetters className="text-BgBlue" />
              <span className="text-Line2 text-base font-normal">Z - A</span>
            </div>
          </li>
          <li
            data-cy="sort-unfinished"
            className="flex items-center  px-6 pt-3"
          >
            <div className="flex items-center gap-5">
              <TbArrowsSort className="text-BgBlue" />
              <span className="text-Line2 text-base font-normal">
                Belum Selesai
              </span>
            </div>
          </li>
        </ul>
      )}
    </div>
  );
}

export default Sort;
