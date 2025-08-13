import { memo, useEffect } from "react";
import { useRegions } from "../../api/useModel";
import { Link, generatePath } from "react-router-dom";
import ROUTERS from "../../utils/router";
import Loading from "../../components/loading";
import TitlePage from "../../components/TitlePage";
import styles from "./style.module.css";

const RegionsPage = () => {

    useEffect(() => {
        document.title = "Regions - Universe of League of Legends";
    });

    const { data: regions, loading, error } = useRegions();

    if (loading) return (<Loading />);
    if (error) return (console.log(error));

    return (
        <main id={styles.main}>
            <TitlePage title={"Regions"} />
            <Container regions={regions} />
        </main>
    );
};

const Container = ({ regions }) => {
    return (
        <section id={styles.container} className="container">
            <div className={`${styles.rowCtr} row`}>
                {
                    regions?.filter(item => item.id !== "Runeterra").map((item, key) => (
                        <div key={key} className="col-12 col-md-6 col-lg-4 col-xl-3 mt-4">
                            <Link to={generatePath(ROUTERS.REGION, { id: item.id })}
                                className="d-block position-relative transition300ms h-100 w-100">
                                <img className="position-absolute h-100 w-100 object-fit-cover top-0"
                                    src={item.background} loading="lazy" alt="" />
                                <div className="position-absolute h-75 w-100 object-fit-cover top-0 transition300ms"></div>
                                <img className="position-absolute h-50 w-100 object-fit-contain transition300ms"
                                    src={item.icon} loading="lazy" alt="" />
                                <div className="position-absolute w-100 bottom-0 p-3">
                                    <h3 className="text-center m-0 text-uppercase fw-bold letter-spacing-2">
                                        <span>
                                            {item.name}
                                        </span>
                                    </h3>
                                </div>
                            </Link>
                        </div>
                    ))
                }
            </div>
        </section >
    )
}

export default memo(RegionsPage);