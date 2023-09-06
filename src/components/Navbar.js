import { Link } from 'react-router-dom';
import { useLogout } from '../hooks/useLogout';
import { useAuthContext } from '../hooks/useAuthContext';

//styles & images
import './Navbar.css';
import hub from '../assets/hub.svg';
import { AuthContext } from '../context/AuthContext';

export default function Navbar() {
  const { logout, error, isPending } = useLogout();
  const { user } = useAuthContext();

  return (
    <div className="navbar">
      <ul>
        <li className="logo">
          <img src={hub} alt="hub logo" />
          <span>Collab Hub</span>
        </li>

        {!user && (
          <>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/signup">Signup</Link>
            </li>
          </>
        )}
        {user && (
          <>
            {!isPending && (
              <button className="btn" onClick={logout}>
                Logout
              </button>
            )}
            {isPending && (
              <button className="btn" disabled>
                Logging out...
              </button>
            )}
          </>
        )}
      </ul>
    </div>
  );
}
