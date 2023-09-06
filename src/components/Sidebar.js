import { NavLink } from 'react-router-dom';
import Avatar from './Avatar';
import { useAuthContext } from '../hooks/useAuthContext';

//syles & images
import './Sidebar.css';
import dashboard_icon from '../assets/dash_icon.svg';
import add_icon from '../assets/add_icon.svg';

export default function Sidebar() {
  const { user } = useAuthContext();
  const handleAvaClick = () => {
    console.log('edit avatar');
  };

  return (
    // authisReady conditional goes here
    <div className="sidebar">
      <div className="sidebar-content">
        <div className="user">
          {user && (
            <>
              <Avatar src={user.photoURL} handleAvaClick={handleAvaClick} />
              <p>Hello, {user.displayName}</p>
            </>
          )}
        </div>
        <nav className="links">
          <ul>
            <li>
              <NavLink to="/">
                <img src={dashboard_icon} alt="dasboard icon" />
                <span>Dashboard</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/create">
                <img src={add_icon} alt="add icon" />
                <span>New Project</span>
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
