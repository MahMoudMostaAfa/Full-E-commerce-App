import { format } from "date-fns";
import { formatCurrency } from "../../utils/helpers";
import { Link } from "react-router-dom";

const statusColor = {
  pending: "bg-yellow-300 ",
  shipping: "bg-blue-300 ",
  delivered: "bg-green-300 ",
  cancelled: "bg-secondary-300  ",
  returned: "bg-red-300 ",
};

function OrderItem({ order }) {
  const {
    id,
    created_at,
    totalPrice,
    status,
    OrderItem,
    billingDetails,
    payment,
  } = order;
  return (
    <li className="grid grid-cols-4 font-normal capitalize shadow-sm shadow-gray-200 text-center h-[3rem]  place-items-center  ">
      <div>
        {" "}
        <Link to={`/orderDetails/${id}`}>#{id}</Link>{" "}
      </div>
      <div>{format(created_at, "yyyy/MM/dd")}</div>
      <div>{formatCurrency(totalPrice)}</div>
      <div>
        <span
          className={`capitalize ${statusColor[status]} py-1 px-4 text-black font-semibold rounded-full
        `}
        >
          {status}
        </span>
      </div>
    </li>
  );
}

export default OrderItem;
