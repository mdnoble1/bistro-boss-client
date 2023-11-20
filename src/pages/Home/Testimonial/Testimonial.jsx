import SectionTitle from "../../../components/sectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { Rating } from "@smastrom/react-rating";
import { ImQuotesLeft } from "react-icons/im";

import "@smastrom/react-rating/style.css";
import { useEffect, useState } from "react";

const Testimonial = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("reviews.json")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  return (
    <section>
      <SectionTitle
        heading={"TESTIMONIALS"}
        subHeading={"What Our Clients Say"}
      ></SectionTitle>
      <div className="container mx-auto">
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          {reviews.map((review) => (
            <SwiperSlide key={review._id}>
              <div className="w-3/4 mx-auto my-8 lg:my-20 text-center">
                <Rating
                  className="mx-auto mb-12"
                  style={{ maxWidth: 180 }}
                  value={review.rating}
                  readOnly
                />
                  <ImQuotesLeft className="text-7xl mx-auto mb-12"></ImQuotesLeft>
                <p>{review.details}</p>
                <h2 className="font-medium text-3xl text-[#CD9003] mt-2">
                  {review.name}
                </h2>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonial;
