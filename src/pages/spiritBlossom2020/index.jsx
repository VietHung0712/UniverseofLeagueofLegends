import { memo, useEffect, useState } from "react";
import { generatePath, Link, useParams } from "react-router-dom";
import ShowContents from "../../components/showContents";
import styles from "./style.module.css";
import ROUTERS from "../../utils/router";

const AltSpiritBlossom2020Page = () => {
    const { id } = useParams();
    const index = parseInt(id, 10);

    const [data] = useState([
        {
            ahri:
            {
                imgTheme: "https://raw.githubusercontent.com/VietHung0712/AssetsLOL/refs/heads/main/Splash_Art/A/Ahri/Ahri_16.jpg",
                videoTheme: "https://raw.githubusercontent.com/VietHung0712/AssetsLOL/refs/heads/main/SpiritBlossom/Video/video-op-ahri.mp4",
                videoBg: "https://raw.githubusercontent.com/VietHung0712/AssetsLOL/refs/heads/main/SpiritBlossom/Video/video-fetter-ahri.mp4",
            },
            yone:
            {
                imgTheme: "https://raw.githubusercontent.com/VietHung0712/AssetsLOL/refs/heads/main/Splash_Art/Y/Yone/Yone_1.jpg",
                videoTheme: "https://raw.githubusercontent.com/VietHung0712/AssetsLOL/refs/heads/main/SpiritBlossom/Video/video-op-yongen.mp4",
                videoBg: "https://raw.githubusercontent.com/VietHung0712/AssetsLOL/refs/heads/main/SpiritBlossom/Video/video-fetter-yongen.mp4",
            },
            kindred:
            {
                imgTheme: "https://raw.githubusercontent.com/VietHung0712/AssetsLOL/refs/heads/main/Splash_Art/K/Kindred/Kindred_3.jpg",
                videoTheme: "https://raw.githubusercontent.com/VietHung0712/AssetsLOL/refs/heads/main/SpiritBlossom/Video/video-op-kindred.mp4",
                videoBg: "https://raw.githubusercontent.com/VietHung0712/AssetsLOL/refs/heads/main/SpiritBlossom/Video/video-fetter-kindred.mp4",
            },
            riven:
            {
                imgTheme: "https://raw.githubusercontent.com/VietHung0712/AssetsLOL/refs/heads/main/Splash_Art/R/Riven/Riven_14.jpg",
                videoTheme: "https://raw.githubusercontent.com/VietHung0712/AssetsLOL/refs/heads/main/SpiritBlossom/Video/video-op-riven.mp4",
                videoBg: "https://raw.githubusercontent.com/VietHung0712/AssetsLOL/refs/heads/main/SpiritBlossom/Video/video-fetter-riven.mp4",
            },
            cassiopeia:
            {
                imgTheme: "https://raw.githubusercontent.com/VietHung0712/AssetsLOL/refs/heads/main/Splash_Art/C/Cassiopeia/Cassiopeia_6.jpg",
                videoTheme: "https://raw.githubusercontent.com/VietHung0712/AssetsLOL/refs/heads/main/SpiritBlossom/Video/video-op-cassiopeia.mp4",
                videoBg: "https://raw.githubusercontent.com/VietHung0712/AssetsLOL/refs/heads/main/SpiritBlossom/Video/video-fetter-cassiopeia.mp4",
            },
        },
        {
            thresh:
            {
                imgTheme: "https://raw.githubusercontent.com/VietHung0712/AssetsLOL/refs/heads/main/Splash_Art/T/Thresh/Thresh_9.jpg",
                videoTheme: "https://raw.githubusercontent.com/VietHung0712/AssetsLOL/refs/heads/main/SpiritBlossom/Video/video-op-thresh.mp4",
                videoBg: "https://raw.githubusercontent.com/VietHung0712/AssetsLOL/refs/heads/main/SpiritBlossom/Video/video-fetter-thresh.mp4",
            },
            yasuo:
            {
                imgTheme: "https://raw.githubusercontent.com/VietHung0712/AssetsLOL/refs/heads/main/Splash_Art/Y/Yasuo/Yasuo_9.jpg",
                videoTheme: "https://raw.githubusercontent.com/VietHung0712/AssetsLOL/refs/heads/main/SpiritBlossom/Video/video-op-yasuo.mp4",
                videoBg: "https://raw.githubusercontent.com/VietHung0712/AssetsLOL/refs/heads/main/SpiritBlossom/Video/video-fetter-yasuo.mp4",
            },
            teemo:
            {
                imgTheme: "https://raw.githubusercontent.com/VietHung0712/AssetsLOL/refs/heads/main/Splash_Art/T/Teemo/Teemo_11.jpg",
                videoTheme: "https://raw.githubusercontent.com/VietHung0712/AssetsLOL/refs/heads/main/SpiritBlossom/Video/video-op-teemo.mp4",
                videoBg: "https://raw.githubusercontent.com/VietHung0712/AssetsLOL/refs/heads/main/SpiritBlossom/Video/video-fetter-teemo.mp4",
            },
            lillia:
            {
                imgTheme: "https://raw.githubusercontent.com/VietHung0712/AssetsLOL/refs/heads/main/Splash_Art/L/Lillia/Lillia_1.jpg",
                videoTheme: "https://raw.githubusercontent.com/VietHung0712/AssetsLOL/refs/heads/main/SpiritBlossom/Video/video-op-lillia.mp4",
                videoBg: "https://raw.githubusercontent.com/VietHung0712/AssetsLOL/refs/heads/main/SpiritBlossom/Video/video-fetter-lillia.mp4",
            },
            vayne:
            {
                imgTheme: "https://raw.githubusercontent.com/VietHung0712/AssetsLOL/refs/heads/main/Splash_Art/V/Vayne/Vayne_12.jpg",
                videoTheme: "https://raw.githubusercontent.com/VietHung0712/AssetsLOL/refs/heads/main/SpiritBlossom/Video/video-op-vayne.mp4",
                videoBg: "https://raw.githubusercontent.com/VietHung0712/AssetsLOL/refs/heads/main/SpiritBlossom/Video/video-fetter-vayne.mp4",
            },
        }
    ]);

    const [videoTops] = useState([
        "https://raw.githubusercontent.com/VietHung0712/AssetsLOL/refs/heads/main/SpiritBlossom/Video/top-video.mp4",
        "https://raw.githubusercontent.com/VietHung0712/AssetsLOL/refs/heads/main/SpiritBlossom/Video/top-video_1.mp4"
    ])

    const [buttons] = useState([
        "https://raw.githubusercontent.com/VietHung0712/AssetsLOL/refs/heads/main/SpiritBlossom/Image/Others/bg1/btn-buy.webp",
        "https://raw.githubusercontent.com/VietHung0712/AssetsLOL/refs/heads/main/SpiritBlossom/Image/Others/bg2/btn-buy.webp"
    ])

    const [themes] = useState([
        {
            theme: "https://raw.githubusercontent.com/VietHung0712/AssetsLOL/refs/heads/main/SpiritBlossom/Image/Others/bg1/bg-7-0.webp",
            themeStart: "https://raw.githubusercontent.com/VietHung0712/AssetsLOL/refs/heads/main/SpiritBlossom/Image/Others/bg1/bg-6.webp",
            themeEnd: "https://raw.githubusercontent.com/VietHung0712/AssetsLOL/refs/heads/main/SpiritBlossom/Image/Others/bg1/bg-7-end.webp",
            themeColor: "#191970",
            kindred: "https://raw.githubusercontent.com/VietHung0712/AssetsLOL/refs/heads/main/SpiritBlossom/Image/Others/bg1/bg-7-3.webp",
            yone: "https://raw.githubusercontent.com/VietHung0712/AssetsLOL/refs/heads/main/SpiritBlossom/Image/Others/bg1/bg-7-2.webp",
            ahri: "https://raw.githubusercontent.com/VietHung0712/AssetsLOL/refs/heads/main/SpiritBlossom/Image/Others/bg1/bg-7-1.webp",
            riven: "https://raw.githubusercontent.com/VietHung0712/AssetsLOL/refs/heads/main/SpiritBlossom/Image/Others/bg1/bg-7-4.webp",
            cassiopeia: "https://raw.githubusercontent.com/VietHung0712/AssetsLOL/refs/heads/main/SpiritBlossom/Image/Others/bg1/bg-7-5.webp"
        },
        {
            theme: "https://raw.githubusercontent.com/VietHung0712/AssetsLOL/refs/heads/main/SpiritBlossom/Image/Others/bg2/bg-7-0.webp",
            themeStart: "https://raw.githubusercontent.com/VietHung0712/AssetsLOL/refs/heads/main/SpiritBlossom/Image/Others/bg2/bg-6.webp",
            themeEnd: "https://raw.githubusercontent.com/VietHung0712/AssetsLOL/refs/heads/main/SpiritBlossom/Image/Others/bg2/bg-7-end.webp",
            themeColor: "#f5deb3",
            vayne: "https://raw.githubusercontent.com/VietHung0712/AssetsLOL/refs/heads/main/SpiritBlossom/Image/Others/bg2/bg-7-3.webp",
            lillia: "https://raw.githubusercontent.com/VietHung0712/AssetsLOL/refs/heads/main/SpiritBlossom/Image/Others/bg2/bg-7-5.webp",
            thresh: "https://raw.githubusercontent.com/VietHung0712/AssetsLOL/refs/heads/main/SpiritBlossom/Image/Others/bg2/bg-7-1.webp",
            teemo: "https://raw.githubusercontent.com/VietHung0712/AssetsLOL/refs/heads/main/SpiritBlossom/Image/Others/bg2/bg-7-4.webp",
            yasuo: "https://raw.githubusercontent.com/VietHung0712/AssetsLOL/refs/heads/main/SpiritBlossom/Image/Others/bg2/bg-7-2.webp",
        }
    ])

    useEffect(() => {
        if (index >= 0 && index < data?.length && index < themes?.length) {
            document.title = "Spirit Blossom 2020 - Universe of League of Legends";
        }
    }, [index, data, themes]);

    return (
        <main key={index} id={styles.main}>
            <Hero src={videoTops[index]} index={index} />
            <Background bg={themes[index]?.themeStart} themeColor={themes[index]?.themeColor} />
            <Container data={data[index]} theme={themes[index]} button={buttons[index]} />
        </main>
    )
}

const Hero = ({ src, index }) => {
    return (
        <section id={styles.hero}>
            <div className={`${styles.hero} position-relative w-100`}>
                <div className="position-absolute h-100 w-100 top-0 start-0">
                    <video className="h-100 w-100 object-fit-cover"
                        autoPlay loop muted
                        src={src}>
                    </video>
                </div>
                <div className={`${styles.logo} position-absolute start-50`}>
                    <img className="object-fit-contain h-100 w-100" loading="lazy"
                        src="https://raw.githubusercontent.com/VietHung0712/AssetsLOL/refs/heads/main/SpiritBlossom/Image/Logo/Spirit_Blossom_Logo_1.webp" alt="" />
                </div>
                <div className="position-absolute w-100 bottom-0 start-0">
                    <img className="w-100 object-fit-contain h-auto" loading="lazy"
                        src="https://raw.githubusercontent.com/VietHung0712/AssetsLOL/refs/heads/main/SpiritBlossom/Image/Others/line-passion.webp" alt="" />
                </div>
                {
                    (index === 0) ? (
                        <button
                            id={styles.btnPage}
                            style={{ left: 1 + '%', backgroundImage: `url(https://raw.githubusercontent.com/VietHung0712/AssetsLOL/refs/heads/main/Others/prev.png)` }}
                        >
                            <Link to={generatePath(ROUTERS.SPIRITBLOSSOM2020, { id: 1 })}></Link>
                        </button>
                    ) : (
                        <button
                            id={styles.btnPage}
                            style={{
                                right: 1 + '%',
                                backgroundImage: `url(https://raw.githubusercontent.com/VietHung0712/AssetsLOL/refs/heads/main/Others/next.png)`
                            }}
                        >
                            <Link to={generatePath(ROUTERS.SPIRITBLOSSOM2020, { id: 0 })}></Link>
                        </button>
                    )
                }
            </div>
        </section>
    )
}

const Container = ({ data, theme, button }) => {

    const [id, setId] = useState(null);

    return (
        <section id={styles.container}>
            <div className={`${styles.container} position-relative w-100`}>
                {
                    (id === null) ? (
                        <SelectionHall theme={theme} button={button} setId={setId} />
                    ) : (
                        <DisplayHall theme={theme} data={data} currentId={id} />
                    )
                }
            </div>
        </section>
    )
}

const SelectionHall = ({ theme, button, setId }) => {

    const [id, setThisId] = useState(null);
    const setItem = (key) => {
        if (id === key) return;
        setThisId(key);
    }
    const chooseId = (id) => {
        setId(id);
    }

    return (
        <div id={styles.selectionHall} className="position-relative h-100 w-100">
            <img
                src={theme.themeEnd}
                className="w-100 d-block position-relative z-0 object-fit-contain"
                style={{ height: 'auto', objectFit: 'contain' }}
                alt=""
            />
            <div className="position-absolute z-1 top-0 w-100 h-100 start-0">
                {
                    Object.entries(theme)
                        .filter(([keyName]) => !keyName.startsWith('theme'))
                        .map(([keyName, value], key) => (
                            <img
                                key={key}
                                src={value}
                                alt={keyName}
                                className={`${keyName === id ? styles.active : ""} ${styles.imgArt} position-absolute h-100 w-100 top-0 start-0 object-fit-contain z-0 transition200ms`}
                            />
                        ))
                }
            </div>
            <div className={`${styles.btns} h-100 z-2 top-0 position-absolute`}>
                <div className="row row-cols-5 w-100 h-100">
                    {
                        Object.entries(theme)
                            .filter(([keyName]) => !keyName.startsWith('theme'))
                            .map(([keyName], key) => (
                                <button onClick={() => setItem(keyName)} key={key}
                                    className={`${styles.btn} border-0 col p-0 m-0 bg-transparent h-100`}></button>
                            ))
                    }
                </div>
            </div>
            <img
                className={`${styles.imgTheme} ${id !== null ? styles.active : ""} position-absolute h-100 w-100 top-0 start-0 object-fit-contain z-1 transition200ms`}
                src={theme.theme}
                alt=""
            />
            <button onClick={() => chooseId(id)}
                className={`${styles.btnView} position-absolute z-3 bg-transparent start-50 border-0 text-white transition200ms`}
                style={{ backgroundImage: `url(${button})` }}>
                {
                    (id) ? (
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-eye-fill" viewBox="0 0 16 16">
                            <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0" />
                            <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8m8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7" />
                        </svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-eye-slash-fill" viewBox="0 0 16 16">
                            <path d="m10.79 12.912-1.614-1.615a3.5 3.5 0 0 1-4.474-4.474l-2.06-2.06C.938 6.278 0 8 0 8s3 5.5 8 5.5a7 7 0 0 0 2.79-.588M5.21 3.088A7 7 0 0 1 8 2.5c5 0 8 5.5 8 5.5s-.939 1.721-2.641 3.238l-2.062-2.062a3.5 3.5 0 0 0-4.474-4.474z" />
                            <path d="M5.525 7.646a2.5 2.5 0 0 0 2.829 2.829zm4.95.708-2.829-2.83a2.5 2.5 0 0 1 2.829 2.829zm3.171 6-12-12 .708-.708 12 12z" />
                        </svg>
                    )
                }
            </button>
        </div>
    );
}

const DisplayHall = ({ theme, data, currentId }) => {

    const [id, setId] = useState(currentId);
    const [src, setSrc] = useState(null);
    const [show, setShow] = useState(false);
    const [category, setCategory] = useState(0);
    const setOpenShowContents = (value) => {
        setShow(true);
        setSrc(value);
        document.documentElement.style.overflow = 'hidden';
    }

    return (
        <>
            <div id={styles.displayHall} className="position-relative h-100 w-100 top-0 start-0 z-0">
                <img
                    src={theme.themeEnd}
                    className="w-100 d-block position-relative z-0 object-fit-contain"
                    style={{ height: 'auto', objectFit: 'contain' }}
                    alt=""
                />
                <video autoPlay loop muted src={data[id]?.videoBg}
                    className="position-absolute top-0 start-0 h-100 w-100 object-fit-lg-contain object-fit-cover">
                </video>
                <div className="position-absolute bottom-0 start-0 w-100">
                    <img
                        src="https://raw.githubusercontent.com/VietHung0712/AssetsLOL/refs/heads/main/SpiritBlossom/Image/Others/bg2/ip-bottom.webp"
                        className="w-100 d-block position-relative z-0 object-fit-contain"
                        style={{ height: 'auto', objectFit: 'contain' }}
                        alt=""
                    />
                </div>
                <div className="position-absolute end-0 top-0 h-100 w-100">
                    <img className="position-absolute w-100 object-fit-contain" src="https://raw.githubusercontent.com/VietHung0712/AssetsLOL/refs/heads/main/SpiritBlossom/Image/Others/color_show1.webp" alt="" />
                    <div className={`${styles.ctr} position-absolute start-50 top-50 d-flex flex-lg-row flex-column`}>
                        <div className="position-relative" style={{ backgroundImage: `url(https://raw.githubusercontent.com/VietHung0712/AssetsLOL/refs/heads/main/SpiritBlossom/Image/Others/ip-animate-border.webp)` }}>
                            <h3>Splash Art</h3>
                            <img onClick={(e) => (setOpenShowContents(e.target.currentSrc), setCategory(0))}
                                className="object-fit-cover" src={data[id]?.imgTheme} alt="" />
                        </div>
                        <div className="position-relative" style={{ backgroundImage: `url(https://raw.githubusercontent.com/VietHung0712/AssetsLOL/refs/heads/main/SpiritBlossom/Image/Others/ip-animate-border.webp)` }}>
                            <h3>Animation</h3>
                            <video onClick={(e) => (setOpenShowContents(e.target.currentSrc), setCategory(3))}
                                className="object-fit-cover border-0"
                                autoPlay muted loop src={data[id]?.videoTheme}></video>
                        </div>
                    </div>
                    <img className="position-absolute end-0 bottom-0 w-100" src="https://raw.githubusercontent.com/VietHung0712/AssetsLOL/refs/heads/main/SpiritBlossom/Image/Others/color_show2.webp" alt="" />
                </div>
                <div className={`${styles.btns} position-absolute top-0 h-100 d-flex align-items-center`}>
                    <div className="d-flex flex-column justify-content-around">
                        {
                            Object.entries(theme)
                                .filter(([keyName]) => !keyName.startsWith('theme'))
                                .map(([keyName], key) => (
                                    <button
                                        style={{ color: theme.themeColor }}
                                        key={key}
                                        onClick={() => setId(keyName)}
                                        className={`${styles.btn} ${id === keyName ? styles.active : ""} position-relative letter-spacing-1 border-0 text-uppercase fw-bold col p-0 m-0 bg-transparent h-100`}
                                    >
                                        - {keyName}
                                        <span
                                            className="position-absolute top-0 end-100">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-flower1" viewBox="0 0 16 16">
                                                <path d="M6.174 1.184a2 2 0 0 1 3.652 0A2 2 0 0 1 12.99 3.01a2 2 0 0 1 1.826 3.164 2 2 0 0 1 0 3.652 2 2 0 0 1-1.826 3.164 2 2 0 0 1-3.164 1.826 2 2 0 0 1-3.652 0A2 2 0 0 1 3.01 12.99a2 2 0 0 1-1.826-3.164 2 2 0 0 1 0-3.652A2 2 0 0 1 3.01 3.01a2 2 0 0 1 3.164-1.826M8 1a1 1 0 0 0-.998 1.03l.01.091q.017.116.054.296c.049.241.122.542.213.887.182.688.428 1.513.676 2.314L8 5.762l.045-.144c.248-.8.494-1.626.676-2.314.091-.345.164-.646.213-.887a5 5 0 0 0 .064-.386L9 2a1 1 0 0 0-1-1M2 9l.03-.002.091-.01a5 5 0 0 0 .296-.054c.241-.049.542-.122.887-.213a61 61 0 0 0 2.314-.676L5.762 8l-.144-.045a61 61 0 0 0-2.314-.676 17 17 0 0 0-.887-.213 5 5 0 0 0-.386-.064L2 7a1 1 0 1 0 0 2m7 5-.002-.03a5 5 0 0 0-.064-.386 16 16 0 0 0-.213-.888 61 61 0 0 0-.676-2.314L8 10.238l-.045.144c-.248.8-.494 1.626-.676 2.314-.091.345-.164.646-.213.887a5 5 0 0 0-.064.386L7 14a1 1 0 1 0 2 0m-5.696-2.134.025-.017a5 5 0 0 0 .303-.248c.184-.164.408-.377.661-.629A61 61 0 0 0 5.96 9.23l.103-.111-.147.033a61 61 0 0 0-2.343.572c-.344.093-.64.18-.874.258a5 5 0 0 0-.367.138l-.027.014a1 1 0 1 0 1 1.732zM4.5 14.062a1 1 0 0 0 1.366-.366l.014-.027q.014-.03.036-.084a5 5 0 0 0 .102-.283c.078-.233.165-.53.258-.874a61 61 0 0 0 .572-2.343l.033-.147-.11.102a61 61 0 0 0-1.743 1.667 17 17 0 0 0-.629.66 5 5 0 0 0-.248.304l-.017.025a1 1 0 0 0 .366 1.366m9.196-8.196a1 1 0 0 0-1-1.732l-.025.017a5 5 0 0 0-.303.248 17 17 0 0 0-.661.629A61 61 0 0 0 10.04 6.77l-.102.111.147-.033a61 61 0 0 0 2.342-.572c.345-.093.642-.18.875-.258a5 5 0 0 0 .367-.138zM11.5 1.938a1 1 0 0 0-1.366.366l-.014.027q-.014.03-.036.084a5 5 0 0 0-.102.283c-.078.233-.165.53-.258.875a61 61 0 0 0-.572 2.342l-.033.147.11-.102a61 61 0 0 0 1.743-1.667c.252-.253.465-.477.629-.66a5 5 0 0 0 .248-.304l.017-.025a1 1 0 0 0-.366-1.366M14 9a1 1 0 0 0 0-2l-.03.002a5 5 0 0 0-.386.064c-.242.049-.543.122-.888.213-.688.182-1.513.428-2.314.676L10.238 8l.144.045c.8.248 1.626.494 2.314.676.345.091.646.164.887.213a5 5 0 0 0 .386.064zM1.938 4.5a1 1 0 0 0 .393 1.38l.084.035q.108.045.283.103c.233.078.53.165.874.258a61 61 0 0 0 2.343.572l.147.033-.103-.111a61 61 0 0 0-1.666-1.742 17 17 0 0 0-.66-.629 5 5 0 0 0-.304-.248l-.025-.017a1 1 0 0 0-1.366.366m2.196-1.196.017.025a5 5 0 0 0 .248.303c.164.184.377.408.629.661A61 61 0 0 0 6.77 5.96l.111.102-.033-.147a61 61 0 0 0-.572-2.342c-.093-.345-.18-.642-.258-.875a5 5 0 0 0-.138-.367l-.014-.027a1 1 0 1 0-1.732 1m9.928 8.196a1 1 0 0 0-.366-1.366l-.027-.014a5 5 0 0 0-.367-.138c-.233-.078-.53-.165-.875-.258a61 61 0 0 0-2.342-.572l-.147-.033.102.111a61 61 0 0 0 1.667 1.742c.253.252.477.465.66.629a5 5 0 0 0 .304.248l.025.017a1 1 0 0 0 1.366-.366m-3.928 2.196a1 1 0 0 0 1.732-1l-.017-.025a5 5 0 0 0-.248-.303 17 17 0 0 0-.629-.661A61 61 0 0 0 9.23 10.04l-.111-.102.033.147a61 61 0 0 0 .572 2.342c.093.345.18.642.258.875a5 5 0 0 0 .138.367zM8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3" />
                                            </svg>
                                        </span>
                                    </button>
                                ))
                        }
                    </div>
                </div>
            </div>
            {
                (show) && (
                    <ShowContents setEnable={setShow} src={src} setSrc={setSrc} category={category} />
                )
            }
        </>
    )
}

const Background = ({ bg, themeColor }) => {
    return (
        <section id={styles.background} className="position-relative">
            <img
                src={bg}
                className="w-100 d-block"
                style={{ height: 'auto', objectFit: 'contain' }}
                alt=""
            />
            <div
                style={{ transform: 'translate(-50%, 0%)', filter: 'drop-shadow(0px 0px 10px rgba(255, 84, 255, 0.8))' }}
                className="position-absolute start-50 d-flex align-items-center flex-column gap-3"
            >
                <img
                    src="https://raw.githubusercontent.com/VietHung0712/AssetsLOL/refs/heads/main/SpiritBlossom/Image/Logo/Spirit_Blossom_Logo_2.png"
                    className="object-fit-contain"
                    loading="lazy" alt="" />
                <h1
                    style={{ color: themeColor, fontSize: 5 + 'vw' }}
                    className="fst-italic letter-spacing-4 text-uppercase fw-bold text-nowrap text-center"
                >
                    Spirit Blossom 2020
                </h1>
            </div>
        </section>
    )
}

export default memo(AltSpiritBlossom2020Page);