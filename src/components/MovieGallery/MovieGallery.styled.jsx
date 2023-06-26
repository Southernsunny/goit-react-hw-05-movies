import styled from '@emotion/styled';

export const Gallery = styled.ul`
  display: grid;
  max-width: calc(100vw - 48px);
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  grid-gap: 20px;
  margin:20px 0 0;
`;

export const Title = styled.h2`
  font-size: 24px;
  color: white;
`;
