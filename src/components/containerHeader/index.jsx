import { memo } from "react";
import styles from './style.module.css';

const ContainerHeader = ({ content, src = "" }) => {
    return (
        <div className={styles.container__head}>
            {
                src.trim().length !== 0 && (
                    <img src={src} width="30" alt="" />
                )
            }
            <h1>{content}</h1>
        </div>
    )
}

export default memo(ContainerHeader);