import { memo } from "react";
import './style.css';

const ContainerHeader = ({ content, img = false, src = "" }) => {
    return (
        <div className="container__head">
            {
                img
                    ? <img src={src} width="30" alt="" />
                    : <i className={src}></i>
            }
            <h1>{content}</h1>
        </div>
    )
}

export default memo(ContainerHeader);