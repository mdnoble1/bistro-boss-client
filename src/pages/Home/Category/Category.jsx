import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import img1 from "../../../assets/home/slide1.jpg";
import img2 from "../../../assets/home/slide2.jpg";
import img3 from "../../../assets/home/slide3.jpg";
import img4 from "../../../assets/home/slide4.jpg";
import img5 from "../../../assets/home/slide5.jpg";
import SectionTitle from "../../../components/sectionTitle/SectionTitle";
const Category = () => {
  return (
    <div className="md:w-2/3 mx-auto my-16">
      <SectionTitle
      subHeading={"From 11:00am to 10:00pm"}
      heading={"ORDER ONLINE"}></SectionTitle>
      <div >
        <Swiper
          slidesPerView={1}
          spaceBetween={2}
          freeMode={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: true,
          }}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
          modules={[FreeMode, Pagination, Autoplay]}
          className="text-center"
        >
          <SwiperSlide className="relative">
            <img className="mx-auto rounded-2xl" src={img1} alt="" />
            <h2
              className={`cinzel text-3xl text-white absolute bottom-8 right-36`}
            >
              SALADS
            </h2>
          </SwiperSlide>
          <SwiperSlide className="relative ">
            <img className="mx-auto rounded-2xl" src={img2} alt="" />
            <h2
              className={`cinzel text-3xl text-white absolute bottom-8 right-40 lg:right-36`}
            >
              PIZZAS
            </h2>
          </SwiperSlide>
          <SwiperSlide className="relative ">
            <img className="mx-auto rounded-2xl" src={img3} alt="" />
            <h2
              className={`cinzel text-3xl text-white absolute bottom-8 right-40`}
            >
              SOUPS
            </h2>
          </SwiperSlide>
          <SwiperSlide className="relative ">
            <img className="mx-auto rounded-2xl" src={img4} alt="" />
            <h2
              className={`cinzel text-3xl text-white absolute bottom-8 right-32`}
            >
              DESSERTS
            </h2>
          </SwiperSlide>
          <SwiperSlide className="relative ">
            <img className="mx-auto rounded-2xl" src={img5} alt="" />
            <h2
              className={`cinzel text-3xl text-white absolute bottom-8 right-36`}
            >
              SALADS
            </h2>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Category;
