import React from "react";

const Banner = (props: { img: string, tagline: string }) => {
    return (
        <div className="branding flex-center">
            <img id="banner" src={props.img} alt="Scott-Logic banner"/>
            <div className="tagline" data-testid="tagline">{props.tagline}</div>
        </div>
    )
}

export default Banner;
