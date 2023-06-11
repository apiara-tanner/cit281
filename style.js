import styled from 'styled-components';
import {Header, Button, Card, Grid, Box, Text, Grommet, Heading, TextArea} from 'grommet';

export const BackGround = styled(Grommet) `
  background: white;
  width: 90%;
  hight: 100%;
  padding-left: 10%;
`

export const TopHeader = styled(Header) `
  background: white;
  font-size: 30px;
  font-weight: bold;
  text-align: left;
  color: #FF80B2;
`
export const MainP = styled(Card) `
  width: 98%;
  margin: 1%;
  padding: 1%;
  border-color: pink;
  border-style: solid;
  &:hover {
    border-color: #FF80B2;
  }
`

export const MainGrid = styled(Grid)`
display: grid;
background: white;
grid-template-columns: 1fr 1fr 1fr 1fr;
`

export const LilGrid = styled(Grid)`
display: grid;
background: white;
grid-template-columns: 1fr 2fr;
text-align: center;
  align: center;
  align-items: center;
  justify-items: center;

`


export const ButtonLink = styled(Button)`
background-color: #FF80B2;
padding: 2%;
color: white;
text-align: center;
border-radius: 30px;

`
