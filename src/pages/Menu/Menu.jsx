import { Helmet } from "react-helmet-async";
import MenuBanner from "./MenuBanner/MenuBanner";
import Desserts from "./Desserts/Desserts";

const Menu = () => {
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Menu</title>
      </Helmet>
      <MenuBanner></MenuBanner>
      <Desserts></Desserts>
    </div>
  );
};

export default Menu;
