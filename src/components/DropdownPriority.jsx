import Select from "react-select";
import { VscCircleFilled } from "react-icons/vsc";
import { useState } from "react";
import IndicatorPriority from "./IndicatorPriorit";

import React from "react";

function DropdownPriority() {
  const [selectedOption, setSelectedOption] = useState(true);

  const options = [
    {
      value: "very high",
      label: (
        <div className="flex items-center gap-3">
          <VscCircleFilled className="text-PriorityRed" />
          <span className="text-base text-Line2">Very High</span>
        </div>
      ),
    },
    {
      value: "high",
      label: (
        <div className="flex items-center gap-3">
          <VscCircleFilled className="text-PriorityOrange" />
          <span className="text-base text-Line2">High</span>
        </div>
      ),
    },
    {
      value: "medium",
      label: (
        <div className="flex items-center gap-3">
          <VscCircleFilled className="text-PriorityGreen" />
          <span className="text-base text-Line2">Medium</span>
        </div>
      ),
    },
    {
      value: "low",
      label: (
        <div className="flex items-center gap-3">
          <VscCircleFilled className="text-PriorityBlue" />
          <span className="text-base text-Line2">Low</span>
        </div>
      ),
    },
    {
      value: "very low",
      label: (
        <div className="flex items-center gap-3">
          <VscCircleFilled className="text-PriorityPurple" />
          <span className="text-base text-Line2">Very Low</span>
        </div>
      ),
    },
  ];

  return (
    <div data-cy="modal-add-priority-dropdown">
      {/* <Select className="w-48" value={selectedOption} options={options} /> */}

      <select className="select w-48 h-10 ">
        <option value="">
          <IndicatorPriority />
          Very High
        </option>
      </select>
    </div>
  );
}

export default DropdownPriority;
