import { Helmet } from "react-helmet";
import OrderFoodBanner from "./OrderFoodBanner/OrderFoodBanner";
import Order from "./Order/Order";
import useMenu from "../../hooks/useMenu";

const OrderFood = () => {
  const [menu] = useMenu();

  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Our Shop</title>
      </Helmet>
      <OrderFoodBanner></OrderFoodBanner>
      <Order menu={menu}></Order>
    </div>
  );
};

export default OrderFood;
