import { memo } from "react";
import { useParams, Navigate } from "react-router-dom";
import ROUTERS from "../../utils/router";
import Process from "./process";

const RegionDetail = () => {
    const { id } = useParams();

    if(id === 'Runeterra') {
        return <Navigate to={ROUTERS.REGIONS} replace />;
    }

    return (
        <Process key={id} id={id} />
    );
};

export default memo(RegionDetail);
