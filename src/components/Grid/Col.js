import styled, {css} from "styled-components";

const oneTwelfth = 100/12;

const Col = styled.div`
    box-sizing: border-box;
    flex: 0 0 auto;
    flex-basis: 0;
    max-width: 100%;
    flex-grow: 1;

    ${({xs}) => xs ? css`
    flex-basis: ${({xs}) => (oneTwelfth * xs)}%;
    max-width: ${({xs}) => (oneTwelfth * xs)}%;
    flex-grow: initial;
    `:""}

    ${({sm}) => sm ? css`
    @media only screen and (min-width: 768px) {
        flex-basis: ${({sm}) => (oneTwelfth * sm)}%;
        max-width: ${({sm}) => (oneTwelfth * sm)}%;
        flex-grow: initial;
    }
    `:""}

    ${({md}) => md ? css`
    @media only screen and (min-width: 992px) {
        flex-basis: ${({md}) => (oneTwelfth * md)}%;
        max-width: ${({md}) => (oneTwelfth * md)}%;
        flex-grow: initial;
    }
    `:""}

    ${({lg}) => lg ? css`
    @media only screen and (min-width: 1200px) {
        flex-basis: ${({lg}) => (oneTwelfth * lg)}%;
        max-width: ${({lg}) => (oneTwelfth * lg)}%;
        flex-grow: initial;
    }
    `:""}
`

export default Col;