import React from "react";

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
          <label htmlFor="" className="modal-box">
            <div>
              <h1></h1>
              <span>X</span>
            </div>
            <div>
              <p></p>
              <input type="text" name="" id="" />
            </div>
            <div>
              <label
                htmlFor="my-modal-4"
                data-cy="modal-delete-cancel-button"
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
