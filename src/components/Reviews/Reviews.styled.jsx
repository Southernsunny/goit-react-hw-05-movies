import styled from '@emotion/styled';

export const Review = styled.ul`
  padding: 10px;
  ${'' /* background-color: rgba(0, 0, 0, 0.5); */}
  background-color: rgba(	179,	202,	224, 0.8);
  border-radius: 20px;
  &:not(:last-child) {
    margin-bottom: 20px;
  }
`;

export const Author = styled.p`
  text-decoration: underline;
  font-size: 26px;
  text-align: start;
  color: #3a5b61;
  margin-bottom: 10px;
`;

export const Content = styled.p`
  font-size: 18px;
  letter-spacing: 0.05em;
  color: black;
`;

export const NoReview = styled.p`
  font-size: 26px;
  text-align: center;
  color: #f3b757;
`;