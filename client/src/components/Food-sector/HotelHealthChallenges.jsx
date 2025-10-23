import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { FaUserTie, FaUsersCog, FaUserNurse } from "react-icons/fa";
import { MdHealthAndSafety, MdOutlinePsychology, MdRestaurant, MdScreenSearchDesktop, MdChairAlt } from "react-icons/md";
import { GiLeg, GiSoap, GiNightSleep } from "react-icons/gi";
import { TbTemperatureCelsius } from "react-icons/tb";

import Management from '../../assets/Food-sector-img/frontline.jpg';
import Admin from '../../assets/Food-sector-img/admin.jpg';
import Front from '../../assets/Food-sector-img/manager.jpg';

const data = [
  {
    title: "Frontline Workers",
    image: Management,
    icon: <FaUserTie className="text-2xl text-gray-700" />,
    issues: [
      { title: "Cold Exposure", icon: <TbTemperatureCelsius />, description: "Respiratory Illnesses & Joint Pain: Working in low-temperature environments like cold storage." },
      { title: "Long Hours Standing", icon: <GiLeg />, description: "Varicose Veins & Back Pain: Lack of movement during extended shifts." },
      { title: "Chemical/Sanitizer Use", icon: <GiSoap />, description: "Skin Allergies & Eye Irritation: Constant exposure to cleaning agents and disinfectants." },
    ],
  },
  {
    title: "Supervisors & Quality/Admin Staff",
    image: Admin,
    icon: <FaUsersCog className="text-2xl text-gray-700" />,
    issues: [
      { title: "Screen Time & Paperwork", icon: <MdScreenSearchDesktop />, description: "Eye Strain & Neck Stiffness: Continuous digital or physical documentation work." },
      { title: "Irregular Meals/Shifts", icon: <MdRestaurant />, description: "Digestive & Metabolic Issues: Inconsistent eating and sleeping patterns." },
      { title: "Responsibility Stress", icon: <MdOutlinePsychology />, description: "Mental Fatigue: Pressure from audits and production targets." },
    ],
  },
  {
    title: "Executives & Managers",
    image: Front,
    icon: <FaUserNurse className="text-2xl text-gray-700" />,
    issues: [
      { title: "Sedentary Work", description: "Obesity, Diabetes, Cardiac Risk: Long hours in meetings, desk jobs, lack of movement." },
      { title: "Chronic Stress", icon: <GiNightSleep />, description: "Hypertension & Sleep Disorders: Continuous responsibility for plant operations and workforce management." },
      { title: "Neglecting Preventive Health", icon: <MdHealthAndSafety />, description: "Undiagnosed Lifestyle Diseases: Prioritizing work over personal health." },
    ],
  },
];

const HotelHealthChallenges = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section className="py-16 px-6">
      <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-4 text-slate-900" data-aos="fade-up">
        Food Sector Employee <span className="text-teal-600">Health Problems</span>
      </h2>
      <p className="text-lg text-slate-500 mb-10 text-center" data-aos="fade-up" data-aos-delay="100">
        In India, over 80% of the disease burden is preventable, yet healthcare remains largely reactive. This leads to costly claims, lost productivity, and decreased employee retention.
      </p>

      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {data.map((group, groupIdx) => (
          <div
            key={groupIdx}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-500 border border-gray-100 hover:border-teal-400 overflow-hidden group flex flex-col"
            data-aos="zoom-in-up"
            data-aos-delay={groupIdx * 100}
          >
            {/* Image */}
            <div className="overflow-hidden">
              <img
                src={group.image}
                alt={group.title}
                className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>

            {/* Card Content */}
            <div className="p-6 flex flex-col flex-grow justify-between">
              <div>
                <h3 className="text-lg font-bold mb-4 flex items-center gap-2 text-slate-800">
                  {group.icon} {group.title}
                </h3>

                <div className="space-y-4">
                  {group.issues.map((issue, idx) => (
                    <div
                      key={idx}
                      className="border border-teal-600 rounded-xl p-4 shadow-sm hover:shadow-md transition-all duration-300"
                      data-aos="fade-up"
                      data-aos-delay={idx * 100}
                    >
                      <div className="flex items-start gap-3">
                        <span className="text-teal-600 text-xl mt-1">{issue.icon}</span>
                        <div>
                          <h4 className="font-semibold text-teal-600 text-sm">{issue.title}</h4>
                          <p className="text-xs text-slate-600 mt-1 leading-relaxed">{issue.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HotelHealthChallenges;