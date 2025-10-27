import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  GiChemicalDrop,
  GiChemicalTank,
  GiLungs,
  GiBodyHeight,
  GiSewingMachine,
  GiBurningEye,
  GiKnifeThrust,
  GiBackPain,
  GiThermometerHot,
  GiWaterBottle,
} from "react-icons/gi";
import { FaBoxes } from "react-icons/fa";

import tannery from "../../assets/Leather-sector-img/tannery.jpeg";
import stitching from "../../assets/Leather-sector-img/stitching.jpeg";
import packing from "../../assets/Leather-sector-img/packing.jpeg";

const data = [
  {
    title: "Tannery Workers",
    image: tannery,
    icon: <GiChemicalTank className="text-2xl text-gray-700" />,
    issues: [
      {
        title: "Skin Allergies & Dermatitis",
        icon: <GiChemicalDrop />,
        description:
          "Constant exposure to lime, chromium, and tanning agents can lead to rashes and chronic skin irritation.",
      },
      {
        title: "Respiratory Irritation",
        icon: <GiLungs />,
        description:
          "Inhalation of chemical vapors during tanning processes can affect lung health over time.",
      },
      {
        title: "Joint & Back Pain",
        icon: <GiBodyHeight />,
        description:
          "Long hours of standing or operating heavy machinery lead to chronic joint and spinal stress.",
      },
    ],
  },
  {
    title: "Stitching Line Workers",
    image: stitching,
    icon: <GiSewingMachine className="text-2xl text-gray-700" />,
    issues: [
      {
        title: "Eye Strain & Vision Issues",
        icon: <GiBurningEye />,
        description:
          "Continuous close-up stitching under poor lighting conditions affects visual health.",
      },
      {
        title: "Postural Disorders",
        icon: <GiBodyHeight />,
        description:
          "Improper seating and extended hours without breaks cause chronic neck and back strain.",
      },
      {
        title: "Needlestick Injuries",
        icon: <GiKnifeThrust />,
        description:
          "Fast-paced repetitive tasks increase the risk of minor but frequent hand injuries.",
      },
    ],
  },
  {
    title: "Packing & Dispatch Staff",
    image: packing,
    icon: <FaBoxes className="text-2xl text-gray-700" />,
    issues: [
      {
        title: "Lower Back Injuries",
        icon: <GiBackPain />,
        description:
          "Frequent lifting, twisting, and bending without proper technique leads to back pain.",
      },
      {
        title: "Heat Exhaustion",
        icon: <GiThermometerHot />,
        description:
          "Poorly ventilated warehouses increase the risk of overheating and reduced focus.",
      },
      {
        title: "Fatigue & Dehydration",
        icon: <GiWaterBottle />,
        description:
          "Physically demanding tasks with minimal breaks lead to exhaustion and reduced hydration.",
      },
    ],
  },
];

const LeatherHealthChallenges = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section className="py-16 px-6">
      <h2
        className="text-3xl md:text-4xl font-extrabold text-center mb-4 text-slate-900"
        data-aos="fade-up"
      >
        Leather Industry <span className="text-teal-600">Health Challenges</span>
      </h2>
      <p
        className="text-lg text-slate-500 mb-10 text-center max-w-3xl mx-auto"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        Workers in leather production face hidden health risks — from chemical
        exposure in tanneries to posture-related strain in stitching and
        dispatch lines. Preventive wellness can protect their most vital asset:
        their health.
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

export default LeatherHealthChallenges;