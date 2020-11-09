import styled from 'styled-components';
import { Card } from './';
import { GoRepoForked, GoStar, GoLaw } from 'react-icons/go';
import { FaCode, FaRegClock } from 'react-icons/fa';

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
          <p>
            <FaRegClock />
            <span>{`Updated ${formatDateDistanceToNow(repo.updated_at)}`}</span>
          </p>
        </IconsContainer>
      </Container>
    </Card>
  );
};

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  overflow-wrap: break-word;

  & > *:not(:last-child) {
    margin-bottom: 10px;
  }
`;

const IconsContainer = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;

  & > * {
    display: flex;
    align-items: center;
    line-height: 1.5;

  }

  & > *:not(:last-child) {
    margin-right: 15px;
  }

  & > * > *:not(:last-child) {
    margin-right: 3px;
    flex-shrink: 0;
  }
`;

const RepoName = styled.a`

`;

const RepoNameWrapper = styled.p`
  display: flex;
  overflow-wrap: anywhere;

  & > *:not(:last-child) {
    margin-right: 5px;
  }
`;

const RepoDescription = styled.a`
  color: #586069;
`;

export default RepoCard;
