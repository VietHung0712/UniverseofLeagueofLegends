import { memo } from "react";
import styles from "./style.module.css";

const HeroUniverse = ({ item, customStyle }) => {
    return (
        <div id={styles.hero}>
            <div className={`${styles.hero__splashArt} ${customStyle}`}>
                <img
                    style={{ objectPosition: item.px + '%' + item.py + '%' }}
                    src={item.img} loading="lazy" alt="" />
                {
                    item.video !== '' && (
                        <video
                            style={{ objectPosition: `${item.px}% ${item.py}%` }}
                            src={item.video}
                            autoPlay
                            muted
                            loop
                        ></video>
                    )
                }
                <div></div>
            </div>
            <div className={`${styles.hero__title} transition300ms`}>
                <h1>
                    <span>
                        {item.name}
                    </span>
                </h1>
                <img src="https://raw.githubusercontent.com/VietHung0712/AssetsLOL/refs/heads/main/Others/t1HeaderDivider.png" loading="lazy" alt="" />
                <h3>
                    <span>
                        {item.title}
                    </span>
                </h3>
            </div>
        </div>
    )
}

export default memo(HeroUniverse);