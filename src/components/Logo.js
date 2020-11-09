import styled from 'styled-components';
import { GoOctoface } from 'react-icons/go';

const Logo = () => {
  return (
    <Container>
      <GoOctoface size="2rem" style={{ flexShrink: '0' }} />
      <h1 className="LogoText">Github Searcher</h1>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;

  & > *:not(:last-child) {
    margin-right: 10px;
  }
`;

export default Logo;
