import { memo } from "react";
import HeroUniverse from "../../../components/heroUniverse";
import styles from "./style.module.css";

const Story = ({ regionStory }) => {
    return (
        <section id={styles.story} className="container">
            <div className="row">
                <p className="col-12 col-md-8 col-xl-5 paragraph m-auto" dangerouslySetInnerHTML={{ __html: regionStory }}></p>
            </div>
        </section>
    )
}

export default memo(Story);