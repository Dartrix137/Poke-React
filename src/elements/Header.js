import styled from 'styled-components';

const Header = styled.div `
    
`;

const Titulo = styled.h1 `
    font-weight: bold;
    text-transform: uppercase;
    font-size: 2.5rem; /* 40px */
 
    @media(max-width: 60rem){ /* 950px */
        font-size: 2rem; /* 32px */
    }
`;

export {Header, Titulo};