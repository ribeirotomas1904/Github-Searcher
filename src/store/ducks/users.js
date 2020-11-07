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
        ...state,
        users: action.users,
        isLoading: false,
        error: null,
      };
    case GET_USERS_FAILURE:
      return {
        ...state,
        isLoading: false,
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
      dispatch(getUsersSuccess(data.items));
    } catch (error) {
      dispatch(getUsersFailure(error.response.data.message));
    }
  };
};

export default reducer;
