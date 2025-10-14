import React, { useEffect } from 'react';
import { FaBoxes, FaBriefcase } from 'react-icons/fa';
import { BsCheckCircleFill } from 'react-icons/bs';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { GiChemicalTank, GiFactory, GiOilDrum, GiSewingMachine } from 'react-icons/gi';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import CVD from "../../assets/Ncd-Topics/Cardiovascular Diseases4.jpg"
import Diabetes from "../../assets/Ncd-Topics/Diabetes.jpg"
import Cancer from "../../assets/Ncd-Topics/Cancer.jpg"
import Chronic from "../../assets/Ncd-Topics/Chronic.jpg"
import Obesity from "../../assets/Ncd-Topics/Obesity.jpg"
import Mental from "../../assets/Ncd-Topics/Mental Health.jpg"
import ChronicKidney from "../../assets/Ncd-Topics/Chronic Kidney.jpg"
import Musculoskeletal from "../../assets/Ncd-Topics/Musculoskeletal.jpg"

const packages = [
  {
  title: 'Rig & Field Operators',
  icon: <GiOilDrum className="text-2xl text-orange-400" />,
  benefits: [
    'Stretching & Joint Safety Workshops',
    'Fatigue Management Drills',
    'Audiometry Monitoring & Ear Protection Training',
    'Dehydration Prevention Kits',
    'Night Shift Nutrition Packs',
  ],
},
  {
  title: 'Refinery & Plant Employees',
  icon: <GiFactory className="text-2xl text-orange-400" />,
  benefits: [
    'Respiratory Safety Training',
    'Chemical Exposure Mitigation Sessions',
    'On-site Ergonomic Assessments',
    'Safety Behavior Workshops',
    'Wellness Walk Challenges',
  ],
},
{
  title: 'Corporate & Admin Staff',
  icon: <FaBriefcase className="text-2xl text-orange-400" />,
  benefits: [
    'Stress Management Webinars',
    'Eye Relaxation & Posture Break Programs',
    'Yoga & Meditation Rooms',
    'Mental Health First Aid Certification',
    'Monthly Fitness Challenges',
  ],
}
];

const ncdTopics = [
  { title: 'Cardiovascular Diseases (CVDs)', img: CVD },
  { title: 'Diabetes', img: Diabetes },
  { title: 'Cancer (Awareness & Screening)', img: Cancer },
  { title: 'Chronic Respiratory Diseases', img: Chronic },
  { title: 'Obesity & Metabolic Syndrome', img: Obesity },
  { title: 'Mental Health Disorders', img: Mental },
  { title: 'Chronic Kidney Disease', img: ChronicKidney },
  { title: 'Musculoskeletal Disorders', img: Musculoskeletal },
];

const WellnessPackages = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section className="py-16 bg-white px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h2
          className="text-3xl md:text-4xl font-bold mb-2"
          data-aos="fade-up"
        >
          Beyond Check-ups – Wellness That Works Where You Do
        </h2>
        <p
          className="text-lg text-slate-500 mb-10"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Tailored wellness support from Nizcare for every role in your team.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {packages.map((pkg, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl shadow-md p-6 border-l-8 border-teal-600 transition-transform duration-300 hover:shadow-xl hover:scale-105"
              data-aos="zoom-in-up"
              data-aos-delay={idx * 150}
            >
              <h3 className="text-lg font-bold flex items-center gap-2 mb-4 text-slate-900">
                {pkg.icon}
                <span className="text-[1.1rem] text-orange-500 font-semibold">
                  {pkg.title}
                </span>
              </h3>
              <ul className="space-y-3">
                {pkg.benefits.map((benefit, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2 text-slate-800 font-medium leading-snug"
                  >
                    <BsCheckCircleFill className="text-teal-500 mt-1 shrink-0" />
                    <span className="text-left">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <h3 className="text-2xl font-bold mb-8 mt-16">NCD"S which Affects your Workforce</h3>
        <div className="relative">
          {/* Swiper */}
          <Swiper
            modules={[Navigation, Autoplay]}
            navigation={{
              nextEl: '.swiper-button-next-custom',
              prevEl: '.swiper-button-prev-custom',
            }}
            autoplay={{ delay: 4500, disableOnInteraction: false }}
            speed={900}
            loop={true}
            spaceBetween={32}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="pb-16"
          >
            {ncdTopics.map((topic, idx) => (
              <SwiperSlide key={idx}>
                <div className="relative bg-white rounded-2xl shadow-md overflow-hidden group hover:shadow-xl transition-all duration-500">
                  <img src={topic.img} alt={topic.title} className="w-full h-56 object-cover" />
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

          {/* Custom Navigation Buttons at bottom-right outside */}
          {/* <div className="absolute -bottom-18 right-0 flex gap-3 z-20">
                    <button className="swiper-button-prev-custom bg-white shadow-md rounded-full p-3 hover:bg-teal-500 hover:text-white transition">
                      <ChevronLeft className="w-6 h-6" />
                    </button>
                    <button className="swiper-button-next-custom bg-white shadow-md rounded-full p-3 hover:bg-teal-500 hover:text-white transition">
                      <ChevronRight className="w-6 h-6" />
                    </button>
                  </div> */}
        </div>
      </div>
    </section>
  );
};

export default WellnessPackages;