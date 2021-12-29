import styled from "styled-components";

export const Form = styled.form`
width:20%;
margin:0 auto;
border-radius:5px;
padding:20px 15px;
box-shadow: rgba(136, 165, 191, 0.48) 6px 2px 16px 0px, rgba(255, 255, 255, 0.8) -6px -2px 16px 0px;

h1 {
    color: #437E90;
    font-family: Roboto;
    font-size: 37px;
    font-weight: 100;
    margin-top:37%;
    margin-bottom: 0px;
  }
h3{
    margin:25px 0px;
    font-weight: 400;
}
.data{
     margin:70px 0px;
     display: flex;
     flex-direction: column;
     justify-content: space-around;
 }
input{
    border: 1px solid #DAE0E3;
    padding:10px 15px;
    border-radius:5px;
    margin:10px 0px;
    margin: 18px 0px;
}
button{
    border: 1px solid #DAE0E3;
    background-color:#fff;
    padding: 18px 20px;
}

`
