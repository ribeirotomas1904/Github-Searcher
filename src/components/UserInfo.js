import { Link } from 'react-router-dom';

import styled from 'styled-components';

import { GoMail } from 'react-icons/go';
import { FaRegBuilding, FaMapMarkerAlt, FaLink, FaTwitter } from 'react-icons/fa';
import { FiUsers } from 'react-icons/fi';

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
          {user.name && <UserName>{user.name}</UserName>}

          <UserLogin
            href={user.html_url}
            target="_blank"
            rel="noopener noreferrer"
          >
            {user.login}
          </UserLogin>

          {user.bio && <UserBio>{user.bio}</UserBio>}

          {user.company && (
            <p><FaRegBuilding /> <span>{user.company}</span></p>
          )}
          {user.location && (
            <p><FaMapMarkerAlt /> <span>{user.location}</span></p>
          )}
          {user.email && (
            <p><GoMail /> <span>{user.email}</span></p>
          )}
          {user.blog && (
            <p>
              <FaLink /> <a
                href={user.blog}
                target="_blank"
                rel="noopener noreferrer"
              >
                {user.blog}
              </a>
            </p>
          )}
          {user.twitter_username && (
            <p><FaTwitter /> <a
                href={`https://twitter.com/${user.twitter_username}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {user.twitter_username}
              </a>
            </p>
          )}

          <p>
            <FiUsers />  <span>
              <a
                href={`${user.html_url}?tab=followers`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {user.followers} followers
              </a> · <a
                href={`${user.html_url}?tab=following`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {user.following} following
              </a>
            </span>
          </p>

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

  a {
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }

  & > * {
    display: flex;
    align-items: center;
    overflow-wrap: anywhere;
  }

  & > *:not(:last-child) {
    margin-bottom: 7.5px;
  }

  svg {
    margin-right: 5px;
    flex-shrink: 0;
  }
`;

const UserName = styled.p`
  font-size: 1.3rem;
  font-weight: 500;
  margin-bottom: 0px !important;
`;

const UserLogin = styled.a`
  color: #586069;
`;

const UserBio = styled.p`
  margin-top: 7.5px !important;
  margin-bottom: 15px !important;
`;

export default UserInfo;
