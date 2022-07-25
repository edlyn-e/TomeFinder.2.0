import React from "react";
import styles from "./Modal.module.scss";

const Modal = ({ title, description }) => {
    return (
        <div className={styles.Modal}>
            <h4>{title}</h4>
            <p>{description}</p>
        </div>
    );
};

export default Modal;
