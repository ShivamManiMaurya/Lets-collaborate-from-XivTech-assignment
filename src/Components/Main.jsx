import React, { useState, useEffect } from "react";
import arrowImg from "../images/Arrow-black.svg";
import "../Components/Main.css";
import { useInView } from "react-intersection-observer";

function Main({ heading, image, description, linkText }) {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    const { ref: myRef, inView: componentIsVisible } = useInView();

    useEffect(() => {
        function handleResize() {
            setWindowWidth(window.innerWidth);
        }

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <div
            className={`main ${componentIsVisible && "scroll-animation"}`}
            ref={componentIsVisible ? null : myRef}
        >
            {windowWidth < 778 ? (
                <div>
                    {" "}
                    <div className="main-heading-div">
                        <h2 className="main-heading-h2">{heading}</h2>
                    </div>
                    <div className="main-img-div">
                        <img
                            className="main-img"
                            src={image}
                            alt={`${heading}-service-img`}
                        />
                    </div>
                    <div className="main-bottom-div">
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
                </div>
            ) : (
                <div className="main-large">
                    <div>
                        <h2 className="main-heading-h2">{heading}</h2>
                        <div className="main-large-description-div">
                            <h3 className="main-description-h3">
                                {description}
                            </h3>
                        </div>
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
                    <div className="main-img-div">
                        <img
                            className="main-img"
                            src={image}
                            alt={`${heading}-service-img`}
                        />
                    </div>
                </div>
            )}
        </div>
    );
}

export default Main;
