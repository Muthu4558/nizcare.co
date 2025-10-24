import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaUserTie, FaUsersCog, FaUserNurse } from "react-icons/fa";
import { MdHealthAndSafety, MdOutlineLocalHospital, MdAccessTime } from "react-icons/md";
import { BiBrain, BiBody, BiDrink } from "react-icons/bi";
import { GiStandingPotion, GiChemicalDrop, GiVirus } from "react-icons/gi";

import Management from '../../assets/Hotel-sector-img/owners.jpeg';
import Admin from '../../assets/Hotel-sector-img/reception.jpeg';
import Front from '../../assets/Hotel-sector-img/frontline.jpeg';

const data = [
  {
    title: "Field & Production Workers",
    image: Management,
    icon: <FaUserTie className="text-2xl text-gray-700" />,
    issues: [
      { title: "Respiratory Illnesses", icon: <MdHealthAndSafety />, description: "Asthma, chronic bronchitis, lung damage" },
      { title: "Musculoskeletal Disorders", icon: <MdOutlineLocalHospital />, description: "Back pain, joint pain, hernia" },
      { title: "Heat Stress & Dehydration", icon: <MdAccessTime />, description: "Fatigue, fainting, kidney strain" },
    ],
  },
  {
    title: "Logistics & Transport Teams",
    image: Admin,
    icon: <FaUsersCog className="text-2xl text-gray-700" />,
    issues: [
      { title: "Fatigue & Musculoskeletal Pain", icon: <BiBrain />, description: "Back pain, joint degeneration, exhaustion" },
      { title: "Diabetes & Blood Pressure Issues", icon: <BiBody />, description: "Hypertension, cardiovascular strain" },
      { title: "Accident Risk", icon: <BiDrink />, description: "Sprains, fractures, lacerations" },
    ],
  },
  {
    title: "Contract Workers & Loading Staff",
    image: Front,
    icon: <FaUserNurse className="text-2xl text-gray-700" />,
    issues: [
      { title: "Infections & Poor Hygiene-Linked Illnesses", icon: <GiStandingPotion />, description: "Skin infections, respiratory infection" },
      { title: "Undiagnosed Conditions", icon: <GiChemicalDrop />, description: "Diabetes, hypertension, malnutrition" },
      { title: "Mental Stress & Burnout", icon: <GiVirus />, description: "Anxiety, sleep disorders, fatigue" },
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
        Cement Industry Employee <span className="text-teal-600">Health Problems</span>
      </h2>
      <p className="text-lg text-slate-500 mb-10 text-center" data-aos="fade-up" data-aos-delay="100">
        Proactive healthcare prevents costly claims, enhances productivity, and improves employee retention in the cement industry.
      </p>

      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {data.map((group, groupIdx) => (
          <div
            key={groupIdx}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-500 border border-gray-100 hover:border-teal-400 overflow-hidden flex flex-col"
            data-aos="zoom-in-up"
            data-aos-delay={groupIdx * 100}
          >
            <div className="overflow-hidden">
              <img src={group.image} alt={group.title} className="w-full h-48 object-cover transition-transform duration-700 hover:scale-105" />
            </div>

            <div className="p-6 flex flex-col flex-grow justify-between">
              <h3 className="text-lg font-bold mb-4 flex items-center gap-2 text-slate-800">
                {group.icon} {group.title}
              </h3>

              <div className="space-y-4">
                {group.issues.map((issue, idx) => (
                  <div key={idx} className="border border-teal-600 rounded-xl p-4 shadow-sm hover:shadow-md transition-all">
                    <div className="flex items-start gap-3">
                      <span className="text-teal-600 text-xl mt-1">{issue.icon}</span>
                      <div>
                        <h4 className="font-semibold text-teal-600">{issue.title}</h4>
                        <p className="text-sm text-slate-600 mt-1 leading-relaxed">{issue.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HotelHealthChallenges;