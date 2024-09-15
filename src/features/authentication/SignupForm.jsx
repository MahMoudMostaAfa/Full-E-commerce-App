import { Link } from "react-router-dom";
import Button from "../../ui/Button";
import { useForm } from "react-hook-form";
import { useSignup } from "./useSignup";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
const passwordRegex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
const emailRegex = /^[\w.%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
function SignupForm() {
  const [showPassword, setShowPassword] = useState(false);
  const { isLoading, signup } = useSignup();
  const { register, formState, getValues, handleSubmit, reset } = useForm();
  const { errors } = formState;

  function onSubmit({ fullName, email, password }) {
    signup(
      { fullName, email, password },
      {
        onSettled: () => reset(),
      }
    );
  }
  return (
    <div className="py-8 w-full px-3  lg:px-16   lg:basis-[40%]  ">
      <h2 className=" capitalize font-semibold text-3xl mb-2">
        {" "}
        create an account
      </h2>
      <p className="mb-6">Enter your details below</p>
      <form
        noValidate
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-9 mb-6"
      >
        <div>
          <input
            className="w-full placeholder:capitalize focus:outline-none py-2 border-b border-Text2"
            type="text"
            placeholder="name"
            {...register("fullName", {
              required: "this field is required",
            })}
          />
          {errors?.fullName && (
            <span className="text-Secondary2  block mt-1 capitalize">
              {errors?.fullName?.message}
            </span>
          )}
        </div>
        <div>
          <input
            className="w-full placeholder:capitalize focus:outline-none py-2 border-b border-Text2"
            type="email"
            placeholder="Email or Phone Number"
            {...register("email", {
              required: "this field is required",
              pattern: {
                value: emailRegex,
                message: "invalid email address",
              },
            })}
          />
          {errors?.email && (
            <span className="text-Secondary2  block mt-1 capitalize">
              {errors?.email?.message}
            </span>
          )}
        </div>
        <div className="relative">
          <input
            className="w-full placeholder:capitalize focus:outline-none py-2 border-b border-Text2"
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            {...register("password", {
              required: "this field is required",
              pattern: {
                value: passwordRegex,
                message:
                  "password must contain at least 1 uppercase letter, 1 lowercase letter, 1 number and 1 special character",
              },
              minLength: {
                value: 8,
                message: "password must be at least 8 characters",
              },
            })}
          />
          {errors?.password && (
            <span className="text-Secondary2  block mt-1 capitalize">
              {errors?.password?.message}
            </span>
          )}

          <span className=" cursor-pointer transition-all duration-100 hover:text-Secondary2 absolute top-[50%] translate-y-[-50%] right-4">
            {showPassword ? (
              <FaEyeSlash onClick={() => setShowPassword(false)} />
            ) : (
              <FaEye onClick={() => setShowPassword(true)} />
            )}
          </span>
        </div>
        <div className="text-center">
          <Button title="create account" width={true} />
        </div>
      </form>
      <p className="text-Text2 text-center">
        Already have account? &nbsp;&nbsp;{" "}
        <Link
          to="/login"
          className="underline-offset-4 text-gray-600 underline"
        >
          Log in
        </Link>{" "}
      </p>
    </div>
  );
}

export default SignupForm;
