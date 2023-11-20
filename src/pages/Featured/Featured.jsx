import image from "../../assets/home/featured.jpg";
import SectionTitle from "../../components/sectionTitle/SectionTitle";
import "./Featured.css";

const Featured = () => {
  return (
    <section className="featured-item bg-fixed pt-16 lg:pt-32 pb-20 lg:pb-40 my-20">
      <SectionTitle
        heading={"Featured Item"}
        subHeading={"Check It Out"}
      ></SectionTitle>
      <div className="container mx-auto lg:flex justify-center items-center">
        <div>
          <img
            className="w-10/12 lg:w-2/3 rounded-md mx-auto my-8"
            src={image}
            alt=""
          />
        </div>
        <div className="text-white text-center lg:text-left w-11/12 mx-auto">
          <h2 className="text-xl">March 20, 2023</h2>
          <h2 className="text-2xl">WHERE CAN I GET SOME?</h2>
          <p className="mb-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
            voluptate facere, deserunt dolores maiores quod nobis quas quasi.
            Eaque repellat recusandae ad laudantium tempore consequatur
            consequuntur omnis ullam maxime tenetur.
          </p>
          <button className="btn btn-outline text-white uppercase border-0 border-b-4">
            Read More
          </button>
        </div>
      </div>
    </section>
  );
};

export default Featured;
