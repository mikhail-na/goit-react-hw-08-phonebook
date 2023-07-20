import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

export const Form = styled.form`
display:flex;
flex-direction:column;
justify-content:center;
padding: 20px 200px;

`;

export const Header = styled.h1`
display:block;
color:white;

font-size:34px;
font-weight:700;

margin-left:auto;
margin-right:auto;

`

export const Text = styled.p`
display:flex;
justify-content:center;
text-align:center;
align-items:center;
font-size:18px;
font-weight:500;

color:white;
`

export const Input = styled.input`
// width: 350px;
padding: 14px;
border-radius: 8px;
outline: none;
border: none;
`;

export const PassInput = styled.input`
padding: 14px;
border-radius: 8px;
outline: none;
border: none;
width:340px;
`; 

export const Label = styled.label`
display: flex;
position: relative;
flex-direction: column;
margin-top:15px; 
font-size:20px;
font-weight:500;
`

export const Div = styled.div`
display:flex;
text-align:center;
align-items:center
`;

export const Toggle = styled.div`
display: flex;
position: absolute;
right: 14px;

font-size:18px;
font-weight:700;
color: black;

cursor: pointer;

transition: color 150ms linear;

&:hover,
&.active {
    color: rgb(87, 194, 33);
  }
`;


export const Button = styled.button`
font-size:20px;
font-weight:600;
border:none;
border-radius: 8px;
padding: 14px;
margin-top:40px;
margin-right:auto;
margin-left:auto;
cursor: pointer;
width:144px;
`;

export const Span = styled.span`
display: flex;
text-align:center;
align-items:center;
font-size:20px;
font-weight:500;

margin-top:25px;
margin-right:auto;
margin-left:auto;
`

export const LinkToLoggin = styled(NavLink)`
color: rgb(87, 194, 33);
margin-left:10px;
`

