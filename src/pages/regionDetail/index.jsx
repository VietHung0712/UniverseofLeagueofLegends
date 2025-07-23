import { memo, useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import { useRegions } from "../../api/useModel";
import Loading from "../../components/loading";
import Hero from "./hero";
import Story from "./story";
import Container from "./container";

const RegionDetail = () => {
    const { id } = useParams();
    const [region, setRegion] = useState(null);

    const { data: regions, loading1, error1 } = useRegions();

    useEffect(() => {
        if (!loading1 && regions?.length > 0 && id) {
            const found = regions.find(item => item.id === id);
            setRegion(found);
        }
    }, [id, regions, loading1]);

    if (loading1) return (<Loading />);
    if (error1) return <div>Error: {error1.message || "Something went wrong."}</div>;

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
            <Hero hero={hero} />
            <Story region={region} />
            <Container region={region} />
        </main>
    );
};

export default memo(RegionDetail);
