import styles from "./Settings.module.scss";
import React, { useRef } from "react";
import ReactDom from "react-dom";

function SettingsModal({ setShowModal }) {
  const modalRef = useRef();
  const closeModal = (e) => {
    if (e.target === modalRef.current) {
      setShowModal(false);
    }
  };
  return ReactDom.createPortal(
    <div className={styles.containerModal} ref={modalRef} onClick={closeModal}>
      <div className={styles.settingsModal}>
        <h2>Settings</h2>
        <button onClick={() => setShowModal(false)}>
          <img src="/images/x.svg" alt="close button icon" />
        </button>
      </div>
    </div>,
    document.getElementById("settingsPortal")
  );
}

export default SettingsModal;
