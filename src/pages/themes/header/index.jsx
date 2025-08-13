import { memo, useState, useRef, useEffect } from "react";
import ROUTERS from "../../../utils/router";
import { Link, useLocation } from "react-router-dom";
import styles from './style.module.css';

const Header = () => {
    const [menus] = useState([
        {
            name: "Champions",
            path: ROUTERS.CHAMPIONS,
            child: []
        },
        {
            name: "Regions",
            path: ROUTERS.REGIONS,
            child: []
        },
        {
            name: "Alt Universe",
            path: "#",
            child: [
                { name: "Spirit Blossom", path: ROUTERS.SPIRITBLOSSOM },
                { name: "K/DA", path: ROUTERS.KDA },
                // { name: "Mythmaker", path: ROUTERS.MYTHMAKER }
            ]
        },
        {
            name: "Explore",
            path: ROUTERS.EXPLORE,
            child: []
        }, {
            name: "More",
            path: "#",
            child: [
                { name: "Khada - Models 3D", path: "https://modelviewer.lol/", blank: true }
            ]
        }
    ]);

    const boxRef = useRef();
    const location = useLocation();
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(false);
    }, [location.pathname]);

    const handleClickBtn = () => {
        setIsVisible(prev => !prev);
    }

    return (
        <header className={styles.header}>
            <div className={styles.header__relative}>
                <div className={styles.divBtn}>
                    <button className={styles.btnOpen} onClick={() => handleClickBtn()}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5" />
                        </svg>
                    </button>
                </div>
                <div className={styles.header__brand}>
                    <div className={styles.header__brand_item}>
                        <Link className={styles.a} to={ROUTERS.HOME}>
                            <img src="https://raw.githubusercontent.com/VietHung0712/AssetsLOL/refs/heads/main/Others/League_of_Legends_icon.svg" alt="" />
                        </Link>
                    </div>
                    <div className={styles.header__brand_item}>
                        <Link className={styles.a} to={ROUTERS.HOME}>
                            <span>Universe</span>
                        </Link>
                    </div>
                </div>
                <div className={`${styles.header__menus} ${isVisible ? styles.active : ''}`} ref={boxRef}>
                    <img src="https://raw.githubusercontent.com/VietHung0712/AssetsLOL/refs/heads/main/Others/ahri.avif" alt="" />
                    <img src="https://raw.githubusercontent.com/VietHung0712/AssetsLOL/refs/heads/main/Others/LeagueofLegends.webp" alt="" />
                    <div className={styles.divBtn}>
                        <button className={styles.btnClose} onClick={() => handleClickBtn()}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x" viewBox="0 0 16 16">
                                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
                            </svg>
                        </button>
                    </div>
                    {
                        menus?.map((item, key) => (
                            <div key={key}>
                                <Link className={styles.a} to={item.path}>
                                    <p className="transition200ms">
                                        {item.name}
                                        {item.child?.length > 0 && (
                                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" className="bi bi-caret-down-fill" viewBox="0 0 16 16">
                                                <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
                                            </svg>
                                        )}
                                    </p>
                                </Link>
                                {
                                    item.child && (
                                        <ul className={`${styles.header__menus_dropdown} ${item.child?.length > 0 ? styles.active : ''}`}>
                                            {
                                                item.child?.map((childItem, childKey) => (
                                                    <li key={childKey}>
                                                        <Link className={styles.a} to={childItem.path} target="_blank" rel="noopener noreferrer">{childItem.name}</Link>
                                                    </li>
                                                ))
                                            }
                                        </ul>
                                    )
                                }
                            </div>
                        ))
                    }
                </div>
            </div>
        </header>
    );
};

export default memo(Header);
