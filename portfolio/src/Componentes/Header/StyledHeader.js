import styled from "styled-components"

export const StyledButton = styled.button`
text-decoration: none;
background-color: silver;
padding: 5px 10px;
color: black;
border: none;

:hover{
    background-color: gray;
    color: gold;
}

:active{
    background-color: black;
}
`

export const StyledNav = styled.nav`
display: flex;
align-items:flex-start;
background-color: silver;
padding: 10px 10px 10px 10px;
`

export const StyledHeaderPage = styled.div`
width: 100vw;
position: sticky;
top: 0;
border-bottom: 1px solid black;
`