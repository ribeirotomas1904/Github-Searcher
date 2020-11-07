import API from '../config/api';

const api = {
  getUsers: ({ query }) => (
    API.get(`/search/users?q=${query}`)
  ),
  getUser: ({ username }) => (
    Promise.all([
      API.get(`/users/${username}`),
      API.get(`/users/${username}/repos`),
    ])
  ),
};

export default api;
