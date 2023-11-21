import SectionTitle from "../../../components/sectionTitle/SectionTitle";
// import useMenu from "../../../hooks/useMenu";
import MenuItem from "../../shared/MenuItem/MenuItem";

const TodayOffer = ( { items }  ) => {

    // const [ menu ] = useMenu()
    // const items = menu.filter ( item => item.category === 'offered')


  return (
    <section className="lg:mt-32 mb-20">
      <SectionTitle
        heading={"TODAY'S OFFER"}
        subHeading={"Don't Miss"}
      ></SectionTitle>
      <div className="container mx-auto w-11/12 lg:w-full grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
        {items?.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
    </section>
  );
};

export default TodayOffer;
