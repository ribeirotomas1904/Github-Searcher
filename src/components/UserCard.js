import { Card, Avatar, UserInfo } from './';

const UserCard = ({ user, type, style }) => {
  if (JSON.stringify(user) === JSON.stringify({})) {
    return null;
  }

  return (
    <Card
      style={{
        maxWidth: type === 'min' ? '150px' : '300px',
        padding: type === 'min' ? '10px' : '20px',
        ...style,
      }}
    >
      <Avatar
        src={user.avatar_url}
        alt={user.login}
        size={type === 'min' ? 'md' : 'lg'}
        style={{ marginBottom: '10px' }}
      />
      <UserInfo user={user} type={type} />
    </Card>
  );
};

export default UserCard;
