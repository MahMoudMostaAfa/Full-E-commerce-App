import { format } from "date-fns";

function OrderBillingDetails({ order }) {
  const { id, created_at, billingDetails, payment } = order;
  console.log(billingDetails);
  return (
    <div className="bg-neutral-100 p-4 rounded-lg col-span-2  space-y-2 ">
      <div className="border-b py-2 border-gray-700">
        <span>created at: </span>
        <span className="font-semibold">
          {format(created_at, "yyyy-MM-dd, hh:mm a")}
        </span>
      </div>
      <div className="border-b py-2 border-gray-700">
        first name:{" "}
        <span className="font-semibold">{billingDetails.firstName}</span>
      </div>
      <div className="border-b py-2 border-gray-700">
        email: <span className="font-semibold">{billingDetails.email}</span>
      </div>
      <div className="border-b py-2 border-gray-700">
        phone: <span className="font-semibold">{billingDetails.phone}</span>
      </div>
      <div className="border-b py-2 border-gray-700">
        street address:{" "}
        <span className="font-semibold">{billingDetails.streetAddress}</span>
      </div>
      {billingDetails?.town && (
        <div className="border-b py-2 border-gray-700">
          town: <span className="font-semibold">{billingDetails.town}</span>
        </div>
      )}
      {billingDetails?.floor && (
        <div className="border-b py-2 border-gray-700">
          floor: <span className="font-semibold">{billingDetails.floor}</span>
        </div>
      )}
      {billingDetails?.companyName && (
        <div className="border-b py-2 border-gray-700">
          company name:{" "}
          <span className="font-semibold">{billingDetails.companyName}</span>
        </div>
      )}
      <div className="py-2">
        payment type:{" "}
        <span className="font-semibold">{billingDetails.payment}</span>
      </div>
    </div>
  );
}

export default OrderBillingDetails;
