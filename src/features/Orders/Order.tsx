import { format } from "date-fns";
import TwoColsTableRow from "../../components/TwoColsTableRow";
import { Order as OrderType } from "../../services/orders";
import OrderProduct from "./OrderProduct";

const Order = ({ order }: { order: OrderType }) => {
  return (
    <div className="w-full flex flex-col gap- p-2 sm:p-5 border">
      <h2 className="text-lg font-bold mb-4">Order # {order.id}</h2>
      <div className="w-full flex flex-col gap-">
        <div className="w-full">
          <div className="flex flex-col">
            {order.cartItems.map((item, i) => (
              <OrderProduct key={i} product={item} />
            ))}
          </div>
        </div>
        <div className="h-px bg-secondary mb-3"></div>
        <div className="w-full">
          <div className="w-full flex flex-col md:flex-row items-stretch gap-5">
            <div className="w-full">
              <h4 className="text-2xl sm:text-3xl md:text-4xl font-extralight ">
                ORDER DETAILS
              </h4>
              <hr className="h-[1px] bg-secondary" />
              <div className="">
                <TwoColsTableRow
                  colOne={"Date"}
                  colTwo={format(order.createdAt, "yyyy-MM-dd")}
                />
                <TwoColsTableRow
                  colOne={"Shipping"}
                  colTwo={
                    order.shippingPrice === 0 ? "Free" : order.shippingPrice
                  }
                />
                <TwoColsTableRow colOne={"TAX"} colTwo={order.taxPrice + "£"} />
                <TwoColsTableRow
                  colOne={"Delivered"}
                  colTwo={
                    order.isDelivered ? (
                      <span className="text-green-600">YES</span>
                    ) : (
                      <span className="text-red-600">NO</span>
                    )
                  }
                />
                <TwoColsTableRow
                  colOne={"Payed"}
                  colTwo={
                    order.isPaid ? (
                      <span className="text-green-600">YES</span>
                    ) : (
                      <span className="text-red-600">NO</span>
                    )
                  }
                />
                <TwoColsTableRow
                  colOne={"Payment"}
                  colTwo={order.paymentMethodType.toUpperCase()}
                />
              </div>
            </div>
            <div className="h-px w-full md:w-0.5 md:h-auto bg-secondary"></div>
            <div className="w-full">
              <h4 className="text-2xl sm:text-3xl md:text-4xl font-extralight ">
                CUSTOMER DETAILS
              </h4>
              <hr className="h-[1px] bg-secondary" />
              <div className="">
                <TwoColsTableRow colOne={"Name"} colTwo={order.user.name} />
                <TwoColsTableRow colOne={"Email"} colTwo={order.user.email} />
                <TwoColsTableRow
                  colOne={"Address"}
                  colTwo={order.shippingAddress.city}
                />
              </div>
              <hr className="h-0.5 bg-secondary" />
              <div className="flex justify-between">
                <span className="text-2xl font-black">TOTAL</span>
                <span className="text-2xl">{order.totalOrderPrice}£</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Order;
{
  /*
  {order.cartItems.map((item, i) => (
    <OrderProduct key={i} product={item} />
  ))}
*/
}
