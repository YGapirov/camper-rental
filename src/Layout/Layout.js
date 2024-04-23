import { Outlet } from 'react-router-dom';

import { Header, List, StyledNavLink, StyledItem } from './Layout.styled';

import { GlobalStyle } from 'GlobalStyle';

// import { StyledHeader, StyledList, StyledNavLink } from './Layout.styled';

export const Layout = () => {
  return (
    <>
      <Header>
        <nav>
          <List>
            <StyledItem>
              <StyledNavLink to="/">Home</StyledNavLink>
            </StyledItem>
            <StyledItem>
              <StyledNavLink to="/catalog">Catalog</StyledNavLink>
            </StyledItem>
            <StyledItem>
              <StyledNavLink to="/favorites">Favorite</StyledNavLink>
            </StyledItem>
          </List>
        </nav>
      </Header>
      <main>
        <Outlet />
      </main>
      <GlobalStyle />
    </>
  );
};
