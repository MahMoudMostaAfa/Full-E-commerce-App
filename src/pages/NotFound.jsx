import { useNavigate } from "react-router-dom";
import Button from "../ui/Button";
function NotFound() {
  const navigate = useNavigate();
  return (
    <div className="h-screen flex justify-center items-center flex-col space-y-5">
      <h1 className="font-bold text-7xl">404 Not Found</h1>
      <p>Your visited page not found. You may go home page.</p>
      <Button title="Back to home page" onClick={() => navigate("/")} />
    </div>
  );
}

export default NotFound;
