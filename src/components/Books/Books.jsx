import styles from "./Books.module.scss";
import TextTruncate from "react-text-truncate";
import { useState } from "react";
import Modal from "../Modal/Modal";

const Books = ({
    source,
    bookTitle,
    bookAuthors,
    bookDescription,
    bookInfoLink,
}) => {
    const [isModal, setIsModal] = useState(0);

    const handleModal = () => {
        setIsModal(!isModal);
    };

    const displayModal = () => {
        if (isModal) return <Modal />;
        return;
    };

    return (
        <>
            <div className={styles.Books__tile} onClick={handleModal}>
                <section>
                    <img src={source} alt="" className={styles.Books__cover} />

                    <h4>{bookTitle}</h4>
                    <p>{bookAuthors ? bookAuthors : "no authors listed"}</p>
                    <TextTruncate
                        line={3}
                        element="p"
                        truncateText="..."
                        text={
                            bookDescription
                                ? bookDescription
                                : "no description available"
                        }
                    />
                </section>

                <section className={styles.Books__buttonholder}>
                    <button className={styles.Books__btn}>
                        <a href={bookInfoLink}>Google Books</a>
                    </button>
                </section>
            </div>
            <section>
                {isModal ? (
                    <Modal title={bookTitle} description={bookDescription} />
                ) : (
                    ""
                )}
            </section>
        </>
    );
};

export default Books;
