//styles
import './OnlineUsers.css';
import { useCollection } from '../hooks/useCollection';
import Avatar from './Avatar';

export default function OnlineUsers() {
  const { error, documents } = useCollection('users');

  return (
    <div className="user-list">
      <h2>All Users</h2>
      {error && <div className="error">{error}</div>}
      {documents &&
        documents.map((user) => (
          <div key={user.id} className="user-list-item">
            <span className={user.online ? 'status' : ''}></span>
            <span>{user.displayName}</span>
            <div className="avatar">
              <Avatar src={user.photoURL} />
            </div>
          </div>
        ))}
    </div>
  );
}
