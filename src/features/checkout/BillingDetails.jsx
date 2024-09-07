const emailRegex = /^[\w.%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
function BillingDetails({ register, errors  }) {
  return (
    <div className=" col-span-2 row-span-2 space-y-4">
      <div className="flex flex-col gap-2 ">
        <label
          className="capitalize font-normal text-Text1"
          htmlFor="firstName"
        >
          first name<span className=" text-red-300">*</span>
        </label>
        <input
          className="focus:outline-none p-2 bg-Secondary"
          type="text"
          id="firstName"
          name="firstName"
          {...register("firstName", {
            required: "this field is requird",
          })}
        />
        {errors?.firstName && (
          <span className="text-red-500">{errors?.firstName?.message}</span>
        )}
      </div>
      <div className="flex flex-col gap-2 ">
        <label
          className="capitalize font-normal text-Text1"
          htmlFor="companyName"
        >
          company name
        </label>
        <input
          className="focus:outline-none p-2 bg-Secondary"
          type="text"
          id="companyName"
          name="companyName"
          {...register("companyName")}
        />
      </div>
      <div className="flex flex-col gap-2 ">
        <label
          className="capitalize font-normal text-Text1"
          htmlFor="streetAddress"
        >
          Street Address <span className="text-red-300">*</span>
        </label>
        <input
          className="focus:outline-none p-2 bg-Secondary"
          type="text"
          id="streetAddress"
          name="streetAddress"
          {...register("streetAddress", {
            required: "this field is required",
            minLength: {
              value: 20,
              message: "address must be at least 20 char",
            },
          })}
        />
        {errors?.streetAddress && (
          <span className="text-red-500">{errors?.streetAddress?.message}</span>
        )}
      </div>
      <div className="flex flex-col gap-2 ">
        <label className="capitalize font-normal text-Text1" htmlFor="floor">
          Apartment, floor, etc. (optional)
        </label>
        <input
          className="focus:outline-none p-2 bg-Secondary"
          type="text"
          id="floor"
          name="floor"
          {...register("floor")}
        />
      </div>
      <div className="flex flex-col gap-2 ">
        <label className="capitalize font-normal text-Text1" htmlFor="town">
          Town/City <span className="text-red-300">*</span>
        </label>
        <input
          className="focus:outline-none p-2 bg-Secondary"
          type="text"
          id="town"
          name="town"
          {...register("town", {
            required: "this field is required",
          })}
        />
        {errors?.town && (
          <span className="text-red-500">{errors?.town?.message}</span>
        )}
      </div>
      <div className="flex flex-col gap-2 ">
        <label className="capitalize font-normal text-Text1" htmlFor="phone">
          phone number <span className="text-red-300">*</span>
        </label>
        <input
          className="focus:outline-none p-2 bg-Secondary"
          type="text"
          id="phone"
          name="phone"
          {...register("phone", {
            required: "this field is required",
          })}
        />
        {errors?.phone && (
          <span className="text-red-500">{errors?.phone?.message}</span>
        )}
      </div>
      <div className="flex flex-col gap-2 ">
        <label className="capitalize font-normal text-Text1" htmlFor="email">
          Email Address <span className="text-red-300">*</span>
        </label>
        <input
          className="focus:outline-none p-2 bg-Secondary"
          type="email"
          id="email"
          name="email"
          {...register("email", {
            required: "this field is required",
            pattern: {
              value: emailRegex,
              message: "invalid email address",
            },
          })}
        />
        {errors?.email && (
          <span className="text-red-500">{errors?.email?.message}</span>
        )}
      </div>

      <label className="container flex items-center">
        <span className="font-medium">
          {" "}
          Save this information for faster check-out next time
        </span>
        <input name="saveInfo" type="checkbox" {...register("saveInfo")} />
        <span className="checkmark"></span>
      </label>
    </div>
  );
}

export default BillingDetails;
