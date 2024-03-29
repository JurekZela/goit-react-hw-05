import { styled } from 'styled-components';

export const CastContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  text-align: center;
  padding-top: 30px;
  padding-bottom: 30px;
  gap: 20px;
`;

export const CastCard = styled.li`
  :hover {
    scale: 1.1;
  }
`;

export const Paragraf = styled.p`
  margin: 5px;
  max-width: 150px;
`;