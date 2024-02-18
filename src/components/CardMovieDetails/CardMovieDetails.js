import { styled } from 'styled-components';

export const Cards = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
  text-align: center;
  gap: 30px;
  margin-top: 30px;
  list-style: none;
  padding-bottom: 15px;
  border-bottom: 1px solid white;
  color: black;
  `;

  export const ListCard = styled.li`
  &:hover{
  scale: 1.1;
}
`;

export const NameMovieHome = styled.p`
max-width: 250px;
color: white;
text-decoration: none;

`;

export const Img = styled.img`
width: 250px;
`;

