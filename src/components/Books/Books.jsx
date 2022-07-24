import styles from "./Books.module.scss";
import TextTruncate from "react-text-truncate";

const Books = ({
    source,

    bookTitle,
    bookAuthors,
    bookDescription,
}) => {
    return (
        <div>
            <section className={styles.Books__tile}>
                <img src={source} alt="" className={styles.Books__cover} />

                <h4>{bookTitle}</h4>
                <p>{bookAuthors ? bookAuthors : "no authors listed"}</p>
                <p>
                    <TextTruncate
                        line={3}
                        truncateText="..."
                        text={
                            bookDescription
                                ? bookDescription
                                : "no description available"
                        }
                        textTruncateChild={<span>More info</span>}
                    />
                </p>
            </section>
        </div>
    );
};

export default Books;
