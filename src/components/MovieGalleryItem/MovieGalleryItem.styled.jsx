import styled from '@emotion/styled';

export const GalleryItem = styled.li`
  border-radius: 10px;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14),
    0px 2px 1px -1px rgba(0, 0, 0, 0.12);
`;

export const GalleryImg = styled.img`
  width: 100%;
  height: 500px;
  object-fit: cover;
  border-radius: 10px;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    transform: scale(1.03);
    cursor: pointer;
  }
`;

export const Title = styled.p`
  margin: 15px 0 5px;
  font-size: 24px;
  text-align: center;
  color:white;
`;

