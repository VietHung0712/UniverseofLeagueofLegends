import { memo, useRef, useEffect, useMemo, useState } from "react";
import { useRegionGallerys } from "../../../api/useModel";
import ContainerHeader from "../../../components/containerHeader";
import Loading from "../../../components/loading";
import { scrollHorizontal } from "../../../utils/functions";
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
    const [activeIndex, setActiveIndex] = useState(null);

    useEffect(() => {
        if (ref.current) scrollHorizontal(ref.current, 3);
    }, []);

    const handleOnCickGallery = (dir) => {
        setActiveIndex(dir);
        document.documentElement.style.overflow = 'hidden';
    }

    const handleClose = () => {
        setActiveIndex(null);
        document.documentElement.style.overflow = '';
    };

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
                activeIndex !== null && (
                    <div className={`${styles.galleryView} flex-center position-fixed top-0 start-0 h-100 w-100`}>
                        <div>
                            {
                                gallerys?.map((item, key) => (
                                    <div className={`${styles.gallery__item} ${activeIndex === key ? styles.active : ''}`} key={key}>
                                        <img className="h-100 w-100 object-fit-contain" src={item.gallery} loading="lazy" alt="" />
                                    </div>
                                ))
                            }
                        </div>
                        <button onClick={handleClose} className="text-color-3">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-fullscreen-exit" viewBox="0 0 16 16">
                                <path d="M5.5 0a.5.5 0 0 1 .5.5v4A1.5 1.5 0 0 1 4.5 6h-4a.5.5 0 0 1 0-1h4a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 1 .5-.5m5 0a.5.5 0 0 1 .5.5v4a.5.5 0 0 0 .5.5h4a.5.5 0 0 1 0 1h-4A1.5 1.5 0 0 1 10 4.5v-4a.5.5 0 0 1 .5-.5M0 10.5a.5.5 0 0 1 .5-.5h4A1.5 1.5 0 0 1 6 11.5v4a.5.5 0 0 1-1 0v-4a.5.5 0 0 0-.5-.5h-4a.5.5 0 0 1-.5-.5m10 1a1.5 1.5 0 0 1 1.5-1.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 0-.5.5v4a.5.5 0 0 1-1 0z" />
                            </svg>
                        </button>
                    </div>
                )
            }
        </div>
    )
}

export default memo(Gallery);