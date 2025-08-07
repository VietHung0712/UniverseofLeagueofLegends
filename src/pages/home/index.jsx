import { memo, useEffect } from "react";
import { useChampions, useRegions } from "../../api/useModel";
import Loading from "../../components/loading";
import Slide from "./slide";
import Review from "./review";
import Alt from "./alt";
import styles from './style.module.css';

const HomePage = () => {

    const { data: champions, loading: loadingChampions, error: errorChampions } = useChampions();
    const { data: regions, loading: loadingRegions, error: errorRegions } = useRegions();


    useEffect(() => {
        document.title = "Universe of League of Legends";
    });

    if (loadingChampions || loadingRegions) return <Loading />;
    if (errorChampions || errorRegions) {
        console.error(errorChampions || errorRegions);
    }

    return (
        <main id={styles.main}>
            <Slide champions={champions} />
            <Review regions={regions} />
            <Alt />
        </main>
    );
};

export default memo(HomePage);