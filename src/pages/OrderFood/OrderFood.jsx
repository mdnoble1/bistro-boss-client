import { Helmet } from "react-helmet";
import OrderFoodBanner from "./OrderFoodBanner/OrderFoodBanner";
import Order from "./Order/Order";

const OrderFood = () => {
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Order Now</title>
      </Helmet>
      <OrderFoodBanner></OrderFoodBanner>
      <Order></Order>
    </div>
  );
};

export default OrderFood;
