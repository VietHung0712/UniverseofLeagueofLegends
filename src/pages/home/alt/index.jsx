import { memo } from "react";
import { Link } from "react-router-dom";
import ROUTERS from "../../../utils/router";
import ContainerHeader from "../../../components/containerHeader";
import styles from './style.module.css';

const Alt = () => {

    return (
        <section id={styles.alt}>
            <ContainerHeader content={'Alternate Universe'} />
            <Content />
        </section>
    );
};

const Content = () => {
    return (
        <div className={`${styles.ctr} container`}>
            <div className={`${styles.row__ctr} row align-items-center justify-content-center`}>
                <div className="col-12 col-sm-6 col-xl-4">
                    <Link to={ROUTERS.SPIRITBLOSSOM}>
                        <div>
                            <div>
                                <img src="https://raw.githubusercontent.com/VietHung0712/AssetsLOL/refs/heads/main/SpiritBlossom/Image/Promo/Spirit_Blossom_promo_4.jpg" alt="" />
                            </div>
                            <p>
                                Spirit Blossom
                            </p>
                        </div>
                    </Link>
                </div>
                <div className="col-12 col-sm-6 col-xl-4">
                    <Link to={ROUTERS.KDA}>
                        <div>
                            <div>
                                <img src="https://raw.githubusercontent.com/VietHung0712/AssetsLOL/refs/heads/main/KDA/Image/Theme/KDA_2.jpg" alt="" />
                            </div>
                            <p>
                                K/DA
                            </p>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}
export default memo(Alt);