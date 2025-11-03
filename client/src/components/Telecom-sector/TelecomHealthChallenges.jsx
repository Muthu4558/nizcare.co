import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// Font Awesome
import { FaBroadcastTower, FaTemperatureHigh, FaHeadset, FaChartLine, FaServer } from "react-icons/fa";
// Game Icons
import { GiMuscleUp, GiBrain, GiKneeling } from "react-icons/gi";
// Material Icons
import { 
  MdPsychology, 
  MdVisibility, 
  MdOutlineMonitorHeart, 
  MdRestaurantMenu, 
  MdOutlineHotelClass, 
  MdOutlineChair, 
  MdNightlightRound, 
  MdOutlinePsychologyAlt 
} from "react-icons/md";

import fieldTechnicians from "../../assets/Telecom-sector-img/field.jpeg";
import callCenter from "../../assets/Telecom-sector-img/callsupport.jpeg";
import salesTeam from "../../assets/Telecom-sector-img/sales.jpeg";
import itAdmin from "../../assets/Telecom-sector-img/admin.jpeg";

// Data
const data = [
  {
    title: "Field Technicians & Tower Workers",
    image: fieldTechnicians,
    icon: <FaBroadcastTower className="text-2xl text-gray-700" />,
    issues: [
      {
        title: "Musculoskeletal Disorders",
        icon: <GiMuscleUp />,
        description: "Caused by frequent tower climbing and carrying heavy telecom equipment.",
      },
      {
        title: "Heat Exhaustion & Dehydration",
        icon: <FaTemperatureHigh />,
        description: "Due to prolonged outdoor work under direct sun without breaks.",
      },
      {
        title: "High Stress & Fatigue",
        icon: <MdPsychology />,
        description: "Common during emergency repairs and extended shift work.",
      },
    ],
  },
  {
    title: "Call Center & Customer Support Teams",
    image: callCenter,
    icon: <FaHeadset className="text-2xl text-gray-700" />,
    issues: [
      {
        title: "Mental Fatigue & Burnout",
        icon: <GiBrain />,
        description: "From continuous calls, customer complaints, and daily performance targets.",
      },
      {
        title: "Eye Strain & Posture Issues",
        icon: <MdVisibility />,
        description: "Caused by long screen hours and poor ergonomic desk setup.",
      },
      {
        title: "Hypertension",
        icon: <MdOutlineMonitorHeart />,
        description: "Linked to sedentary routines and irregular meal patterns.",
      },
    ],
  },
  {
    title: "Sales & Marketing Executives",
    image: salesTeam,
    icon: <FaChartLine className="text-2xl text-gray-700" />,
    issues: [
      {
        title: "Fatigue & Joint Pain",
        icon: <GiKneeling />,
        description: "Due to excessive travel, walking, and inconsistent work hours.",
      },
      {
        title: "Gastrointestinal Issues",
        icon: <MdRestaurantMenu />,
        description: "Resulting from poor eating habits and irregular meal timings on the field.",
      },
      {
        title: "Stress & Sleep Issues",
        icon: <MdOutlineHotelClass />,
        description: "Driven by target pressures and continuous field performance demands.",
      },
    ],
  },
  {
    title: "IT, Network Operations & Admin Teams",
    image: itAdmin,
    icon: <FaServer className="text-2xl text-gray-700" />,
    issues: [
      {
        title: "Sedentary Lifestyle",
        icon: <MdOutlineChair />,
        description: "Prolonged sitting during desk work contributes to various chronic issues.",
      },
      {
        title: "Sleep Disorders",
        icon: <MdNightlightRound />,
        description: "Caused by rotational or overnight NOC shifts and erratic work cycles.",
      },
      {
        title: "Chronic Stress",
        icon: <MdOutlinePsychologyAlt />,
        description: "Due to constant coordination and pressure to meet SLA targets.",
      },
    ],
  },
];

const TelecomHealthChallenges = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section className="py-16 px-6">
      <h2
        className="text-3xl md:text-4xl font-extrabold text-center mb-4 text-slate-900"
        data-aos="fade-up"
      >
        Telecom Employee <span className="text-teal-600">Health Problems</span>
      </h2>
      <p
        className="text-lg text-slate-500 mb-10 text-center max-w-3xl mx-auto"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        From field engineers to network control teams, telecom employees face invisible
        health challenges that affect performance, safety, and overall wellbeing.
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

export default TelecomHealthChallenges;