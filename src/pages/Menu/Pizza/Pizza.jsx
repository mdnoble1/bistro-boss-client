import Cover from "../../shared/Cover/Cover";
import image from "../../../assets/menu/pizza-bg.jpg";
import MenuButton from "../../shared/MenuButton/MenuButton";
import MenuItem from "../../shared/MenuItem/MenuItem";


const Pizza = ( { items } ) => {
    return (
        <section className="lg:mt-32 mb-20">
      <Cover
        image={image}
        title={"PIZZA"}
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
        <MenuButton buttonTitle={"ORDER YOUR FAVOURITE FOOD"}></MenuButton>
      </div>
    </section>
    )
};

export default Pizza;