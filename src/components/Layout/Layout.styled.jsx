import styled from '@emotion/styled';

export const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 99;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 50px;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 0 0 10px 10px;
  max-width: calc(100vw - 200px);
  margin: 0 auto;
`;

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 50px;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 20px;
  max-width: calc(100vw - 200px);
  margin: 75px auto 75px auto;
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 30px;
`;
