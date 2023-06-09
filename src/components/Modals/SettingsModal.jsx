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
        <div className={styles.innerSettings0}>
        <button onClick={() => setShowModal(false)}>
          <img src="/images/x.svg" alt="close button icon" />
        </button>
        <div className={styles.innerSettingsCS}>
          <h4>Color Scheme:</h4>
        </div>
        <div className={styles.innerSettingsCSO}>
          <h4>[Pop-up option]</h4>
        </div>
      </div>
      <h4></h4>
      </div>
    </div>,
    document.getElementById("settingsPortal")
  );
}

export default SettingsModal;
