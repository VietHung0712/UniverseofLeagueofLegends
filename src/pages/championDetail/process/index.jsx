import { memo, useEffect, useState } from "react";
import { useChampions } from "../../../api/useModel";
import Loading from "../../../components/loading";
import Hero from "../hero";
import Container from "../container";
import Review from "../review";
import Model from "../model";

const Process = ({ id }) => {
    const [champion, setChampion] = useState(null);

    const { data: champions, loading, error } = useChampions();

    useEffect(() => {
        if (!loading && champions?.length > 0 && id) {
            const found = champions.find(item => item.id === id);
            setChampion(found);
        }
    }, [id, champions, loading]);

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

    // const index = champions.indexOf(region);
    // const aroundRegion = [regions[(index - 1 + regions.length) % regions.length], regions[(index + 1 + regions.length) % regions.length]];

    return (
        <main>
            <Hero hero={hero} />
            <Container champion={champion} />
            <Review champion={champion} />
            <Model champion={champion} />
            {/* <Explore regions={aroundRegion} /> */}
        </main>
    );
};

export default memo(Process);