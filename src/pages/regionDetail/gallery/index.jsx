import { memo, useRef, useEffect } from "react";
import { useRegionGallerys } from "../../../api/useModel";
import ContainerHeader from "../../../components/containerHeader";
import Loading from "../../../components/loading";
import { scrollHorizontal } from "../../../utils/functions";
import styles from "./style.module.css";

const Gallery = ({ regionId }) => {

    const { data: gallerys, loading, error } = useRegionGallerys();

    if (loading) return (<Loading />);
    if (error) return <div>Error: {error.message || "Something went wrong."}</div>;

    const regionGallerys = gallerys?.filter(item => item.region === regionId);


    return (
        <section>
            <ContainerHeader content={'Gallery'} src="https://raw.githubusercontent.com/VietHung0712/AssetsLOL/refs/heads/main/Others/gallery.png" />
            <Content gallerys={regionGallerys} />
        </section>
    )
}

const Content = ({ gallerys }) => {

    const ref = useRef();

    useEffect(() => {
        if (ref.current) scrollHorizontal(ref.current);
    }, []);

    return (
        <div className="container">
            <div ref={ref} className={`${styles.gallery} d-flex align-items-center overflow-x-scroll scrollbar`}>
                {
                    gallerys?.map((item, key) => (
                        <div className={`${styles.gallery__item} h-100`} key={key}>
                            <img className="h-100 w-100" src={item.gallery} alt="" />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default memo(Gallery);