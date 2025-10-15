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
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h2
          className="text-3xl md:text-4xl font-bold mb-2"
          data-aos="fade-up"
        >
          Fueling Wellness for Peak <span className='text-teal-600'>Aerospace Performance</span>
        </h2>
        <p
          className="text-lg text-slate-500 mb-10"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Our wellness programs translate NCD risk data into actionable health habits.
        </p>

        {/* Original Grid Cards */}
        <div 
        className="grid md:grid-cols-4 gap-2 mb-16"
              data-aos="zoom-in-up"
        >
          {packages.map((pkg, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl shadow-md p-6 border-l-8 border-teal-600 
transition-all duration-500 ease-out hover:shadow-2xl hover:scale-[1.03] hover:-translate-y-1"
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
        <h3 className="text-3xl md:text-4xl font-bold mb-8">The Hidden Cost of NCDs: Securing Your <span className='text-teal-600'>Workforce and Operations</span></h3>
        <p
          className="text-lg text-gray-500 mb-10"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Non-Communicable Diseases (NCDs) are the silent threat to your bottom line. They go beyond personal health, directly impacting operational safety, productivity, and your company's financial stability. Across every sector—from the high-heat exposure in a foundry to the high-stress environment of a bank—these chronic conditions are the primary cause of sick days, reduced efficiency (presenteeism), and premature loss of skilled talent. By focusing on prevention, early screening, and proactive management of these eight core NCDs, you're not just caring for your team; you're securing your business continuity and improving EHS/CSR compliance.
        </p>
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
        <p
          className="text-lg text-gray-500 mt-10"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Managing these prevalent NCDs is not a wellness expense—it's strategic risk mitigation. Nizcare provides the precision tools to screen, monitor, and manage these conditions, tailoring the intervention to your specific workplace risks (whether it's respiratory protection for textile workers or stress management for logistics managers). Protect your people, secure your productivity, and transform your workforce health into a measurable competitive advantage.  
        </p>
      </div>
    </section>
  );
};

export default WellnessPackages;