import API from '../config/api';

const api = {
  getUsers: ({ query }) => (
    API.get(`/search/users?q=${query}`)
  ),
};

export default api;
