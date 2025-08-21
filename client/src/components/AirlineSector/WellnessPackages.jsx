import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { MdFlight } from "react-icons/md";
import { FaPeopleCarry, FaUserTie } from "react-icons/fa";
import Crew from '../../assets/AirlineSector-img/l1.png';
import Ground from '../../assets/AirlineSector-img/l2.png';
import Corporate from '../../assets/AirlineSector-img/l3.png';

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

const WellnessPackages = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section className="py-16 bg-white px-6">
      <h1 className="text-center text-3xl font-bold mb-8">
        Precision Health Plans – "Tailored Wellness for Every Altitude"
      </h1>
      <div className="max-w-7xl mx-auto grid gap-16">
        {packages.map((pkg, idx) => (
          <div
            key={idx}
            className="grid md:grid-cols-2 gap-6 items-center"
            data-aos="fade-up"
            data-aos-delay={idx * 150}
          >
            {/* Image column alternating left/right */}
            <div
              className={`w-full h-[350px] ${idx % 2 === 1 ? "md:order-2" : ""}`}
            >
              <img
                src={pkg.image}
                alt={pkg.title}
                className="w-full h-full object-cover rounded-lg shadow-md transform transition duration-700 hover:scale-110 hover:rotate-2"
              />

            </div>

            {/* Text content */}
            <div className="flex flex-col justify-center p-6">
              <h3 className="text-2xl font-bold text-slate-900 mb-2 flex items-center gap-2">
                {pkg.icon}
                {pkg.title}
              </h3>
              <p className="text-slate-700 text-[20px] mb-3 whitespace-pre-line">
                {pkg.description}
              </p>
              {/* <p className="text-sm text-slate-500 italic">{pkg.note}</p>

              <button className="mt-6 bg-teal-600 text-white px-5 py-2 rounded-md font-semibold hover:bg-teal-500 transition w-fit">
                {pkg.button}
              </button> */}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WellnessPackages;