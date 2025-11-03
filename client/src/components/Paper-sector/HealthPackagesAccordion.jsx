import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  GiWeightLiftingUp,
  GiGears,
  GiHealthNormal,
  GiEnergyBreath,
  GiShield,
  GiSleepy,
  GiEyeShield,
  GiHospital,
  GiHeartBeats,
  GiThermometerScale,
  GiPowerLightning,
} from "react-icons/gi";
import { FaPlus, FaPlusSquare, FaTruckLoading } from "react-icons/fa";
import { MdEmergency, MdOutlineSupportAgent } from "react-icons/md";

const data = [
  {
    title: "Machine Operators & Mill Workers",
    icon: <GiWeightLiftingUp className="text-xl text-black" />,
    issues: [
      {
        title: "Basic Shift Care",
        icon: <GiHealthNormal className="text-lg text-amber-400" />,
        descriptionTittle: "Daily wage workers",
        description: "CBC",
      },
      {
        title: "Basic Shift Care",
        icon: <GiHealthNormal className="text-lg text-amber-400" />,
        descriptionTittle: "Daily wage workers",
        description: "Blood Pressure",
      },
      {
        title: "Basic Shift Care",
        icon: <GiHealthNormal className="text-lg text-amber-400" />,
        descriptionTittle: "Daily wage workers",
        description: "Vision Test",
      },
      {
        title: "BreathSafe Panel",
        icon: <GiEnergyBreath className="text-lg text-amber-400" />,
        descriptionTittle: "Workers in dusty environments",
        description: "Pulmonary Function Test",
      },
      {
        title: "BreathSafe Panel",
        icon: <GiEnergyBreath className="text-lg text-amber-400" />,
        descriptionTittle: "Workers in dusty environments",
        description: "Chest X-Ray",
      },
      {
        title: "Core Strength Panel",
        icon: <GiShield className="text-lg text-amber-400" />,
        descriptionTittle: "Machine operators, loaders",
        description: "Ortho Check",
      },
      {
        title: "Core Strength Panel",
        icon: <GiShield className="text-lg text-amber-400" />,
        descriptionTittle: "Machine operators, loaders",
        description: "Spine X-ray",
      },
      {
        title: "Core Strength Panel",
        icon: <GiShield className="text-lg text-amber-400" />,
        descriptionTittle: "Machine operators, loaders",
        description: "Vitamin D",
      },
      {
        title: "Heavy Duty Full Body",
        icon: <GiSleepy className="text-lg text-amber-400" />,
        descriptionTittle: "Long-term workers, age 35+",
        description: "ECG, LFT, RFT",
      },
      {
        title: "Heavy Duty Full Body",
        icon: <GiSleepy className="text-lg text-amber-400" />,
        descriptionTittle: "Long-term workers, age 35+",
        description: "Diabetes & Lipid",
      },
    ],
  },
  {
    title: "Maintenance & Technical Staff",
    icon: <GiGears className="text-xl text-black" />,
    issues: [
      {
        title: "TechFit Basic",
        icon: <GiEyeShield className="text-lg text-amber-400" />,
        descriptionTittle: "Electricians, Fitters",
        description: "Audiometry",
      },
      {
        title: "TechFit Basic",
        icon: <GiEyeShield className="text-lg text-amber-400" />,
        descriptionTittle: "Electricians, Fitters",
        description: "BP, Sugar Check",
      },
      {
        title: "BoilerGuard",
        icon: <FaPlusSquare className="text-lg text-amber-400" />,
        descriptionTittle: "Boiler operators",
        description: "Spirometry",
      },
      {
        title: "BoilerGuard",
        icon: <FaPlusSquare className="text-lg text-amber-400" />,
        descriptionTittle: "Boiler operators",
        description: "Stress ECG",
      },
      {
        title: "BoilerGuard",
        icon: <FaPlusSquare className="text-lg text-amber-400" />,
        descriptionTittle: "Boiler operators",
        description: "Creatinine",
      },
      {
        title: "High Alert Panel",
        icon: <MdEmergency className="text-lg text-amber-400" />,
        descriptionTittle: "Emergency repair team",
        description: "Neuro Exam",
      },
       {
        title: "High Alert Panel",
        icon: <MdEmergency className="text-lg text-amber-400" />,
        descriptionTittle: "Emergency repair team",
        description: "Eye Check, ECG",
      },
      {
        title: "Full Shield Plan",
        icon: <GiShield className="text-lg text-amber-400" />,
        descriptionTittle: "Shift leads, senior staff",
        description: "Master Health Check + Ergonomics",
      },
    ],
  },
  {
    title: "Admin & Quality Control Teams",
    icon: <MdOutlineSupportAgent className="text-xl text-black" />,
    issues: [
      {
        title: "Desk Wellness",
        icon: <GiHealthNormal className="text-lg text-amber-400" />,
        descriptionTittle: "QC Analysts, Admins",
        description: "Eye",
      },
      {
        title: "Desk Wellness",
        icon: <GiHealthNormal className="text-lg text-amber-400" />,
        descriptionTittle: "QC Analysts, Admins",
        description: "Posture",
      },
      {
        title: "Desk Wellness",
        icon: <GiHealthNormal className="text-lg text-amber-400" />,
        descriptionTittle: "QC Analysts, Admins",
        description: "BMI, BP",
      },
      {
        title: "Metabolic Screen",
        icon: <FaPlus className="text-lg text-amber-400" />,
        descriptionTittle: "HR, Supervisors",
        description: "Sugar",
      },
      {
        title: "Metabolic Screen",
        icon: <FaPlus className="text-lg text-amber-400" />,
        descriptionTittle: "HR, Supervisors",
        description: "Lipid",
      },
      {
        title: "Metabolic Screen",
        icon: <FaPlus className="text-lg text-amber-400" />,
        descriptionTittle: "HR, Supervisors",
        description: "HbA1c",
      },
      {
        title: "Metabolic Screen",
        icon: <FaPlus className="text-lg text-amber-400" />,
        descriptionTittle: "HR, Supervisors",
        description: "Thyroid",
      },
      {
        title: "Stress Relief Panel",
        icon: <GiHospital className="text-lg text-amber-400" />,
        descriptionTittle: "Those in decision roles",
        description: "ECG",
      },
      {
        title: "Stress Relief Panel",
        icon: <GiHospital className="text-lg text-amber-400" />,
        descriptionTittle: "Those in decision roles",
        description: "Liver Panel",
      },
      {
        title: "Stress Relief Panel",
        icon: <GiHospital className="text-lg text-amber-400" />,
        descriptionTittle: "Those in decision roles",
        description: "Vitamin B12",
      },
      {
        title: "Executive Care Plan",
        icon: <GiHeartBeats className="text-lg text-amber-400" />,
        descriptionTittle: "Plant heads, senior managers",
        description: "Full Body, Cardiac Risk, Eye & Hearing",
      },
    ],
  },
  {
    title: "Logistics, Loading & Warehouse Staff",
    icon: <FaTruckLoading className="text-xl text-black" />,
    issues: [
      {
        title: "RapidMove Basic",
        icon: <GiHealthNormal className="text-lg text-amber-400" />,
        descriptionTittle: "Forklift drivers",
        description: "BP, CBC",
      },
      {
        title: "RapidMove Basic",
        icon: <GiHealthNormal className="text-lg text-amber-400" />,
        descriptionTittle: "Forklift drivers",
        description: "Ortho Physical",
      },
      {
        title: "Heat Alert Pack",
        icon: <GiThermometerScale className="text-lg text-amber-400" />,
        descriptionTittle: "Summer shift workers",
        description: "Electrolyte",
      },
      {
        title: "Heat Alert Pack",
        icon: <GiThermometerScale className="text-lg text-amber-400" />,
        descriptionTittle: "Summer shift workers",
        description: "Creatinine, ECG",
      },
      {
        title: "Movement Safety Panel",
        icon: <GiHospital className="text-lg text-amber-400" />,
        descriptionTittle: "Dispatch workers",
        description: "Spine Screening",
      },
      {
        title: "Movement Safety Panel",
        icon: <GiHospital className="text-lg text-amber-400" />,
        descriptionTittle: "Dispatch workers",
        description: "X-Ray, Vision",
      },
      {
        title: "Rugged Worker Plan",
        icon: <GiPowerLightning className="text-lg text-amber-400" />,
        descriptionTittle: "Long-term warehouse staff",
        description: "Full Health, Lungs, Liver, Eye, Bone",
      },
    ],
  },
];

const HealthPackagesGrid = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto text-center mb-10">
        <h2
          className="text-3xl md:text-4xl font-bold mb-3"
          data-aos="fade-up"
        >
          Role-Based <span className="text-teal-600">Health Check Packages</span>
        </h2>
        <p
          className="text-lg text-slate-500 max-w-2xl mx-auto"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Tailored preventive health checkups for every workforce category —
          from field staff to senior management.
        </p>
      </div>

      <div
        className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        {data.map((group, idx) => (
          <div
            key={idx}
            className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100 flex flex-col h-[420px] hover:shadow-xl transition-all"
          >
            <h3 className="text-lg font-semibold text-teal-600 mb-4 flex items-center gap-2">
              {group.icon}
              {group.title}
            </h3>

            <div className="overflow-y-auto pr-2 custom-scrollbar">
              <ul className="space-y-3">
                {group.issues.map((issue, i) => (
                  <li
                    key={i}
                    className="bg-teal-50 px-3 py-2 rounded-lg text-sm text-gray-800 font-medium leading-snug shadow-sm"
                  >
                    <div className="flex items-center gap-2 mb-1">
                      {/* {issue.icon} */}
                      <span className="font-semibold text-teal-700">
                        {/* {issue.title} */}
                      </span>
                    </div>
                    <p className="text-[13px] text-gray-700">
                      {/* {issue.descriptionTittle} */}
                    </p>
                    <p className="text-[12px] text-gray-500 italic">
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

// Custom scrollbar
const styles = `
.custom-scrollbar::-webkit-scrollbar {
  width: 6px;
}
.custom-scrollbar::-webkit-scrollbar-thumb {
  background-color: rgba(13, 148, 136, 0.4);
  border-radius: 4px;
}
.custom-scrollbar::-webkit-scrollbar-thumb:hover {
  background-color: rgba(13, 148, 136, 0.7);
}
`;

export default () => (
  <>
    <style>{styles}</style>
    <HealthPackagesGrid />
  </>
);
