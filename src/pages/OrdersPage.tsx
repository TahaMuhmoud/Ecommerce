import Order from "../features/Orders/Order";
import useUser from "../hooks/Auth/useUser";
import { useOrders } from "../hooks/Orders/useOrders";

const OrdersPage = () => {
  const { data: user } = useUser();

  const { data } = useOrders(user?.decoded.id || "");

  return (
    <div className="w-screen flex flex-col items-center">
      <div className="flex flex-col gap-5 container">
        {data?.map((order, i) => (
          <Order key={i} order={order} />
        ))}
      </div>
    </div>
  );
};

export default OrdersPage;
