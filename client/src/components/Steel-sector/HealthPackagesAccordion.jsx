import React, { useEffect } from "react";
import {
  FaRegBuilding,
  FaTools,
  FaPeopleCarry,
  FaUserShield,
  FaUserCheck,
  FaWrench,
  FaUsersCog,
} from "react-icons/fa";
import {
  GiHealthIncrease,
  GiFurnace,
  GiElectric,
  GiToolbox,
  GiCargoCrane,
} from "react-icons/gi";
import AOS from "aos";
import "aos/dist/aos.css";

const data = [
  {
    title: "Furnace & Production Line Workers",
    icon: <GiFurnace className="text-xl text-amber-500" />,
    issues: [
      {
        title: "SteelShield Basic",
        description:
          "CBC",
      },
      {
        title: "SteelShield Basic",
        description:
          "Blood Pressure",
      },{
        title: "SteelShield Basic",
        description:
          "BMI",
      },{
        title: "SteelShield Basic",
        description:
          "Pulse",
      },{
        title: "SteelShield Basic",
        description:
          "Respiratory Rate",
      },
      {
        title: "SteelShield Plus+",
        description:
          "All Basic + Liver Function, Kidney Profile, Chest X-Ray",
      },
      {
        title: "SteelShield Max",
        description:
          "All Plus + ECG, Spirometry, Audiometry, Fatigue Index",
      },
    ],
  },
  {
    title: "Maintenance & Logistics Staff",
    icon: <FaTools className="text-xl text-amber-500" />,
    issues: [
      {
        title: "IronGuard Basic",
        description:
          "CBC",
      },
      {
        title: "IronGuard Basic",
        description:
          "BP",
      },
      {
        title: "IronGuard Basic",
        description:
          "BMI",
      },
      {
        title: "IronGuard Basic",
        description:
          "Vision",
      },
      {
        title: "IronGuard Basic",
        description:
          "Audiometry",
      },
      {
        title: "IronGuard Plus",
        description:
          " All Basic + Joint X-Ray, Nerve Function Test, ECG",
      },
      {
        title: "IronGuard Max",
        description:
          " All Plus + Vitamin D, Stress Markers, Ergonomic Risk Scan",
      },
    ],
  },
  {
    title: "Admin & QA/QC Employees",
    icon: <FaRegBuilding className="text-xl text-amber-500" />,
    issues: [
      {
        title: "SmartDesk Basic",
        description:
          " CBC",
      },
      {
        title: "SmartDesk Basic",
        description:
          " BMI",
      },
      {
        title: "SmartDesk Basic",
        description:
          "  Blood Sugar",
      },
      {
        title: "SmartDesk Basic",
        description:
          "  BP",
      },
      {
        title: "SmartDesk Basic",
        description:
          " Eye Test",
      },
      {
        title: "SmartDesk Plus",
        description:
          " All Basic + Lipid Profile, ECG, Liver Function, Spine Screening",
      },
      {
        title: "SmartDesk Max",
        description:
          " All Plus + Mental Health Evaluation, Stress Scan, Vitamin Panel",
      },
    ],
  },
];

const SteelHealthPackagesSimplified = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section className="py-12 px-6">
      <h2
        className="text-3xl md:text-4xl font-bold text-center mb-4"
        data-aos="fade-up"
      >
        Tailored <span className="text-teal-600">Health Check-ups</span> for
        Every Steel Role
      </h2>

      <p
        className="text-lg text-slate-500 mb-10 text-center max-w-3xl mx-auto"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        Precision health assessments crafted for the unique duties of the
        steel industry workforce — from furnaces to offices.
      </p>

      <div
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        {data.map((group, idx) => (
          <div
            key={idx}
            className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100 flex flex-col h-[420px] hover:shadow-xl transition-all duration-300"
          >
            {/* Title */}
            <h3 className="text-xl font-semibold text-teal-600 mb-4 flex items-center gap-2">
              {group.icon}
              {group.title}
            </h3>

            {/* Scrollable Issues List */}
            <div className="overflow-y-auto pr-2 custom-scrollbar">
              <ul className="space-y-3">
                {group.issues.map((issue, i) => (
                  <li
                    key={i}
                    className="bg-teal-50 px-4 py-3 rounded-lg text-sm font-medium text-gray-800 shadow-sm transition"
                  >
                    <div className="font-semibold text-teal-700">
                      {/* {issue.title} */}
                    </div>
                    <p className="text-gray-700 text-xs mt-1 leading-snug">
                      {issue.description}
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

// Custom Scrollbar Styling
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
    <SteelHealthPackagesSimplified />
  </>
);