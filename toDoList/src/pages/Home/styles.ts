import styled from 'styled-components'


export const Section = styled.section `
    max-width: 46rem;
    width: 100%;
    margin: 0 auto;
`

export const BoxInput = styled.div `
   display: flex;
   flex: 1;
   justify-content: space-between;
   gap: 0.5rem;

   input,button {
        transform: translateY(-50%);
        margin-bottom: 2.3125rem;
   }
`

export const BoxTask = styled.div `
  
`

// export const Main = styled.main `
//     display: flex;
//     flex-direction: column;
//     height: 100vh;
// `

// export const Header = styled.header `
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     gap: 1rem;
//     background: ${props => props.theme["gray-700"]};
//     height: 12.5rem;
//     width: 100vw;
// `

// export const Input = styled.input `
//     border: 0;
//     height: 3.375rem;
//     width: 46rem;
//     background: ${props => props.theme['gray-500']};
//     border-radius: 8px;
//     text-align: center;
   
// `

// export const BoxForm = styled.div `
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     gap: 1rem;
//     position: relative;
//     bottom: 2rem;
    

//     button {
//         width: 2rem;
//         background: red;
//     }
// `