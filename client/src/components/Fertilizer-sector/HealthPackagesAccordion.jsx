import React, { useEffect } from "react";
import { FaUserTie, FaUsersCog, FaUserNurse } from "react-icons/fa";
import { GiPlantRoots, GiHealthCapsule, GiCrown, GiStrong, GiBurningBook, GiCook, GiHealthNormal } from "react-icons/gi";
import AOS from "aos";
import "aos/dist/aos.css";

const data = [
  {
    title: "For Plant Operations & Shift Workers",
    icon: <FaUserTie className="text-xl text-teal-600" />,
    issues: [
      { title: "CoreCare", descriptionTittle: "CBC" },
      { title: "CoreCare", descriptionTittle: "RFT" },
      { title: "CoreCare", descriptionTittle: "LFT" },
      { title: "CoreCare", descriptionTittle: "Urine Test" },
      { title: "ShiftShield", descriptionTittle: "CoreCare + ECG, Chest X-ray, Spirometry" },
      { title: "VitalMax", descriptionTittle: "ShiftShield + Audiometry, Skin Patch Test, Vision Check" },
    ],
  },
  {
    title: "For Maintenance & Technical Staff",
    icon: <FaUsersCog className="text-xl text-teal-600" />,
    issues: [
      { title: "TechBasic", descriptionTittle: "CBC" },
      { title: "TechBasic", descriptionTittle: "RBS" },
      { title: "TechBasic", descriptionTittle: "Lipid Profile" },
      { title: "TechGuard", descriptionTittle: "TechBasic + Eye Test, Audiometry" },
      { title: "TechElite", descriptionTittle: "TechGuard + Ergonomic Evaluation, Vitamin D, B12" },
    ],
  },
  {
    title: "For Supervisory & Admin Staff",
    icon: <FaUserNurse className="text-xl text-teal-600" />,
    issues: [
      { title: "DeskWell", descriptionTittle: "CBC" },
      { title: "DeskWell", descriptionTittle: "RBS" },
      { title: "DeskWell", descriptionTittle: "BP" },
      { title: "DeskWell", descriptionTittle: "BMI" },
      { title: "StressShield", descriptionTittle: "DeskWell + ECG, Liver & Kidney Profile, Eye Test" },
      { title: "Executive360", descriptionTittle: "StressShield + Mental Wellness, Cardiac Risk Marker, HBA1c" },
    ],
  },
];

const FertilizerHealthPackages = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section className="py-12 px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10" data-aos="fade-up">
        Recommended Health Check-ups for <span className="text-teal-600">Fertilizer Workforce</span>
      </h2>

      <div className="grid md:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {data.map((group, idx) => (
          <div
            key={idx}
            className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100 flex flex-col h-[400px]"
            data-aos="zoom-in-up"
            data-aos-delay={idx * 100}
          >
            <h3 className="text-xl font-semibold text-teal-600 mb-4 flex items-center gap-2">
              {group.icon} {group.title}
            </h3>

            <div className="overflow-y-auto pr-2 custom-scrollbar">
              <ul className="space-y-3">
                {group.issues.map((issue, i) => (
                  <li
                    key={i}
                    className="bg-teal-50 px-4 py-2 rounded-lg text-sm font-medium text-gray-800"
                  >
                    {issue.descriptionTittle}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      <style>{`
        .custom-scrollbar::-webkit-scrollbar { width: 8px; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background-color: rgba(13,148,136,0.4); border-radius: 6px; }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover { background-color: rgba(13,148,136,0.7); }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
      `}</style>
    </section>
  );
};

export default FertilizerHealthPackages;