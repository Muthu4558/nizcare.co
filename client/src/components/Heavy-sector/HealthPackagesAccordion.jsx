import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaUserTie } from "react-icons/fa";
import { GiFactory, GiGears, GiHealthCapsule, GiHealthNormal, GiPowerLightning, GiShield, GiHazardSign, GiStethoscope } from "react-icons/gi";

const data = [
  {
    title: "Plant Operators & Machinists",
    icon: <GiFactory className="text-xl text-teal-600" />,
    issues: [
      {
        title: "PowerCheck Basic",
        icon: <GiHealthNormal className="text-xl text-amber-400" />,
        descriptionTittle: "Entry-level & daily operators",
        description: "BP",
      },
      {
        title: "PowerCheck Basic",
        icon: <GiHealthNormal className="text-xl text-amber-400" />,
        descriptionTittle: "Entry-level & daily operators",
        description: "Sugar",
      },
      {
        title: "PowerCheck Basic",
        icon: <GiHealthNormal className="text-xl text-amber-400" />,
        descriptionTittle: "Entry-level & daily operators",
        description: "BMI",
      },
      {
        title: "PowerCheck Basic",
        icon: <GiHealthNormal className="text-xl text-amber-400" />,
        descriptionTittle: "Entry-level & daily operators",
        description: "Audiometry",
      },
      {
        title: "PowerCheck Plus",
        icon: <GiStethoscope className="text-xl text-amber-400" />,
        descriptionTittle: "Machine operators & forklift drivers",
        description: "ECG",
      },
      {
        title: "PowerCheck Plus",
        icon: <GiStethoscope className="text-xl text-amber-400" />,
        descriptionTittle: "Machine operators & forklift drivers",
        description: "Pulmonary Function Test",
      },
      {
        title: "PowerCheck Plus",
        icon: <GiStethoscope className="text-xl text-amber-400" />,
        descriptionTittle: "Machine operators & forklift drivers",
        description: "Vision",
      },
      {
        title: "PowerCheck Plus",
        icon: <GiStethoscope className="text-xl text-amber-400" />,
        descriptionTittle: "Machine operators & forklift drivers",
        description: "Lipid Profile",
      },
      {
        title: "PowerCheck Pro",
        icon: <GiPowerLightning className="text-xl text-amber-400" />,
        descriptionTittle: "Senior operators with long tenure",
        description: "X-Ray Chest",
      },
      {
        title: "PowerCheck Pro",
        icon: <GiPowerLightning className="text-xl text-amber-400" />,
        descriptionTittle: "Senior operators with long tenure",
        description: "LFT, KFT, CBC",
      },
      {
        title: "PowerCheck Pro",
        icon: <GiPowerLightning className="text-xl text-amber-400" />,
        descriptionTittle: "Senior operators with long tenure",
        description: "Occupational Hazard Panel",
      },
    ],
  },
  {
    title: "Maintenance & Technical Staff",
    icon: <GiGears className="text-xl text-teal-600" />,
    issues: [
      {
        title: "TechCare Basic",
        icon: <GiHealthNormal className="text-xl text-amber-400" />,
        descriptionTittle: "Electricians, welders",
        description: "BP",
      },
      {
        title: "TechCare Basic",
        icon: <GiHealthNormal className="text-xl text-amber-400" />,
        descriptionTittle: "Electricians, welders",
        description: "Blood Sugar",
      },
      {
        title: "TechCare Basic",
        icon: <GiHealthNormal className="text-xl text-amber-400" />,
        descriptionTittle: "Electricians, welders",
        description: "Vision Test",
      },
      {
        title: "TechCare Plus",
        icon: <GiStethoscope className="text-xl text-amber-400" />,
        descriptionTittle: "Maintenance crew",
        description: "ECG",
      },
      {
        title: "TechCare Plus",
        icon: <GiStethoscope className="text-xl text-amber-400" />,
        descriptionTittle: "Maintenance crew",
        description: "Eye Screening",
      },
      {
        title: "TechCare Plus",
        icon: <GiStethoscope className="text-xl text-amber-400" />,
        descriptionTittle: "Maintenance crew",
        description: "Spirometry",
      },
      {
        title: "TechCare Pro",
        icon: <GiHazardSign className="text-xl text-amber-400" />,
        descriptionTittle: "Staff working with hazardous materials",
        description: "Urine Routine, LFT",
      },
      {
        title: "TechCare Pro",
        icon: <GiHazardSign className="text-xl text-amber-400" />,
        descriptionTittle: "Staff working with hazardous materials",
        description: "Hepatitis B Test",
      },
      {
        title: "TechCare Pro",
        icon: <GiHazardSign className="text-xl text-amber-400" />,
        descriptionTittle: "Staff working with hazardous materials",
        description: "Heavy Metal Panel",
      },
    ],
  },
  {
    title: "Supervisors & Admin Staff",
    icon: <FaUserTie className="text-xl text-teal-600" />,
    issues: [
      {
        title: "SafeLead Basic",
        icon: <GiHealthNormal className="text-xl text-amber-400" />,
        descriptionTittle: "Junior supervisors",
        description: "BP, BMI",
      },
      {
        title: "SafeLead Basic",
        icon: <GiHealthNormal className="text-xl text-amber-400" />,
        descriptionTittle: "Junior supervisors",
        description: "Sugar",
      },
      {
        title: "SafeLead Basic",
        icon: <GiHealthNormal className="text-xl text-amber-400" />,
        descriptionTittle: "Junior supervisors",
        description: "Eye Test",
      },
      {
        title: "SafeLead Plus",
        icon: <GiHealthCapsule className="text-xl text-amber-400" />,
        descriptionTittle: "Admin & shift heads",
        description: "CBC, ECG",
      },
      {
        title: "SafeLead Plus",
        icon: <GiHealthCapsule className="text-xl text-amber-400" />,
        descriptionTittle: "Admin & shift heads",
        description: "Lipid Profile",
      },
      {
        title: "SafeLead Plus",
        icon: <GiHealthCapsule className="text-xl text-amber-400" />,
        descriptionTittle: "Admin & shift heads",
        description: "Thyroid Panel",
      },
      {
        title: "SafeLead Pro",
        icon: <GiShield className="text-xl text-amber-400" />,
        descriptionTittle: "Senior management & decision-makers",
        description: "Full Body Check",
      },
      {
        title: "SafeLead Pro",
        icon: <GiShield className="text-xl text-amber-400" />,
        descriptionTittle: "Senior management & decision-makers",
        description: "Stress ECG",
      },
      {
        title: "SafeLead Pro",
        icon: <GiShield className="text-xl text-amber-400" />,
        descriptionTittle: "Senior management & decision-makers",
        description: "Vitamin Panel",
      },
    ],
  },
];

const HealthPackages = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="py-12 px-4">
      <h2
        className="text-3xl md:text-4xl font-bold text-center mb-4"
        data-aos="fade-up"
      >
        Built for the Load – <span className="text-teal-600">Precision Health Packages</span> for Every Role
      </h2>
      <p
        className="text-lg text-slate-500 mb-10 text-center"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        Each role faces unique physical and mental demands — our checkups are
        designed for early detection, prevention, and peak performance.
      </p>

      <div
        className="grid md:grid-cols-3 gap-6 max-w-7xl mx-auto"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        {data.map((group, idx) => (
          <div
            key={idx}
            className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100 flex flex-col h-[420px] hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
          >
            <h3 className="text-xl font-semibold text-teal-600 mb-4 flex items-center gap-2">
              {group.icon}
              {group.title}
            </h3>

            <div className="overflow-y-auto pr-2 custom-scrollbar">
              <ul className="space-y-3">
                {group.issues.map((issue, i) => (
                  <li
                    key={i}
                    className="bg-teal-50 px-4 py-3 rounded-lg text-sm font-medium text-gray-800 border border-teal-100"
                  >
                    <div className="flex items-center gap-2 mb-1">
                      {/* {issue.icon} */}
                      <span className="font-semibold text-teal-700">
                        {/* {issue.title} */}
                      </span>
                    </div>
                    <p className="text-xs text-slate-600">
                      {/* <strong>{issue.descriptionTittle}</strong> */}
                    </p>
                    <p className="text-xs text-gray-700">
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

// Custom scrollbar styling
const styles = `
.custom-scrollbar::-webkit-scrollbar {
  width: 6px;
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
    <HealthPackages />
  </>
);
