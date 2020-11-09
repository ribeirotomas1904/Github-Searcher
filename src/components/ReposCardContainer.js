import { useSelector } from 'react-redux';

import styled from 'styled-components';
import { RepoCard } from './'

const ReposCardContainer = () => {
  const { repos } = useSelector(state => state.user);

  return (
    <Container>
      {repos.map(repo => (
        <RepoCard
          key={repo.id}
          repo={repo}
        />
      ))}
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  & > *:not(:last-child) {
    margin-bottom: 20px;
  }
`;

export default ReposCardContainer;
