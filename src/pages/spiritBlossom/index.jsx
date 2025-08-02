import { memo } from "react";
import styles from "./style.module.css";

const AltSpiritBlossomPage = () => {
    return (
        <main>
            <Hero />
        </main>
    )
}

const Hero = () => {
    return (
        <section id={styles.hero}>
            <div>
                <img src="" alt="" />
            </div>
        </section>
    )
}

export default memo(AltSpiritBlossomPage);