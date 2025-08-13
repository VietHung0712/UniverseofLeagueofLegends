import { memo, useEffect, useMemo, useState } from "react";
import { useChampions } from "../../../api/useModel";
import Loading from "../../../components/loading";
import Hero from "../hero";
import Container from "../container";
import Review from "../review";
import Explore from "../explore";

const Process = ({ id }) => {
    const [champion, setChampion] = useState(null);

    const { data: champions, loading, error } = useChampions();

    useEffect(() => {
        if (!loading && champions?.length > 0 && id) {
            const found = champions.find(item => item.id === id);
            setChampion(found);
            document.title = `${found.name} - Champions - Universe of League of Legends`;
        }
    }, [id, champions, loading]);

    const championsOfRegion = useMemo(() => {
        return [...champions].filter(item => (item.region === champion?.region) && (item.id !== champion.id));
    }, [champions, champion]);

    if (loading || !champion) return (<Loading />);
    if (error) return <div>Error: {error.message || "Something went wrong."}</div>;

    const hero = {
        name: champion.name,
        title: champion.title,
        img: champion.splash_art,
        video: champion.animated_splash_art,
        px: champion.position_x,
        py: champion.position_y
    }

    let indexRandom1 = Math.floor(Math.random() * championsOfRegion.length);
    let indexRandom2 = (indexRandom1 + 1 + Math.floor(Math.random() * championsOfRegion.length) + championsOfRegion.length) % championsOfRegion.length;
    const explore = [championsOfRegion[indexRandom1], championsOfRegion[indexRandom2]];

    return (
        <main>
            <Hero hero={hero} />
            <Container champion={champion} />
            <Review champion={champion} />
            <Explore champions={explore} />
        </main>
    );
};

export default memo(Process);