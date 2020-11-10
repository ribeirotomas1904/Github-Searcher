import api from '../../services/api';

const GET_USERS_STARTED = 'users/GET_USERS_STARTED';
const GET_USERS_SUCCESS = 'users/GET_USERS_SUCCESS';
const GET_USERS_FAILURE = 'users/GET_USERS_FAILURE';

const initialState = {
  users: [],
  isLoading: false,
  error: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USERS_STARTED:
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case GET_USERS_SUCCESS:
      return {
        ...initialState,
        users: action.users,
      };
    case GET_USERS_FAILURE:
      return {
        ...initialState,
        error: action.error,
      };
    default:
      return state;
  }
};

const getUsersStarted = () => {
  return {
    type: GET_USERS_STARTED,
  };
};

const getUsersSuccess = (users) => {
  return {
    type: GET_USERS_SUCCESS,
    users,
  };
};

const getUsersFailure = (error) => {
  return {
    type: GET_USERS_FAILURE,
    error,
  };
};

export const getUsers = ({ query }) => {
  return async (dispatch) => {
    dispatch(getUsersStarted());
    try {
      const { data } = await api.getUsers({ query });

      if (data.total_count === 0) {
        throw new Error(`No results found for: "${query}"`);
      } else {
        dispatch(getUsersSuccess(data.items));
      }
    } catch (error) {
      if (!error.response) {
        dispatch(getUsersFailure(error.message));
      } else {
        dispatch(getUsersFailure(error.response.data.message));
      }
    }
  };
};

export default reducer;
