import React from "react";
import { TbAlertTriangle, TbTrash } from "react-icons/tb";

function ModalDelete(props) {
  return (
    <div data-cy="modal-delete">
      <label htmlFor="my-modal" className="text-base text-Line1 cursor-pointer">
        <TbTrash />
      </label>
      <input type="checkbox" id="my-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box flex flex-col items-center justify-center h-72 w-80 lg:h-80 lg:w-96 bg-white shadow-md rounded-xl lg:py-11 lg:px-16">
          <TbAlertTriangle
            data-cy="modal-delete-icon"
            className="text-PriorityRed text-9xl"
          />
          <h3
            data-cy="modal-delete-title"
            className="text-Title text-center text-sm lg:text-lg font-medium"
          >
            Apakah anda yakin menghapus activity{" "}
            <span className="font-bold">{props.title}</span>?
          </h3>
          <div className="modal-action flex items-center justify-center w-full h-full space-x-2 md:space-x-3">
            <label
              htmlFor="my-modal"
              data-cy="modal-delete-cancel-button"
              className="flex justify-center items-center w-28 h-12 lg:w-36 lg:h-14 bg-BgGray1 rounded-full lg:py-3 lg:px-3 text-Line2 cursor-pointer"
            >
              Batal
            </label>
            <button
              data-cy="modal-delete-confirm-button"
              className="w-28 h-12 lg:w-36 lg:h-14 bg-PriorityRed rounded-full lg:py-3 lg:px-3 text-white"
            >
              Hapus
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModalDelete;
