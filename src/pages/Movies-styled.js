import { styled } from 'styled-components';

export const Wrap = styled.div`
 display: flex;
 justify-content: center;
`;

export const WrapContainer  = styled.div`
 margin-right: 30px;
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