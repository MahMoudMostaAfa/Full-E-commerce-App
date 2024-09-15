import LoginForm from "../features/authentication/LoginForm";

function Login() {
  return (
    <div className="flex max-lg:h-[calc(100vh-4rem)] justify-center w-full items-center">
      <img
        src="/login-background.jpg "
        className="max-lg:hidden w-[55%] relative left-[-9%]"
      />
      <LoginForm />
    </div>
  );
}

export default Login;
