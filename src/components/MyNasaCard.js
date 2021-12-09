import React from "react";
import styled from "styled-components";

const StyledHead = styled.div `
color: #FF5DA2;
font-size: 20px;
text-align: center;
margin: 0;
`
const StyledText = styled.div `
color: #FF5DA2;
font-size: 19px;
margin: 50px;

`




const Card = (props) => {
    return (
         <div>
         <StyledHead>
         <div>
        <h1>Nasa Photo of the Day!</h1>
        </div>
         </StyledHead>
         <StyledText>
             <div>
        <p>{props.data.date}</p>
        <p>{props.data.title}</p>
        <p>{props.data.explanation}</p>
        </div>
        </StyledText>
        
        <img src={props.data.url} alt="Phot of the day"/>
        
        </div>
       
       
    )
}

export default Card;