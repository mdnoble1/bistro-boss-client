import { Helmet } from "react-helmet";
import OrderFoodBanner from "./OrderFoodBanner/OrderFoodBanner";

const OrderFood = () => {
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Order Now</title>
      </Helmet>
      <OrderFoodBanner></OrderFoodBanner>
    </div>
  );
};

export default OrderFood;
