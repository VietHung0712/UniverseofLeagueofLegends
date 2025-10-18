import { memo, useMemo, useRef, useState } from "react";
import { generatePath } from "react-router-dom";
import { Link } from "react-router-dom";
import { animationSlide } from "../../../utils/functions";
import HexagonCanvas from '../hexagonCanvas';
import ROUTERS from "../../../utils/router";
import styles from './style.module.css';

const Slide = ({ champions }) => {

    const latestChampions = useMemo(() => {
        const base = [...champions]
            .sort((a, b) => new Date(b.updated_date) - new Date(a.updated_date))
            .slice(0, 5);

        return [base[3], base[4], base[0], base[1], base[2]];
    }, [champions]);

    return <Content array={latestChampions} />;
};

const Content = ({ array }) => {

    const slideRef = useRef(null);
    const slideTitleRef = useRef(null);

    const handleSlide = (dir) => {
        const container = slideRef.current;
        const containerTitle = slideTitleRef.current;
        animationSlide(container, dir);
        animationSlide(containerTitle, dir);
    };

    const [startX, setStartX] = useState(null);


    const handleTouchStart = (e) => {
        const touch = e.touches[0];
        setStartX(touch.clientX);
    };

    const handleTouchEnd = (e) => {
        const touch = e.changedTouches[0];
        const endX = touch.clientX;

        if (startX !== null) {
            const deltaX = endX - startX;

            if (Math.abs(deltaX) > 50) {
                const isRight = deltaX > 0;
                if (isRight) {
                    handleSlide(0);
                } else {
                    handleSlide(1);
                }
            }

            setStartX(null);
        }
    };

    return (
        <section id={styles.slide}>
            <div className={`${styles.slide__ctr} container-fluid position-relative h-100 overflow-hidden`}>
                <div className="row">
                    <div id={styles.divBtnLate} className="col-12 col-md-9 position-absolute start-50 z-1">
                        <button className="position-relative rounded-circle bg-black transition200ms" onClick={() => handleSlide(0)}>
                            <img className="object-fit-contain" src="https://raw.githubusercontent.com/VietHung0712/AssetsLOL/refs/heads/main/Others/prev.png" alt="" />
                        </button>
                        <button className="position-relative rounded-circle bg-black float-end transition200ms" onClick={() => handleSlide(1)}>
                            <img className="object-fit-contain" src="https://raw.githubusercontent.com/VietHung0712/AssetsLOL/refs/heads/main/Others/next.png" alt="" />
                        </button>
                    </div>
                </div>
                <div className="row h-100">
                    <div id={styles.slideLate} className={`${styles.ctr} col-9 col-md-7 position-relative bottom-0 m-auto`} ref={slideRef} onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
                        {
                            array?.map((item, key) => (
                                <div className={`${styles.item} h-100`} key={key}>
                                    <img className="h-100 w-100 object-fit-cover" alt=""
                                        style={{ objectPosition: `${item.position_x ?? 50}% ${item.position_y ?? 50}%` }}
                                        src={item.splash_art} />
                                </div>
                            ))
                        }
                    </div>
                    <div id={styles.titleLate} className={`${styles.ctr} col-11 col-md-4 position-absolute start-50 z-1`} ref={slideTitleRef}>
                        {
                            array?.map((item, key) => (
                                <div className={styles.item} key={key}>
                                    <div className="position-absolute z-2 top-50 w-100 flex-center flex-column text-uppercase">
                                        <img className="object-fit-contain" width="40" height="40" loading="lazy" alt=""
                                            src="https://raw.githubusercontent.com/VietHung0712/AssetsLOL/refs/heads/main/Others/content_type_icon_champion__3nwJQ.png" />
                                        <h2>{item.title}</h2>
                                        <h1 className="letter-spacing-3 fw-bold">{item.name}</h1>
                                    </div>
                                    <Link to={generatePath(ROUTERS.CHAMPION, { id: item.id })} className="position-absolute top-0 start-0 w-100 h-100"></Link>
                                    <HexagonCanvas />
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default memo(Slide);