import { memo } from "react";
import { generatePath } from "react-router-dom";
import ExploreUniverse from "../../../components/exploreUniverse";
import ROUTERS from "../../../utils/router";

const Explore = ({ regions }) => {

    let src1 = generatePath(ROUTERS.REGION, { id: regions[0].id });
    let src2 = generatePath(ROUTERS.REGION, { id: regions[1].id });

    const result = [
        [
            regions[0].name,
            regions[0].background,
            src1
        ],
        [
            regions[1].name,
            regions[1].background,
            src2
        ]
    ]

    return (
        <ExploreUniverse objects={result} content="regions" />
    )
}

export default memo(Explore);