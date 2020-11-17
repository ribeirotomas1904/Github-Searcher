import { useEffect } from "react";
import { useParams } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { getUser } from "../store/slices/user";
// import { getUser } from "../store/ducks/user";

import styled from 'styled-components';

import {
  Navbar,
  PageWrapper,
  UserCard,
  ReposCardContainer,
  PageLoader,
  ErrorMessage,
} from '../components';

import { pageWidthDelimiter } from "../constants/styles";

const UserDetails = () => {
  const { username } = useParams();
  const {
    user,
    isLoading,
    error,
  } = useSelector(state => state.user);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUser({ username }))
  }, [username, dispatch]);

  if (isLoading) {
    return <PageLoader />;
  }

  return (
    <>
      <Navbar />
      <PageWrapper>
        <Container>
          {error ? (
            <ErrorMessage error={error} />
          ) : (
            <>
              <UserCard user={user} />
              <ReposCardContainer />
            </>
          )}
        </Container>
      </PageWrapper>
    </>
  );
};

const Container = styled.div`
  display: flex;
  align-items: flex-start;
  width: 100%;
  max-width: ${pageWidthDelimiter};

  & > *:not(:last-child) {
    margin-right: 20px;
  }

  @media (max-width: 900px) {
    flex-direction: column;
    align-items: center;

    & > *:not(:last-child) {
      margin-right: 0;
      margin-bottom: 20px;
    }
  }
`;

export default UserDetails;
