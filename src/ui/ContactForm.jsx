import { useForm } from "react-hook-form";
import Button from "./Button";
import { useMutation } from "@tanstack/react-query";
import { createMessage } from "../services/apiContact";
import toast from "react-hot-toast";
import MiniSpinner from "./MiniSpinner";
const emailRegex = /^[\w.%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
function ContactForm() {
  const { register, formState, reset, handleSubmit } = useForm();
  const { errors } = formState;
  const { isLoading, mutate } = useMutation({
    mutationFn: ({ email, name, message, phone }) =>
      createMessage({ email, name, message, phone }),
    onSuccess: () => {
      toast.success("Message sent successfully");
      reset();
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
  function onSubmit(data) {
    mutate(data);
  }
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="  grid gap-5 grid-cols-3 grid-rows-[auto_1fr_auto] h-full"
    >
      <input
        type="text"
        placeholder="your name*"
        className="  capitalize rounded-sm focus:outline-none p-2 bg-Secondary col-span-1 row-span-1 "
        name="name"
        {...register("name", {
          required: "this field is required",
        })}
      />
      <input
        type="email"
        placeholder="your email*"
        className="capitalize rounded-sm focus:outline-none p-2 bg-Secondary col-span-1 row-span-1"
        name="email"
        {...register("email", {
          required: "this field is required",
          pattern: {
            value: emailRegex,
            message: "Entered value does not match email format",
          },
        })}
      />
      <input
        type="text"
        placeholder="your phone*"
        className="capitalize rounded-sm focus:outline-none p-2 bg-Secondary col-span-1 row-span-1"
        name="name"
        {...register("phone", {
          required: "this field is required",
        })}
      />
      <textarea
        placeholder="your message*"
        className="focus:outline-none p-2 bg-Secondary row-start-2 row-span-1  col-span-full "
        name="message"
        {...register("message", {
          required: "this field is required",
          maxLength: {
            value: 500,
            message: "Max length is 500 characters",
          },
        })}
      />
      <div
        className="col-start-3 col-span-1 row-start-3 row-span-1 
       min-h-10  relative text-right"
      >
        {isLoading ? <MiniSpinner /> : <Button title="send message" />}
      </div>
    </form>
  );
}

export default ContactForm;
