import { Link } from 'react-router-dom';
import { useAuth } from '../AuthProvider/AuthProvider';

const Navbar = () => {
  const { logout } = useAuth();
  return (
    <div>
      <ul style={{ margin: 0, padding: 0, border: '1px solid black' }}>
        <li style={{ display: 'inline-block', margin: 0, padding: '.5em' }}>
          <Link to='/dashboard'>Dashboard</Link>
        </li>
        <li style={{ display: 'inline-block', margin: 0, padding: '.5em' }}>
          <Link to='/test'>Test</Link>
        </li>
        <li style={{ display: 'inline-block', margin: 0, padding: '.5em' }}>
          <a href='' onClick={logout}>
            Logout
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
