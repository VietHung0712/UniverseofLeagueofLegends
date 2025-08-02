import { memo, useMemo } from "react";
import { useRegions, useChampions, useRelations, useRoles } from "../../../api/useModel";
import { Link, generatePath } from "react-router-dom";
import ROUTERS from "../../../utils/router";
import Loading from "../../../components/loading";
import styles from "./style.module.css";

const Container = ({ champion }) => {

    const { data: champions, loading1, error1 } = useChampions();
    const { data: regions, loading2, error2 } = useRegions();
    const { data: relations, loading3, error3 } = useRelations();
    const { data: roles, loading4, error4 } = useRoles();

    const region = useMemo(() => {
        return regions?.find(item => item.id === champion.region);
    }, [regions, champion]);

    const role = useMemo(() => {
        return roles?.find(item => item.id === champion.role);
    }, [roles, champion]);

    const thisRelations = useMemo(() => {
        return [...relations]?.filter(item => item.champion === champion.id);
    }, [relations, champion]);

    const championRelations = useMemo(() => {
        return thisRelations?.map(rel => champions?.find(item => item.id === rel.related)).filter(Boolean);
    }, [thisRelations, champions]);

    if (loading1 || loading2 || loading3 || loading4) return (<Loading />);
    if (error1 || error2 || error3 || error4) return <div>Error: {error1.message || error2.message || error3.message || error4.message || "Something went wrong."}</div>;

    return (
        <Content champion={champion} championRelations={championRelations} region={region} role={role} />
    )
}

const Content = ({ champion, championRelations, region, role }) => {
    return (
        <section id={styles.container} className="flex-center flex-column">
            <div className={`${styles.borderBg} position-absolute top-0 start-0 end-0 h-100`}></div>
            <div className={`${styles.ctr} container h-75`}>
                <div className={`${styles.rowItem} row h-100`}>
                    <div className={`${styles.col__item} ${styles.col__1} col-12 col-lg-3 p-1`}>
                        <div className={`${styles.col__head} ${styles.col__bg} flex-center`}>
                            <h5 className="text-uppercase font-size-12 m-0 letter-spacing-2">
                                Related Champions
                            </h5>
                        </div>
                        <div className={`${styles.col__body} ${styles.col__bg}`}>
                            <div className="h-100 w-100 overflow-auto scrollbar">
                                <ul className="mt-4 list-unstyled flex-center flex-column gap-4">
                                    {
                                        championRelations?.map((item, key) => (
                                            <li className="w-100" key={key}>
                                                <Link className="h-100 w-100 flex-center flex-column justify-content-between text-decoration-none"
                                                    to={generatePath(ROUTERS.CHAMPION, { id: item.id })}>
                                                    <div className={`${styles.border__img} flex-center rounded-circle transition300ms`}>
                                                        <div className="rounded-circle position-relative overflow-hidden">
                                                            <div className="h-100 w-100" style={{ backgroundImage: `url(${item.splash_art})`, backgroundPosition: `${item.position_x}% ${item.position_y}%`, transformOrigin: `${item.position_x}% ${item.position_y}%` }}></div>
                                                        </div>
                                                    </div>
                                                    <h5 className="text-uppercase font-size-12 m-0 letter-spacing-2 transition300ms">
                                                        {item.name}
                                                    </h5>
                                                </Link>
                                            </li>
                                        ))
                                    }
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className={`${styles.col__item} ${styles.col__2} col-12 col-lg-6 p-1 flex-center flex-column gap-2`}>
                        <div className={`${styles.col__head} ${styles.col__bg} w-100 position-relative`}>
                            <div className={`${styles.img} ${styles.col__bg} position-absolute rounded-circle`}>
                                <div className={`${styles.border__img} flex-center rounded-circle`}>
                                    <div className="rounded-circle overflow-hidden position-relative">
                                        <div className="h-100 w-100" style={{ backgroundImage: `url(${champion.splash_art})`, backgroundPosition: `${champion.position_x}% ${champion.position_y}%`, transformOrigin: `${champion.position_x}% ${champion.position_y}%` }}></div>
                                    </div>
                                </div>
                                <img className="position-absolute top-0 start-0 h-100 w-100" loading="lazy"
                                    src="https://raw.githubusercontent.com/VietHung0712/AssetsLOL/refs/heads/main/Others/ChampionIconFrame.jpg" alt="" />
                            </div>
                            <div className={`${styles.content} h-100 col-11 m-auto mt-3 mt-lg-0 flex-center flex-column justify-content-center p-lg-0 p-5`}>
                                <p className="fs-5 fw-bold letter-spacing-1 text-center">
                                    {champion.voice}
                                </p>
                                <h5 className="fs-5 fw-bold letter-spacing-1 m-0">
                                    <span>
                                        ~{champion.name}
                                    </span>
                                </h5>
                            </div>
                        </div>
                        <div className={`${styles.col__body} ${styles.col__bg} position-relative w-100 flex-center`}>
                            <img className={`img__filter position-absolute top-0 start-0 h-100 w-100 object-fit-cover z-0`}
                                src={champion.splash_art} loading="lazy" alt="" />
                            <div className="position-relative col-11">
                                <p className="paragraph font-size-14">
                                    {champion.story}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className={`${styles.col__item} ${styles.col__3} col-12 col-lg-3 p-1 flex-center flex-column gap-2`}>
                        <div className={`${styles.col__head} ${styles.col__bg} w-100 flex-center justify-content-start`}>
                            <div className="h-100 p-3">
                                <img className="h-100 w-100" src={role?.icon} loading="lazy" alt="" />
                            </div>
                            <div className="h-100" style={{ width: 1 + `px`, backgroundColor: `var(--color4-)` }}></div>
                            <div className="m-auto">
                                <h5 className="font-size-12 text-uppercase text-center letter-spacing-1">
                                    Role
                                </h5>
                                <h6 className="font-size-12 text-uppercase text-center letter-spacing-1">
                                    <span>
                                        {role?.name}
                                    </span>
                                </h6>
                            </div>
                        </div>
                        <div className={`${styles.col__body} ${styles.col__bg} w-100 position-relative overflow-hidden transition300ms`}>
                            <img className="img__filter position-absolute h-100 w-100 object-fit-cover"
                                src={region?.background} alt="" />
                            <div className="h-100 w-100 flex-center">
                                <img className="transition300ms" width="200"
                                    src={region?.avatar} loading="lazy" alt="" />
                            </div>
                            <Link className="position-absolute w-100 text-decoration-none transition300ms"
                                to={generatePath(ROUTERS.REGION, { id: region?.id || "" })}>
                                <div className={`${styles.col__head} ${styles.col__bg} border-end-0 border-start-0 w-100 flex-center justify-content-start`}>
                                    <div className="m-auto">
                                        <h5 className="font-size-12 text-uppercase text-center letter-spacing-1">
                                            Region
                                        </h5>
                                        <h6 className="font-size-12 text-uppercase text-center letter-spacing-1">
                                            <span>
                                                {region?.name}
                                            </span>
                                        </h6>
                                    </div>
                                    <div className="h-100" style={{ width: 1 + `px`, backgroundColor: `var(--color4-)` }}></div>
                                    <div className="h-100 p-3">
                                        <img className="h-100 w-100"
                                            src={region?.icon} loading="lazy" alt="" />
                                    </div>
                                </div>
                                <div className={`${styles.col__bg} flex-center border-0 gap-2 p-3 font-size-12 animationView`}>
                                    <h5 className="m-0 letter-spacing-2 font-size-12 text-uppercase">
                                        View Region
                                    </h5>
                                    <span>
                                        <svg version="1.0" x="0px" y="0px" viewBox="0 0 162 70.28" fill="#937341" style={{ width: 12.5 + `px` }}>
                                            <circle fill="#937341" cx="31.57" cy="35.21" r="11.57"></circle>
                                            <g>
                                                <polygon fill="#937341" points="124.18,70.39 118.31,64.09 149.37,35.22 118.31,6.35 124.18,0.05 162,35.22"></polygon>
                                                <rect x="84.61" y="29.76" fill="#937341" width="65" height="11.06"></rect>
                                            </g>
                                        </svg>
                                    </span>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default memo(Container);