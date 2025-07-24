import { memo } from "react";
import ContainerHeader from "../../../components/containerHeader";
import styles from "./style.module.css";

const ChampionsHeader = () => {
    return (
        <section id={styles.header}>
            <ContainerHeader content={'Champions'} customFontSize={24} src="https://raw.githubusercontent.com/VietHung0712/AssetsLOL/refs/heads/main/Others/content_type_icon_champion__3nwJQ.png" />
        </section>
    )
}

export default memo(ChampionsHeader);