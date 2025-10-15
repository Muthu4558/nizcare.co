import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules';

import {
  FaHeartbeat,
  FaSmile,
  FaStar,
  FaShieldAlt,
  FaCubes,
  FaMapMarkedAlt,
  FaCogs,
  FaCheckCircle,
  FaChartLine,
  FaWallet,
  FaHandsHelping,
} from 'react-icons/fa';

// ---------------- DATA ----------------
const whatWillYouGain = [
  {
    icon: FaHeartbeat,
    title: 'Reduce Sick Days',
    description:
      'Lower absenteeism means consistent team availability, fewer disruptions, and greater productivity for the whole company.',
  },
  {
    icon: FaWallet,
    title: 'Cut Healthcare Costs',
    description:
      'Healthier employees lead to fewer insurance claims and reduced corporate healthcare expenses—direct bottom-line savings.',
  },
  {
    icon: FaSmile,
    title: 'Boost Morale and Retention',
    description:
      'A visible investment in wellness boosts engagement, satisfaction, and loyalty, making it easier to attract and retain talent.',
  },
  {
    icon: FaStar,
    title: 'Enhance Company Reputation',
    description:
      'Healthy, happy teams enhance your employer brand—attracting better candidates and client trust.',
  },
  {
    icon: FaChartLine,
    title: 'Increase Productivity',
    description:
      'Wellness initiatives improve physical and mental health, leading to higher focus, energy, and performance.',
  },
  {
    icon: FaShieldAlt,
    title: 'Compliance Made Easy',
    description:
      'Proactive health programs simplify workplace safety and legislative compliance, reducing operational risk.',
  },
  {
    icon: FaHandsHelping,
    title: 'Create a Positive Work Culture',
    description:
      'Holistic wellness fosters teamwork, connection, and care, supporting both wellbeing and business goals.',
  },
];

const whyNizcare = [
  {
    icon: FaMapMarkedAlt,
    title: 'Pan-India Coverage',
    description:
      'Nizcare’s trusted network offers seamless wellness access across every state and major city in India.',
  },
  {
    icon: FaCogs,
    title: 'Tailored Packages for All Roles',
    description:
      'Role-specific and department-focused plans perfectly match your company’s needs—from frontline to CXO.',
  },
  {
    icon: FaCheckCircle,
    title: 'Zero Admin Hassle',
    description:
      'Digital onboarding, scheduling, and tracking—all handled automatically, minimizing HR workload.',
  },
  {
    icon: FaChartLine,
    title: 'Instant Digital Reports + HR Dashboard',
    description:
      'Get real-time analytics, test results, and insights for proactive, compliant workforce wellness.',
  },
  {
    icon: FaWallet,
    title: 'Affordable Per-Employee Plans',
    description:
      'High-quality preventive health at competitive rates, scalable for companies of all sizes.',
  },
  {
    icon: FaCubes,
    title: 'Integrated, All-in-One Wellness Solution',
    description:
      'Doctor consults, lab tests, counseling, webinars—all in one seamless platform.',
  },
  {
    icon: FaStar,
    title: 'Expertise You Can Trust',
    description:
      'Proven track record, deep healthcare expertise, and measurable results for enterprises.',
  },
];

// ---------------- CARD COMPONENT ----------------
const FancyCard = ({ icon: Icon, title, description }) => (
  <div
    className="group flex flex-col justify-between h-full min-h-[320px] md:min-h-[260px]
               rounded-2xl p-6 m-2 bg-white hover:bg-gradient-to-br from-teal-50 to-white
               shadow-md hover:shadow-xl transition-all duration-500 border border-slate-100
               hover:border-teal-400 cursor-pointer hover:-translate-y-1"
  >
    <div>
      <div className="flex items-center justify-center w-14 h-14 rounded-full bg-teal-100 group-hover:bg-teal-600 mb-4 mx-auto transition-colors duration-500">
        <Icon className="text-teal-600 group-hover:text-white text-2xl transition-colors duration-500" />
      </div>
      <h3 className="text-center font-bold text-slate-800 text-lg mb-3">
        {title}
      </h3>
      <p className="text-sm text-center font-medium text-slate-600 group-hover:text-slate-800 transition-all duration-500">
        {description}
      </p>
    </div>
  </div>
);

// ---------------- MAIN COMPONENT ----------------
const UniqueWhyNizcareSection = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section className="py-20 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-20">
        
        {/* What Will You Gain */}
        <div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-center text-slate-900 mb-10">
            What Will <span className='text-teal-600'>You Gain?</span>
          </h2>

          <Swiper
            modules={[Autoplay]}
            spaceBetween={24}
            slidesPerView={1}
            loop={true}
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            breakpoints={{
              640: { slidesPerView: 1.2 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1280: { slidesPerView: 4 },
            }}
            className="pb-6"
          >
            {whatWillYouGain.map((item, idx) => (
              <SwiperSlide key={idx}>
                <FancyCard {...item} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Why Nizcare */}
        <div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-center text-slate-900 mb-10">
            Why <span className='text-teal-600'>Nizcare?</span>
          </h2>

          <Swiper
            modules={[Autoplay]}
            spaceBetween={24}
            slidesPerView={1}
            loop={true}
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            breakpoints={{
              640: { slidesPerView: 1.2 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1280: { slidesPerView: 4 },
            }}
            className="pb-6"
          >
            {whyNizcare.map((item, idx) => (
              <SwiperSlide key={idx}>
                <FancyCard {...item} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Closing Message */}
        <div data-aos="fade-up" data-aos-delay="100">
          <p className="text-lg text-gray-500 mt-10 text-center max-w-3xl mx-auto">
            Nizcare delivers the precision and reliability required by the
            Aerospace sector. Partner with us to transform NCD risks into
            sustained business performance and safety compliance.
          </p>
        </div>
      </div>
    </section>
  );
};

export default UniqueWhyNizcareSection;