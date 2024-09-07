import Spinner from "../../ui/Spinner";
import Empty from "../../ui/Empty";
import OrderItem from "./OrderItem";
import { useOrders } from "./useOrders";
function Orders() {
  const { orders, isLoading } = useOrders();
  if (isLoading) return <Spinner />;
  if (orders.length === 0) return <Empty title="orders" goTo="/products" />;
  return (
    <div role="table">
      <div
        role="table header"
        className="grid grid-cols-4 font-medium capitalize shadow-md shadow-gray-200 text-center h-[3rem] place-items-center mb-6"
      >
        <div>order id</div>
        <div>ordered at</div>
        <div>total price</div>
        <div>status</div>
      </div>
      <ul className="space-y-4" role="table content">
        {orders.map((orderItem) => (
          <OrderItem key={orderItem.id} order={orderItem} />
        ))}
      </ul>
    </div>
  );
}

export default Orders;
