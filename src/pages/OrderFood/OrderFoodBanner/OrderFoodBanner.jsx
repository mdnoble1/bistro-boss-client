import BannerCover from '../../shared/BannerCover/BannerCover';
import image from "../../../assets/shop/banner2.jpg";

const OrderFoodBanner = () => {
    return (
        <div>
            <BannerCover
        image={image}
        title={"Order Now !"}
        description={"Would you like to try a dish?"}
      ></BannerCover>
        </div>
    );
};

export default OrderFoodBanner;