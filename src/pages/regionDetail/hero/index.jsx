import { memo } from "react";
import HeroUniverse from "../../../components/heroUniverse";
import styles from "./style.module.css";

const Hero = ( {hero}) => {
    return (
        <HeroUniverse item={hero} customStyle={styles.hero__splashArt} />
    )
}

export default memo(Hero);