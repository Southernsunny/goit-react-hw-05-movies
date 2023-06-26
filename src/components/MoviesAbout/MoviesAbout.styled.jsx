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
export const Container = styled.div`
  display: flex;
  gap:30px;
`;

export const MainTitle = styled.h2`
  font-size: 26px;
  text-align: start;
  color: #e8b67f;
  margin-bottom: 10px;
`;

export const Title = styled.h2`
  font-size: 22px;
  text-align: start;
  color: lightblue;
  margin-bottom: 10px;
    margin-top: 30px;

`;

export const Description = styled.div`
  padding: 10px 0;
  font-size: 18px;
  letter-spacing: 0.05em;
  color: white;
  width:850px;
`;

export const Image = styled.img`
  width: 400px;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;
`;

export const About = styled.ul`
  display: flex;
  gap:50px;
  font-size: 22px;
  margin:10px 0 30px;
  
`;

