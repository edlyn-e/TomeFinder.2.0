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
    bookDate,
    bookPublisher,
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
                            : "description not available"
                    }
                />
            </div>
            <div>
                {isModal ? (
                    <Modal
                        title={bookTitle}
                        description={bookDescription}
                        link={bookInfoLink}
                        date={bookDate}
                        publisher={bookPublisher}
                    />
                ) : (
                    ""
                )}
            </div>
        </>
    );
};

export default Books;
