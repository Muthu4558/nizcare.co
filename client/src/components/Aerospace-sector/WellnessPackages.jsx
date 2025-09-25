import React, { useEffect } from 'react';
import { FaBriefcase, FaUsersCog, FaPeopleCarry } from 'react-icons/fa';
import { BsCheckCircleFill } from 'react-icons/bs';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const packages = [
  {
    title: 'Engineers & Designers',
    icon: <FaBriefcase className="text-2xl text-orange-400" />,
    benefits: [
      'Blue light exposure seminars',
      'Ergonomic chair assessments',
      'Weekly guided meditation',
      'Eye yoga and digital detox sessions'
    ],
  },
  {
    title: 'Manufacturing Workers',
    icon: <FaUsersCog className="text-2xl text-orange-400" />,
    benefits: [
      'Hearing protection awareness',
      'Dust/mask usage workshops',
      'Daily mobility/stretching routines',
      'Injury prevention training',
    ],
  },
  {
    title: 'Field Operators',
    icon: <FaPeopleCarry className="text-2xl text-orange-400" />,
    benefits: [
      'Shift-based sleep coaching',
      'Joint pain prevention routines',
      'Mobile wellness van support',
      'Rapid hydration + nutrition stations',
    ],
  },
  {
    title: 'Admin & Strategic Staff',
    icon: <FaPeopleCarry className="text-2xl text-orange-400" />,
    benefits: [
      'Executive burnout workshops',
      'Guided journaling or resilience sessions',
      'Desk yoga',
      'Walking meeting challenges',
    ],
  },
];

const ncdTopics = [
  { title: 'Cardiovascular Diseases (CVDs)', img: 'https://via.placeholder.com/600x400?text=CVDs' },
  { title: 'Diabetes', img: 'https://via.placeholder.com/600x400?text=Diabetes' },
  { title: 'Cancer (Awareness & Screening)', img: 'https://via.placeholder.com/600x400?text=Cancer' },
  { title: 'Chronic Respiratory Diseases', img: 'https://via.placeholder.com/600x400?text=Respiratory' },
  { title: 'Obesity & Metabolic Syndrome', img: 'https://via.placeholder.com/600x400?text=Obesity' },
  { title: 'Mental Health Disorders', img: 'https://via.placeholder.com/600x400?text=Mental+Health' },
  { title: 'Chronic Kidney Disease', img: 'https://via.placeholder.com/600x400?text=CKD' },
  { title: 'Musculoskeletal Disorders', img: 'https://via.placeholder.com/600x400?text=Musculoskeletal' },
];

const WellnessPackages = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section className="py-20 bg-white px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h2
          className="text-3xl md:text-4xl font-bold mb-2"
          data-aos="fade-up"
        >
          Fueling Wellness for Peak Aerospace Performance
        </h2>
        <p
          className="text-lg text-slate-500 mb-10"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Tailored wellness support from Nizcare for every role in your team.
        </p>

        {/* Original Grid Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
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

        {/* NCD Topics Swiper */}
        <h3 className="text-2xl font-bold mb-8">NCD"S which Affects your Workforce</h3>
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
          <div className="absolute -bottom-18 right-0 flex gap-3 z-20">
            <button className="swiper-button-prev-custom bg-white shadow-md rounded-full p-3 hover:bg-teal-500 hover:text-white transition">
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button className="swiper-button-next-custom bg-white shadow-md rounded-full p-3 hover:bg-teal-500 hover:text-white transition">
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WellnessPackages;