import SignupForm from "../features/authentication/SignupForm";

function signup() {
  return (
    <div className="flex items-center">
      <img
        src="/login-background.jpg "
        className=" w-[55%] relative left-[-9%]"
      />
      <SignupForm />
    </div>
  );
}

export default signup;
