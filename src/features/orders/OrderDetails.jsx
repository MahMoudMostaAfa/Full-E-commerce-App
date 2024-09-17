import { useOrderDetails } from "./useOrderDetails";
import Spinner from "../../ui/Spinner";
import CheckoutPreview from "../checkout/CheckoutPreview";
import OrderBillingDetails from "./OrderBillingDetails";
const statusColor = {
  pending: "bg-yellow-300 ",
  shipping: "bg-blue-300 ",
  delivered: "bg-green-300 ",
  cancelled: "bg-secondary-300  ",
  returned: "bg-red-300 ",
};

function OrderDetails() {
  const { order, isLoading } = useOrderDetails();

  if (isLoading) return <Spinner />;
  return (
    <div>
      <div className="flex  items-center gap-6 mb-10  ">
        <h2 className="font-medium text-3xl capitalize">
          Order Details #{order.id}{" "}
        </h2>
        <span
          className={` ${
            statusColor[order.status]
          }  px-4 py-1 font-semibold capitalize rounded-full `}
        >
          {order.status}
        </span>
      </div>
      <div className="grid  grid-cols-1 md:grid-cols-5 gap-10">
        <OrderBillingDetails order={order} />
        <CheckoutPreview order={order} />
      </div>
    </div>
  );
}

export default OrderDetails;
