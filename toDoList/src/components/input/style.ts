import styled from "styled-components";


export const InputContent =  styled.input `
    height: 3.375rem;
    width: 100%;
    line-height: 140%;
    padding: 1rem;

    border: 1px solid ${props => props.theme['gray-700']};
    border-radius: 8px;

    background-color: ${props => props.theme['gray-500']};
    color: ${props => props.theme['gray-100']};

    &::placeholder {
        color: ${props => props.theme['gray-300']};
    }

    &:focus {
        border-color: ${props => props.theme['purple-dark']};
    }
`