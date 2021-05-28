import { useState } from "react";

function Modal({ showModal, setShowModal }) {
  if (!showModal) return null;
  return <div id="modal_box">나는 모달</div>;
}

export default Modal;
