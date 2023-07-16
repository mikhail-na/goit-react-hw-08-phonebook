import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

export const Container = styled.div`
display:block;
padding: 20px, 200px;
`

export const Header = styled.h1`
display: flex;
justify-content:center;
font-size:44px;
font-weight:700;
color: #fff;
text-align: center;
`

export const Message = styled.h2`
font-size:30px;
font-weight:700;
color: #fff;
text-align: center;
`

export const GetStartedLink = styled(NavLink)`
display: flex;
align-items: center;
justify-content: center;

cursor: pointer;


font-size:20px;
font-weight:600;

border:1px solid rgb(87, 194, 33);
border-radius: 12px;

padding: 14px;
margin-right:auto;
margin-left:auto;
width:144px;

color: #fff;
background-color: rgb(87, 194, 33);
text-decoration: none;

transition: color 200ms linear;

&:hover,
&.active {
    color: rgb(87, 194, 33);
    background-color:#fff;
    border:2px solid rgb(87, 194, 33);
  }
`;