import { NavLink } from "react-router-dom";
import Button from "./Button";
import MiniSpinner from "./MiniSpinner";
import { useLogout } from "../features/authentication/useLogout";

function AccountNav() {
  const { isLoading, logout } = useLogout();
  return (
    <div className="col-span-1 flex flex-col ">
      <h5 className="capitalize font-medium">Manage My Account</h5>
      <div className="ml-4 mt-2 space-y-2 font-normal">
        <NavLink
          to="profile"
          className={({ isActive }) =>
            isActive ? "account-active" : "account-inactive"
          }
        >
          <span>Profile</span>
        </NavLink>
        <NavLink
          to="address"
          className={({ isActive }) =>
            isActive ? "account-active" : "account-inactive"
          }
        >
          <span>Address Book</span>
        </NavLink>
        <NavLink
          to="payment"
          className={({ isActive }) =>
            isActive ? "account-active" : "account-inactive"
          }
        >
          <span>My Payment Options</span>
        </NavLink>
      </div>
      <h5 className="capitalize font-medium mt-3">Manage My orders </h5>
      <div className="ml-4 mt-2 space-y-2 font-normal">
        <NavLink
          to="orders"
          className={({ isActive }) =>
            isActive ? "account-active" : "account-inactive"
          }
        >
          <span> my orders</span>
        </NavLink>
        <NavLink
          to="returns"
          className={({ isActive }) =>
            isActive ? "account-active" : "account-inactive"
          }
        >
          <span>my returns</span>
        </NavLink>
        <NavLink
          to="cancals"
          className={({ isActive }) =>
            isActive ? "account-active" : "account-inactive"
          }
        >
          <span>My Cancellations</span>
        </NavLink>
      </div>
      <h5 className="capitalize font-medium mt-3"> My wishlist </h5>
      <div className="mt-auto mb-2">
        <Button
          title={isLoading ? <MiniSpinner /> : "logout"}
          onClick={logout}
        />
      </div>
    </div>
  );
}

export default AccountNav;
