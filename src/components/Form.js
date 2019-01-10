import styled from "styled-components";

const Form = styled.form`
    font-size: 1.4rem;
    margin: 5em;
`;

const Input = styled.input`
    border: none;
    margin: 0em 0.5em;
    padding: 0;
    border-bottom: 0.1em solid black;
    font-family: ${({theme}) => theme.font.primary};
    font-size: inherit;
    width: 10em;
`

const Submit = styled.button`
    display: block;
    font-family: ${({theme}) => theme.font.primary};
    font-size: 1.2em;
    background: transparent;
    border: 0.1em solid black;
    border-radius: 0.3em;
    color: black;
    margin-top: 1em;
    cursor: pointer;
`

export default Form;
export {
    Input,
    Submit
};