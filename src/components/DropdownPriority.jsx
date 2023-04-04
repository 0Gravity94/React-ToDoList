import { VscCircleFilled } from "react-icons/vsc";
import { useState } from "react";

import React from "react";

function DropdownPriority() {
  const [selectedPriority, setSelectedPriority] = useState([]);

  return (
    <div className="dropdown">
      <select
        data-cy="modal-add-priority-dropdown"
        className="w-52 h-12 border border-BgGray2 rounded-md"
      >
        <option value="" disabled>
          Pilih priority
        </option>
        <option value="very-high" data-cy="modal-add-priority-very-high">
          Very High
        </option>
        <option value="high" data-cy="modal-add-priority-high">
          High
        </option>
        <option value="medium" data-cy="modal-add-priority-medium">
          Medium
        </option>
        <option value="low" data-cy="modal-add-priority-low">
          Low
        </option>
        <option value="very-low" data-cy="modal-add-priority-very-low">
          Very Low
        </option>
      </select>
    </div>
  );
}

export default DropdownPriority;
