import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import {
  GiBackPain,
  GiBrain,
  GiBrainDump,
  GiBurningEye,
  GiFoodChain,
  GiHeartBeats,
  GiMicrophone,
  GiSleepy,
  GiSuitcase,
  GiVirus,
  GiWeightLiftingUp,
} from "react-icons/gi";
import { FaRoute, FaUserTie } from "react-icons/fa";
import { MdOutlineSupport, MdTravelExplore } from "react-icons/md";

import tourGuide from "../../assets/Tourism-sector-img/tourGuide.jpeg";
import transport from "../../assets/Tourism-sector-img/transport.jpeg";
import hospitality from "../../assets/Tourism-sector-img/hospitality.jpeg";
import sales from "../../assets/Tourism-sector-img/sales.jpeg";

const data = [
  {
    title: "Tour Guides & Travel Coordinators",
    image: tourGuide,
    icon: <MdTravelExplore className="text-2xl text-gray-700" />,
    issues: [
      {
        title: "Voice Strain & Fatigue",
        icon: <GiMicrophone />,
        description:
          "Due to constant talking and long hours on foot during tours.",
      },
      {
        title: "Stress & Burnout",
        icon: <GiBrainDump />,
        description:
          "Irregular schedules and responsibility for guest satisfaction.",
      },
      {
        title: "Digestive Issues",
        icon: <GiFoodChain />,
        description: "Irregular meal timings while traveling across routes.",
      },
    ],
  },
  {
    title: "Transport & Logistics Staff",
    image: transport,
    icon: <FaRoute className="text-2xl text-gray-700" />,
    issues: [
      {
        title: "Musculoskeletal Disorders",
        icon: <GiWeightLiftingUp />,
        description: "Long driving hours or lifting heavy luggage regularly.",
      },
      {
        title: "Hypertension & Obesity",
        icon: <GiHeartBeats />,
        description: "Sedentary nature and poor food habits on-the-go.",
      },
      {
        title: "Sleep Disorders",
        icon: <GiSleepy />,
        description: "Irregular shifts and overnight travel schedules.",
      },
    ],
  },
  {
    title: "Hospitality & Frontline Staff",
    image: hospitality,
    icon: <MdOutlineSupport className="text-2xl text-gray-700" />,
    issues: [
      {
        title: "Back Pain & Stress Injuries",
        icon: <GiBackPain />,
        description: "Prolonged standing and repetitive manual tasks.",
      },
      {
        title: "Exposure to Infections",
        icon: <GiVirus />,
        description:
          "Continuous interaction with diverse travelers and guests.",
      },
      {
        title: "Mental Fatigue",
        icon: <GiBrain />,
        description: "High-pressure, customer-facing work environments.",
      },
    ],
  },
  {
    title: "Sales & Marketing Professionals",
    image: sales,
    icon: <FaUserTie className="text-2xl text-gray-700" />,
    issues: [
      {
        title: "Stress & Anxiety",
        icon: <GiBrain />,
        description: "Target pressure, travel demands, and client handling.",
      },
      {
        title: "Travel Fatigue",
        icon: <GiSuitcase />,
        description: "Jet lag and disrupted work-life balance from constant travel.",
      },
      {
        title: "Eye Strain & Posture",
        icon: <GiBurningEye />,
        description: "Long hours using digital devices and poor sitting posture.",
      },
    ],
  },
];

const TourismHealthChallenges = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section className="py-16 px-6">
      <h2
        className="text-3xl md:text-4xl font-extrabold text-center mb-4 text-slate-900"
        data-aos="fade-up"
      >
        Tourism Employee <span className="text-teal-600">Health Challenges</span>
      </h2>
      <p
        className="text-lg text-slate-500 mb-10 text-center max-w-4xl mx-auto"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        In the tourism sector, employees face unique physical and mental health
        challenges from irregular schedules, high mobility, and customer-facing
        roles. Addressing these is vital for sustained productivity and
        well-being.
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

export default TourismHealthChallenges;