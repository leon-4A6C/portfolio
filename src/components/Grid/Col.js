import styled, {css} from "styled-components";

const ONE_TWELFTH = 100/12;

const Col = styled.div`
    box-sizing: border-box;
    flex: 0 0 auto;
    flex-basis: 0;
    max-width: 100%;
    flex-grow: 1;

    ${({xs}) => xs ? css`
    flex-basis: ${({xs}) => (ONE_TWELFTH * xs)}%;
    max-width: ${({xs}) => (ONE_TWELFTH * xs)}%;
    flex-grow: initial;
    `:""}

    ${({sm}) => sm ? css`
    @media only screen and (min-width: ${({theme}) => theme.breakpoint.sm}) {
        flex-basis: ${({sm}) => (ONE_TWELFTH * sm)}%;
        max-width: ${({sm}) => (ONE_TWELFTH * sm)}%;
        flex-grow: initial;
    }
    `:""}

    ${({md}) => md ? css`
    @media only screen and (min-width: ${({theme}) => theme.breakpoint.md}) {
        flex-basis: ${({md}) => (ONE_TWELFTH * md)}%;
        max-width: ${({md}) => (ONE_TWELFTH * md)}%;
        flex-grow: initial;
    }
    `:""}

    ${({lg}) => lg ? css`
    @media only screen and (min-width: ${({theme}) => theme.breakpoint.lg}) {
        flex-basis: ${({lg}) => (ONE_TWELFTH * lg)}%;
        max-width: ${({lg}) => (ONE_TWELFTH * lg)}%;
        flex-grow: initial;
    }
    `:""}
`

export default Col;