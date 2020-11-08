import { useSelector } from 'react-redux';

import styled from 'styled-components';
import { UserCard } from './'

const UsersCardContainer = () => {
  const { users, isLoading, error } = useSelector(state => state.users);

  return (
    <Container>
      {users.map(user => (
        <UserCard key={user.id} user={user} />
      ))}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export default UsersCardContainer;
