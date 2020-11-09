import { Link } from 'react-router-dom';

import styled from 'styled-components';
import { pageWidthDelimiter } from '../constants/styles';

import { Logo } from '../components';

const Navbar = () => {
  return (
    <NavWrapper>
      <Nav>
        <Link to="/">
          <Logo />
        </Link>
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

  & > a {
    text-decoration: none;
    color: white;
  }
`;

export default Navbar;
