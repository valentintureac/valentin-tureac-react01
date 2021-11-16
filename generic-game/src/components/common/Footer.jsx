import { Link, NavLink } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className="border border-top p-4">
      <div className="container mx-auto">
        <section className="flex justify-between">
          <header>
            <h1>
              <Link to="/">WORD GAME</Link>
            </h1>
            <p className="text-xs">Crafted by Valentin with ♥</p>
          </header>

          <ul>
            <li>
              <NavLink
                to="/profile"
                title="Hello ${username}, go to profile"
                className=""
                activeClassName="text-red-500"
              >
                Profile
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/play"
                title="Play now"
                className=""
                activeClassName="text-red-500"
              >
                Play
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/ranks"
                title="See Users"
                className={(isActive) => {
                  return isActive ? 'text-red-500 ' : '';
                }}
                // activeClassName="text-red-500"
              >
                Ranks
              </NavLink>
            </li>
          </ul>
        </section>
      </div>
    </footer>
  );
};

export default Footer;
