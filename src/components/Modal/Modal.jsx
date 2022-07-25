import React from "react";
import styles from "./Modal.module.scss";

const Modal = ({ title, description, link, date, publisher }) => {
    return (
        <div className={styles.Modal}>
            <section>
                <h4>{title}</h4>
                <p>Date published: {date ? date : "not available"}</p>
                <p>{publisher ? publisher : "could not find publisher"}</p>
                <p>{description ? description : "description not available"}</p>
            </section>

            <button className={styles.Modal__btn}>
                <a href={link} target="blank">
                    Go to Google Books
                </a>
            </button>
        </div>
    );
};

export default Modal;
