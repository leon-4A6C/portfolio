import styled from "styled-components";

const Container = styled.div`
    width: 95%;
    margin: 0 auto;

    @media (min-width: 768px) {
        width: 90%;
    }
    @media (min-width: 992px) {
        width: 85%;
    }
    @media (min-width: 1200px) {
        width: 80%;
    }
`;

export default Container;