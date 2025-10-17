import { memo, useState, useEffect } from "react";
import TitlePage from "../../components/TitlePage";
import ShowContents from "../../components/showContents";
import styles from "./style.module.css";

const Explore = () => {

    useEffect(() => {
        document.title = `Explore - Universe of League of Legends`;
    });

    return (
        <main id={styles.main}>
            <TitlePage title={"Explore Universe"} />
            <Container />
        </main>
    )
}

const Container = () => {

    const [btns] = useState(["Comics", "Videos", "Musics"]);
    const [category, setCategory] = useState(0);
    const [show, setShow] = useState(false);
    const [src, setSrc] = useState(null);
    const [indexTab, setIndexTab] = useState(0);

    const openItem = (value) => {
        if (indexTab === 0) {
            setCategory(1);
        } else {
            setCategory(2);
        }
        setSrc(value);
        setShow(true);
        document.documentElement.style.overflow = 'hidden';
    }

    const [tabs] = useState([
        [
            {
                name: "Harmonies: Issue #5: Ahri",
                poster: "https://raw.githubusercontent.com/VietHung0712/AssetsLOL/refs/heads/main/KDA/Image/Comics/Ahri/poster.jpg",
                src: [
                    "https://raw.githubusercontent.com/VietHung0712/AssetsLOL/refs/heads/main/KDA/Image/Comics/Ahri/kdacomic-05-en_us_001-full.jpg",
                    "https://raw.githubusercontent.com/VietHung0712/AssetsLOL/refs/heads/main/KDA/Image/Comics/Ahri/kdacomic-05-en_us_002-full.jpg",
                    "https://raw.githubusercontent.com/VietHung0712/AssetsLOL/refs/heads/main/KDA/Image/Comics/Ahri/kdacomic-05-en_us_003-full.jpg",
                    "https://raw.githubusercontent.com/VietHung0712/AssetsLOL/refs/heads/main/KDA/Image/Comics/Ahri/kdacomic-05-en_us_004-full.jpg",
                    "https://raw.githubusercontent.com/VietHung0712/AssetsLOL/refs/heads/main/KDA/Image/Comics/Ahri/kdacomic-05-en_us_005-full.jpg",
                    "https://raw.githubusercontent.com/VietHung0712/AssetsLOL/refs/heads/main/KDA/Image/Comics/Ahri/kdacomic-05-en_us_006-full.jpg",
                    "https://raw.githubusercontent.com/VietHung0712/AssetsLOL/refs/heads/main/KDA/Image/Comics/Ahri/kdacomic-05-en_us_007-full.jpg",
                    "https://raw.githubusercontent.com/VietHung0712/AssetsLOL/refs/heads/main/KDA/Image/Comics/Ahri/kdacomic-05-en_us_008-full.jpg",
                    "https://raw.githubusercontent.com/VietHung0712/AssetsLOL/refs/heads/main/KDA/Image/Comics/Ahri/kdacomic-05-en_us_009-full.jpg",
                    "https://raw.githubusercontent.com/VietHung0712/AssetsLOL/refs/heads/main/KDA/Image/Comics/Ahri/kdacomic-05-en_us_010-full.jpg",
                ]
            },
            {
                name: "Harmonies: Issue #4: Kai'Sa",
                poster: "https://raw.githubusercontent.com/VietHung0712/AssetsLOL/refs/heads/main/KDA/Image/Comics/KaiSa/poster.jpg",
                src: [
                    "https://raw.githubusercontent.com/VietHung0712/AssetsLOL/refs/heads/main/KDA/Image/Comics/KaiSa/kdacomic-04-en_us_001-full.jpg",
                    "https://raw.githubusercontent.com/VietHung0712/AssetsLOL/refs/heads/main/KDA/Image/Comics/KaiSa/kdacomic-04-en_us_002-full.jpg",
                    "https://raw.githubusercontent.com/VietHung0712/AssetsLOL/refs/heads/main/KDA/Image/Comics/KaiSa/kdacomic-04-en_us_003-full.jpg",
                    "https://raw.githubusercontent.com/VietHung0712/AssetsLOL/refs/heads/main/KDA/Image/Comics/KaiSa/kdacomic-04-en_us_004-full.jpg",
                    "https://raw.githubusercontent.com/VietHung0712/AssetsLOL/refs/heads/main/KDA/Image/Comics/KaiSa/kdacomic-04-en_us_005-full.jpg",
                    "https://raw.githubusercontent.com/VietHung0712/AssetsLOL/refs/heads/main/KDA/Image/Comics/KaiSa/kdacomic-04-en_us_006-full.jpg",
                    "https://raw.githubusercontent.com/VietHung0712/AssetsLOL/refs/heads/main/KDA/Image/Comics/KaiSa/kdacomic-04-en_us_007-full.jpg",
                    "https://raw.githubusercontent.com/VietHung0712/AssetsLOL/refs/heads/main/KDA/Image/Comics/KaiSa/kdacomic-04-en_us_008-full.jpg",
                    "https://raw.githubusercontent.com/VietHung0712/AssetsLOL/refs/heads/main/KDA/Image/Comics/KaiSa/kdacomic-04-en_us_009-full.jpg",
                    "https://raw.githubusercontent.com/VietHung0712/AssetsLOL/refs/heads/main/KDA/Image/Comics/KaiSa/kdacomic-04-en_us_010-full.jpg",
                    "https://raw.githubusercontent.com/VietHung0712/AssetsLOL/refs/heads/main/KDA/Image/Comics/KaiSa/kdacomic-04-en_us_011-full.jpg",
                ]
            },
            {
                name: "Harmonies: Issue #3: Evelynn",
                poster: "https://raw.githubusercontent.com/VietHung0712/AssetsLOL/refs/heads/main/KDA/Image/Comics/Evelynn/poster.jpg",
                src: [
                    "https://raw.githubusercontent.com/VietHung0712/AssetsLOL/refs/heads/main/KDA/Image/Comics/Evelynn/kdacomic-03-en_us_001-full.jpg",
                    "https://raw.githubusercontent.com/VietHung0712/AssetsLOL/refs/heads/main/KDA/Image/Comics/Evelynn/kdacomic-03-en_us_002-full.jpg",
                    "https://raw.githubusercontent.com/VietHung0712/AssetsLOL/refs/heads/main/KDA/Image/Comics/Evelynn/kdacomic-03-en_us_003-full.jpg",
                    "https://raw.githubusercontent.com/VietHung0712/AssetsLOL/refs/heads/main/KDA/Image/Comics/Evelynn/kdacomic-03-en_us_004-full.jpg",
                    "https://raw.githubusercontent.com/VietHung0712/AssetsLOL/refs/heads/main/KDA/Image/Comics/Evelynn/kdacomic-03-en_us_005-full.jpg",
                    "https://raw.githubusercontent.com/VietHung0712/AssetsLOL/refs/heads/main/KDA/Image/Comics/Evelynn/kdacomic-03-en_us_006-full.jpg",
                    "https://raw.githubusercontent.com/VietHung0712/AssetsLOL/refs/heads/main/KDA/Image/Comics/Evelynn/kdacomic-03-en_us_007-full.jpg",
                    "https://raw.githubusercontent.com/VietHung0712/AssetsLOL/refs/heads/main/KDA/Image/Comics/Evelynn/kdacomic-03-en_us_008-full.jpg",
                    "https://raw.githubusercontent.com/VietHung0712/AssetsLOL/refs/heads/main/KDA/Image/Comics/Evelynn/kdacomic-03-en_us_009-full.jpg",
                    "https://raw.githubusercontent.com/VietHung0712/AssetsLOL/refs/heads/main/KDA/Image/Comics/Evelynn/kdacomic-03-en_us_010-full.jpg",
                    "https://raw.githubusercontent.com/VietHung0712/AssetsLOL/refs/heads/main/KDA/Image/Comics/Evelynn/kdacomic-03-en_us_011-full.jpg",
                    "https://raw.githubusercontent.com/VietHung0712/AssetsLOL/refs/heads/main/KDA/Image/Comics/Evelynn/kdacomic-03-en_us_012-full.jpg",
                    "https://raw.githubusercontent.com/VietHung0712/AssetsLOL/refs/heads/main/KDA/Image/Comics/Evelynn/kdacomic-03-en_us_013-full.jpg",
                    "https://raw.githubusercontent.com/VietHung0712/AssetsLOL/refs/heads/main/KDA/Image/Comics/Evelynn/kdacomic-03-en_us_014-full.jpg",
                    "https://raw.githubusercontent.com/VietHung0712/AssetsLOL/refs/heads/main/KDA/Image/Comics/Evelynn/kdacomic-03-en_us_015-full.jpg",
                    "https://raw.githubusercontent.com/VietHung0712/AssetsLOL/refs/heads/main/KDA/Image/Comics/Evelynn/kdacomic-03-en_us_016-full.jpg",
                ]
            },
            {
                name: "Harmonies: Issue #2: Seraphine",
                poster: "https://raw.githubusercontent.com/VietHung0712/AssetsLOL/refs/heads/main/KDA/Image/Comics/Seraphine/poster.jpg",
                src: [
                    "https://raw.githubusercontent.com/VietHung0712/AssetsLOL/refs/heads/main/KDA/Image/Comics/Seraphine/kdacomic-02-en_us_001-full.jpg",
                    "https://raw.githubusercontent.com/VietHung0712/AssetsLOL/refs/heads/main/KDA/Image/Comics/Seraphine/kdacomic-02-en_us_002-full.jpg",
                    "https://raw.githubusercontent.com/VietHung0712/AssetsLOL/refs/heads/main/KDA/Image/Comics/Seraphine/kdacomic-02-en_us_003-full.jpg",
                    "https://raw.githubusercontent.com/VietHung0712/AssetsLOL/refs/heads/main/KDA/Image/Comics/Seraphine/kdacomic-02-en_us_004-full.jpg",
                    "https://raw.githubusercontent.com/VietHung0712/AssetsLOL/refs/heads/main/KDA/Image/Comics/Seraphine/kdacomic-02-en_us_005-full.jpg",
                    "https://raw.githubusercontent.com/VietHung0712/AssetsLOL/refs/heads/main/KDA/Image/Comics/Seraphine/kdacomic-02-en_us_006-full.jpg",
                    "https://raw.githubusercontent.com/VietHung0712/AssetsLOL/refs/heads/main/KDA/Image/Comics/Seraphine/kdacomic-02-en_us_007-full.jpg",
                    "https://raw.githubusercontent.com/VietHung0712/AssetsLOL/refs/heads/main/KDA/Image/Comics/Seraphine/kdacomic-02-en_us_008-full.jpg",
                    "https://raw.githubusercontent.com/VietHung0712/AssetsLOL/refs/heads/main/KDA/Image/Comics/Seraphine/kdacomic-02-en_us_009-full.jpg",
                    "https://raw.githubusercontent.com/VietHung0712/AssetsLOL/refs/heads/main/KDA/Image/Comics/Seraphine/kdacomic-02-en_us_010-full.jpg",
                    "https://raw.githubusercontent.com/VietHung0712/AssetsLOL/refs/heads/main/KDA/Image/Comics/Seraphine/kdacomic-02-en_us_011-full.jpg",
                    "https://raw.githubusercontent.com/VietHung0712/AssetsLOL/refs/heads/main/KDA/Image/Comics/Seraphine/kdacomic-02-en_us_012-full.jpg",
                    "https://raw.githubusercontent.com/VietHung0712/AssetsLOL/refs/heads/main/KDA/Image/Comics/Seraphine/kdacomic-02-en_us_013-full.jpg",
                    "https://raw.githubusercontent.com/VietHung0712/AssetsLOL/refs/heads/main/KDA/Image/Comics/Seraphine/kdacomic-02-en_us_014-full.jpg",
                    "https://raw.githubusercontent.com/VietHung0712/AssetsLOL/refs/heads/main/KDA/Image/Comics/Seraphine/kdacomic-02-en_us_015-full.jpg",
                ]
            },
            {
                name: "Harmonies: Issue #1: Akali",
                poster: "https://raw.githubusercontent.com/VietHung0712/AssetsLOL/refs/heads/main/KDA/Image/Comics/Akali/poster.jpg",
                src: [
                    "https://raw.githubusercontent.com/VietHung0712/AssetsLOL/refs/heads/main/KDA/Image/Comics/Akali/kdacomic-01-en_us_001-full.jpg",
                    "https://raw.githubusercontent.com/VietHung0712/AssetsLOL/refs/heads/main/KDA/Image/Comics/Akali/kdacomic-01-en_us_002-full.jpg",
                    "https://raw.githubusercontent.com/VietHung0712/AssetsLOL/refs/heads/main/KDA/Image/Comics/Akali/kdacomic-01-en_us_003-full.jpg",
                    "https://raw.githubusercontent.com/VietHung0712/AssetsLOL/refs/heads/main/KDA/Image/Comics/Akali/kdacomic-01-en_us_004-full.jpg",
                    "https://raw.githubusercontent.com/VietHung0712/AssetsLOL/refs/heads/main/KDA/Image/Comics/Akali/kdacomic-01-en_us_005-full.jpg",
                    "https://raw.githubusercontent.com/VietHung0712/AssetsLOL/refs/heads/main/KDA/Image/Comics/Akali/kdacomic-01-en_us_006-full.jpg",
                    "https://raw.githubusercontent.com/VietHung0712/AssetsLOL/refs/heads/main/KDA/Image/Comics/Akali/kdacomic-01-en_us_007-full.jpg",
                    "https://raw.githubusercontent.com/VietHung0712/AssetsLOL/refs/heads/main/KDA/Image/Comics/Akali/kdacomic-01-en_us_008-full.jpg",
                    "https://raw.githubusercontent.com/VietHung0712/AssetsLOL/refs/heads/main/KDA/Image/Comics/Akali/kdacomic-01-en_us_009-full.jpg",
                    "https://raw.githubusercontent.com/VietHung0712/AssetsLOL/refs/heads/main/KDA/Image/Comics/Akali/kdacomic-01-en_us_010-full.jpg",
                    "https://raw.githubusercontent.com/VietHung0712/AssetsLOL/refs/heads/main/KDA/Image/Comics/Akali/kdacomic-01-en_us_011-full.jpg",
                ]
            }
        ],
        [
            {
                name: "Pop/stars",
                poster: "https://raw.githubusercontent.com/VietHung0712/AssetsLOL/refs/heads/main/KDA/Image/Theme/KDA_2.jpg",
                src: "https://www.youtube.com/embed/UOxkGD8qRB4?si=Wg1Twfo0Ys0zxGuX",
            },
            {
                name: "Irelia: The Defiant Blade",
                poster: "https://raw.githubusercontent.com/VietHung0712/AssetsLOL/refs/heads/main/Others/ddb0942cba4b2ea0e6158ce4a7829be92f99a598-1676x748.jpg",
                src: "https://www.youtube.com/embed/IPCnts6v_Pc?si=5-P2GYGCfgnIjPNw",
            },
            {
                name: "HEARTSTEEL - PARANOIA",
                poster: "https://raw.githubusercontent.com/VietHung0712/AssetsLOL/refs/heads/main/Others/heartsteel.jpg",
                src: "https://www.youtube.com/embed/MDErQ1KTzaI?si=E5yfiHQ0x7Iwepfo",
            },
            {
                name: "Still Here",
                poster: "https://raw.githubusercontent.com/VietHung0712/AssetsLOL/refs/heads/main/Others/stillhere.avif",
                src: "https://www.youtube.com/embed/ZHhqwBwmRkI?si=KoGN2f0W-X4vxqFR",
            }
        ],
        [
            {
                name: "Legends Never Die",
                poster: "https://raw.githubusercontent.com/VietHung0712/AssetsLOL/refs/heads/main/Others/legendneverdie.jpg",
                src: "https://www.youtube.com/embed/r6zIGXun57U?si=s_kMH2JYboGec_ah",
            },
            {
                name: "Lunar Revel: Mythmaker",
                poster: "https://raw.githubusercontent.com/VietHung0712/AssetsLOL/refs/heads/main/Others/lol-mythmaker-lunar-2023.jpg",
                src: "https://www.youtube.com/embed/W7h1u5eUkjg?si=1-oyppQ4I1TvioI9",
            },
            {
                name: "Warsongs: Piercing Light (Mako Remix)",
                poster: "https://raw.githubusercontent.com/VietHung0712/AssetsLOL/refs/heads/main/Others/hq720.avif ",
                src: "https://www.youtube.com/embed/Nqqc2FHf9Ug?si=C_ytLRJvba9stDd9",
            },
        ]
    ])

    return (
        <section id={styles.container}>
            <div className="container">
                <div className="row py-5">
                    <div className="col-12">
                        <div className={styles.tabs}>
                            {
                                btns?.map((item, key) => (
                                    <button onClick={() => setIndexTab(key)} className={indexTab === key ? styles.active : ""} key={key} >{item}</button>
                                ))
                            }
                        </div>
                    </div>
                </div>
                <div className="row row-gap-4">
                    {
                        tabs[indexTab]?.map((item, key) => (
                            <div key={key} className="col-12 col-md-6 col-xl-3">
                                <div onClick={() => openItem(item.src)} className={styles.item} style={{ backgroundImage: `linear-gradient(to bottom, #00000000, #000000cf), url(${item.poster})` }}>
                                    <div className="position-absolute h-100 w-100 start-0 top-0 transition300ms" style={{ backgroundImage: `url(https://raw.githubusercontent.com/VietHung0712/AssetsLOL/refs/heads/main/Others/Explore_Rollover_Flare__ND1iY.png)` }}></div>
                                    <h2>
                                        {item.name}
                                    </h2>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>

            {
                (show) && (
                    <ShowContents setEnable={setShow} src={src} setSrc={setSrc} category={category} />
                )
            }
        </section>
    )
}

export default memo(Explore);