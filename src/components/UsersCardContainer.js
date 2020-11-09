import { useSelector } from 'react-redux';

import styled from 'styled-components';
import { UserCard } from './'
import ContentLoader from 'react-content-loader';

const UsersCardContainer = () => {
  const { users, isLoading } = useSelector(state => state.users);

  return (
    <Container>
      {users.map(user => {
        return isLoading ? (
          <UserCardSkeleton key={user.id} />
        ) : (
          <UserCard
            key={user.id}
            user={user}
            type="min"
            style={{ margin: '10px' }}
          />
        );
      })}
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
`;

const UserCardSkeleton = () => (
  <div
    style={{
      backgroundColor: 'white',
      margin: '10px',
      border: '1px solid #e1e4e8',
      borderRadius: '6px',
    }}
  >
    <ContentLoader
      height={150}
      width={150}
      viewBox="0 0 150 160"
    >
      <circle cx="75" cy="60" r="50" />
      <rect x="10" y="130" rx="0" ry="0" width="130" height="20" />
    </ContentLoader>
  </div>
)

export default UsersCardContainer;
