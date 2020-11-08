import styled from 'styled-components';

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: calc(100vh - 72px); // 100vh - NavbarWrapper height
  padding: 20px;

  background-color: #f6f8fa;
`;

export default PageWrapper;
