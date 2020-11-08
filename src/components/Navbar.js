import styled from 'styled-components';
import { GoOctoface } from 'react-icons/go';
import { pageWidthDelimiter } from '../constants/styles';

const Navbar = () => {
  return (
    <NavWrapper>
      <Nav>
        <Logo>
          <GoOctoface size="2rem" />
          <h1 className="LogoText">Github Searcher</h1>
        </Logo>
      </Nav>
    </NavWrapper>
  );
};

const NavWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 0 20px;

  background-color: #24292e;
`;

const Nav = styled.nav`
  width: 100%;
  max-width: ${pageWidthDelimiter};
  display: flex;
  align-items: center;
  padding: 20px 0;

  color: white;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;

  & > *:not(:last-child) {
    margin-right: 10px;
  }
`;

export default Navbar;
