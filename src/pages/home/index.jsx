import { memo } from "react";
import Slide from "./slide";
import Review from "./review";
import './style.css';

const HomePage = () => {
    return (
        <main>
            <Slide />
            <Review />
        </main>
    );
};
    // const demaciaChampions = champions.filter(champ => champ.region.trim() === "Demacia");


export default memo(HomePage);