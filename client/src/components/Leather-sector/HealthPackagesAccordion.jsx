import React, { useEffect } from "react";
import {
  GiChemicalTank,
  GiSewingMachine,
  GiHealthNormal,
  GiChemicalDrop,
  GiShield,
  GiStandingPotion,
  GiHealthCapsule,
  GiStrong,
  GiWeightLiftingUp,
} from "react-icons/gi";
import { FaBoxes } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const data = [
  {
    title: "Tannery Workers",
    icon: <GiChemicalTank className="text-xl text-gray-700" />,
    issues: [
      {
        title: "Basic Shield",
        icon: <GiHealthNormal className="text-amber-500 text-lg" />,
        descriptionTittle: "BP",
      },
      {
        title: "Basic Shield",
        icon: <GiHealthNormal className="text-amber-500 text-lg" />,
        descriptionTittle: "Sugar",
      },
      {
        title: "Basic Shield",
        icon: <GiHealthNormal className="text-amber-500 text-lg" />,
        descriptionTittle: "BMI",
      },
      {
        title: "Basic Shield",
        icon: <GiHealthNormal className="text-amber-500 text-lg" />,
        descriptionTittle: "Skin Check",
      },
      {
        title: "Basic Shield",
        icon: <GiHealthNormal className="text-amber-500 text-lg" />,
        descriptionTittle: "Eye Check",
      },
      {
        title: "Chemical Exposure Scan",
        icon: <GiChemicalDrop className="text-amber-500 text-lg" />,
        descriptionTittle:
          "Above + Pulmonary Function Test, Urine Analysis, Liver & Kidney Panel",
      },
      {
        title: "Total Tannery Wellness",
        icon: <GiShield className="text-amber-500 text-lg" />,
        descriptionTittle:
          "Above + Chest X-ray, Audiometry, ECG, Dermatology Consult",
      },
    ],
  },
  {
    title: "Stitching Line Workers",
    icon: <GiSewingMachine className="text-xl text-gray-700" />,
    issues: [
      {
        title: "Vision & Vital Care",
        icon: <GiHealthNormal className="text-amber-500 text-lg" />,
        descriptionTittle: "BP",
      },
      {
        title: "Vision & Vital Care",
        icon: <GiHealthNormal className="text-amber-500 text-lg" />,
        descriptionTittle: "Sugar",
      },
      {
        title: "Vision & Vital Care",
        icon: <GiHealthNormal className="text-amber-500 text-lg" />,
        descriptionTittle: "Eye Check",
      },
      {
        title: "Vision & Vital Care",
        icon: <GiHealthNormal className="text-amber-500 text-lg" />,
        descriptionTittle: "Ergonomic Assessment",
      },
      {
        title: "Focus & Flexibility",
        icon: <GiStandingPotion className="text-amber-500 text-lg" />,
        descriptionTittle:
          "Above + Posture Screening, Neck/Spine Mobility Test, Vitamin D Panel",
      },
      {
        title: "Complete Sewing Wellness",
        icon: <GiHealthCapsule className="text-amber-500 text-lg" />,
        descriptionTittle:
          "Above + CBC, ECG, Physical Therapy Consult, Mental Health Screening",
      },
    ],
  },
  {
    title: "Packing & Dispatch Staff",
    icon: <FaBoxes className="text-xl text-gray-700" />,
    issues: [
      {
        title: "Basic Fit Check",
        icon: <GiHealthNormal className="text-amber-500 text-lg" />,
        descriptionTittle: "BP",
      },
      {
        title: "Basic Fit Check",
        icon: <GiHealthNormal className="text-amber-500 text-lg" />,
        descriptionTittle: "Sugar",
      },
      {
        title: "Basic Fit Check",
        icon: <GiHealthNormal className="text-amber-500 text-lg" />,
        descriptionTittle: "Hydration Check",
      },
      {
        title: "Basic Fit Check",
        icon: <GiHealthNormal className="text-amber-500 text-lg" />,
        descriptionTittle: "Eye Test",
      },
      {
        title: "Lift Smart Panel",
        icon: <GiStrong className="text-amber-500 text-lg" />,
        descriptionTittle:
          "Above + Back/Posture Exam, ECG, Vitamin Profile",
      },
      {
        title: "Warehouse Wellness Max",
        icon: <GiWeightLiftingUp className="text-amber-500 text-lg" />,
        descriptionTittle:
          "Above + Kidney Function Test, X-ray Spine, Fitness & Injury Risk Assessment",
      },
    ],
  },
];

const LeatherHealthPackages = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section className="py-16 px-6">
      <h2
        className="text-3xl md:text-4xl font-bold text-center mb-4"
        data-aos="fade-up"
      >
        Precision <span className="text-teal-600">Health Checkups</span> – Tailored for Leather Teams
      </h2>
      <p
        className="text-lg text-slate-500 mb-10 text-center max-w-3xl mx-auto"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        From chemical exposure to posture strain, each role faces unique health
        challenges. Our tailored screening packages ensure early detection and
        long-term workforce wellness.
      </p>

      <div
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        {data.map((group, idx) => (
          <div
            key={idx}
            className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100 flex flex-col h-[420px]"
          >
            {/* Header */}
            <h3 className="text-xl font-semibold text-teal-600 mb-4 flex items-center gap-2">
              {group.icon}
              {group.title}
            </h3>

            {/* Scrollable issues */}
            <div className="overflow-y-auto pr-2 custom-scrollbar">
              <ul className="space-y-3">
                {group.issues.map((issue, i) => (
                  <li
                    key={i}
                    className="bg-teal-50 px-4 py-2 rounded-lg text-sm text-gray-800 flex flex-col"
                  >
                    <div className="flex items-center gap-2 font-semibold mb-1 text-slate-800">
                      {/* {issue.icon} */}
                      {/* {issue.title} */}
                    </div>
                    <p className="text-xs text-slate-600 leading-snug">
                      {issue.descriptionTittle}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

// Custom scrollbar styles
const styles = `
.custom-scrollbar::-webkit-scrollbar {
  width: 8px;
}
.custom-scrollbar::-webkit-scrollbar-thumb {
  background-color: rgba(13, 148, 136, 0.4);
  border-radius: 6px;
}
.custom-scrollbar::-webkit-scrollbar-thumb:hover {
  background-color: rgba(13, 148, 136, 0.7);
}
.custom-scrollbar::-webkit-scrollbar-track {
  background: transparent;
}
`;

export default () => (
  <>
    <style>{styles}</style>
    <LeatherHealthPackages />
  </>
);