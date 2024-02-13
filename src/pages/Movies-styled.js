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

  export const ListCard = styled.li`
  &:hover{
  scale: 1.1;
}
`;

export const Img = styled.img`
width: 250px;
`;

export const NameMovieHome = styled.p`
max-width: 250px;
color: white;
text-decoration: none;

`;

export const TitleHome = styled.h1`
  text-align: center;
  padding-top: 20px;
  padding-bottom: 20px;
  color: white;
`;

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// SEARCH MOVIE

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  text-align: center;
  width: 200px;
  height: 355px;

  :hover {
    scale: 1.1;
  }
`;

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  padding: 0;
  margin: 0;
  `;

  export const Li = styled.li`
    list-style: none;
  padding: 15px;
  margin: 0;

  &:hover{
  scale: 1.1;
}
  `;

  export const TitleMovie = styled.p`
  max-width: 250px;
  `;