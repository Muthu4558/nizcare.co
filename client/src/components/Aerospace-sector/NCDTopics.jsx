import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import AOS from "aos";
import "aos/dist/aos.css";
import CVD from "../../assets/Ncd-Topics/Cardiovascular Diseases4.jpg";
import Diabetes from "../../assets/Ncd-Topics/Diabetes.jpg";
import Cancer from "../../assets/Ncd-Topics/Cancer.jpg";
import Chronic from "../../assets/Ncd-Topics/Chronic.jpg";
import Obesity from "../../assets/Ncd-Topics/Obesity.jpg";
import Mental from "../../assets/Ncd-Topics/Mental Health.jpg";
import ChronicKidney from "../../assets/Ncd-Topics/Chronic Kidney.jpg";
import Musculoskeletal from "../../assets/Ncd-Topics/Musculoskeletal.jpg";

const ncdTopics = [
  { title: "Cardiovascular Diseases (CVDs)", img: CVD },
  { title: "Diabetes", img: Diabetes },
  { title: "Cancer (Awareness & Screening)", img: Cancer },
  { title: "Chronic Respiratory Diseases", img: Chronic },
  { title: "Obesity & Metabolic Syndrome", img: Obesity },
  { title: "Mental Health Disorders", img: Mental },
  { title: "Chronic Kidney Disease", img: ChronicKidney },
  { title: "Musculoskeletal Disorders", img: Musculoskeletal },
];

const NCDTopics = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h3
          className="text-3xl md:text-4xl font-bold mb-6"
          data-aos="fade-up"
        >
          The Hidden Cost of NCDs: Securing Your{" "}
          <span className="text-teal-600">Workforce and Operations</span>
        </h3>
        <p
          className="text-lg text-gray-500 mb-10"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          NCDs silently impact productivity, safety, and financial stability
          across industries. With Nizcare’s precision tools for prevention,
          screening, and management, you can address workplace-specific risks
          and turn health into a business advantage.
        </p>

        <Swiper
          modules={[Navigation, Autoplay]}
          autoplay={{ delay: 4500, disableOnInteraction: false }}
          loop={true}
          spaceBetween={32}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="pb-8"
        >
          {ncdTopics.map((topic, idx) => (
            <SwiperSlide key={idx}>
              <div className="relative bg-white rounded-2xl shadow-md overflow-hidden group hover:shadow-xl transition-all duration-500">
                <img
                  src={topic.img}
                  alt={topic.title}
                  className="w-full h-56 object-cover"
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors"></div>
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-center px-3">
                  <h4 className="text-lg font-semibold text-white drop-shadow-md">
                    {topic.title}
                  </h4>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <p
          className="text-lg text-gray-500 mt-10"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Managing NCDs isn’t a wellness cost—it’s strategic risk control. Nizcare
          helps monitor, prevent, and manage workplace risks to protect both
          people and productivity.
        </p>
      </div>
    </section>
  );
};

export default NCDTopics;