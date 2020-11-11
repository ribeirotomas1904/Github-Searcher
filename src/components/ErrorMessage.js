import styled from 'styled-components';

const ErrorMessage = ({ error }) => {
  return (
    <Container>
      {error}
    </Container>
  );
};

const Container = styled.p`
  width: 100%;
  text-align: center;
  font-size: 1.5rem;
  font-weight: 500;
  color: #f44336;
`;

export default ErrorMessage;
