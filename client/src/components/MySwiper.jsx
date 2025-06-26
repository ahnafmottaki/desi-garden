import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import SlideContent from "./SlideContent";

const MySwiper = () => {
  return (
    <Swiper
      modules={[Navigation, Autoplay, Pagination]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      loop={true}
    >
      <SwiperSlide>
        <SlideContent
          para={`Learn how to turn kitchen waste into rich compost with hands-on
          guidance from local experts. Perfect for beginners and eco-conscious
          gardeners.`}
          location={"Dhaka Botanic Garden, Mirpur"}
          title={"Community Composting Workshop"}
          src={
            "https://images.unsplash.com/photo-1611740192940-0e390d409397?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
        />
      </SwiperSlide>

      <SwiperSlide>
        <SlideContent
          para={
            "A friendly gathering of apartment gardeners to share ideas, show off their setups, and learn low-space planting tips from fellow enthusiasts."
          }
          title={"Balcony Gardening Meetup"}
          location={"Chittagong Urban Gardening Center"}
          src={
            "https://images.unsplash.com/photo-1657664058691-2633847111c4?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
        />
      </SwiperSlide>
      <SwiperSlide>
        <SlideContent
          para={
            "An open event showcasing practical hydroponic systems for home growers, with live demos, Q&A sessions, and free starter kits for attendees."
          }
          location={"Rajshahi Agricultural Training Institute"}
          title={"Hydroponics Demonstration Day"}
          src={
            "https://images.unsplash.com/photo-1592863690346-6b28b8effea8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
        />
      </SwiperSlide>
    </Swiper>
  );
};

export default MySwiper;
