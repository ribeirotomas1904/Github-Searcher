import { useState } from "react";

import { useDispatch, useSelector } from 'react-redux';
import { getUsers } from '../store/ducks/users';

const Home = () => {
  const [query, setQuery] = useState('');

  const { users, isLoading, error } = useSelector(state => state.users);
  const dispatch = useDispatch();

  return (
    <div>
      <form onSubmit={(e) => {
        e.preventDefault();
        dispatch(getUsers({ query }));
      }}>
        <input
          type="text"
          value={query}
          onChange={e => setQuery(e.target.value)}
        />
        <button>Search</button>
      </form>
      <div>
        {users.map(user => (
          <div key={user.id} style={{ marginTop: '30px' }}>
            <img
              src={user.avatar_url}
              alt={user.login}
              style={{ width: '100%', maxWidth: '200px', height: 'auto' }}
            />
            <p>{user.login}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
