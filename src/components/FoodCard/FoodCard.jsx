import MenuButton from "../../pages/shared/MenuButton/MenuButton";

const FoodCard = ({ item }) => {
  const { name, recipe, image, price } = item || {};

  return (
    <div className="bg-[#F3F3F3] shadow-xl w-[360px] mx-auto">
      <div className="relative">
        <img src={image} alt="Food" />
        <p className="font-semibold text-white bg-black w-fit px-4 py-1 rounded-md absolute top-3 right-3">${price}</p>
      </div>
      <div className="text-center mt-8 px-2 h-28">
        <h2 className="font-semibold text-2xl text-black">{name}</h2>
        <p className="text-[#737373] mt-2">{recipe}</p>
      </div>
      <div className="mt-6 mb-8 text-center">
        <MenuButton buttonTitle={"Add To Cart"}></MenuButton>
      </div>
    </div>
  );
};

export default FoodCard;
