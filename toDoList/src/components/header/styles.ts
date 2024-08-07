import styled from "styled-components";

export const Main = styled.header `
    display: flex;
    background-color: ${props => props.theme['gray-700']};
    flex: 1;
    align-items: center;
    justify-content: center;
    padding: 5rem 0.625rem;
    gap: 1rem;
`