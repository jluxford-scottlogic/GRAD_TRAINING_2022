import React from "react";

const Section = (props: { header: string, content: string[] }) => {
    return(
        <div className="section">
            <h1 className="header">{props.header}</h1>
            { props.content.map(line => <p key={line}>{line}</p>) }
        </div>
    )
}

export default Section;
