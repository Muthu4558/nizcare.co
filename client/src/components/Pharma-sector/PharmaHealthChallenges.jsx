import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import {
  FaUserTie,
  FaUsersCog,
  FaUserMd,
} from "react-icons/fa";
import {
  MdHealthAndSafety,
  MdOutlineLocalHospital,
  MdAccessTime,
} from "react-icons/md";
import { BiBrain, BiBody, BiDrink } from "react-icons/bi";
import { GiStandingPotion, GiChemicalDrop, GiVirus } from "react-icons/gi";

import Lab from "../../assets/Pharma-sector-img/LabTechnicians.jpeg";
import Manufacturing from "../../assets/Pharma-sector-img/Manufacturing.jpeg";
import Corporate from "../../assets/Pharma-sector-img/Corporate.jpeg";

const data = [
  {
    title: "Lab Technicians & Quality Control Teams",
    image: Lab,
    icon: <FaUserMd className="text-2xl text-gray-700" />,
    issues: [
      {
        title: "Chemical exposure",
        icon: <MdHealthAndSafety />,
        description:
          "Constant handling of solvents and reagents may lead to skin, respiratory, or liver issues.",
      },
      {
        title: "Visual & posture strain",
        icon: <MdOutlineLocalHospital />,
        description:
          "Prolonged microscope and computer use impacts vision and spine health.",
      },
      {
        title: "Stress & fatigue",
        icon: <MdAccessTime />,
        description:
          "Precision pressure and sterile lab environments cause mental fatigue and burnout.",
      },
    ],
  },
  {
    title: "Manufacturing & Production Floor Workers",
    image: Manufacturing,
    icon: <FaUsersCog className="text-2xl text-gray-700" />,
    issues: [
      {
        title: "Musculoskeletal issues",
        icon: <BiBrain />,
        description:
          "Long hours of standing or repetitive tasks strain back, wrists, and knees.",
      },
      {
        title: "Noise-induced stress",
        icon: <BiBody />,
        description:
          "Continuous exposure to machinery noise leads to fatigue and potential hearing damage.",
      },
      {
        title: "Dust/chemical exposure",
        icon: <BiDrink />,
        description:
          "Exposure to powder-based materials during production or packaging can cause respiratory issues.",
      },
    ],
  },
  {
    title: "Corporate, Sales & Regulatory Executives",
    image: Corporate,
    icon: <FaUserTie className="text-2xl text-gray-700" />,
    issues: [
      {
        title: "Mental stress & burnout",
        icon: <GiVirus />,
        description:
          "High-pressure targets, audits, and deadlines contribute to chronic stress.",
      },
      {
        title: "Travel fatigue",
        icon: <GiStandingPotion />,
        description:
          "Frequent travel and long commutes lead to poor rest and reduced immunity.",
      },
      {
        title: "Lifestyle disorders",
        icon: <GiChemicalDrop />,
        description:
          "Sedentary work styles contribute to diabetes, hypertension, and obesity.",
      },
    ],
  },
];

const PharmaHealthChallenges = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section className="py-16 px-6">
      <h2
        className="text-3xl md:text-4xl font-extrabold text-center mb-4 text-slate-900"
        data-aos="fade-up"
      >
        Pharma Employee <span className="text-teal-600">Health Challenges</span>
      </h2>

      <p
        className="text-lg text-slate-500 mb-10 text-center"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        Pharmaceutical professionals face unique occupational health challenges — from
        chemical exposure in labs to stress and fatigue in corporate environments.
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
                  {group.icon}
                  {group.title}
                </h3>

                <div className="space-y-4">
                  {group.issues.map((issue, idx) => (
                    <div
                      key={idx}
                      className="border border-teal-600 transition-all duration-300 rounded-xl p-4 shadow-sm hover:shadow-md"
                    >
                      <div className="flex items-start gap-3">
                        <span className="text-teal-600 text-xl mt-1">
                          {issue.icon}
                        </span>
                        <div>
                          <h4 className="font-semibold text-sm text-teal-600">
                            {issue.title}
                          </h4>
                          <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                            {issue.description}
                          </p>
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

export default PharmaHealthChallenges;
