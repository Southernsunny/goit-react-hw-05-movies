import { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import styled from '@emotion/styled';
import Loader from '../Loader';
import { Header, Main, Nav } from './Layout.styled';

export const Layout = () => {
  return (
    <>
      <Header>
        <Nav>
          <Link to="/">Home</Link>
          <Link to="/movies">Movies</Link>
        </Nav>
      </Header>

      <Main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </Main>
    </>
  );
};

const Link = styled(NavLink)`
  color: white;
  font-size: 22px;
  padding: 5px 10px;
  border: 1px solid transparent;
  border-radius: 20px;
  &.active {
    color: lightskyblue;
  }
  &:hover {
    border: 1px solid #759acb;
  }
`;