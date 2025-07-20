import { memo } from "react";
import { Link, generatePath } from "react-router-dom";
import { getRegionName } from "../../utils/functions";
import ROUTERS from "../../utils/router";
import styles from "./style.module.css";

const Champion = ({ champion, regions }) => {
    const arrRegion = getRegionName(regions);
    return (
        <div className={`${styles.item} col-12 col-md-2`}>
            <Link to={generatePath(ROUTERS.CHAMPION, { id: champion.id })}
            className="transition300ms">
                <img loading="lazy"
                    style={{
                        objectPosition: champion.position_x + '%' + champion.position_y + '%'
                    }}
                    src={champion.splash_art} alt="" />
                <div className={`${styles.item__more} transition300ms`}>
                    <div>
                        <h1>
                            <span>
                                {champion.name}
                            </span>
                        </h1>
                        <h2>
                            <span>
                                {arrRegion[champion.region]}
                            </span>
                        </h2>
                    </div>
                    <div className="animationView transition300ms">
                        <h1>Explore</h1>
                        <span>
                            <svg version="1.0" x="0px" y="0px" viewBox="0 0 162 70.28" fill="#937341" style={{ width: 12.5 + 'px' }}>
                                <circle fill="#937341" cx="31.57" cy="35.21" r="11.57"></circle>
                                <g>
                                    <polygon fill="#937341" points="124.18,70.39 118.31,64.09 149.37,35.22 118.31,6.35 124.18,0.05 162,35.22"></polygon>
                                    <rect x="84.61" y="29.76" fill="#937341" width="65" height="11.06"></rect>
                                </g>
                            </svg>
                        </span>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default memo(Champion);