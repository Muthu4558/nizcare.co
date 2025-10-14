import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { MdFlight } from "react-icons/md";
import { FaPeopleCarry, FaUserTie } from "react-icons/fa";
import Crew from "../../assets/AirlineSector-img/l1.png";
import Ground from "../../assets/AirlineSector-img/l2.png";
import Corporate from "../../assets/AirlineSector-img/l3.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import CVD from "../../assets/Ncd-Topics/Cardiovascular Diseases4.jpg";
import Diabetes from "../../assets/Ncd-Topics/Diabetes.jpg";
import Cancer from "../../assets/Ncd-Topics/Cancer.jpg";
import Chronic from "../../assets/Ncd-Topics/Chronic.jpg";
import Obesity from "../../assets/Ncd-Topics/Obesity.jpg";
import Mental from "../../assets/Ncd-Topics/Mental Health.jpg";
import ChronicKidney from "../../assets/Ncd-Topics/Chronic Kidney.jpg";
import Musculoskeletal from "../../assets/Ncd-Topics/Musculoskeletal.jpg";

const packages = [
  {
    title: "Flight Crew",
    description: `• One-on-one confidential counselling (video/tele)  
• Psychometric & lifestyle screening  
• In-app Therapy modules: mindfulness, sleep management  
• HR compliance dashboards & aggregate insights  
• Pre-employment & annual blood test panel (stress hormones, Vit D, B12, HbA1c, etc.)`,
    note: "Tailored wellness solutions for your aviation crew.",
    image: Crew,
    button: "EXPLORE MORE",
    icon: <MdFlight className="text-3xl text-orange-400" />,
  },
  {
    title: "Ground Operations",
    description: `• Ergonomic webinar  
• Noise safety & hearing care webinar  
• Dehydration prevention drives  
• Stretching & mobility breaks  
• Safety drills & injury prevention modules`,
    note: "Wellness essentials for ground support teams.",
    image: Ground,
    button: "EXPLORE MORE",
    icon: <FaPeopleCarry className="text-3xl text-orange-400" />,
  },
  {
    title: "Corporate Staffs",
    description: `• Mental wellness webinars  
• Eye yoga & digital detox breaks  
• Monthly walking challenge  
• Desk posture training  
• Financial wellness sessions`,
    note: "Focused care for corporate staff wellness.",
    image: Corporate,
    button: "EXPLORE MORE",
    icon: <FaUserTie className="text-3xl text-orange-400" />,
  },
];

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

const WellnessPackages = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section className="py-12 sm:py-16 bg-white px-4 sm:px-6 lg:px-10 overflow-hidden">
      <h1 className="text-center text-2xl sm:text-3xl lg:text-4xl font-bold mb-10 leading-snug">
        Precision Health Plans –{" "}
        <span className="text-teal-600">"Tailored Wellness for Every Altitude"</span>
      </h1>

      <div className="max-w-7xl mx-auto flex flex-col gap-20">
        {packages.map((pkg, idx) => (
          <div
            key={idx}
            className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center overflow-hidden"
            data-aos="fade-up"
            data-aos-delay={idx * 150}
          >
            {/* Image column alternating left/right */}
            <div className={`w-full ${idx % 2 === 1 ? "md:order-2" : ""}`}>
              <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden shadow-md">
                <img
                  src={pkg.image}
                  alt={pkg.title}
                  className="w-full h-full object-cover transform transition duration-700 hover:scale-105"
                />
              </div>
            </div>

            {/* Text content */}
            <div className="flex flex-col justify-center p-4 sm:p-6">
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-900 mb-3 flex items-center gap-2">
                {pkg.icon}
                {pkg.title}
              </h3>
              <p className="text-slate-700 text-[16px] sm:text-[18px] lg:text-[20px] mb-4 whitespace-pre-line">
                {pkg.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* NCD Topics Swiper */}
      <h3 className="text-xl sm:text-2xl lg:text-3xl text-center font-bold mt-20 mb-10">
        NCDs Affecting Your Workforce
      </h3>

      <div className="relative px-4 sm:px-10 lg:px-20">
        <Swiper
          modules={[Navigation, Autoplay]}
          autoplay={{ delay: 4500, disableOnInteraction: false }}
          speed={900}
          loop={true}
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="pb-10"
        >
          {ncdTopics.map((topic, idx) => (
            <SwiperSlide key={idx}>
              <div className="relative bg-white rounded-xl shadow-md overflow-hidden group hover:shadow-lg transition-all duration-500">
                <div className="relative w-full aspect-[4/3]">
                  <img
                    src={topic.img}
                    alt={topic.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors"></div>
                </div>
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-center px-2">
                  <h4 className="text-base sm:text-lg font-semibold text-white drop-shadow-md">
                    {topic.title}
                  </h4>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default WellnessPackages;