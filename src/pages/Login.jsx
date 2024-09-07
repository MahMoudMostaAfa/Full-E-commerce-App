import LoginForm from "../features/authentication/LoginForm";

function Login() {
  return (
    <div className="flex items-center">
      <img
        src="/login-background.jpg "
        className=" w-[55%] relative left-[-9%]"
      />
      <LoginForm />
    </div>
  );
}

export default Login;
