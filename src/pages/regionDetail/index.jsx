import { memo } from "react";
import { useParams } from "react-router-dom";
import Process from "./process";

const RegionDetail = () => {
    const { id } = useParams();

    return (
        <main>
            <Process key={id} id={id} />
        </main>
    );
};

export default memo(RegionDetail);
