import { memo } from "react";
import styles from "./style.module.css";

const ShowContents = ({ src, setSrc, setEnable, category }) => {

    //category == 0 : img
    //category == 1 : img[]
    //category == 2 : video

    const closeItem = () => {
        setEnable(false);
        setSrc(null);
        document.documentElement.style.overflow = "";
    };

    return (
        <div className={styles.view}>

            {
                (category === 0) && (
                    <div className={styles.img}>
                        <img src={src} loading="lazy" alt="" />
                    </div>
                )
            }

            {
                (category === 1) && (
                    <div className={styles.imgs}>
                        {
                            src?.map((item, key) => (
                                <img key={key} src={item} loading="lazy" alt="" />
                            ))
                        }
                    </div>
                )
            }

            {category === 2 && (
                <div className={styles.video}>
                    <div className={styles.videoBorder}>
                        <iframe width="100%" height="100%"
                            className="position-absolute start-0 top-0"
                            src={src} title="Video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin" allowFullScreen>
                        </iframe>
                    </div>
                </div>
            )}

            {category === 3 && (
                <div className={styles.video}>
                    <div className={styles.videoBorder}>
                        <video controls autoPlay className="h-100 w-100 position-absolute start-0 top-0 p-0 border-0" src={src}></video>
                    </div>
                </div>
            )}

            <button onClick={closeItem}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-chevron-compact-left"
                    viewBox="0 0 16 16"
                >
                    <path
                        fillRule="evenodd"
                        d="M9.224 1.553a.5.5 0 0 1 .223.67L6.56 8l2.888 5.776a.5.5 0 1 1-.894.448l-3-6a.5.5 0 0 1 0-.448l3-6a.5.5 0 0 1 .67-.223"
                    />
                </svg>
                <span>Return</span>
            </button>
        </div>
    );
};

export default memo(ShowContents);