import { useEffect } from "react";
import { useParams } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { getUser } from "../store/ducks/user";

const UserDetails = () => {
  const { username } = useParams();
  const {
    user,
    repos,
    isLoading,
    error,
  } = useSelector(state => state.user);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUser({ username }))
  }, [username, dispatch]);

  if (isLoading) {
    return (
      <h1>Carregando...</h1>
    );
  }

  return (
    <div>
      <div>
        <img
          src={user.avatar_url}
          alt={user.login}
          style={{ width: '100%', maxWidth: '200px', height: 'auto' }}
        />
        <p>{user.login}</p>
      </div>
      <div>
        {repos.map(repo => (
          <div key={repo.id} style={{ marginTop: '20px' }}>
            <p>{repo.name}</p>
            <p>{repo.stargazers_count}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserDetails;
