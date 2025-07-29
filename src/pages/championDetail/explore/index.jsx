import { memo } from "react";
import { generatePath } from "react-router-dom";
import ExploreUniverse from "../../../components/exploreUniverse";
import ROUTERS from "../../../utils/router";

const Explore = ({ champions }) => {

    let src1 = generatePath(ROUTERS.CHAMPION, { id: champions[0].id });
    let src2 = generatePath(ROUTERS.CHAMPION, { id: champions[1].id });

    const result = [
        [
            champions[0].name,
            champions[0].splash_art,
            src1
        ],
        [
            champions[1].name,
            champions[1].splash_art,
            src2
        ]
    ]

    return (
        <ExploreUniverse objects={result} content="Champions" />
    )
}

export default memo(Explore);