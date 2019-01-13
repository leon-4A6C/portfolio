import styled from "styled-components";

const Container = styled.div`
    width: 95%;
    margin: 0 auto;

    padding-right: 2.5em;
    @media (min-width: ${({theme}) => theme.breakpoint.sm}) {
        width: 90%;
        padding-right: initial;
    }
    @media (min-width: ${({theme}) => theme.breakpoint.md}) {
        width: 85%;
    }
    @media (min-width: ${({theme}) => theme.breakpoint.lg}) {
        width: 80%;
    }
`;

export default Container;