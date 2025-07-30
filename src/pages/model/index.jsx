import { memo, useEffect, useState, useMemo, useRef } from "react";
import { useParams } from "react-router-dom";
import { useChampions, useModels, useSkins } from "../../api/useModel";
import Loading from "../../components/loading";
import styles from "./style.module.css";
import '@google/model-viewer';

const ModelPage = () => {
    const { id } = useParams();
    const [champion, setChampion] = useState(null);

    const { data: champions, loading1, error1 } = useChampions();
    const { data: skins, loading2, error2 } = useSkins();
    const { data: models, loading3, error3 } = useModels();

    useEffect(() => {
        if (!loading1 && champions?.length > 0 && id) {
            const found = champions?.find(item => item.id === id);
            setChampion(found);
        }
    }, [id, champions, loading1]);

    const arrModels = useMemo(() => {
        return [...models]?.filter(item => item.champion === champion?.id);
    }, [models, champion]);

    const arrSkins = useMemo(() => {
        return [...skins]?.filter(item => item.champion === champion?.id);
    }, [skins, champion]);

    const arrModelSkins = useMemo(() => {
        return arrModels?.map(rel => arrSkins?.find(item => item.id === rel.skin)).filter(Boolean);
    }, [arrSkins, arrModels]);

    if (loading1 || loading2 || loading3 || !champion) return (<Loading />);
    if (error1 || error2 || error3) return <div>Error: {error1.message || error2.message || error3.message || "Something went wrong."}</div>;

    return (
        <main>
            <Head champion={champion} />
            <Content champion={champion} skins={arrModelSkins} models={arrModels} />
        </main>
    );
};

const Head = ({ champion }) => {
    return (
        <section id={styles.head}>
            <div>
                <div>
                    <div>
                        <img src={champion.splash_art} style={{ objectPosition: `${champion.position_x}% ${champion.position_y}%`, transformOrigin: `${champion.position_x}% ${champion.position_y}%` }} alt="" />
                    </div>
                </div>
                <div>
                    <h1>
                        {champion.name}
                    </h1>
                    <p>
                        {champion.title}
                    </p>
                </div>
            </div>
        </section>
    )
}

const Content = ({ champion, skins, models }) => {

    const modelViewerRef = useRef();
    const ctrModelRef = useRef();
    const [animations, setAnimations] = useState([]);
    const [thisModel, setThisModel] = useState(models?.find(item => item.skin === null));
    const [indexAnim, setIndexAnim] = useState(0);
    const [timeScale, setTimeScale] = useState(1);
    const [art, setArt] = useState(champion.splash_art);


    useEffect(() => {
        const modelViewer = modelViewerRef.current;

        const handleLoadEvent = () => {
            requestAnimationFrame(() => {
                const availableAnimations = (modelViewer?.availableAnimations || []).sort((a, b) =>
                    a.localeCompare(b)
                );

                setAnimations(availableAnimations);

                const poster = thisModel?.poster?.toLowerCase();
                let match = null;
                if (poster) {
                    match =
                        availableAnimations.find(a => a.toLowerCase() === poster) ||
                        availableAnimations.find(a => a.toLowerCase().startsWith(poster)) ||
                        availableAnimations.find(a => a.toLowerCase().includes(poster));
                }

                if (match) {
                    setIndexAnim(availableAnimations.indexOf(match));
                    modelViewer.animationName = match;
                    modelViewer.play();
                }
            });
        };

        modelViewer?.addEventListener("load", handleLoadEvent);
        return () => {
            modelViewer?.removeEventListener("load", handleLoadEvent);
        };
    }, [thisModel, models]);

    const handleChangeAnimation = (index) => {
        const modelViewer = modelViewerRef.current;
        if (modelViewer) {
            setIndexAnim(index);
            modelViewer.animationName = animations[index];
            modelViewer.play();
        }
    };

    const handleChangeModel = (id) => {
        const modelViewer = modelViewerRef.current;
        if (!modelViewer) return;
        let m = null;
        if (id === 0) {
            m = models.find(item => item.skin === null);
            setArt(champion.splash_art);
        } else {
            m = models.find(item => item.skin === id);
            setArt(skins?.find(item => item.id === id).splash_art);
        }
        if (m) setThisModel(m);
    };

    const handleFullscreen = () => {
        const elem = ctrModelRef.current;
        if (!elem) return;

        if (elem.requestFullscreen) {
            elem.requestFullscreen();
        } else if (elem.webkitRequestFullscreen) {
            elem.webkitRequestFullscreen();
        } else if (elem.msRequestFullscreen) {
            elem.msRequestFullscreen();
        }
    };

    return (
        <section id={styles.content}>
            <div className="container">
                <div className="row">
                    <div className={`${styles.list} col-12 col-lg-2 scrollbar`}>
                        <div>
                            <h6>Models</h6>
                            <select name="" onChange={(e) => handleChangeModel(Number(e.target.value))}>
                                <option value={0}>
                                    {champion.name}
                                </option>
                                {
                                    skins?.map((item, key) => (
                                        <option key={key} value={item.id}>
                                            {item.name}
                                        </option>
                                    ))
                                }
                            </select>
                        </div>
                        <div>
                            <img src={art} alt="" />
                        </div>
                        <div>
                            <h6>Animations</h6>
                            {
                                animations?.length > 0 && (
                                    <>
                                        <select name="" value={animations[indexAnim]} onChange={(e) => handleChangeAnimation(e.target.selectedIndex)}>
                                            {
                                                animations?.map((item, key) => (
                                                    <option key={key} value={item}>
                                                        {item}
                                                    </option>
                                                ))
                                            }
                                        </select>
                                        <div>
                                            <span>0</span>
                                            <h6>Speed({timeScale})</h6>
                                            <span>3</span>
                                        </div>
                                        <input type="range" min="0" max="3" step="0.1"
                                            value={timeScale}
                                            onChange={(e) => {
                                                const value = parseFloat(e.target.value);
                                                setTimeScale(value);
                                                modelViewerRef.current.timeScale = value;
                                            }}
                                        />
                                    </>
                                )
                            }
                        </div>
                        <div>
                            <button type="button" onClick={() => handleFullscreen()}>Full Screen</button>
                        </div>
                    </div>
                    <div className={`${styles.model} col-12 col-lg-10`}>
                        <div ref={ctrModelRef}>
                            <model-viewer
                                ref={modelViewerRef}
                                className={styles.viewer}
                                src={thisModel?.model ?? ""}
                                alt="Model 3D"
                                camera-controls
                                ar
                                autoplay
                                shadow-intensity="1">
                            </model-viewer>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
}

export default memo(ModelPage);