import styles from "./Picture.module.scss";

const Picture = ({ source }) => {
    return (
        <div>
            <img
                src={source ? source : "https://via.placeholder.com/200"}
                alt=""
                className={styles.Picture}
            />
        </div>
    );
};

export default Picture;
