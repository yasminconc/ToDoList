import styled from "styled-components";

export const Main = styled.main `
    padding: 5rem;
    margin-top: 2rem;
    gap: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-top: 1px solid ${props => props.theme['gray-400']};
    border-radius: 1rem;
    
    p {
        display: flex;
        flex-direction: column;
        color: ${props => props.theme['gray-300']};
        line-height: 140%;
    }
`