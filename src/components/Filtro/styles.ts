import styled from "styled-components";

export const MainCard = styled.div`
margin-top:100px;

.div-intervalo{
  display:flex;
  justify-content:space-between;
  @media(max-width:720px){
    justify-content:space-around;
  }
}

.titulo-filtro{
  margin:5px;
  padding-top: 30px;
  margin-left:15px;
  display:flex;
  justify-content: left;
  align-items: center;
  text-align: left;
  font: normal normal bold 35px/46px Roboto;
  letter-spacing: 0px;
  color: #333333;
  opacity: 1;
}

.card-filtro{
  width: 429px;
  height: 556px;
  background: #F4F4F4 0% 0% no-repeat padding-box;
  border-radius: 50px 0px 0px 50px;
  opacity: 1;
}

.maxCP-min{
  font-weight:700;
  //margin-left:5px;
  display:flex;
  text-align:center;
  justify-content: center;
  align-items: center;
  border: 2px solid #DBDBDB;
  border-radius: 10px;
  opacity: 1;
  width: 77px;
  height: 34px;
}

.maxCP-max{
  font-weight:700;
  //margin-left: 100px;
  display:flex;
  text-align:center;
  justify-content: center;
  align-items: center;
  border: 2px solid #DBDBDB;
  border-radius: 10px;
  opacity: 1;
  width: 77px;
  height: 34px;
}
.types-label{
  margin-left:15px;
  padding-top:5px;
  text-align: left;
  font: normal normal normal 14px/19px Roboto;
  letter-spacing: 0px;
  color: #939393;
  opacity: 1;
  margin-top:10px;
  margin-bottom:15px;
}
`;