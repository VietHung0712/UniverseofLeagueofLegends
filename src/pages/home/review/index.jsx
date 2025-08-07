import { memo, useRef, useState } from "react";
import { scrollWithOffset } from "../../../utils/functions";
import { Link, generatePath } from "react-router-dom";
import ROUTERS from "../../../utils/router";
import ContainerHeader from "../../../components/containerHeader";
import styles from './style.module.css';

const Review = ({ regions }) => {

    return (
        <section id={styles.review}>
            <ContainerHeader content={'Runeterra'} src="https://raw.githubusercontent.com/VietHung0712/AssetsLOL/refs/heads/main/Regions/runeterra/runeterra_crest_icon.png" />
            <Content regions={regions} />
        </section>
    )
}

const Content = ({ regions }) => {

    const backgroundRef = useRef(null);
    const iconRefs = useRef([]);
    const avatarRefs = useRef([]);
    const contentRef = useRef(null);

    const position = [
        '100% 65%', '10% 45%', '100% 30%', '80% 86%', '48% 38%', '70% 57%',
        '100% 88%', '58% 83%', '30% 89%', '14% 27%', '70% 65%'
    ]

    const [isFirstClick, setIsFirstClick] = useState(true);
    const [activeIndex, setActiveIndex] = useState(null);
    const [isTransitioning, setIsTransitioning] = useState(false);

    const handleBackground = (dir) => {
        if (isTransitioning) return;

        const container = backgroundRef.current;
        const icons = iconRefs.current;
        const avatars = avatarRefs.current;
        if (!container) return;

        if (isFirstClick) {
            setIsFirstClick(false);
            container.style.transform = 'translate(-50%, -50%) scale(2)';
            container.style.transformOrigin = position[dir];
            icons[dir].style.opacity = 0;
            avatars[dir].style.opacity = 1;
            avatars[dir].style.transform = 'scale(1.4)';
            setActiveIndex(dir);
            scrollWithOffset(contentRef);
        } else {
            setIsFirstClick(true);
            container.style.transform = 'translate(-50%, -50%) scale(1)';
            container.style.transformOrigin = '50% 50%';
            setActiveIndex(null);
        }
        setIsTransitioning(true);
        setTimeout(setIsTransitioning, 1000, false);
    };

    return (
        <div className="container-fluid" ref={contentRef}>
            <div className="row">
                <div className={`${styles.borBackgroundImage} col-11 m-auto position-relative overflow-hidden`}>
                    <button className={`${styles.btnClose} ${styles.elActive} position-absolute z-1 bg-black border-0 text-white rounded-circle transition300ms ${!isFirstClick ? styles.active : ''}`} onClick={handleBackground}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-x-lg" viewBox="0 0 16 16">
                            <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
                        </svg>
                    </button>
                    <div className={`${styles.backgroundImage} position-absolute start-50 w-100`} ref={backgroundRef}>
                        <ul className={styles.avatars}>
                            {
                                regions?.filter(item => (item.id !== "Runeterra" && item.id !== "The_Void" && item.id !== "Bandle_City"))
                                    .map((item, key) => (
                                        <button key={key} onClick={() => handleBackground(key)} className={`${styles[item.id]} ${!isFirstClick ? styles.hidden : ''} ${key === activeIndex ? styles.active : ''}`}>
                                            <img className={styles.icon} src={item.icon} alt="" ref={el => iconRefs.current[key] = el} />
                                            <img className={styles.avatar} src={item.avatar} alt="" ref={el => avatarRefs.current[key] = el} />
                                            <p className={`${styles.elActive} ${!isFirstClick ? styles.active : ''}`}>{item.name}</p>
                                            <div className={`${styles.avatarBackground} ${styles.elActive} ${key === activeIndex ? styles.active : ''}`}>
                                                <div style={{ backgroundImage: `url(${item.background})` }}></div>
                                                {item.title}
                                            </div>
                                            <Link key={key} to={generatePath(ROUTERS.REGION, { id: item.id })} className={`${styles.elActive} ${key === activeIndex ? styles.active : ''}`}>
                                                <span>View region</span>
                                            </Link>
                                        </button>
                                    ))
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default memo(Review);