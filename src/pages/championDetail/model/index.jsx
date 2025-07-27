import { memo } from "react";
import { generatePath, Link } from "react-router-dom";
import ROUTERS from "../../../utils/router";
import ContainerHeader from "../../../components/containerHeader";
import styles from "./style.module.css";

const Model = ({ champion }) => {
    return (
        <section>
            <ContainerHeader content={'Model 3D'} />
            <Content champion={champion} />
        </section>
    )
}

const Content = ({ champion }) => {
    return (
        <div className="container">
            <div className="row">
                <Link to={generatePath(ROUTERS.MODEL, { id: champion.id })} className={`${styles.column} col-9 m-auto`}>
                    <div className="w-100" style={{ backgroundPosition: `${champion.position_x}% ${champion.position_y}%`, backgroundImage: `url(${champion.splash_art})` }}>
                        <button className="h-100 w-100 font-size-16 text-uppercase letter-spacing-4 transition200ms">
                            View Model
                            <span>
                                <svg version="1.0" x="0px" y="0px" viewBox="0 0 162 70.28" fill="#937341" style={{ width: 16 + 'px' }}>
                                    <circle fill="#937341" cx="31.57" cy="35.21" r="11.57"></circle>
                                    <g>
                                        <polygon fill="#937341" points="124.18,70.39 118.31,64.09 149.37,35.22 118.31,6.35 124.18,0.05 162,35.22"></polygon>
                                        <rect x="84.61" y="29.76" fill="#937341" width="65" height="11.06"></rect>
                                    </g>
                                </svg>
                            </span>
                        </button>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default memo(Model)