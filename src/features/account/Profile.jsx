import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { useUserSettings } from "./useUserSettings";
import Button from "../../ui/Button";
import Spinner from "../../ui/Spinner";
import { useUpdateUserSettings } from "./useUpdateUserSettings";
import { login } from "../../services/apiUser";
import MiniSpinner from "../../ui/MiniSpinner";
import toast from "react-hot-toast";
import { useUpdatePassword } from "./useUpdatePassword";
const passwordRegex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
function Profile() {
  const { user_settings, isLoading } = useUserSettings();
  const { updateUserSettings, isLoading: isLoadingUpdate } =
    useUpdateUserSettings();
  const { updatePassword, isLoading: isLoadingPassword } = useUpdatePassword();
  const [isLoadingCurrent, setIsloadingCurrent] = useState(false);
  const {
    watch,
    register,
    reset,
    formState: { errors },
    handleSubmit,
  } = useForm();

  function resetForm() {
    reset({
      firstName: user_settings?.firstName,
      lastName: user_settings?.lastName,
      email: user_settings?.email,
      address: user_settings?.address,
      newPassword: "",
      confirmNewPassword: "",
      currentPassword: "",
    });
  }

  useEffect(
    function () {
      resetForm();
    },
    [isLoading]
  );

  async function onSubmit(data) {
    try {
      setIsloadingCurrent(true);
      if (data?.newPassword && data?.confirmNewPassword) {
        const user = await login({
          email: user_settings?.email,
          password: data?.currentPassword,
        });
        if (!user) {
          toast.error("current password is incorrect");
          return;
        }
        updatePassword({ password: data?.newPassword });
      }
      if (
        data?.address !== user_settings?.address ||
        data?.firstName !== user_settings?.firstName ||
        data?.lastName !== user_settings?.lastName
      ) {
        updateUserSettings(
          {
            firstName: data?.firstName,
            lastName: data?.lastName,
            address: data?.address,
          },
          {
            onSuccess: () => {
              toast.success("user settings updated");
            },
          }
        );
      }
    } catch (error) {
      toast.error("current password is incorrect");
      return;
    } finally {
      setIsloadingCurrent(false);
    }
  }
  if (isLoading) return <Spinner />;

  return (
    <div>
      <h3 className="text-Secondary2 font-semibold capitalize text-lg mb-4">
        edit your profile
      </h3>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid grid-cols-2 gap-3"
      >
        <div role="input_group" className="flex flex-col space-y-2">
          <label className="capitalize" htmlFor="firstName">
            first Name
          </label>
          <input
            className=" focus:outline-none bg-Secondary p-2 text-Text1 max-md:w-full w-[70%]"
            id="firstName"
            name="firstName"
            type="text"
            {...register("firstName")}
          />
        </div>
        <div role="input_group" className="flex flex-col space-y-2">
          <label className="capitalize" htmlFor="lastName">
            last Name
          </label>
          <input
            className=" focus:outline-none bg-Secondary p-2 text-Text1 max-md:w-full w-[70%]"
            id="lastName"
            name="lastName"
            type="text"
            {...register("lastName")}
          />
        </div>
        <div role="input_group" className="flex flex-col space-y-2">
          <label className="capitalize" htmlFor="email">
            email
          </label>
          <input
            disabled
            className=" disabled:cursor-not-allowed focus:outline-none bg-Secondary p-2 text-Text1 max-md:w-full w-[70%]"
            id="email"
            name="email"
            type="text"
            {...register("email")}
          />
        </div>
        <div role="input_group" className="flex flex-col space-y-2">
          <label className="capitalize" htmlFor="address">
            address
          </label>
          <input
            className=" focus:outline-none bg-Secondary p-2 text-Text1 max-md:w-full w-[70%]"
            id="address"
            name="address"
            type="text"
            {...register("address")}
          />
        </div>
        <div
          role="input_group"
          className="flex flex-col space-y-4 col-span-full"
        >
          <label className="capitalize" htmlFor="password">
            Password Changes
          </label>
          <input
            className=" focus:outline-none placeholder:capitalize bg-Secondary p-2 text-Text1 w-[85%]"
            id="current password"
            name="address"
            type="password"
            placeholder="current password"
            {...register("currentPassword")}
          />
          <input
            className=" focus:outline-none placeholder:capitalize bg-Secondary p-2 text-Text1 w-[85%]"
            id="new password"
            name="address"
            type="password"
            placeholder="new password"
            {...register("newPassword", {
              pattern: {
                value: passwordRegex,
                message:
                  "password must contain at least 8 characters, one uppercase letter, one lowercase letter, one number and one special character",
              },
            })}
          />
          {errors?.newPassword && (
            <span className="text-red-500 text-sm">
              {errors.newPassword.message}
            </span>
          )}
          <input
            className=" focus:outline-none placeholder:capitalize bg-Secondary p-2 text-Text1 w-[85%]"
            id="confirm new password"
            name="address"
            type="password"
            placeholder=" confirm new password"
            {...register("confirmNewPassword", {
              validate: (value) =>
                value === watch("newPassword") || "passwords do not match",
            })}
          />
          {errors?.confirmNewPassword && (
            <span className="text-red-500 text-sm">
              {errors.confirmNewPassword.message}
            </span>
          )}
        </div>
        <div className=" max-md:col-start-1 max-md:col-span-2 max-md:justify-end col-start-2 col-span-1 flex items-center gap-10 mt-4">
          <button type="button" onClick={resetForm}>
            cancal
          </button>

          <Button
            title={
              isLoadingCurrent || isLoadingUpdate || isLoadingPassword ? (
                <MiniSpinner />
              ) : (
                "save changes"
              )
            }
          />
        </div>
      </form>
    </div>
  );
}

export default Profile;
