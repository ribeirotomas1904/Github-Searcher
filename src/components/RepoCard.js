import styled from 'styled-components';
import { Card } from './';
import { GoRepoForked, GoStar, GoLaw } from 'react-icons/go';
import { FaCode } from 'react-icons/fa';

import { formatDateDistanceToNow } from '../helpers/formatters';

const RepoCard = ({ repo }) => {
  return (
    <Card style={{ padding: '20px' }}>
      <Container>
        <RepoNameWrapper>
          <RepoName
            href={repo.html_url}
            target="_blank"
            rel="noopener noreferrer"
          >
            {repo.name}
          </RepoName>

          <span>{repo.fork && '(Forked)'}</span>  
        </RepoNameWrapper>

        {repo.description && (
          <RepoDescription>{repo.description}</RepoDescription>
        )}

        <IconsContainer>
          {repo.language && (
            <p><FaCode /> <span>{repo.language}</span></p>
          )}
          {repo.stargazers_count !== 0 && (
            <p><GoStar /> <span>{repo.stargazers_count}</span></p>
          )}
          {repo.forks_count !== 0 && (
            <p><GoRepoForked /> <span>{repo.forks_count}</span></p>
          )}
          {repo.license?.name && (
            <p><GoLaw /> <span>{repo.license?.name}</span></p>
          )}
          <p>{`Created ${formatDateDistanceToNow(repo.created_at)}`}</p>
          <p>{`Updated ${formatDateDistanceToNow(repo.updated_at)}`}</p>
        </IconsContainer>
      </Container>
    </Card>
  );
};

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  & > *:not(:last-child) {
    margin-bottom: 10px;
  }
`;

const IconsContainer = styled.div`
  display: flex;
  align-items: center;

  & > * {
    display: flex;
    align-items: center;

  }

  & > * > *:not(:last-child) {
    margin-right: 2px;
  }

  & > *:not(:last-child) {
    margin-right: 15px;
  }
`;

const RepoName = styled.a`

`;

const RepoNameWrapper = styled.a`
  display: flex;

  & > *:not(:last-child) {
    margin-right: 5px;
  }
`;

const RepoDescription = styled.a`
  color: #586069;
`;

export default RepoCard;
