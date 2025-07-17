import { memo } from "react";
import './style.css';

const Loading = () => {
    return (
        <section id="loading">
            <div className="bor">
                <div className="spinner"></div>
                <div className="spinner"></div>
                <div className="spinner"></div>
                <div className="spinner"></div>
                <div className="spinner"></div>
            </div>
        </section>
    )
}

export default memo(Loading);