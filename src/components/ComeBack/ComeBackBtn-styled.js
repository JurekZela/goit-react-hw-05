import { styled } from 'styled-components';
import { Link } from 'react-router-dom';

export const GoBackPage = styled(Link)`
list-style: none;
text-decoration: none;
`;

export const Button = styled.button`
cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  width: 100px;
  margin: 10px;
  padding: 5px;
  border: none;
  background: transparent;
  border-radius: 4px;
color: white;
outline: 2px solid white;

&:hover {
  color: black;
  background-color: yellow; 
  outline: 1px solid white;
}
`;