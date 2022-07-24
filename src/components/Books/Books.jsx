import styles from "./Books.module.scss";
import TextTruncate from "react-text-truncate";

const Books = ({ bookTitle, bookAuthors, bookDescription }) => {
    return (
        <div>
            <section className={styles.Books__tile}>
                <h4>{bookTitle}</h4>
                <p>{bookAuthors}</p>
                <p>
                    <TextTruncate
                        expandable
                        line={3}
                        truncateText="..."
                        text={
                            bookDescription
                                ? bookDescription
                                : "no description available"
                        }
                        textTruncateChild={<p>Continue reading...</p>}
                    />
                </p>
            </section>
        </div>
    );
};

export default Books;
