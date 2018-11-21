import styled from "styled-components"


export const Wrapper = styled.div`
position: relative;
`

export const Body = styled.div`
position: absolute;
top: 2em;
left: 2em;
bottom: 2em;
right: 2em;

transform: translateZ(50px);
transition: border 300ms ease-in-out;
border: 0 solid ${({theme}) => theme.color.text};
&:hover {
    border-width: 0.75em;
}
`

export const Img = styled.img`
width: 100%;
height: auto;
`