import { memo } from "react";
import { useParams } from "react-router-dom";
import Process from "./Process";

const ChampionDetail = () => {
    const { id } = useParams();

    return (
        <Process key={id} id={id} />
    );
};

export default memo(ChampionDetail);