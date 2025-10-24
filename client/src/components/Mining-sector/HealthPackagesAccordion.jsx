import React, { useEffect } from "react";
import {
  FaTools,
  FaRegBuilding,
} from "react-icons/fa";
import {
  GiMineWagon,
} from "react-icons/gi";
import AOS from "aos";
import "aos/dist/aos.css";

const data = [
  {
    title: "Underground & Surface Miners",
    icon: <GiMineWagon className="text-xl" />,
    issues: [
      { title: "Basic MineFit", description: "BP" },
      { title: "Basic MineFit", description: "Blood Sugar" },
      { title: "Basic MineFit", description: "BMI" },
      { title: "Basic MineFit", description: "Vision Test" },
      { title: "SafeLungs+", description: "Chest X-ray, ECG" },
      { title: "SafeLungs+", description: "Spirometry" },
      { title: "SafeLungs+", description: "Audiometry" },
      { title: "DeepHealth Max", description: "Full CBC" },
      { title: "DeepHealth Max", description: "Liver/Kidney Panel" },
      { title: "DeepHealth Max", description: "Vitamin D/B12" },
      { title: "DeepHealth Max", description: "Stress Test" },
    ],
  },
  {
    title: "Maintenance & Technical Staff",
    icon: <FaTools className="text-xl" />,
    issues: [
      { title: "TechWell Basic", description: "BP, Sugar" },
      { title: "TechWell Basic", description: "Vision" },
      { title: "TechWell Basic", description: "Grip Strength Test" },
      { title: "WorkFit Advanced", description: "CBC, ECG" },
      { title: "WorkFit Advanced", description: "Eye Exam" },
      { title: "WorkFit Advanced", description: "Musculoskeletal Assessment" },
      { title: "CompleteCare Pro", description: "Stress ECG" },
      { title: "CompleteCare Pro", description: "Blood Panel" },
      { title: "CompleteCare Pro", description: "Uric Acid" },
      { title: "CompleteCare Pro", description: "Ortho Consult" },
    ],
  },
  {
    title: "Admin & Site Management",
    icon: <FaRegBuilding className="text-xl" />,
    issues: [
      { title: "DeskCare Lite", description: "BP, Sugar" },
      { title: "DeskCare Lite", description: "Eye Check" },
      { title: "DeskCare Lite", description: "BMI" },
      { title: "Executive Shield", description: "ECG" },
      { title: "Executive Shield", description: "Lipid Profile" },
      { title: "Executive Shield", description: "Liver Function" },
      { title: "Executive Shield", description: "HBA1C" },
      { title: "Leadership Platinum", description: "TMT" },
      { title: "Leadership Platinum", description: "Thyroid Panel" },
      { title: "Leadership Platinum", description: "Ultrasound" },
      { title: "Leadership Platinum", description: "Lifestyle Risk Profiling" },
    ],
  },
];

const SimplifiedMiningHealthPackages = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="py-16 px-4">
      <h2
        className="text-3xl md:text-4xl font-bold text-center mb-6"
        data-aos="fade-down"
      >
        Recommended <span className="text-teal-600">Health Packages</span> for the Mining Workforce
      </h2>

      <p
        className="text-lg text-slate-500 mb-10 text-center max-w-3xl mx-auto"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        Precision care designed for demanding mining environments. Each package
        addresses specific occupational health challenges — from underground dust exposure
        to executive stress resilience.
      </p>

      <div className="grid md:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {data.map((group, idx) => (
          <div
            key={idx}
            className="bg-white rounded-2xl shadow-lg p-6 flex flex-col h-[400px] group"
            data-aos="zoom-in-up"
            data-aos-delay={idx * 150}
          >
            <h3 className="text-xl font-semibold text-teal-600 mb-4 flex items-center gap-2">
              {group.icon}
              {group.title}
            </h3>

            <div className="overflow-y-auto pr-2 custom-scrollbar flex-1">
              <ul className="space-y-3">
                {group.issues.map((issue, i) => (
                  <li
                    key={i}
                    className="bg-teal-50 px-4 py-2 rounded-lg text-sm font-medium text-gray-800 flex flex-col"
                  >
                    <span className="font-semibold text-teal-700">
                      {/* {issue.title} */}
                    </span>
                    <span className="text-gray-700 text-[13px] mt-1">
                      {issue.description}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      {/* Custom Scrollbar */}
      <style>{`
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
      `}</style>
    </section>
  );
};

export default SimplifiedMiningHealthPackages;