import React from "react";

const Card = (props) => {
    return (
        <>
        <h1>Nasa Photo!</h1>
        <p>{props.data.date}</p>
        <p>{props.data.title}</p>
        <img src={props.data.url} alt="Phot of the Day" />
        </>
    )
}

export default Card;