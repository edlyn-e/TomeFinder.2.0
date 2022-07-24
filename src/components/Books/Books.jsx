import styles from "./Books.module.scss";
import TextTruncate from "react-text-truncate";

const Books = ({
    source,
    secondarySource,
    bookTitle,
    bookAuthors,
    bookDescription,
}) => {
    return (
        <div>
            <section className={styles.Books__tile}>
                {/* <Picture  /> */}
                <img
                    src={
                        source
                            ? source || secondarySource
                            : "https://via.placeholder.com/200"
                    }
                    alt=""
                />

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
                        textTruncateChild={<span>Continue reading...</span>}
                    />
                </p>
            </section>
        </div>
    );
};

export default Books;
