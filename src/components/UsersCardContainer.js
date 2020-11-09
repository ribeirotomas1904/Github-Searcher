import { useSelector } from 'react-redux';

import styled from 'styled-components';
import { UserCard } from './'

const UsersCardContainer = () => {
  const { users, isLoading, error } = useSelector(state => state.users);

  return (
    <Container>
      {users.map(user => (
        <UserCard
          key={user.id}
          user={user}
          type="min"
          style={{ margin: '10px' }}
        />
      ))}
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

export default UsersCardContainer;
