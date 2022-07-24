import styles from "./Picture.module.scss";

const Picture = ({ source, secondarySource }) => {
    return (
        <div>
            <img
                src={
                    source
                        ? source || secondarySource
                        : "https://via.placeholder.com/200"
                }
                alt=""
                className={styles.Picture}
            />
        </div>
    );
};

export default Picture;
