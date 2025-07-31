import { memo, useEffect, useRef, useState } from "react";
import styles from "./style.module.css";


const AltKdaPage = () => {
    return (
        <main>
            <Slide />
            <MusicVideo />
            <MemberSlide />
            <More />
            <SplashArt />
            <Gallery />
            <NewHit />
        </main>
    )
}

const Slide = () => {
    return (
        <section id={styles.slide} className="pb-5">
            <div className={`${styles.slide__splashArt} ${styles.paddingTop}`}>
                <img className="position-absolute top-0 start-0 w-100 object-fit-contain z-0" loading="lazy" alt=""
                    src="https://raw.githubusercontent.com/VietHung0712/AssetsLOL/refs/heads/main/KDA/Image/Theme/KDA.jpg" />
            </div>
            <div className={`${styles.slide__title} flex-center flex-column transition`}>
                <img className="w-75" loading="lazy" alt=""
                    src="https://raw.githubusercontent.com/VietHung0712/AssetsLOL/refs/heads/main/KDA/Image/Logo/KDA_logo.png" />
                <h1>POP/STARS</h1>
                <p className={`${styles.pgh} text-center`}>
                    K/DA exploded into the music scene with their hit song “POP/STARS.” Fans of K/DA can’t get enough of
                    their unconventional flair, from the trademark tails (which fans suspect are real) to otherworldly
                    decor in their studio. “Our songs are for you to remember—-always be true to yourself,” says lead
                    singer Ahri. K/DA hopes to take their music around the world in a global tour.
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
        <section id={styles.musicVideo} className={styles.paddingSection}>
            <div className="container-fluid">
                <div className="row">
                    <header className={`${styles.ctrHeader} ${styles.mHeader} col-12 text-center`}>
                        <p>Featured Video</p>
                        <h1>POP/STARS</h1>
                    </header>
                </div>
                <div className={`${styles.ctr__body} row`}
                    style={{ backgroundImage: `url(https://universe.leagueoflegends.com/images/soundbar.svg)` }}>
                    <div className={`${styles.ctr__border} col-11 col-lg-12 p-0 bg-black m-auto`}>
                        <div className={`${styles.paddingTop} position-relative`}>
                            <video onPlay={() => playOrPause(1)} onPause={() => playOrPause(0)} ref={videoRef} className="position-absolute h-100 w-100 top-0 start-0" controls type="video/mp4">
                                <source src="https://raw.githubusercontent.com/VietHung0712/AssetsLOL/refs/heads/main/KDA/Video/KDA_POPSTARS.mp4" />
                            </video>
                            <img ref={imgRef} className="position-absolute h-100 w-100 top-0 start-0 object-fit-cover" loading="lazy" alt=""
                                src="https://raw.githubusercontent.com/VietHung0712/AssetsLOL/refs/heads/main/KDA/Image/Theme/KDA_2.jpg" />
                            <button ref={btnRef} className={`${styles.myBtn} position-absolute`} onClick={() => playVideo()}>
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

const MemberSlide = () => {

    const [indexMember, setIndexMember] = useState(0);
    const [indexInf, setIndexInf] = useState(0);

    const [members] = useState([
        {
            url: "https://raw.githubusercontent.com/VietHung0712/AssetsLOL/refs/heads/main/KDA/Image/Avatar/KDA_Avatar_Ahri.jpg",
            name: "Ahri"
        }, {
            url: "https://raw.githubusercontent.com/VietHung0712/AssetsLOL/refs/heads/main/KDA/Image/Avatar/KDA_Avatar_Evelynn.jpg",
            name: "Evelynn"
        }, {
            url: "https://raw.githubusercontent.com/VietHung0712/AssetsLOL/refs/heads/main/KDA/Image/Avatar/KDA_Avatar_KaiSa.jpg",
            name: "Kai'Sa"
        }, {
            url: "https://raw.githubusercontent.com/VietHung0712/AssetsLOL/refs/heads/main/KDA/Image/Avatar/KDA_Avatar_Akali.jpg",
            name: "Akali"
        }
    ])

    const [memberDatas] = useState([
        {
            imgMember: "https://raw.githubusercontent.com/VietHung0712/AssetsLOL/refs/heads/main/KDA/Image/Splash_Art/KDA_Ahri.png",
            brandMember: "Ahri",
            role: "Lead Vocalist",
            zodiacSign: "Sagittarius",
            nicknames: "Foxy, Gumiho",
            height: "167.6 cm (5’5”)",
            title: "Beauty and Fashion",
            story: "After rising to fame as a teenage pop star, Ahri tossed aside her girly and young look to reveal her new self: a high fashion, elegant, and stunning celebrity. Ahri’s sleek new look attracts top fashion designers. During fashion week, Ahri graces runways around the world in finale gowns. She is the face of FOXY cosmetics and launched her own fragrance, Charmed last year. When she isn’t with K/DA or training, Ahri is shopping, drinking tea with designers, and testing out new beauty products.",
            facts: [
                "Ahri is the leader and lead singer of K/DA.",
                "She was labeled the most talented new Kpop artist in the 2013 Pop Shine Awards.",
                "After releasing five singles she spent time away from the industry to reinvent herself.",
                "Ahri is a muse for multiple clothing lines. Designers can’t stop making outfits for her.",
                "Her Chinese zodiac sign is a Dog.",
                "She prefers shopping over working out.",
                "She has known Evelynn of K/DA for many years.",
                "Ahri was voted one of the most beautiful faces in Pop."
            ]
        }, {
            imgMember: "https://raw.githubusercontent.com/VietHung0712/AssetsLOL/refs/heads/main/KDA/Image/Splash_Art/KDA_Evelynn.png",
            brandMember: "Evelynn",
            role: "Lead Vocalist",
            zodiacSign: "Taurus",
            nicknames: "Siren, Eve",
            height: "164 cm (5’4”)",
            title: "No 1 Diva",
            story: "Eve’s reputation paints her as a demanding diva. She told Pop Shine, “I’m an artist, not a socialite. I won’t apologize for high standards.” Eve once walked off the stage of a live performance when her vocals were backed by an audio track she didn’t approve. Though her presence in the industry is turbulent, she has a diehard fan base who call themselves “Deeva.” Prior to K/DA, Evelynn released two hit singles, Agony’s Embrace and Ecstasy.",
            facts: [
                "Evelynn is known for her uncompromising vision, rich vocals, and “bad girl” attitude.",
                "After disagreements in other musical groups, Evelynn worked alone to write her own music before reconnecting with Ahri.",
                "Her Chinese zodiac sign is a Rooster.",
                "Evelynn is very mysterious about her diet and workouts and usually declines to comment on her routine.",
                "She has a collection of very fast cars.",
                "Evelynn values friends. She is close to few people and very protective of them.",
                "She has been romantically linked with several missing male celebrities but never confirmed a relationship.",
                "Karthus is an artist she takes inspiration from."
            ]
        }, {
            imgMember: "https://raw.githubusercontent.com/VietHung0712/AssetsLOL/refs/heads/main/KDA/Image/Splash_Art/KDA_KaiSa.png",
            brandMember: "Kai'Sa",
            role: "Lead Dancer",
            zodiacSign: "Pisces",
            nicknames: "小笼包, Bokkie",
            height: "169.6 cm (5’6”)",
            title: "@KDAKaisa",
            story: "@KDAKaiSa<br><br>K/DA_GLOBALFANS @KDAFans<br>@KDAKaiSa why do you dance?<br><br>KAISAOFFICIAL @KDAKaiSa<br>replying to @KDAFans<br>When the music begins, a symphony of movement stirs in my being. It begins as a rumble, like a calling from the void, hungry and demanding release. My body reacts to the call, jumping to weave a story. A story to leave the void behind, and fall into the steps of life.",
            facts: [
                "Kai’Sa is called the “dreamer” of K/DA by Ahri.",
                "She lived in ten countries before pursuing her dreams of becoming a pop star.",
                "Kai’Sa won Hong Kong’s Can You Dance in 2018.",
                "Her Chinese zodiac sign is a Rat.",
                "She speaks Chinese, Afrikaans, Korean, and English fluently.",
                "She spends hours in the studio creating choreography for K / DA.She believes each step must convey vulnerability and power through movement.",
                "She can be found cooking large meals in the K/ DA house.",
                "Her favorite food is Sichuan dry hot pot."
            ]
        }, {
            imgMember: "https://raw.githubusercontent.com/VietHung0712/AssetsLOL/refs/heads/main/KDA/Image/Splash_Art/KDA_Akali.png",
            brandMember: "Akali",
            role: "Rapper",
            zodiacSign: "Taurus",
            nicknames: "Rogue, 힙합검객",
            height: "163 cm (5’3”)",
            title: "Hip Hop Ninja",
            story: "Akali makes appearances next to other street performers in cities she is visiting. Combining mixed martial arts and the beat of her own rap lyrics, she delights audiences with her bold lyrical rap and punk ninja style. She started practicing on the streets before rising to fame and returns to her roots whenever she can. Her unruly hair and untamed style made Akali an instant K/DA fan favorite.",
            facts: [
                "Akali is the youngest and newest member of K/DA.",
                "She was discovered at the age of 15 in an infamous rap battle that went viral.",
                "She wasn’t mainstream enough to sign with a label until Ahri found her through social media.",
                "Akali’s favorite food is Spicy Ramyun.",
                "Akali performs rap on street corners regularly to practice her lyrics.",
                "Her Chinese zodiac sign is an Ox.",
                "She speaks English, Korean, and Japanese.",
                "Akali was born into a martial arts dojo. She left to find her calling as an artist, but still knows how to use a kama."
            ]
        }
    ])

    useEffect(() => {
        if (indexMember) {
            setIndexInf(0);
        }
    }, [indexMember]);

    return (
        <section id={styles.memberSlide} className="position-relative">
            <div className={`${styles.ctr__img} position-absolute z-0 top-0 start-0 h-100 w-100 bg-center-cover-norepeat`}
                style={{ backgroundImage: `url(https://raw.githubusercontent.com/VietHung0712/AssetsLOL/refs/heads/main/KDA/Image/Background/KDA_Background_1.jpg)` }}>
                <div style={{ backgroundImage: `url(${memberDatas[indexMember].imgMember})` }} className="position-absolute top-0 start-0 h-100 w-100"></div>
            </div>
            <div className={`${styles.ctr__des} position-relative m-auto`}>
                <div>
                    <div>
                        <div className="d-flex justify-content-between">
                            {
                                members?.map((item, key) => (
                                    <button key={key} onClick={() => setIndexMember(key)} className={`${indexMember === key ? styles.active : ''} bg-transparent transition200ms`}>
                                        <div>
                                            <div>
                                                <div
                                                    style={{ backgroundImage: `url(${item.url})` }}>
                                                </div>
                                            </div>
                                        </div>
                                        <p className={`${styles.textBoldItalic} mt-4`}>{item.name}</p>
                                    </button>
                                ))
                            }
                        </div>
                    </div>
                    <header className={`${styles.ctrHeader} mb-5`}>
                        <p>Band Member</p>
                        <h1 className={styles.brandMember}>{memberDatas[indexMember].brandMember}</h1>
                    </header>
                    <div className={`${styles.props} d-grid gap-4 mb-5`}>
                        <header className={styles.ctrHeader}>
                            <p>Role</p>
                            <h1>{memberDatas[indexMember].role}</h1>
                        </header>
                        <header className={styles.ctrHeader}>
                            <p>Zodiac Sign</p>
                            <h1>{memberDatas[indexMember].zodiacSign}</h1>
                        </header>
                        <header className={styles.ctrHeader}>
                            <p>Nicknames</p>
                            <h1>{memberDatas[indexMember].nicknames}</h1>
                        </header>
                        <header className={styles.ctrHeader}>
                            <p>Height</p>
                            <h1>{memberDatas[indexMember].height}</h1>
                        </header>
                    </div>
                    <div>
                        <ul className={`${styles.ulBtn} d-flex list-unstyled`}>
                            <li>
                                <button onClick={() => setIndexInf(0)} className={`${styles.textBoldItalic} ${indexInf === 0 ? styles.active : ''} w-100 h-100`}>
                                    Beauty and Fashion
                                </button>
                            </li>
                            <li>
                                <button onClick={() => setIndexInf(1)} className={`${styles.textBoldItalic} ${indexInf === 1 ? styles.active : ''} w-100 h-100`}>
                                    8 Facts
                                </button>
                            </li>
                        </ul>
                        <div className={`${styles.ctrInfoMember} d-flex overflow-hidden`}>
                            <div className={indexInf === 0 ? styles.active : ''}>
                                <p className={styles.pgh} dangerouslySetInnerHTML={{ __html: memberDatas[indexMember].story }}></p>
                            </div>
                            <div className={indexInf === 1 ? styles.active : ''}>
                                <p className={styles.pgh}>
                                    {
                                        memberDatas[indexMember].facts?.map((item, key) => (
                                            <span key={key}>-{item}<br /></span>
                                        ))
                                    }
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

const More = () => {
    return (
        <section id={styles.more}>
            <div className={`${styles.paddingSection} bg-center-cover-norepeat`}
                style={{ backgroundImage: `url(https://raw.githubusercontent.com/VietHung0712/AssetsLOL/refs/heads/main/KDA/Image/Background/KDA_Background_2.jpg)` }} >
                <div className="container">
                    <div className="row">
                        <header className={`${styles.mHeader} ${styles.ctrHeader} col-12`}>
                            <h1>More from K/DA</h1>
                        </header>
                    </div>
                    <div className={`${styles.ctr__body} row gap-5 justify-content-lg-between`}>
                        <div className="col-11 col-md-5 m-auto m-lg-0 col-lg-3">
                            <header className={styles.ctrHeader}>
                                <p>Official Lyric Video</p>
                                <h1>THE BADDEST</h1>
                            </header>
                            <a className="position-relative d-block mt-3 text-decoration-none" target="_blank"
                                href="https://www.youtube.com/watch?v=RkID8_gnTxw">
                                <img className="w-100" loading="lazy" alt=""
                                    src="https://raw.githubusercontent.com/VietHung0712/AssetsLOL/refs/heads/main/KDA/Image/Poster/KDA_Poster_TheBaddest.jpg" />
                                <p className={styles.pgh}>
                                    K/DA - THE BADDEST ft. (G)I-DLE, Bea Miller, Wolftyla
                                </p>
                                <button className={`${styles.textBoldItalic} w-100 py-4`}>
                                    Watch the stars
                                </button>
                            </a>
                        </div>
                        <div className="col-11 col-md-5 m-auto m-lg-0 col-lg-3">
                            <header className={styles.ctrHeader}>
                                <p>Official Concept Video</p>
                                <h1>I’LL SHOW YOU</h1>
                            </header>
                            <a className="position-relative d-block mt-3 text-decoration-none" target="_blank"
                                href="https://www.youtube.com/watch?v=WW1BpABbzHs">
                                <img className="w-100" loading="lazy" alt=""
                                    src="https://raw.githubusercontent.com/VietHung0712/AssetsLOL/refs/heads/main/KDA/Image/Poster/KDA_Poster_IllShowYou.jpg" />
                                <p className={styles.pgh}>
                                    K/DA - I’LL SHOW YOU ft. TWICE, Bekuh BOOM, Annika Wells
                                </p>
                                <button className={`${styles.textBoldItalic} w-100 py-4`}>
                                    Watch the stars
                                </button>
                            </a>
                        </div>
                        <div className="col-11 col-md-5 m-auto m-lg-0 col-lg-3">
                            <header className={styles.ctrHeader}>
                                <p>Official Concept Video</p>
                                <h1>Villain</h1>
                            </header>
                            <a className="position-relative d-block mt-3 text-decoration-none" target="_blank"
                                href="https://www.youtube.com/watch?v=xoWxv2yZXLQ">
                                <img className="w-100" loading="lazy" alt=""
                                    src="https://raw.githubusercontent.com/VietHung0712/AssetsLOL/refs/heads/main/KDA/Image/Poster/KDA_Poster_Villain.jpg" />
                                <p className={styles.pgh}>
                                    K/DA - VILLAIN ft. Madison Beer and Kim Petras
                                </p>
                                <button className={`${styles.textBoldItalic} w-100 py-4`}>
                                    Watch the stars
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
}

const Gallery = () => {

    const listRef = useRef();

    const [isScrolling, setIsScrolling] = useState(false);
    const [numberTab, setNumberTab] = useState(0);
    const [indexTab, setIndexTab] = useState(0);
    const [openSrc, setOpenSrc] = useState(null);

    const [gallery] = useState([
        "https://raw.githubusercontent.com/VietHung0712/AssetsLOL/refs/heads/main/KDA/Image/Gallery/KDA_Gallery_Ahri_0.avif",
        "https://raw.githubusercontent.com/VietHung0712/AssetsLOL/refs/heads/main/KDA/Image/Gallery/KDA_Gallery_Akali_0.avif",
        "https://raw.githubusercontent.com/VietHung0712/AssetsLOL/refs/heads/main/KDA/Image/Gallery/KDA_Gallery_Evelynn_0.avif",
        "https://raw.githubusercontent.com/VietHung0712/AssetsLOL/refs/heads/main/KDA/Image/Gallery/KDA_Gallery_KaiSa_0.avif",
        "https://raw.githubusercontent.com/VietHung0712/AssetsLOL/refs/heads/main/KDA/Image/Gallery/KDA_Gallery_Ahri_1.avif",
        "https://raw.githubusercontent.com/VietHung0712/AssetsLOL/refs/heads/main/KDA/Image/Gallery/KDA_Gallery_Akali_1.avif",
        "https://raw.githubusercontent.com/VietHung0712/AssetsLOL/refs/heads/main/KDA/Image/Gallery/KDA_Gallery_Evelynn_1.avif",
        "https://raw.githubusercontent.com/VietHung0712/AssetsLOL/refs/heads/main/KDA/Image/Gallery/KDA_Gallery_KaiSa_1.avif",
        "https://raw.githubusercontent.com/VietHung0712/AssetsLOL/refs/heads/main/KDA/Image/Gallery/KDA_Gallery_Ahri_2.avif",
        "https://raw.githubusercontent.com/VietHung0712/AssetsLOL/refs/heads/main/KDA/Image/Gallery/KDA_Gallery_Akali_2.avif",
        "https://raw.githubusercontent.com/VietHung0712/AssetsLOL/refs/heads/main/KDA/Image/Gallery/KDA_Gallery_Evelynn_2.avif",
        "https://raw.githubusercontent.com/VietHung0712/AssetsLOL/refs/heads/main/KDA/Image/Gallery/KDA_Gallery_KaiSa_2.avif",
        "https://raw.githubusercontent.com/VietHung0712/AssetsLOL/refs/heads/main/KDA/Image/Gallery/KDA_Promo.jpg",
        "https://raw.githubusercontent.com/VietHung0712/AssetsLOL/refs/heads/main/KDA/Image/Gallery/KDA_AllOut_Promo_0.jpg",
        "https://raw.githubusercontent.com/VietHung0712/AssetsLOL/refs/heads/main/KDA/Image/Gallery/KDA_AllOut_Promo_1.jpg",
        "https://raw.githubusercontent.com/VietHung0712/AssetsLOL/refs/heads/main/KDA/Image/Gallery/KDA_AllOut_Promo_2.jpg",
        "https://raw.githubusercontent.com/VietHung0712/AssetsLOL/refs/heads/main/KDA/Image/Gallery/KDA_AllOut_Promo_3.avif",
        "https://raw.githubusercontent.com/VietHung0712/AssetsLOL/refs/heads/main/KDA/Image/Concept/KDA_AllOut_ConCept.jpg",
        "https://raw.githubusercontent.com/VietHung0712/AssetsLOL/refs/heads/main/KDA/Image/Concept/KDA_AllOut_Concept_Ahri.png",
        "https://raw.githubusercontent.com/VietHung0712/AssetsLOL/refs/heads/main/KDA/Image/Concept/KDA_AllOut_Concept_Akali.png",
        "https://raw.githubusercontent.com/VietHung0712/AssetsLOL/refs/heads/main/KDA/Image/Concept/KDA_AllOut_Concept_Evelynn.png",
        "https://raw.githubusercontent.com/VietHung0712/AssetsLOL/refs/heads/main/KDA/Image/Concept/KDA_AllOut_Concept_KaiSa.png",
        "https://raw.githubusercontent.com/VietHung0712/AssetsLOL/refs/heads/main/KDA/Image/Concept/KDA_AllOut_Concept_Seraphine.png"
    ]);

    useEffect(() => {
        const list = listRef?.current;
        if (!list) return;
        const listChild = list?.children;

        let num = Math.ceil(listChild[0].offsetWidth * listChild.length / list.offsetWidth);
        setNumberTab(num);
    }, [])

    const scrollList = (index) => {
        if (isScrolling) return;

        setIsScrolling(true);
        if (indexTab >= 0 && indexTab < numberTab && (indexTab + index) >= 0 && (indexTab + index) < numberTab) {
            setIndexTab(item => item + index);
        }
        const list = listRef.current;
        const value = index * list.offsetWidth;

        list.scrollBy({
            left: value,
            behavior: "smooth",
        });

        setTimeout(() => {
            setIsScrolling(false);
        }, 600);
    };

    const handleOpenSrc = (src) => {
        setOpenSrc(src);
        document.documentElement.style.overflow = 'hidden';
    }

    const handleClose = () => {
        setOpenSrc(null);
        document.documentElement.style.overflow = '';
    };

    return (
        <section id={styles.gallery} className={styles.paddingSection}>
            <div className="container m-auto">
                <div className="row">
                    <div className={`${styles.mHeader} ${styles.ctrHeader} fw-bold d-flex justify-content-between`}>
                        <h1>Gallery // Wallpapers</h1>
                        <div className={`d-flex gap-3`}>
                            <button onClick={() => scrollList(-1)} className={`${styles.myBtn} ${indexTab === 0 ? styles.unset : ''}`}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-left" viewBox="0 0 16 16">
                                    <path fillRule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0" />
                                </svg>
                            </button>
                            <button onClick={() => scrollList(1)} className={`${styles.myBtn} ${indexTab === numberTab - 1 ? styles.unset : ''}`}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-right" viewBox="0 0 16 16">
                                    <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
                <div className={`${styles.ctr__body} row`}>
                    <div ref={listRef}>
                        {
                            gallery?.map((item, key) => (
                                <div key={key} className="col-6 col-sm-4 col-md-3 col-lg-2">
                                    <button onClick={() => handleOpenSrc(item)}>
                                        <img className="h-100 w-100 object-fit-cover" src={item} alt="" />
                                    </button>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className="row">
                    <div className={`${styles.tabs} d-flex justify-content-end align-items-center`}>
                        {
                            [...Array(numberTab)]?.map((item, key) => (
                                <div className={indexTab === key ? styles.active : ''} datatype={item} key={key}></div>
                            ))
                        }
                    </div>
                </div>
                <div className="row">
                    {
                        openSrc !== null && (
                            <div onClick={() => handleClose()} className={`${styles.show} position-fixed top-0 start-0 h-100 w-100`}>
                                <img src={openSrc} alt="" />
                            </div>
                        )
                    }
                </div>
            </div>
        </section>
    )
}

const SplashArt = () => {

    const [btn] = useState(["K/DA", "Prestige K/DA", "K/DA - All Out"]);
    const [indexSA, setIndexSA] = useState(0);
    const [splashArt] = useState([
        [
            "https://raw.githubusercontent.com/VietHung0712/AssetsLOL/refs/heads/main/Splash_Art/A/Ahri/Ahri_13.jpg",
            "https://raw.githubusercontent.com/VietHung0712/AssetsLOL/refs/heads/main/Splash_Art/E/Evelynn/Evelynn_6.jpg",
            "https://raw.githubusercontent.com/VietHung0712/AssetsLOL/refs/heads/main/Splash_Art/K/KaiSa/KaiSa_4.jpg",
            "https://raw.githubusercontent.com/VietHung0712/AssetsLOL/refs/heads/main/Splash_Art/A/Akali/Akali_9.jpg"
        ], [
            "https://raw.githubusercontent.com/VietHung0712/AssetsLOL/refs/heads/main/Splash_Art/A/Ahri/Ahri_14.jpg",
            "https://raw.githubusercontent.com/VietHung0712/AssetsLOL/refs/heads/main/Splash_Art/E/Evelynn/Evelynn_7.jpg",
            "https://raw.githubusercontent.com/VietHung0712/AssetsLOL/refs/heads/main/Splash_Art/K/KaiSa/KaiSa_5.jpg",
            "https://raw.githubusercontent.com/VietHung0712/AssetsLOL/refs/heads/main/Splash_Art/A/Akali/Akali_10.jpg"
        ], [
            "https://raw.githubusercontent.com/VietHung0712/AssetsLOL/refs/heads/main/Splash_Art/A/Ahri/Ahri_18.jpg",
            "https://raw.githubusercontent.com/VietHung0712/AssetsLOL/refs/heads/main/Splash_Art/E/Evelynn/Evelynn_8.jpg",
            "https://raw.githubusercontent.com/VietHung0712/AssetsLOL/refs/heads/main/Splash_Art/K/KaiSa/KaiSa_7.jpg",
            "https://raw.githubusercontent.com/VietHung0712/AssetsLOL/refs/heads/main/Splash_Art/A/Akali/Akali_13.jpg"
        ]
    ])

    return (
        <section id={styles.splashArt}>
            <div className={`${styles.paddingSection} bg-center-cover-norepeat`}
                style={{ backgroundImage: `url(https://raw.githubusercontent.com/VietHung0712/AssetsLOL/refs/heads/main/KDA/Image/Background/KDA_Background_3.jpg)` }}>
                <div className="container">
                    <div className="row">
                        <header className={`${styles.mHeader} ${styles.ctrHeader}`}>
                            <p className="text-center mb-2">Splash Art</p>
                            <ul className={`${styles.ulBtn} flex-center list-unstyled`}>
                                {
                                    btn?.map((item, key) => (
                                        <li key={key} className="flex-grow-0">
                                            <button onClick={() => setIndexSA(key)} className={`${indexSA === key ? styles.active : ''} ${styles.textBoldItalic} p-2`}>
                                                {item}
                                            </button>
                                        </li>
                                    ))
                                }
                            </ul>
                        </header>
                    </div>
                    <div className={`${styles.ctr__body} row`}>
                        <img className={`${styles.box} ${styles.box0} p-0 object-fit-cover`} data-text="Ahri" loading="lazy" alt="" src={splashArt[indexSA][0]}></img>
                        <img className={`${styles.box} ${styles.box1} p-0 object-fit-cover`} data-text="Ahri" loading="lazy" alt="" src={splashArt[indexSA][1]}></img>
                        <img className={`${styles.box} ${styles.box2} p-0 object-fit-cover`} data-text="Ahri" loading="lazy" alt="" src={splashArt[indexSA][2]}></img>
                        <img className={`${styles.box} ${styles.box3} p-0 object-fit-cover`} data-text="Ahri" loading="lazy" alt="" src={splashArt[indexSA][3]}></img>
                    </div>
                </div>
            </div>
        </section>
    )
}

const NewHit = () => {
    return (
        <section id={styles.newHit} className={styles.paddingSection}>
            <div className="bg-center-cover-norepeat"
                style={{ backgroundImage: `url(https://raw.githubusercontent.com/VietHung0712/AssetsLOL/refs/heads/main/KDA/Image/Background/KDA_Background_4.jpg)` }}>
                <div className="container">
                    <div className={`${styles.rowCtr} row p-lg-5`}>
                        <div className="col-12 col-lg-6">
                            <header className={`${styles.ctrHeader} ${styles.mHeader}`}>
                                <p>K/DA New Music Video</p>
                                <h1>More</h1>
                            </header>
                            <p className={styles.pgh}>
                                K/DA - MORE ft. Madison Beer, (G)I-DLE, Lexie Liu, Jaira Burns, Seraphine
                            </p>
                            <a className={`${styles.textBoldItalic} text-decoration-none`} target="_blank"
                                href="https://www.youtube.com/watch?v=3VTkBuxU4yk&list=OLAK5uy_kJH0VQxu5rzqhpbijArF33iMM3oIatdTw&index=2">
                                Listen
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                    className="bi bi-play-fill" viewBox="0 0 16 16">
                                    <path
                                        d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393" />
                                </svg>
                            </a>
                        </div>
                        <img className="col-12 col-lg-6" alt="" loading="lazy"
                            src="https://raw.githubusercontent.com/VietHung0712/AssetsLOL/refs/heads/main/KDA/Image/Splash_Art/KDA.png" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default memo(AltKdaPage);