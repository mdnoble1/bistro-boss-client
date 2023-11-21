import { Helmet } from "react-helmet-async";
import MenuBanner from "./MenuBanner/MenuBanner";
import Desserts from "./Desserts/Desserts";
import TodayOffer from "./TodayOffer/TodayOffer";
import useMenu from "../../hooks/useMenu";

const Menu = () => {
  const [menu] = useMenu();

  // console.log(menu)
  const offered = menu.filter((item) => item.category === "offered");
  const desserts = menu.filter((item) => item.category === "dessert");
  const pizza = menu.filter((item) => item.category === "pizza");
  const salads = menu.filter((item) => item.category === "salad");
  const soups = menu.filter((item) => item.category === "soup");

  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Menu</title>
      </Helmet>
      <MenuBanner></MenuBanner>
      <TodayOffer items={offered} ></TodayOffer>
      <Desserts items={desserts}></Desserts>
    </div>
  );
};

export default Menu;
