import BannerCover from "../../shared/BannerCover/BannerCover";
import image from "../../../assets/menu/banner3.jpg";

const MenuBanner = () => {
  return (
    <div>
      <BannerCover
        image={image}
        title={"OUR MENU"}
        description={"Would you like to try a dish?"}
      ></BannerCover>
    </div>
  );
};

export default MenuBanner;
