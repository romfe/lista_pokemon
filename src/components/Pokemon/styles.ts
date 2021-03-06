import styled from "styled-components";

export const MainCard = styled.div`

.pokemon{
  display:flex;
  justify-content: space-between;
  align-items: center;
  top: 188px;
  left: 323px;
  width: 240px;
  height: 80px;
  background: #FFFFFF;
  border-radius: 20px;
  opacity: 1;
  margin-top:7.5px;
  margin-bottom: 7.5px;
}

.imagem-pokemon{
  display:flex;
  width: 64px;
  height: 64px;
  background: transparent;
  border: 1px solid #DBDBDB;
  border-radius: 14px;
  opacity: 1;
}

.nome-pokemon{
  display:flex;
  text-align: left;
  font: normal normal bold 16px/21px Roboto;
  letter-spacing: 0px;
  color: #333333;
  opacity: 1;
}

.tipos-pokemon{

  text-align: left;
  font: normal normal normal 12px/16px Roboto;
  letter-spacing: 0px;
  color: #939393;
  opacity: 1;
}

.numero-pokemon{
  display:flex;
  width: 20px;
  height: 16px;
  text-align: left;
  font: normal normal normal 12px/16px Roboto;
  letter-spacing: 0px;
  color: #939393;
  opacity: 1;
}

.maxcp{
  width: 54px;
  height: 19px;  
  border-radius: 4px;
  opacity: 1;
  font: normal normal bold 14px/19px Roboto;
  letter-spacing: 0px;
  color: #FFFFFF;
  opacity: 1;
  text-align:center;
}
.roxo {
  background: #662C91;
}
.amarelo {
  background:  #F5B700;
}
.vermelho {
  background:  #F87060;
}
.azul {
  background: #00C1FD;
}

`;