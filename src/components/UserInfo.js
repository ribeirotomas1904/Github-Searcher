import { Link } from 'react-router-dom';
import styled from 'styled-components';

const UserInfo = ({ user, type }) => {
  return (
    <Container>
      {type === 'min' ? (
        <Link
          to={`/users/${user.login}`}
          style={{ textAlign: 'center' }}
        >
          {user.login}
        </Link>
      ) : (
        <>
          <p>{user.name}</p>
          <a
            href={`https://github.com/${user.login}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            {user.login}
          </a>
        </>
      )}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  overflow-wrap: break-word;
`;

export default UserInfo;
