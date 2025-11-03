import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { BsCheckCircleFill } from "react-icons/bs";
import { FaTruckLoading } from "react-icons/fa";
import { GiSuitcase } from "react-icons/gi";
import { MdOutlineSupport, MdOutlineTravelExplore } from "react-icons/md";

// Tourism Images
import TourGuideImg from "../../assets/Tourism-sector-img/tourGuide.jpeg";
import TransportImg from "../../assets/Tourism-sector-img/transport.jpeg";
import HospitalityImg from "../../assets/Tourism-sector-img/hospitality.jpeg";
import SalesImg from "../../assets/Tourism-sector-img/sales.jpeg";

const packages = [
  {
    id: "01",
    title: "Tour Guides & Coordinators",
    icon: <MdOutlineTravelExplore className="text-white text-2xl" />,
    img: TourGuideImg,
    benefits: [
      "Voice Care Workshops",
      "Footwear Ergonomics Training",
      "Mid-route Relaxation Stretches",
      "Stress Reduction Coaching",
      "Immune Booster Plans",
    ],
  },
  {
    id: "02",
    title: "Transport & Logistics Staff",
    icon: <FaTruckLoading className="text-white text-2xl" />,
    img: TransportImg,
    benefits: [
      "Yoga for Drivers",
      "Posture & Spine Sessions",
      "Sleep Hygiene Training",
      "Nutrition On-the-Road Plan",
      "Fatigue Management Tips",
    ],
  },
  {
    id: "03",
    title: "Hospitality & Frontline Staff",
    icon: <MdOutlineSupport className="text-white text-2xl" />,
    img: HospitalityImg,
    benefits: [
      "Infection Control Training",
      "Stretch & Move Breaks",
      "Mindfulness at Work Sessions",
      "Healthier Meal Planning in Shifts",
      "Emotional Resilience Workshops",
    ],
  },
  {
    id: "04",
    title: "Sales & Marketing Professionals",
    icon: <GiSuitcase className="text-white text-2xl" />,
    img: SalesImg,
    benefits: [
      "Mental Health Teleconsultations",
      "Screen Detox Challenges",
      "Travel-safe Nutrition Guides",
      "Anxiety Relief Breathing Sessions",
      "Time Zone Adjustment Plans",
    ],
  },
];

const TourismWellnessPackages = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: "ease-in-out",
      once: true,
      offset: 100,
    });
  }, []);

  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto text-center">
        {/* Heading */}
        <h2
          className="text-3xl md:text-4xl font-bold mb-6"
          data-aos="fade-down"
        >
          Beyond Check-ups — <span className="text-teal-600">Wellness That Travels With Them</span>
        </h2>

        {/* Subtitle */}
        <p
          className="text-lg text-slate-500 mb-10"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Tailored wellness support from Nizcare for every role in your tourism and hospitality teams.
        </p>

        {/* Grid of Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className="group bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 relative"
              data-aos="fade-up"
              data-aos-delay={200 + index * 150}
            >
              {/* Image + Overlay */}
              <div className="relative overflow-hidden">
                <img
                  src={pkg.img}
                  alt={pkg.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Top-left Icon Box */}
                <div className="absolute top-4 left-4 bg-teal-600 text-white rounded-xl px-4 py-3 flex flex-col items-center justify-center shadow-md group-hover:shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <div>{pkg.icon}</div>
                  <p className="text-sm font-semibold mt-1">{pkg.id}</p>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 text-left">
                <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-4 group-hover:text-teal-600 transition-colors">
                  {pkg.title}
                </h3>

                <ul className="space-y-3">
                  {pkg.benefits.map((benefit, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-gray-700"
                    >
                      <BsCheckCircleFill className="text-teal-500 mt-1 shrink-0 group-hover:animate-pulse" />
                      <span className="text-[15px] leading-snug">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TourismWellnessPackages;