import styled from "@emotion/styled";

import { NavLink } from 'react-router-dom';


export const Nav = styled.nav`
display:block;
position:sticky;

background-color:black;
border:1px  solid transparent;
border-bottom:5px solid rgb(87, 194, 33);

`


export const NavLogoName = styled(NavLink)`

color: white;
text-decoration: none;

  &:hover,
  &:focus,
  &.active{
    color: white;

  }
`

export const NavigationList = styled.ul`
display:flex;
justify-content:center;
width: 850px;
margin-left: auto;
margin-right: auto;
align-items: center;
list-style: none;
padding:0px;

`

export const NavigationWrapper = styled.div`
display:flex;
margin-left:auto;
`

export const NavigationItem = styled.li`
font-weight: 700;
font-size: 30px;
margin-left: 30px;
`

export const NavigationLink = styled(NavLink)`
color: white;
text-decoration: none;

transition: color 150ms linear;

&:hover,
&.active {
    color: rgb(87, 194, 33);
  }
`;