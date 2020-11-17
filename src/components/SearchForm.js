import { useEffect, useState } from "react";
import { useHistory, withRouter } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { getUsers } from '../store/slices/users';

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
      <Label htmlFor="query">
        Github Username
      </Label>
      <InputWrapper>
        <Input
          id="query"
          type="text"
          value={queryInput}
          onChange={e => setQueryInput(e.target.value)}
          autoFocus
        />
        <Button
          type="submit"
          disabled={isLoading}
        >
          Search
        </Button>
      </InputWrapper>
    </Form>
  );
};

const Form = styled.form`
  width: 100%;
  max-width: ${pageWidthDelimiter};
  display: flex;
  flex-direction: column;
`;
const Label = styled.label`
  padding-left: 2px;
`;
const InputWrapper = styled.div`
  margin-top: 5px;
`;
const Input = styled.input`
  min-height: 36px;
  padding: 3px 9px;
  color: #24292e;
  border: 1px solid #e1e4e8;
  border-radius: 6px 0 0 6px;
  box-shadow: rgba(27, 31, 35, 0.04) 0px 1px 0px 0px, rgba(255, 255, 255, 0.25) 0px 1px 0px 0px inset;
  font-size: 1rem;

  &:focus {
    border-color: #0366d6;
    outline: none;
  }
`;
const Button = styled.button`
  min-height: 36px;
  padding: 3px 9px;
  color: #24292e;
  background: none;
  background-color: #fafbfc;
  border: 1px solid rgba(27, 31, 35, 0.15);
  border-left: none;
  border-radius: 0 6px 6px 0;
  box-shadow: rgba(27, 31, 35, 0.04) 0px 1px 0px 0px, rgba(255, 255, 255, 0.25) 0px 1px 0px 0px inset;
  font-size: 1rem;

  &:hover {
    background-color: #f3f4f6;
  }

  &:active {
    background-color: #edeff2;
    outline: none;
  }
`;

export default withRouter(SearchForm);
