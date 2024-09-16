import CheckoutForm from "../features/checkout/CheckoutForm";

function Checkout() {
  return (
    <div className=" max-md:h-auto max-md:min-h-[auto]  min-h-full h-full ">
      <h2 className="font-medium text-3xl mb-10">Billing Details</h2>
      <CheckoutForm />
    </div>
  );
}

export default Checkout;
