import { memo } from "react";
import { generatePath } from "react-router-dom";
import ExploreUniverse from "../../../components/exploreUniverse";
import ROUTERS from "../../../utils/router";

const Explore = ({ regions }) => {

    let src1 = generatePath(ROUTERS.REGION, { id: regions[0].id });
    let src2 = generatePath(ROUTERS.REGION, { id: regions[1].id });

    return (
        <ExploreUniverse region1={regions[0]} region2={regions[1]} src1={src1} src2={src2} />
    )
}

export default memo(Explore);