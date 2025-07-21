import { memo, useEffect, useState, useRef } from "react";
import { Link, generatePath, useParams } from "react-router-dom";
import { useRegions, useChampions } from "../../api/useModel";
import HeroUniverse from "../../components/heroUniverse";
import ChampionsList from "../../components/championsList";
import ContainerHeader from "../../components/containerHeader";
import ROUTERS from "../../utils/router";
import Loading from "../../components/loading";
import styles from "./style.module.css";

const RegionDetail = () => {
    const { id } = useParams();
    const [region, setRegion] = useState(null);
    const [championsOfRegion, setChampionsOfRegion] = useState(null);

    const { data: regions, loading1, error1 } = useRegions();
    const { data: champions, loading2, error2 } = useChampions();

    useEffect(() => {
        if (!loading1 && regions?.length > 0 && id) {
            const found = regions.find(item => item.id === id);
            setRegion(found);
            const champs = champions.filter(item => item.region === id).sort((a, b) => a.id.localeCompare(b.id));
            setChampionsOfRegion(champs);
        }
    }, [id, regions, champions, loading1]);

    if (loading1) return (<Loading />);
    if (error1) return <div>Error: {error1.message || "Something went wrong."}</div>;

    if (loading2) return (<Loading />);
    if (error2) return <div>Error: {error2.message || "Something went wrong."}</div>;

    if (!region) return (<Loading />);

    const hero = {
        name: region.name,
        title: region.title,
        img: region.icon,
        video: region.animated_background,
        px: 50,
        py: 50
    }

    return (
        <main>
            <HeroUniverse item={hero} customStyle={styles.hero__splashArt} />
            <Story region={region} />
            <Container region={region} champions={championsOfRegion} />
        </main>
    );
};

const Story = ({ region }) => {
    return (
        <section id={styles.story} className="container">
            <div className="row">
                <p className="col-12 col-md-8 col-xl-5 paragraph m-auto" dangerouslySetInnerHTML={{ __html: region.story }}></p>
            </div>
        </section>
    )
}

const Container = ({ region, champions }) => {
    const [showAllChampions, setShowAllChampions] = useState(false);
    const containerRef = useRef(null);

    const [hasTriggered, setHasTriggered] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (!containerRef.current || hasTriggered) return;
            const ctr = containerRef.current;
            const targetPosition = ctr.offsetTop;
            const scrollPosition = window.scrollY + window.innerHeight;

            if (scrollPosition >= targetPosition) {
                ctr.style.opacity = 1;
                ctr.style.transform = 'translateY(0)';
                setHasTriggered(true); // chỉ gọi 1 lần
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [hasTriggered]);



    const handleShowMore = () => {
        setShowAllChampions(true);
    };

    return (
        <section id={styles.listChamps} className="position-relative">
            <ContainerHeader content={`Champions of ${region.name}`} src="https://raw.githubusercontent.com/VietHung0712/AssetsLOL/refs/heads/main/Others/content_type_icon_champion__3nwJQ.png" />
            <div className={`${styles.ctrHeaderImg}`} style={{backgroundImage: `url(${region.avatar})`}}></div>
            <div className={`${styles.ctr} position-relative`} ref={containerRef}>
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

export default memo(RegionDetail);
