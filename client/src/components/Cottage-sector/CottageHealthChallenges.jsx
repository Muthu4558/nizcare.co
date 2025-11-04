import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import {
  GiBrain,
  GiChemicalDrop,
  GiDustCloud,
  GiKneeling,
  GiKnifeThrust,
  GiMuscleUp,
  GiPaintedPottery,
  GiScissors,
  GiSpinningWheel,
  GiWindSlap,
} from "react-icons/gi";
import {
  MdEventSeat,
  MdOutlineMonitorHeart,
  MdPsychology,
  MdVisibility,
} from "react-icons/md";
import { FaPeopleGroup, FaTemperatureHigh } from "react-icons/fa6";

import handloomArtisans from "../../assets/Cottage-sector-img/Handloom.jpeg";
import embroideryWorkers from "../../assets/Cottage-sector-img/embroidery.jpeg";
import potteryWorkers from "../../assets/Cottage-sector-img/pottery.jpeg";
import shgWomen from "../../assets/Cottage-sector-img/self-group.jpeg";

const data = [
  {
    title: "Handloom & Weaving Artisans",
    image: handloomArtisans,
    icon: <GiSpinningWheel className="text-2xl text-gray-700" />,
    issues: [
      {
        title: "Musculoskeletal Disorders",
        icon: <GiMuscleUp />,
        description:
          "Due to repetitive hand motion and long hours on looms with poor posture.",
      },
      {
        title: "Vision Strain",
        icon: <MdVisibility />,
        description:
          "Caused by focusing on intricate weaving patterns for extended periods.",
      },
      {
        title: "Respiratory Issues",
        icon: <GiWindSlap />,
        description:
          "Triggered by cotton dust and poorly ventilated weaving environments.",
      },
    ],
  },
  {
    title: "Embroidery & Tailoring Workers",
    image: embroideryWorkers,
    icon: <GiScissors className="text-2xl text-gray-700" />,
    issues: [
      {
        title: "Back and Neck Pain",
        icon: <MdEventSeat />,
        description:
          "From static sitting positions and non-ergonomic work setups.",
      },
      {
        title: "Mental Stress",
        icon: <MdPsychology />,
        description:
          "Due to tight deadlines, financial strain, and long working hours.",
      },
      {
        title: "Finger Injuries",
        icon: <GiKnifeThrust />,
        description:
          "Common from using precision tools like scissors and needles.",
      },
    ],
  },
  {
    title: "Pottery & Craft Workers",
    image: potteryWorkers,
    icon: <GiPaintedPottery className="text-2xl text-gray-700" />,
    issues: [
      {
        title: "Dust-Related Lung Conditions",
        icon: <GiDustCloud />,
        description:
          "Due to constant exposure to clay, silica, and fine particulates.",
      },
      {
        title: "Joint Strain",
        icon: <GiKneeling />,
        description: "From kneading clay and repetitive wheel work.",
      },
      {
        title: "Dehydration & Fatigue",
        icon: <FaTemperatureHigh />,
        description:
          "Caused by working in hot open workshops without adequate hydration.",
      },
    ],
  },
  {
    title: "Women in SHGs (Self-Help Groups)",
    image: shgWomen,
    icon: <FaPeopleGroup className="text-2xl text-gray-700" />,
    issues: [
      {
        title: "Mental Fatigue",
        icon: <GiBrain />,
        description:
          "From juggling household responsibilities with group work and production.",
      },
      {
        title: "Exposure to Smoke/Chemicals",
        icon: <GiChemicalDrop />,
        description:
          "During food processing, soap making, or textile dyeing activities.",
      },
      {
        title: "Nutritional Deficiencies",
        icon: <MdOutlineMonitorHeart />,
        description:
          "Due to irregular meals and limited access to nutrient-rich food.",
      },
    ],
  },
];

const CottageHealthChallenges = () => {
  useEffect(() => {
    AOS.init({ duration: 900, once: true });
  }, []);

  return (
    <section className="py-16 px-6">
      {/* Heading */}
      <h2
        className="text-3xl md:text-4xl font-extrabold text-center mb-4 text-slate-900"
        data-aos="fade-up"
      >
        Cottage Industry Worker{" "}
        <span className="text-teal-600">Health Challenges</span>
      </h2>
      <p
        className="text-lg text-slate-500 mb-10 text-center max-w-4xl mx-auto"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        In the cottage and handloom sectors, skilled artisans face daily physical
        and mental health challenges. Preventive wellness support ensures safer,
        healthier, and more sustainable livelihoods for these invaluable creators.
      </p>

      {/* Grid Cards */}
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

export default CottageHealthChallenges;