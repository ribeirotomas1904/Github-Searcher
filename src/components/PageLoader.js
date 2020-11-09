import styled from 'styled-components';
import { GoOctoface } from 'react-icons/go';

const PageLoader = () => {
  return (
    <Wrapper>
      <GoOctoface size="5em" />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: black;
  color: white;
`;

export default PageLoader;
