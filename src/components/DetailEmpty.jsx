import React from "react";
import todoEmptyState from "../assets/todoEmptyState.png";

function DetailEmpty() {
  return (
    <div
      data-cy="todo-empty-state"
      className="grid justify-items-center lg:flex lg:flex-wrap justify-center mx-5 mt-36 lg:mx-80 lg:mt-16 lg:mb-64 cursor-pointer"
    >
      <img src={todoEmptyState} alt="list-empty" />
    </div>
  );
}

export default DetailEmpty;
