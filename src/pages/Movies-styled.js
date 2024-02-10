import { styled } from 'styled-components';

export const Wrap = styled.div`
 display: flex;
 justify-content: center;
`;

export const WrapContainer  = styled.div`
 margin-right: 30px;
`;

export const Cards = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
  text-align: center;
  gap: 30px;
  list-style: none;
  padding-bottom: 15px;
  border-bottom: 1px solid black;
  color: black;
  `;

  export const Card = styled.li`
  `;

export const Img = styled.img`
width: 250px;
`;

export const NameMovieHome = styled.p`
max-width: 250px;
color: white;

&:hover{
  color: yellow;
}
`;

export const TitleHome = styled.h1`
  text-align: center;
  padding-top: 20px;
  padding-bottom: 20px;
  color: white;
`;