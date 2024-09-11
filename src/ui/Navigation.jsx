import { NavLink } from "react-router-dom";

function Navigation({ setIsMenuOpen, isMenuOpen }) {
  return (
    <ul className=" flex flex-col lg:flex-row gap-y-8 lg:gap-y-0 lg:space-x-8 items-center  justify-between">
      <li>
        <NavLink
          to="/"
          onClick={() => {
            isMenuOpen && setIsMenuOpen(false);
          }}
          className={({ isActive }) =>
            isActive ? "main-active" : "main-inactive"
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="contact"
          onClick={() => {
            isMenuOpen && setIsMenuOpen(false);
          }}
          className={({ isActive }) =>
            isActive ? "main-active" : "main-inactive"
          }
        >
          contact
        </NavLink>
      </li>
      <li>
        <NavLink
          onClick={() => {
            isMenuOpen && setIsMenuOpen(false);
          }}
          to="about"
          className={({ isActive }) =>
            isActive ? "main-active" : "main-inactive"
          }
        >
          about
        </NavLink>
      </li>
      <li>
        <NavLink
          onClick={() => {
            isMenuOpen && setIsMenuOpen(false);
          }}
          to="signup"
          className={({ isActive }) =>
            isActive ? "main-active" : "main-inactive"
          }
        >
          sign up
        </NavLink>
      </li>
    </ul>
  );
}

export default Navigation;
