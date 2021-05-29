import { useState, useRef, useCallback, useEffect } from "react";

function Modal({ showModal, setShowModal }) {
  const modalRef = useRef();

  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      setShowModal(false);
    }
  };

  const closeKey = useCallback(
    (e) => {
      if (e.key === "Escape" && showModal) {
        setShowModal(false);
      }
    },
    [setShowModal, showModal]
  );

  useEffect(() => {
    document.addEventListener("keydown", closeKey);
    return () => document.removeEventListener("keydown", closeKey);
  }, [closeKey]);

  if (!showModal) return null;

  return (
    <div id="modal_box">
      <div className="modal_contents">
        <button
          className="modal_close_btn"
          onClick={() => setShowModal((modal) => !modal)}
        >
          &#10005;
        </button>
      </div>
    </div>
  );
}

export default Modal;
