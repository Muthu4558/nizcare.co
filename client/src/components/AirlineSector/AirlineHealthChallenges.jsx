// AirlineHealthChallenges.jsx
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { MdFlight } from "react-icons/md";
import { FaUsersCog, FaUserTie } from "react-icons/fa";

import {
  GiNightSleep,
  GiBrain,
  GiBackPain,
  GiKneeling,
  GiHearingDisabled,
  GiHeatHaze,
  GiOfficeChair,
  GiEyeball,
} from "react-icons/gi";

import FlightCrew from "../../assets/AirlineSector-img/flightCrew.jpeg";
import GroundStaffs from "../../assets/AirlineSector-img/GroundStaff.jpeg";
import Corporate from "../../assets/AirlineSector-img/Corporate.jpeg";

const data = [
  {
    title: "Flight Crew (Pilots & Cabin Crew)",
    image: FlightCrew,
    icon: <MdFlight className="text-2xl text-gray-700" />,
    issues: [
      {
        title: "Fatigue & Sleep Disorders",
        icon: <GiNightSleep />,
        description: "Caused by irregular hours, jet lag, and long-haul schedules.",
      },
      {
        title: "Stress & Anxiety",
        icon: <GiBrain />,
        description:
          "Due to high passenger interaction, safety responsibilities, and tight timelines.",
      },
      {
        title: "Back & Neck Pain",
        icon: <GiBackPain />,
        description: "Prolonged sitting or standing, poor ergonomics during flights.",
      },
    ],
  },
  {
    title: "Ground Operations & Technicians",
    image: GroundStaffs,
    icon: <FaUsersCog className="text-2xl text-gray-700" />,
    issues: [
      {
        title: "Musculoskeletal Disorders",
        icon: <GiKneeling />,
        description: "Repetitive heavy lifting, kneeling, and bending.",
      },
      {
        title: "Hearing Loss",
        icon: <GiHearingDisabled />,
        description: "Continuous exposure to aircraft noise and machinery.",
      },
      {
        title: "Heat Stress & Dehydration",
        icon: <GiHeatHaze />,
        description: "Outdoor work in high temperatures on tarmac.",
      },
    ],
  },
  {
    title: "Corporate & Support Staff",
    image: Corporate,
    icon: <FaUserTie className="text-2xl text-gray-700" />,
    issues: [
      {
        title: "Sedentary Lifestyle Issues",
        icon: <GiOfficeChair />,
        description: "Desk-bound work leading to obesity and diabetes.",
      },
      {
        title: "Eye Strain & Headaches",
        icon: <GiEyeball />,
        description: "Excessive screen time and poor lighting.",
      },
      {
        title: "Mental Burnout",
        icon: <GiBrain />,
        description: "Constant coordination across teams and shift variations.",
      },
    ],
  },
];

const AirlineHealthChallenges = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section className="py-16 px-6">
      <h2
        className="text-3xl md:text-4xl font-extrabold text-center mb-4 text-slate-900"
        data-aos="fade-up"
      >
        Airline Employee <span className="text-teal-600">Health Problems</span>
      </h2>

      <p
        className="text-lg text-slate-500 mb-10 text-center"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        Airline workers face unique occupational risks across flight, ground, and
        corporate operations — leading to preventable health challenges.
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

            {/* Content */}
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
                      className="border border-teal-600 rounded-xl p-4 shadow-sm hover:shadow-md transition-all duration-300"
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

export default AirlineHealthChallenges;