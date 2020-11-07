import { useState } from "react";
import api from '../services/api';

const Home = () => {
  const [query, setQuery] = useState('');

  const getUsers = async (e) => {
    e.preventDefault();
    try {
      await api.getUsers({ query });
    } catch (error) {
      
    }
  };

  return (
    <div>
      <form onSubmit={getUsers}>
        <input
          type="text"
          value={query}
          onChange={e => setQuery(e.target.value)}
        />
        <button>Search</button>
      </form>
    </div>
  );
};

export default Home;
