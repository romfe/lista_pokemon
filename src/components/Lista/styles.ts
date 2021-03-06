import styled from "styled-components";

export const MainCard = styled.div`
.lista-pokemon{
  display:flex;
  flex-flow: row wrap;
  max-width: 596px;
  max-height: 718px;
  background: #F4F4F4 0% 0% no-repeat padding-box;
  border-radius: 50px 50px 0px 0px;
  opacity: 1;
}

.lista-titulo{
  margin:5px;
  padding-top: 30px;
  margin-left:15px;
  text-align: left;
  font: normal normal bold 35px/46px Roboto;
  letter-spacing: 0px;
  color: #333333;
  opacity: 1;
}

.lista-pokemon-view{
  display:flex;
  justify-content: space-around;
  align-items: center;
  overflow-y: scroll;
  flex-flow: row wrap;
  max-width: 596px;
  max-height: 555px;
}

.lista-pokemon-view::-webkit-scrollbar{

  width: 12px;
  height: 543px;
  background: #FFFFFF 0% 0% no-repeat padding-box;
  border-radius: 9px;
  opacity: 1;
}

.lista-pokemon-view::-webkit-scrollbar-thumb{
  width: 12px;
  height: 54px;
  background: #DBDBDB 0% 0% no-repeat padding-box;
  border-radius: 6px;
  opacity: 1;
}

.texto-total{
  text-align: left;
  margin-left:15px;
  font: normal normal bold 14px/19px Roboto;
  letter-spacing: 0px;
  color: #00A7FD;
  opacity: 1;
}
`;