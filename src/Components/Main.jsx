import React, { useRef, useEffect } from "react";
import arrowImg from "../images/Arrow-black.svg";
import "../Components/Main.css";
import { useInView } from "react-intersection-observer";

function Main({ heading, image, description, linkText }) {
    const { ref: myRef, inView: componentIsVisible } = useInView();

    // if (componentIsVisible) {
    //     console.log("visible");
    // } else {
    //     console.log("not visible");
    // }

    // const myRef = useRef();

    // useEffect(() => {
    //     console.log("myref = ", myRef.current);
    // }, []);

    return (
        <div
            className={`main ${componentIsVisible && "scroll-animation"}`}
            ref={componentIsVisible ? null : myRef}
        >
            <h2 className="main-heading-h2">{heading}</h2>
            <img
                className="main-img"
                src={image}
                alt={`${heading}-service-image`}
            />
            <h3 className="main-description-h3">{description}</h3>
            <div className="main-link-div">
                <a className="main-link-a" href="#">
                    <p className="main-linkText-p">{linkText}</p>
                    <img
                        className="main-arrow-img"
                        src={arrowImg}
                        alt="black-arrow"
                    />
                </a>
            </div>
        </div>
    );
}

export default Main;
