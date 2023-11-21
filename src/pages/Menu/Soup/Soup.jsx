import Cover from "../../shared/Cover/Cover";
import image from "../../../assets/menu/soup-bg.jpg";
import MenuButton from "../../shared/MenuButton/MenuButton";
import MenuItem from "../../shared/MenuItem/MenuItem";
import { Link } from "react-router-dom";

const Soup = ({ items, title }) => {
  return (
    <section className="lg:mt-32 mb-20">
      <Cover
        image={image}
        title={title}
        description={
          "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        }
      ></Cover>
      <div className="container mx-auto w-11/12 lg:w-full grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
        {items?.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
      <div className="mt-10 text-center">
        <Link to={`/shop/${title}`}>
          <MenuButton buttonTitle={"ORDER YOUR FAVOURITE FOOD"}></MenuButton>
        </Link>
      </div>
    </section>
  );
};

export default Soup;
