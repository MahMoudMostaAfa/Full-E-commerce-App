import { NavLink } from "react-router-dom";

function Navigation() {
  return (
    <ul className="flex space-x-8 items-center ">
      <li>
        <NavLink
          to="/"
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
          className={({ isActive }) =>
            isActive ? "main-active" : "main-inactive"
          }
        >
          contact
        </NavLink>
      </li>
      <li>
        <NavLink
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
