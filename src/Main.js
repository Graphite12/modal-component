import { useState } from "react";
import Modal from "./components/Modal";

function Main() {
  const [showModal, setShowModal] = useState(false);

  const activeModal = () => {
    setShowModal((prev) => !prev);
  };
  return (
    <div id="container">
      <button className="modal_btn" onClick={activeModal}>
        Modal Open
      </button>
      <Modal showModal={showModal} setShowModal={setShowModal} />
    </div>
  );
}

export default Main;
