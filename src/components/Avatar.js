import styled from 'styled-components';

const sizeNameToPX = (sizeName) => {
  switch (sizeName) {
    case 'sm':
      return '50px';
    case 'md':
      return '100px';
    case 'lg':
      return '150px';
    default:
      return '100px';
  }
};

const Avatar = styled.img`
  width: ${({ size }) => sizeNameToPX(size)};
  height: ${({ size }) => sizeNameToPX(size)};
  border-radius: 100%;
`;

export default Avatar;
