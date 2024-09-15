import { Link } from "react-router-dom";
import Button from "../../ui/Button";
import { useLogin } from "./useLogin";
import { useState } from "react";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
function LoginForm() {
  const { login } = useLogin();
  const [email, setEmail] = useState("mahmoud2030m@gmail.com");
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("Mahmoud1234!@");

  function handleSubmit(e) {
    e.preventDefault();
    if (!email || !password) return;
    login({
      email,
      password,
    });
  }

  return (
    <div className="py-8 w-full px-3  lg:px-16   lg:basis-[40%] ">
      <h2 className=" capitalize font-semibold text-3xl mb-2">
        {" "}
        Login to E shop
      </h2>
      <p className="mb-6">Enter your details below</p>
      <form noValidate onSubmit={handleSubmit} className="space-y-9 mb-6">
        <div>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full placeholder:capitalize focus:outline-none py-2 border-b border-Text2"
            type="email"
            placeholder="Email or Phone Number"
          />
        </div>
        <div className="relative">
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full placeholder:capitalize focus:outline-none py-2 border-b border-Text2"
            type={showPassword ? "text" : "password"}
            placeholder="Password"
          />
          <span className=" cursor-pointer transition-all duration-100 hover:text-Secondary2 absolute top-[50%] translate-y-[-50%] right-4">
            {showPassword ? (
              <FaEyeSlash onClick={() => setShowPassword(false)} />
            ) : (
              <FaEye onClick={() => setShowPassword(true)} />
            )}
          </span>
        </div>
        <div className="text-center flex justify-between items-center">
          <Button title="log in" />
          <Link className="text-red-600" to="/signup">
            {" "}
            forget password ?
          </Link>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;
