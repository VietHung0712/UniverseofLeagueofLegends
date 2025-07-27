import { memo } from "react";
import { Link } from "react-router-dom";
import ContainerHeader from "../containerHeader";
import styles from "./style.module.css";

const ExploreUniverse = ({ region1, region2, src1, src2 }) => {
    return (
        <section>
            <ContainerHeader content={'Explore'} src="https://raw.githubusercontent.com/VietHung0712/AssetsLOL/refs/heads/main/Regions/runeterra/runeterra_crest_icon.png" />
            <Content region1={region1} region2={region2} src1={src1} src2={src2} />
        </section>
    )
}

const Content = ({ region1, region2, src1, src2 }) => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-6">
                    <Link to={src1} className={`${styles.a} w-100 d-block position-relative transition300ms`}>
                        <img className="h-100 w-100 object-fit-cover" src={region1.background} alt="" />
                        <div className="position-absolute start-0 top-0 h-100 w-100 transition300ms">
                            <div className="position-absolute-center text-color-3 text-center letter-spacing-2 text-uppercase">
                                <span>Explore</span>
                                <svg version="1.0" x="0px" y="0px" viewBox="0 0 162 70.28" fill="#937341" style={{ width: 24 + 'px' }}>
                                    <circle fill="#937341" cx="31.57" cy="35.21" r="11.57"></circle>
                                    <g>
                                        <polygon fill="#937341" points="124.18,70.39 118.31,64.09 149.37,35.22 118.31,6.35 124.18,0.05 162,35.22"></polygon>
                                        <rect x="84.61" y="29.76" fill="#937341" width="65" height="11.06"></rect>
                                    </g>
                                </svg>
                            </div>
                        </div>
                        <p className="position-absolute start-0 bottom-0 text-color-3 px-3 py-md-3 w-100 text-center letter-spacing-2 font-size-16 text-uppercase transition300ms">
                            {region1.name}
                        </p>
                    </Link>
                </div>
                <div className="col-6">
                    <Link to={src2} className={`${styles.a} w-100 d-block position-relative transition300ms`}>
                        <img className="h-100 w-100 object-fit-cover" src={region2.background} alt="" />
                        <div className="position-absolute start-0 top-0 h-100 w-100 transition300ms">
                            <div className="position-absolute-center text-color-3 text-center letter-spacing-2 text-uppercase">
                                <span>Explore</span>
                                <svg version="1.0" x="0px" y="0px" viewBox="0 0 162 70.28" fill="#937341" style={{ width: 24 + 'px' }}>
                                    <circle fill="#937341" cx="31.57" cy="35.21" r="11.57"></circle>
                                    <g>
                                        <polygon fill="#937341" points="124.18,70.39 118.31,64.09 149.37,35.22 118.31,6.35 124.18,0.05 162,35.22"></polygon>
                                        <rect x="84.61" y="29.76" fill="#937341" width="65" height="11.06"></rect>
                                    </g>
                                </svg>
                            </div>
                        </div>
                        <p className="position-absolute start-0 bottom-0 text-color-3 px-3 py-md-3 w-100 text-center letter-spacing-2 font-size-16 text-uppercase transition300ms">
                            {region2.name}
                        </p>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default memo(ExploreUniverse);