import { memo, useRef, useEffect, useMemo, useState } from "react";
import { useRegionGallerys } from "../../../api/useModel";
import { scrollHorizontal } from "../../../utils/functions";
import ContainerHeader from "../../../components/containerHeader";
import Loading from "../../../components/loading";
import ShowContents from "../../../components/showContents";
import styles from "./style.module.css";

const Gallery = ({ regionId }) => {

    const { data: gallerys, loading, error } = useRegionGallerys();

    const regionGallerys = useMemo(() => {
        if (!gallerys) return [];
        return [...gallerys]?.filter(item => item.region === regionId)
    }, [gallerys, regionId]);

    if (loading) return (<Loading />);
    if (error) return <div>Error: {error.message || "Something went wrong."}</div>;

    return (
        <section>
            <ContainerHeader content={'Gallery'} src="https://raw.githubusercontent.com/VietHung0712/AssetsLOL/refs/heads/main/Others/gallery.png" />
            <Content gallerys={regionGallerys} />
        </section>
    )
}

const Content = ({ gallerys }) => {

    const ref = useRef();
    const [show, setShow] = useState(false);
    const [src, setSrc] = useState(null);

    useEffect(() => {
        if (ref.current) scrollHorizontal(ref.current, 3);
    }, []);

    const handleOnCickGallery = (dir) => {
        setSrc(gallerys[dir].gallery);
        setShow(true);
        document.documentElement.style.overflow = 'hidden';
    }
    return (
        <div className="container">
            <div ref={ref} className={`${styles.gallery} d-flex align-items-center overflow-x-scroll scrollbar`}>
                {
                    gallerys?.map((item, key) => (
                        <div className={`${styles.gallery__item} h-100`} key={key}>
                            <img className="h-100 w-100" src={item.gallery} loading="lazy" alt="" />
                            <button onClick={() => handleOnCickGallery(key)} className=" end-0 bottom-0 text-color-3">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrows-fullscreen" viewBox="0 0 16 16">
                                    <path fillRule="evenodd" d="M5.828 10.172a.5.5 0 0 0-.707 0l-4.096 4.096V11.5a.5.5 0 0 0-1 0v3.975a.5.5 0 0 0 .5.5H4.5a.5.5 0 0 0 0-1H1.732l4.096-4.096a.5.5 0 0 0 0-.707m4.344 0a.5.5 0 0 1 .707 0l4.096 4.096V11.5a.5.5 0 1 1 1 0v3.975a.5.5 0 0 1-.5.5H11.5a.5.5 0 0 1 0-1h2.768l-4.096-4.096a.5.5 0 0 1 0-.707m0-4.344a.5.5 0 0 0 .707 0l4.096-4.096V4.5a.5.5 0 1 0 1 0V.525a.5.5 0 0 0-.5-.5H11.5a.5.5 0 0 0 0 1h2.768l-4.096 4.096a.5.5 0 0 0 0 .707m-4.344 0a.5.5 0 0 1-.707 0L1.025 1.732V4.5a.5.5 0 0 1-1 0V.525a.5.5 0 0 1 .5-.5H4.5a.5.5 0 0 1 0 1H1.732l4.096 4.096a.5.5 0 0 1 0 .707" />
                                </svg>
                            </button>
                        </div>
                    ))
                }
            </div>
            {
                (show) && (
                    <ShowContents src={src} setSrc={setSrc} setEnable={setShow} category={0} />
                )
            }
        </div>
    )
}

export default memo(Gallery);