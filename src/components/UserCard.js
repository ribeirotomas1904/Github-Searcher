import { Link } from 'react-router-dom';

const UserCard = ({ user }) => {
  return (
    <Link to={`/users/${user.login}`} style={{ margin: '10px' }}>
      <img
        src={user.avatar_url}
        alt={user.login}
        style={{ width: '200px', height: 'auto' }}
      />
      <p>{user.login}</p>
    </Link>
  );
};

export default UserCard;
