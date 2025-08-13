import { memo } from "react";
import styles from "./style.module.css";

const TitlePage = ({ title }) => {
    return (
        <section id={styles.title}>
            <div className="container h-100 d-flex align-items-center">
                <h1 className="fw-bold z-2">{title}</h1>
            </div>
        </section>
    )
}
export default memo(TitlePage);