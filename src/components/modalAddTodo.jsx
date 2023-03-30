import React from "react";

import { IoIosClose } from "react-icons/io";
import DropdownPriority from "./DropdownPriority";

function ModalAddTodo() {
  return (
    <div data-cy="todo-add-button">
      <label
        htmlFor="my-modal-4"
        className=" bg-BgBlue text-white text-xs lg:text-xl text-center font-semibold rounded-full py-2.5 lg:py-3.5 lg:px-4"
      >
        + Tambah
      </label>
      <div data-cy="modal-add">
        <input type="checkbox" id="my-modal-4" className="modal-toggle" />
        <label htmlFor="my-modal-4" className="modal cursor-pointer">
          <label
            htmlFor=""
            className="modal-box p-0 max-w-screen-lg overflow-visible"
          >
            <div className="flex justify-between items-center lg:pt-6 lg:px-7">
              <h1
                data-cy="modal-add-title"
                className="text-base lg:text-lg text-Title font-semibold"
              >
                Tambah List Item
              </h1>
              <label htmlFor="my-modal-4">
                <IoIosClose
                  data-cy="modal-add-close-button"
                  className="text-2xl lg:text-5xl text-Line3 cursor-pointer"
                />
              </label>
            </div>
            <hr />
            <div className="grid lg:px-7 lg:pt-9">
              <div className="space-y-3">
                <p
                  data-cy="modal-add-name-title"
                  className="text-xs text-Title font-semibold"
                >
                  NAMA LIST ITEM
                </p>
                <input
                  data-cy="modal-add-name-input"
                  type="text"
                  placeholder="Tambahkan nama list item"
                  className="w-full text-Title placeholder:text-Line3 border border-BgGray2 focus:outline-none focus:border-BgBlue rounded-md px-4 py-4 lg:py-3 lg:px-5"
                />
              </div>
              <div className="grid lg:pt-6 lg:pb-6">
                <p
                  data-cy="modal-add-priority-title"
                  className="text-xs text-Title font-semibold"
                >
                  PRIORITY
                </p>
                <DropdownPriority />
              </div>
            </div>
            <hr />
            <div className="flex items-center justify-end lg:py-4 lg:px-10">
              <label
                htmlFor="my-modal-4"
                data-cy="modal-add-save-button"
                className="flex justify-center items-center w-28 h-12 lg:w-36 lg:h-14 bg-BgBlue rounded-full lg:py-3 lg:px-3 text-white cursor-pointer"
              >
                Simpan
              </label>
            </div>
          </label>
        </label>
      </div>
    </div>
  );
}

export default ModalAddTodo;
