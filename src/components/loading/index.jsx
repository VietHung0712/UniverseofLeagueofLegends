import { memo } from "react";
import styles from "./style.module.css";

const Loading = () => {
    return (
        <section id={styles.loading}>
            <div className={styles.bor}>
                <div className={styles.spinner}></div>
                <div className={styles.spinner}></div>
                <div className={styles.spinner}></div>
                <div className={styles.spinner}></div>
                <div className={styles.spinner}></div>
            </div>
        </section>
    )
}

export default memo(Loading);