import styled from "styled-components";


export const Main = styled.main `
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-weight: bold;
`

export const AsideRigth = styled.aside `
    display: flex;
    align-items: center;
    gap: 1rem;

    p {
        color: ${props => props.theme['blue']};

    }
    
    span {
        background: ${props => props.theme['gray-400']};
        padding: 0.2rem 0.7rem;
        border-radius: 10rem;
        
    }
   

`

export const AsideLeft = styled.aside `
    display: flex;
    gap: 1rem;
    align-items: center;
   
    p {
        color: ${props => props.theme['purple-dark']};

    }
    
    span {
        background: ${props => props.theme['gray-400']};
        padding: 0.2rem 0.7rem;
        border-radius: 10rem;
        
    }
`
