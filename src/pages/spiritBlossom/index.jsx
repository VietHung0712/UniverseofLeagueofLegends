import { memo, useEffect } from "react";
import styles from "./style.module.css";

const AltSpiritBlossomPage = () => {
    useEffect(() => {
        document.title = "Spirit Blossom - Universe of League of Legends";
    });

    return (
        <main id={styles.main}>
            <Hero />
            <Lore />
            <Video />
        </main>
    )
}

const Hero = () => {
    return (
        <section id={styles.hero}>
            <div>
                <img className="position-absolute top-0 start-0 object-fit-cover h-100 w-100"
                    src="https://raw.githubusercontent.com/VietHung0712/AssetsLOL/refs/heads/main/SpiritBlossom/Image/Poster/103430368bf1d6837046b72dc57a9039e919a165-1600x556.avif" alt="" />
            </div>
        </section>
    )
}

const Lore = () => {
    return (
        <section id={styles.lore}>
            <div className="container py-5">
                <div className="row">
                    <div className="col-12 col-lg-10 col-xl-8 m-auto">
                        <p>
                            The Spirit Blossom Festival is an ancient and celebrated time in Ionia, when the door to the spirit world is opened, the dead return to their loved ones, and spirits of all manner turn their eyes towards the living. From the benevolent Kanmei, to the obsessive Akana—their stories play out again and again, like shadows on a paper lantern.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

const Video = () => {
    return (
        <section id={styles.video}>
            <div className="container py-5">
                <div className="row">
                    <div className="col-12 col-xl-11 m-auto">
                        <div className={styles.video}>
                            <iframe width="100%" height="100%" className="position-absolute start-0 top-0"
                                src="https://www.youtube.com/embed/D4L0OkSrsI8?si=PS1Vew6w9PfdW1rd"
                                title="YouTube video player"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerPolicy="strict-origin-when-cross-origin"
                                allowFullScreen>
                            </iframe>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default memo(AltSpiritBlossomPage);