import Button from "../../ui/Button";

function CouponForm() {
  return (
    <div
      className="  md:basis-[50%] md:self-start flex gap-4"
      // onSubmit={(e) => e.preventDefault()}
    >
      <input
        placeholder="coupon code"
        className=" w-[70%] bg-Secondary py-4 placeholder:text-[px]  pl-5  capitalize outline outline-1  "
      />
      <Button
        disabled={true}
        title="apply"
        onClick={(e) => e.preventDefault()}
      />
    </div>
  );
}

export default CouponForm;
