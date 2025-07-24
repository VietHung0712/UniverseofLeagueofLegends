import { memo } from "react";
import Champion from "../../components/champion";
import ContainerHeader from "../../components/containerHeader";
import styles from "./style.module.css";

const ChampionsList = ({ valueSearch, indexSort, champions, regions }) => {

    let filteredChampions = [...champions];

    if (valueSearch != "") {
        filteredChampions = filteredChampions.filter(champion =>
            champion.id.toLowerCase().startsWith(valueSearch.toLowerCase())
        );
    }

    if (champions.length > 0 && filteredChampions.length === 0) {
        return (
            <section id={styles.container}>
                <div className={`${styles.row__list} row`}>
                    <div className="col-12 text-center text-color-1 text-uppercase letter-spacing-3 p-5">No Champions Found</div>
                </div>
            </section>
        )
    }

    let grouped = [];

    if (indexSort === 0) {
        filteredChampions.sort((a, b) => a.id.localeCompare(b.id));
    } else if (indexSort === 1) {
        filteredChampions.sort((a, b) => {
            if (!a.release_date) return 1;
            if (!b.release_date) return -1;
            return b.release_date.localeCompare(a.release_date);
        });
    } else if (indexSort === 2) {
        grouped = regions?.map(region => ({
            region: region.name,
            champions: filteredChampions.filter(ch => ch.region === region.id)
        }));
    }

    return (
        <div id={styles.container}>
            <div>
                {
                    indexSort === 2 ?
                        (
                            grouped?.map((item, key) => item.champions.length > 0 && (
                                <div key={key}>
                                    <ContainerHeader customFontSize={24} content={item.region} />
                                    <ContainerMain array={item.champions} regions={regions} />
                                </div>
                            ))
                        ) :
                        (
                            <ContainerMain array={filteredChampions} regions={regions} />
                        )
                }
            </div>
        </div>
    )
}

const ContainerMain = ({ array, regions }) => {
    const rows = [];

    for (let i = 0; i < array.length; i += 5) {
        const rowItems = array.slice(i, i + 5);
        rows.push(
            <div className={`${styles.row__list} row`} key={i}>
                {rowItems.map((item) => (
                    <Champion champion={item} key={item.id} regions={regions} />
                ))}
            </div>
        );
    }

    return (
        <div className={`${styles.champions__list} container-fluid`}>
            {
                rows
            }
        </div>
    )
}

export default memo(ChampionsList);