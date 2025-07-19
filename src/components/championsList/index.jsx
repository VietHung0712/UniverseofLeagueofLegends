import { memo } from "react";
import Champion from "../../components/champion";
import ContainerHeader from "../../components/containerHeader";
import styles from "./style.module.css";

const ChampionsList = ({ index, champions, regions }) => {

    const grouped = regions?.map(region => ({
        region: region.name,
        champions: champions.filter(ch => ch.region === region.id)
    }));

    if (index === 0) {
        champions.sort((a, b) => a.id.localeCompare(b.id));
    } else if (index === 1) {
        champions.sort((a, b) => b.release_date.localeCompare(a.release_date));
    }

    return (
        <section id="container">
            <div>
                {
                    index === 2 ?
                        (
                            grouped?.map((item, key) => (
                                <div key={key}>
                                    <ContainerHeader content={item.region} />
                                    <ContainerMain array={item.champions} regions={regions} />
                                </div>
                            ))

                        ) :
                        (
                            <ContainerMain array={champions} regions={regions} />
                        )
                }
            </div>
        </section>
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
        <div>
            <div className={`${styles.champions__list} container-fluid`}>
                {
                    rows
                }
            </div>
        </div>
    )
}

export default memo(ChampionsList);