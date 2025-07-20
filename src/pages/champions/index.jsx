import { memo, useState } from "react";
import { useChampions, useRegions } from "../../api/useModel";
import Loading from "../../components/loading";
import ChampionsList from "../../components/championsList";
import ChampionsHeader from "./championsHeader";
import ChampionsFilter from "./championsFilter";
import styles from './style.module.css';

const ChampionsPage = () => {

    const { data: champions, loading1, error1 } = useChampions();
    const { data: regions, loading2, error2 } = useRegions();

    const [selectedIndex, setSelectedIndex] = useState(0);
    const [inputValue, setInputValue] = useState(0);

    if (loading1) return (<Loading />);
    if (error1) return <div>Error: {error1.message || "Something went wrong."}</div>;

    if (loading2) return (<Loading />);
    if (error2) return <div>Error: {error2.message || "Something went wrong."}</div>;

    return (
        <main id={styles.main}>
            <ChampionsFilter onChangeSort={setSelectedIndex} onChangeSearch={setInputValue} />
            <ChampionsHeader />
            <ChampionsList valueSearch={inputValue} indexSort={selectedIndex} champions={champions} regions={regions} />
        </main>
    );
};




export default memo(ChampionsPage);