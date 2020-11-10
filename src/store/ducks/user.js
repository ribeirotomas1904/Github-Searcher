import api from '../../services/api';

const GET_USER_STARTED = 'user/GET_USER_STARTED';
const GET_USER_SUCCESS = 'user/GET_USER_SUCCESS';
const GET_USER_FAILURE = 'user/GET_USER_FAILURE';

const initialState = {
  user: {},
  repos: [],
  isLoading: false,
  error: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER_STARTED:
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case GET_USER_SUCCESS:
      return {
        ...initialState,
        user: action.user,
        repos: action.repos,
      };
    case GET_USER_FAILURE:
      return {
        ...initialState,
        error: action.error,
      };
    default:
      return state;
  }
};

const getUserStarted = () => {
  return {
    type: GET_USER_STARTED,
  };
};

const getUserSuccess = (user, repos) => {
  return {
    type: GET_USER_SUCCESS,
    user,
    repos,
  };
};

const getUserFailure = (error) => {
  return {
    type: GET_USER_FAILURE,
    error,
  };
};

export const getUser = ({ username }) => {
  return async (dispatch) => {
    dispatch(getUserStarted());
    try {
      const [{ data: user }, { data: repos }] = await api.getUser({ username });
      dispatch(getUserSuccess(user, repos));
    } catch (error) {
      if (!error.response) {
        dispatch(getUserFailure(error.message));
      } else {
        dispatch(getUserFailure(error.response.data.message));
      }
    }
  };
};

export default reducer;
