import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  GiBank,
  GiBurningEye,
  GiBackPain,
  GiBrain,
  GiBodyHeight,
  GiMuscleUp,
  GiHeartBeats,
  GiThermometerHot,
} from "react-icons/gi";
import { BiBody } from "react-icons/bi";
import { MdOutlineWork } from "react-icons/md";
import { FaBusinessTime } from "react-icons/fa";

import branch from "../../assets/Bank-sector-img/branch.jpeg";
import backend from "../../assets/Bank-sector-img/Backend.jpeg";
import marketing from "../../assets/Bank-sector-img/marketing.jpeg";

const data = [
  {
    title: "Branch-Level Operations & Frontline Staff",
    image: branch,
    icon: <GiBank className="text-2xl text-gray-700" />,
    issues: [
      {
        title: "Eye Strain",
        icon: <GiBurningEye />,
        description:
          "Continuous screen usage for transactions and reports can lead to digital eye strain and fatigue.",
      },
      {
        title: "Varicose Veins / Back Pain",
        icon: <GiBackPain />,
        description:
          "Prolonged sitting and static postures without breaks contribute to spinal discomfort and poor circulation.",
      },
      {
        title: "Mental Stress",
        icon: <GiBrain />,
        description:
          "High customer interaction and sales pressure create stress and emotional fatigue over time.",
      },
    ],
  },
  {
    title: "Corporate Office & Back-End Teams",
    image: backend,
    icon: <MdOutlineWork className="text-2xl text-gray-700" />,
    issues: [
      {
        title: "Sedentary Lifestyle Diseases",
        icon: <BiBody />,
        description:
          "Extended hours at desks with little movement raise the risk of diabetes, obesity, and related issues.",
      },
      {
        title: "Anxiety & Burnout",
        icon: <GiBrain />,
        description:
          "Tight deadlines and compliance demands often lead to chronic stress and emotional burnout.",
      },
      {
        title: "Weight Gain / Metabolic Issues",
        icon: <GiBodyHeight />,
        description:
          "Irregular routines and poor dietary habits contribute to weight gain and metabolic imbalances.",
      },
    ],
  },
  {
    title: "Field Force & Marketing Executives",
    image: marketing,
    icon: <FaBusinessTime className="text-2xl text-gray-700" />,
    issues: [
      {
        title: "Musculoskeletal Strain",
        icon: <GiMuscleUp />,
        description:
          "Frequent travel and carrying promotional materials put stress on joints and muscles.",
      },
      {
        title: "Hypertension & Cardiac Risk",
        icon: <GiHeartBeats />,
        description:
          "Sales targets, travel fatigue, and erratic schedules can elevate blood pressure and cardiac strain.",
      },
      {
        title: "Sun Exposure & Fatigue",
        icon: <GiThermometerHot />,
        description:
          "Working outdoors in extreme weather leads to exhaustion, dehydration, and reduced performance.",
      },
    ],
  },
];

const BankHealthChallenges = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section className="py-16 px-6">
      <h2
        className="text-3xl md:text-4xl font-extrabold text-center mb-4 text-slate-900"
        data-aos="fade-up"
      >
        Bank Employee <span className="text-teal-600">Health Challenges</span>
      </h2>
      <p
        className="text-lg text-slate-500 mb-10 text-center"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        The financial sector faces growing wellness risks — from long sedentary
        hours to high mental stress. Addressing these challenges proactively can
        boost productivity, morale, and retention.
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

export default BankHealthChallenges;