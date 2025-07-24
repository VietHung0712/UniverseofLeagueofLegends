import { memo, useEffect, useState } from "react";
import { useRegions } from "../../../api/useModel";
import Loading from "../../../components/loading";
import Hero from "../hero";
import Story from "../story";
import Container from "../container";
import Gallery from "../gallery";
import Explore from "../explore";

const Process = ({ id }) => {
    const [region, setRegion] = useState(null);

    const { data: regions, loading, error } = useRegions();

    useEffect(() => {
        if (!loading && regions?.length > 0 && id) {
            const found = regions.find(item => item.id === id);
            setRegion(found);
        }
    }, [id, regions, loading]);

    if (loading || !region) return (<Loading />);
    if (error) return <div>Error: {error.message || "Something went wrong."}</div>;

    const hero = {
        name: region.name,
        title: region.title,
        img: region.icon,
        video: region.animated_background,
        px: 50,
        py: 50
    }

    const index = regions.indexOf(region);
    const aroundRegion = [regions[(index - 1 + regions.length) % regions.length], regions[(index + 1 + regions.length) % regions.length]];

    return (
        <main>
            <Hero hero={hero} />
            <Story regionStory={region.story} />
            <Container region={region} />
            <Gallery regionId={region.id} />
            <Explore regions={aroundRegion} />
        </main>
    );
};

export default memo(Process);
