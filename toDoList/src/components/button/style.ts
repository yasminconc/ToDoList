import styled from "styled-components";


export const ButtonContent = styled.button `
    display: flex;
    align-items: center;
    justify-content: center;

    padding: 1rem;
    height: 3.25rem;
    gap: 0.5rem;
    
    background-color: ${props => props.theme['blue-dark']};
    color: ${props => props.theme['gray-100']};
    
    border-radius: 8px;
    border: 0;
    box-shadow: none;

    font-weight: bold;
    line-height: 140%;
    font-size: 0.875rem;

    transition: 0.2s;
    cursor: pointer;

    &:hover {
        background-color: ${props => props.theme['blue']};
    }
`