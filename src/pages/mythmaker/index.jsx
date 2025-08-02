import { memo, useRef } from "react";
import styles from "./style.module.css";

const AltMythmakerPage = () => {
    return (
        <main>
            <Hero />
            <Story />
            <MusicVideo />
        </main>
    )
}

const Hero = () => {
    return (
        <section id={styles.slide}>
            <div>
                <div className={styles.splashArt}>
                    <img src="https://raw.githubusercontent.com/VietHung0712/AssetsLOL/refs/heads/main/Mythmaker/Image/Mythmaker_2023.jpg" alt="" />
                    <video muted autoPlay loop typeof="video/mp4"
                        src="https://raw.githubusercontent.com/VietHung0712/AssetsLOL/refs/heads/main/Mythmaker/Video/ScreenLogin.mp4"></video>
                </div>
                <div className={styles.title}>
                    <h1>
                        Mythmaker
                    </h1>
                </div>
            </div>
        </section>
    )
}

const Story = () => {
    return (
        <section id={styles.story}>
            <div>
                <p>
                    Long ago, the defeat of the Great Beast Galio gave rise to Lunar New Year traditions that are carried on through the retelling of that epic tale. Within the story itself lies a living world all its own—but when the world of the story is suddenly interrupted, the characters must work together to fix the mess and see their own myth through.
                </p>
            </div>
        </section>
    )
}

const MusicVideo = () => {

    const imgRef = useRef();
    const videoRef = useRef();
    const btnRef = useRef();

    const playVideo = () => {
        const img = imgRef.current;
        const vid = videoRef.current;
        img.style.display = 'none';
        vid.play();
    }

    const playOrPause = (i) => {
        const btn = btnRef.current;
        if (i === 0) {
            btn.style.display = 'block';
        } else if (i === 1) {
            btn.style.display = 'none';
        }
    }

    return (
        <section id={styles.musicVideo}>
            <div className="container-fluid">
                <div className="row">
                    <header className={`${styles.ctrHeader} ${styles.mHeader} col-12 text-center`}>
                        <p>Lunar Revel</p>
                        <h1>The Bridge Between</h1>
                    </header>
                </div>
                <div className={`${styles.ctr__body} row`}>
                    <div className={`${styles.ctr__border} col-11 col-lg-12 p-0 bg-black m-auto`}>
                        <div className={`position-relative`}>
                            <video onPlay={() => playOrPause(1)} onPause={() => playOrPause(0)} ref={videoRef} className="position-absolute h-100 w-100 top-0 start-0" controls type="video/mp4">
                                <source src="https://raw.githubusercontent.com/VietHung0712/AssetsLOL/refs/heads/main/Mythmaker/Video/The_Bridge_Between-Lunar_Revel_2025_Cinematic.mp4" />
                            </video>
                            <img ref={imgRef} className="position-absolute h-100 w-100 top-0 start-0 object-fit-cover" loading="lazy" alt=""
                                src="https://raw.githubusercontent.com/VietHung0712/AssetsLOL/refs/heads/main/Mythmaker/Image/Mythmaker_2025.jpg" />
                            <button ref={btnRef} className={`position-absolute`} onClick={() => playVideo()}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                    className="bi bi-play-fill" viewBox="0 0 16 16">
                                    <path
                                        d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}



export default memo(AltMythmakerPage);