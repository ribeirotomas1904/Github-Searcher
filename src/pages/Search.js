import { useEffect, useState } from "react";
import { useHistory, Link } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { getUsers } from '../store/ducks/users';

const Search = ({ location }) => {
  const initialQuery = location.search.split('=')[1];

  const [query, setQuery] = useState(initialQuery || '');
  const [queryInput, setQueryInput] = useState(initialQuery || '');
  
  const { users, isLoading, error } = useSelector(state => state.users);

  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    if (query) {
      history.push({
        search: `q=${query}`,
      });
      dispatch(getUsers({ query }));
    }
  }, [query, history, dispatch]);

  return (
    <div>
      <form onSubmit={(e) => {
        e.preventDefault();
        setQuery(queryInput);
      }}>
        <input
          type="text"
          value={queryInput}
          onChange={e => setQueryInput(e.target.value)}
        />
        <button>Search</button>
      </form>
      <div>
        {users.map(user => (
          <Link to={`/users/${user.login}`} key={user.id} style={{ marginTop: '30px' }}>
            <img
              src={user.avatar_url}
              alt={user.login}
              style={{ width: '100%', maxWidth: '200px', height: 'auto' }}
            />
            <p>{user.login}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Search;
