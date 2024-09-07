import { Outlet } from "react-router-dom";
import AccountNav from "../ui/AccountNav";
import { useUserSettings } from "../features/account/useUserSettings";
import Spinner from "../ui/Spinner";
function Account() {
  const { user_settings, isLoading } = useUserSettings();
  if (isLoading) return <Spinner />;
  return (
    <div className="grid grid-cols-4 gap-2">
      <AccountNav />
      <div className="col-span-3 ">
        <h1 className="text-2xl mb-4  text-end font-semibold">
          welcome ,
          <span className="text-Secondary2"> {user_settings.firstName}</span> !
        </h1>
        <div className=" shadow-md px-16 py-5 ">{<Outlet />}</div>
      </div>
    </div>
  );
}

export default Account;
