import { memo } from "react";
import Slide from "./slide";
import Review from "./review";
import Alt from "./alt";
import styles from './style.module.css';

const HomePage = () => {
    return (
        <main id={styles.main}>
            <Slide />
            <Review />
            <Alt />
        </main>
    );
};

export default memo(HomePage);