import React from "react";
import styled from "styled-components";

const Page = styled.section`
    font-family: ${({ theme }) => theme.font.primary};
    position: relative;
    min-height: 100vh;
`

export default Page;