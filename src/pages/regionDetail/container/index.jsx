import { memo, useRef, useState, useEffect } from "react";
import { useChampions } from "../../../api/useModel";
import ContainerHeader from "../../../components/containerHeader";
import ChampionsList from "../../../components/championsList";
import Loading from "../../../components/loading";
import styles from "./style.module.css";

const Container = ({ region }) => {
    const { data: champions, loading, error } = useChampions();
    if (loading) return (<Loading />);
    if (error) return <div>Error: {error.message || "Something went wrong."}</div>;
    const championsOfRegion = champions.filter(item => item.region === region.id).sort((a, b) => a.id.localeCompare(b.id));

    return (
        <Content region={region} champions={championsOfRegion} />
    )
}

const Content = ({ region, champions }) => {

    const [hasTriggered, setHasTriggered] = useState(false);
    const [showAllChampions, setShowAllChampions] = useState(false);
    const containerRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            if (!containerRef.current || hasTriggered) return;
            const ctr = containerRef.current;
            const targetPosition = ctr.offsetTop;
            const scrollPosition = window.scrollY + window.innerHeight;
            console.log(targetPosition, scrollPosition);

            if (scrollPosition >= targetPosition + ctr.offsetHeight / 3) {
                const ctrItem = ctr.children;
                ctrItem[2].style.opacity = 1;
                ctrItem[2].style.visibility = 'visible';
                ctrItem[2].style.transform = 'translateY(0)';
                setHasTriggered(true);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [hasTriggered]);

    const handleShowMore = () => {
        setShowAllChampions(true);
    };

    return (
        <section id={styles.listChamps} className="position-relative" ref={containerRef}>
            <ContainerHeader content={`Champions of ${region.name}`} src="https://raw.githubusercontent.com/VietHung0712/AssetsLOL/refs/heads/main/Others/content_type_icon_champion__3nwJQ.png" />
            <div className={`${styles.ctrHeaderImg}`} style={{ backgroundImage: `url(${region.avatar})` }}></div>
            <div className={`${styles.ctr} position-relative`}>
                <ChampionsList valueSearch={""} indexSort={0} champions={showAllChampions ? champions : champions?.slice(0, 10)} cover={true} />
                <div className={`${styles.champions__cover} ${showAllChampions ? 'd-none' : ''}`}>
                    <button onClick={handleShowMore} className="position-absolute-center text-color-3 font-size-14 letter-spacing-2 text-uppercase">
                        <span>View all {region.name} champions</span>
                        <span className={styles.spanIcon}>
                            <svg version="1.0" x="0px" y="0px" viewBox="0 0 162 70.28" fill="#937341" style={{ width: 17 + 'px' }}>
                                <circle fill="#937341" cx="31.57" cy="35.21" r="11.57"></circle>
                                <g>
                                    <polygon fill="#937341" points="124.18,70.39 118.31,64.09 149.37,35.22 118.31,6.35 124.18,0.05 162,35.22"></polygon>
                                    <rect x="84.61" y="29.76" fill="#937341" width="65" height="11.06"></rect>
                                </g>
                            </svg>
                        </span>
                    </button>
                </div>
            </div>
        </section>
    )
}

export default memo(Container);