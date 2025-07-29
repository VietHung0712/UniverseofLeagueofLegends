import { memo, useMemo, useState, useRef, useEffect } from "react";
import { useSkins } from "../../../api/useModel";
import { scrollHorizontal } from "../../../utils/functions";
import Loading from "../../../components/loading";
import ContainerHeader from "../../../components/containerHeader";
import styles from "./style.module.css";

const Review = ({ champion }) => {
    const { data: skins, loading, error } = useSkins();

    const arrSkins = useMemo(() => {
        if (!skins || !champion) return [];
        return [...skins]?.filter(item => item.champion === champion?.id);
    }, [skins, champion]);

    if (loading || !champion) return (<Loading />);
    if (error) return <div>Error: {error.message || "Something went wrong."}</div>;

    return (
        <section id={styles.skins}>
            <ContainerHeader content={"Available Skins"} src="https://raw.githubusercontent.com/VietHung0712/AssetsLOL/refs/heads/main/Others/gallery.png" />
            <Content arrSkins={arrSkins} champion={champion} />
        </section>
    )
}

const Content = ({ arrSkins, champion }) => {

    const ref = useRef();
    const imgRef = useRef();
    const itemRefs = useRef([]);
    const [activeIndex, setActiveIndex] = useState(0);
    const [imgSrc, setImgSrc] = useState(champion.splash_art);

    useEffect(() => {
        if (ref.current) scrollHorizontal(ref.current, 1.5);
    }, []);

    const handleClick = (index) => {
        setActiveIndex(index);
        itemRefs.current.children[index]?.scrollIntoView({
            behavior: 'smooth',
            block: 'nearest',
            inline: 'start'
        });
        if (index == 0) {
            setImgSrc(champion.splash_art);
        } else {
            setImgSrc(arrSkins[index - 1].splash_art);
        }
    };

    return (
        <div className="container-fluid">
            <div className={`${styles.display} row`}>
                <div className="col-11 m-auto position-relative">
                    <img ref={imgRef} src={imgSrc} className="position-absolute w-100 h-100 top-0 start-0 object-fit-contain" alt="" />
                </div>
            </div>
            <div className={`${styles.list} row`}>
                <div ref={ref} className="col-11 col-md-10  m-auto overflow-x-scroll scrollbar">
                    <div ref={itemRefs} className="flex-center">
                        <div>
                            <div onClick={() => handleClick(0)}>
                                <img className={`${activeIndex == 0 ? styles.active : ''}`} src={champion.splash_art} loading="lazy" alt="" />
                                <p>{champion.name}</p>
                            </div>
                        </div>
                        {
                            arrSkins?.map((item, key) => (
                                <div key={key} onClick={() => handleClick(key + 1)}>
                                    <div>
                                        <img className={`${activeIndex == (key + 1) ? styles.active : ''}`} src={item.splash_art} loading="lazy" alt="" />
                                        <p>{item.name}</p>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default memo(Review);