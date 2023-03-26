import React from "react";
import { TbAlertCircle } from "react-icons/tb";

function ModalInformation() {
  return (
    <div
      data-cy="modal-information"
      className="flex lg:w-80 lg:h-14 alert bg-white gap-3 lg:py-5 lg:px-8"
    >
      <TbAlertCircle
        data-cy="modal-information-icon"
        className="text-BgBlue text-lg"
      />
      <p
        data-cy="modal-information-title"
        className="text-sm text-Title font-medium"
      >
        Activity berhasil dihapus
      </p>
    </div>
  );
}

export default ModalInformation;
