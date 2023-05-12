import React from "react";
import arrowImg from "../images/Arrow-black.svg";

function Main({ heading, image, description, linkText }) {
    return (
        <div className="main">
            <h2>{heading}</h2>
            <img src={image} alt={`${heading}-service-image`} />
            <h3>{description}</h3>
            <div className={`${heading}-link`}>
                <a href="#">
                    <p>{linkText}</p>
                    <img src={arrowImg} alt="black-arrow" />
                </a>
            </div>
        </div>
    );
}

export default Main;
