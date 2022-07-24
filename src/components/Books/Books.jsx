import styles from "./Books.module.scss";
import TextTruncate from "react-text-truncate";

const Books = ({ bookTitle, bookAuthors, bookDescription }) => {
    return (
        <div>
            <section className={styles.Books__tile}>
                <img
                    src="https://via.placeholder.com/200"
                    alt=""
                    className={styles.Books__img}
                />
                <h4>{bookTitle}</h4>
                <p>{bookAuthors}</p>
                <p>
                    <TextTruncate
                        line={3}
                        truncateText="..."
                        text={
                            bookDescription
                                ? bookDescription
                                : "no description available"
                        }
                        textTruncateChild={<span>Continue reading...</span>}
                    />
                </p>
            </section>
        </div>
    );
};

export default Books;
