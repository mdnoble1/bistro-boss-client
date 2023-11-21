import SectionTitle from "../../../components/sectionTitle/SectionTitle";
import MenuItem from "../../shared/MenuItem/MenuItem";
import MenuButton from "../../shared/MenuButton/MenuButton";
import useMenu from "../../../hooks/useMenu";

const PopularMenu = () => {

  const [ menu ] = useMenu();
  const popularItems = menu.filter( item => item.category === 'popular')

  // const [menu, setMenu] = useState([]);

  // useEffect(() => {
  //   fetch("menu.json")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       const popularItems = data.filter((item) => item.category === "popular");
  //       setMenu(popularItems);
  //     });
  // }, []);

  return (
    <section className="lg:mt-32 mb-20">
      <SectionTitle
        heading={"From Our Menu"}
        subHeading={"Check It Out"}
      ></SectionTitle>
      <div className="container mx-auto w-11/12 lg:w-full grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
        {popularItems.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
      <div className="mt-10 text-center">
        <MenuButton
        buttonTitle={"View Full Menu"}></MenuButton>
      </div>
    </section>
  );
};

export default PopularMenu;
