import { memo, useRef, useState } from "react";
import styles from "./style.module.css";

function ChampionsFilter({ onChangeSort }) {

    const ulRef = useRef(null);
    const [openClickSelect, setOpenClickSelect] = useState(true);

    const onClickOpenSelect = () => {
        setOpenClickSelect(!openClickSelect);
    }

    const handleSelect = (value) => {
        onChangeSort(value);
    };

    return (
        <div id={styles.filter} className="transition200ms position-fixed z-1 w-100">
            <div className={`${styles.ctr} container h-100 flex-center`}>
                <div className="row w-100 h-100 justify-content-between">
                    <div className="col-md-7 h-100 flex-center justify-content-start">
                        <img className="object-fit-contain me-4" src="https://raw.githubusercontent.com/VietHung0712/AssetsLOL/refs/heads/main/Others/content_type_icon_champion__3nwJQ.png" height="35" width="35" alt="" />
                        <input className="border-0 w-50 fw-bold text-uppercase text-color-1 font-monospace font-size-14 letter-spacing-4 bg-transparent" type="input" placeholder="Find a champion" />
                    </div>
                    <div className="col-md-4 h-100">
                        <div onClick={onClickOpenSelect} className={`${styles.filterSort} ${openClickSelect ? styles.bgRadial : ''} position-relative h-100 flex-center`}>
                            <div className="m-0 text-color-3">
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-sort-down" viewBox="0 0 16 16">
                                    <path d="M3.5 2.5a.5.5 0 0 0-1 0v8.793l-1.146-1.147a.5.5 0 0 0-.708.708l2 1.999.007.007a.497.497 0 0 0 .7-.006l2-2a.5.5 0 0 0-.707-.708L3.5 11.293zm3.5 1a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5M7.5 6a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1zm0 3a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1zm0 3a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1z" />
                                </svg>
                            </div>

                            <h1 className="font-size-14 m-0 fw-bold text-uppercase text-color-3 letter-spacing-4">
                                <span className="text-color-1">Sorting by</span>
                                <span>:</span>
                                <span>A-Z</span>
                            </h1>

                            <ul ref={ulRef} className={`${openClickSelect ? styles.active : ''} position-absolute w-100 list-unstyled font-size-12 fw-bold text-uppercase text-color-1 letter-spacing-4 transition300ms`}>
                                <li className="px-5" onClick={() => handleSelect(0)}>A-Z</li>
                                <li className="px-5" onClick={() => handleSelect(1)}>Newest</li>
                                <li className="px-5" onClick={() => handleSelect(2)}>Region</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default memo(ChampionsFilter);