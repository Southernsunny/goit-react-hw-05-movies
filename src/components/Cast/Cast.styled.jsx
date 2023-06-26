import styled from '@emotion/styled';

export const CastInfo = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 50px;
`;

export const ActorInfo = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 200px;
  gap: 10px;
`;

export const GalleryImg = styled.img`
  width: 100%;
  height: 260px;
  object-fit: cover;
  border-radius: 10px;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    transform: scale(1.03);
    cursor: pointer;
  }
`;

export const Name = styled.p`
  font-size: 26px;
  text-align: center;
  color: #f3b757;
`;

export const Character = styled.p`
  font-size: 20px;
  text-align: center;
`;
