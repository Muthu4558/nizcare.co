import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import {
  FaUserTie,
  FaUsersCog,
  FaUserNurse,
} from "react-icons/fa";
import {
  MdHealthAndSafety,
  MdOutlinePsychology,
  MdRestaurant,
  MdScreenSearchDesktop,
  MdChairAlt,
} from "react-icons/md";
import { GiLeg, GiSoap, GiNightSleep } from "react-icons/gi";
import { TbTemperatureCelsius } from "react-icons/tb";

import Management from "../../assets/Aero-sector-img/Technical Designers.jpg";
import Admin from "../../assets/Aero-sector-img/defence.jpg";
import Front from "../../assets/Aero-sector-img/field.jpg";

const data = [
  {
    title: "Aerospace Engineers & Technical Designers",
    image: Management,
    icon: <FaUserTie className="text-2xl text-gray-700" />,
    issues: [
      {
        title: "Eye strain & migraines",
        icon: <TbTemperatureCelsius />,
        description:
          "Due to prolonged CAD screen use and precision detailing.",
      },
      {
        title: "Neck & shoulder pain",
        icon: <GiLeg />,
        description:
          "Caused by extended seated posture during long design sessions.",
      },
      {
        title: "Mental fatigue",
        icon: <GiSoap />,
        description:
          "High cognitive demand under tight project deadlines and revisions.",
      },
    ],
  },
  {
    title: "Defense Manufacturing & Plant Workers",
    image: Admin,
    icon: <FaUsersCog className="text-2xl text-gray-700" />,
    issues: [
      {
        title: "Hearing loss",
        icon: <MdScreenSearchDesktop />,
        description:
          "Due to long exposure to heavy machinery, vibration, and testing noise.",
      },
      {
        title: "Respiratory issues",
        icon: <MdRestaurant />,
        description:
          "Caused by fumes, dust, or chemical exposure during manufacturing.",
      },
      {
        title: "Musculoskeletal strain",
        icon: <MdOutlinePsychology />,
        description:
          "Resulting from repetitive movements and manual handling of components.",
      },
    ],
  },
  {
    title: "Field Operators & Maintenance Staff",
    image: Front,
    icon: <FaUserNurse className="text-2xl text-gray-700" />,
    issues: [
      {
        title: "Fatigue & burnout",
        icon: <MdChairAlt />,
        description:
          "Due to irregular shift patterns and emergency call-outs.",
      },
      {
        title: "Sleep disruption",
        icon: <GiNightSleep />,
        description:
          "From rotational or overnight work schedules impacting rest cycles.",
      },
      {
        title: "Joint issues",
        icon: <MdHealthAndSafety />,
        description:
          "Caused by climbing, kneeling, and work in confined aircraft spaces.",
      },
    ],
  },
  {
    title: "Administrative & Command-Level Staff",
    image: Front,
    icon: <FaUserNurse className="text-2xl text-gray-700" />,
    issues: [
      {
        title: "Hypertension & lifestyle diseases",
        icon: <MdChairAlt />,
        description:
          "Linked to sedentary desk roles, long hours, and high stress levels.",
      },
      {
        title: "Mental health challenges",
        icon: <GiNightSleep />,
        description:
          "Resulting from strategic decision pressures and constant connectivity.",
      },
      {
        title: "Poor ergonomics",
        icon: <MdHealthAndSafety />,
        description:
          "Due to improper workstation setups and extended sitting hours.",
      },
    ],
  },
];

const HotelHealthChallenges = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section className="py-16 px-6">
      <h2
        className="text-3xl md:text-4xl font-extrabold text-center mb-4 text-slate-900"
        data-aos="fade-up"
      >
        Aerospace Employee <span className="text-teal-600">Health Problems</span>
      </h2>
      <p
        className="text-lg text-slate-500 mb-10 text-center"
        data-aos="fade-up"
        data-aos-delay="100">
        The Hidden Turbulence
      </p>
      <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8 max-w-7xl mx-auto">
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
                          <h4 className="font-semibold text-sm text-teal-600 font-2xl">
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

export default HotelHealthChallenges;