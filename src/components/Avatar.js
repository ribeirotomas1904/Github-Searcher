import styled from 'styled-components';

const Avatar = styled.img`
  width: 100%;
  max-width: ${({ size }) => {
    switch (size) {
      case 'sm':
        return '50px';
      case 'md':
        return '100px';
      case 'lg':
        return '150px';
      default:
        return '100px';
    }
  }};
  height: auto;
  border-radius: 100%;
`;

export default Avatar;
