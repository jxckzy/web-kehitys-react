import {Link, Outlet} from 'react-router';

const Layout = () => {
  const sitename = 'My App';
  const style = {
    color: 'red',
    fontSize: '24px',
  };
  return (
    <>
      <header>
        <h1 style={style}>{sitename}</h1>
        <p className="subtitle">Tässä on yksinkertainen sovellukseni.</p>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/profile">Profile</Link>
            </li>
            <li>
              <Link to="/upload">Upload</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <p>&copy; Illia 2026</p>
      </footer>
    </>
  );
};

export default Layout;
