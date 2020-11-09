import { useEffect, useState } from "react";
import { useHistory, withRouter } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { getUsers } from '../store/ducks/users';

import styled from 'styled-components';
import { pageWidthDelimiter } from "../constants/styles";

const SearchForm = ({ location, ...rest }) => {
  const initialQuery = location.search.split('=')[1];

  const [query, setQuery] = useState(initialQuery || '');
  const [queryInput, setQueryInput] = useState(initialQuery || '');
  
  const { isLoading } = useSelector(state => state.users);

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
    <Form
      onSubmit={(e) => {
        e.preventDefault();
        setQuery(queryInput);
      }}
      {...rest}
    >
      <input
        type="text"
        value={queryInput}
        onChange={e => setQueryInput(e.target.value)}
        autoFocus
      />
      <button
        type="submit"
        disabled={isLoading}
      >
        Search
      </button>
    </Form>
  );
};

const Form = styled.form`
  width: 100%;
  max-width: ${pageWidthDelimiter};
`;

export default withRouter(SearchForm);
