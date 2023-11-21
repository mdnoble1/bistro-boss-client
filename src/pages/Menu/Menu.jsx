import { Helmet } from "react-helmet-async";
import MenuBanner from "./MenuBanner/MenuBanner";

const Menu = () => {
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Menu</title>
      </Helmet>
      <MenuBanner></MenuBanner>
    </div>
  );
};

export default Menu;
