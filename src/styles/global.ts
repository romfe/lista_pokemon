import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';
export const GlobalStyle = createGlobalStyle`
  *{
    margin:0;
    padding:0;
    box-sizing:border-box;
  }
  html{
    @media(max-width:1080px){ // quando o usuário estiver com uma tela de até 1080 px de largura
      font-size:93.75%;
    }
    @media(max-width:720px){ 
      font-size:87.5%;
    }
  }
  body{
    -webkit-font-smoothing:antialiased;
  }
  body, input, button{
    font-family:"Roboto", sans-serif;
  }
  h1, h2, h3, h4, h5, h6, strong{
    font-weight:700;
  }
`;

export const MainCard = styled.div`
  display:flex;
  justify-content: space-around;
  top: 0px;
  left: 0px;
  background: #FFFFFF 0% 0% no-repeat padding-box;
  opacity: 1;
`;