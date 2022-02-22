
import styled, { css } from 'styled-components'


export const CustomBttn = styled.button`
  background : black;
  color : white;
  border-radius : 10px;
  font-weight : bolder;
  padding : 5px 25px ;
  border:1px solid;
  text-align : center;

  ${props => props.cancle && css`
    background : red;
  `}

  ${props => props.afterSelect && css`
    background : #00C443;
  `}

  ${props => props.book && css`
    background : rgba(23, 57, 232, 1);
  `}
`

export const Lable = styled.label`
  color : black;
  padding-top : 5px;
  padding-bottom : 10px;
`
export const Input = styled.input`
  border-radius : 5px;
  border : 2px solid;
  padding : 5px;
  margin-bottom: 5px;

`

export const Heading2 = styled.h1`
  font-size : 25px;
  text-align:center;
  /* padding : 10px 0px; */
  font-weight : bolder;
  color: rgb(0, 30, 98);
`
