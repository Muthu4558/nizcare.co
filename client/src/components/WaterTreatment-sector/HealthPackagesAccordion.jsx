import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  GiFactory,
  GiHealthNormal,
  GiChemicalDrop,
  GiMuscleUp,
  GiShield,
  GiBrain,
  GiMechanicalArm,
  GiWeightLiftingUp,
  GiDesk,
  GiComputerFan,
  GiHealthIncrease,
  GiHazmatSuit,
  GiVirus,
  GiDroplets,
  GiLifeBar,
  GiHeartBeats,
} from "react-icons/gi";
import { FaTools, FaHandHoldingWater } from "react-icons/fa";
import { MdOutlineSupervisorAccount } from "react-icons/md";

const data = [
  {
    title: "Plant Operators & Technicians",
    icon: <GiFactory className="text-2xl text-teal-600" />,
    issues: [
      {
        title: "Basic Flow Scan",
        icon: <GiHealthNormal className="text-xl text-amber-400" />,
        descriptionTittle: "All ground-level staff",
        description: "BP, CBC, Sugar",
      },
      {
        title: "Basic Flow Scan",
        icon: <GiHealthNormal className="text-xl text-amber-400" />,
        descriptionTittle: "All ground-level staff",
        description: "Urine Test",
      },
      {
        title: "Basic Flow Scan",
        icon: <GiHealthNormal className="text-xl text-amber-400" />,
        descriptionTittle: "All ground-level staff",
        description: "Chest X-Ray",
      },
      {
        title: "Chemical Exposure Check",
        icon: <GiChemicalDrop className="text-xl text-amber-400" />,
        descriptionTittle: "Chlorine handlers, shift workers",
        description:
          "Liver Function Test",
      },
      {
        title: "Chemical Exposure Check",
        icon: <GiChemicalDrop className="text-xl text-amber-400" />,
        descriptionTittle: "Chlorine handlers, shift workers",
        description:
          "Kidney Profile",
      },
      {
        title: "Chemical Exposure Check",
        icon: <GiChemicalDrop className="text-xl text-amber-400" />,
        descriptionTittle: "Chlorine handlers, shift workers",
        description:
          "Spirometry",
      },
      {
        title: "Chemical Exposure Check",
        icon: <GiChemicalDrop className="text-xl text-amber-400" />,
        descriptionTittle: "Chlorine handlers, shift workers",
        description:
          "Heavy Metal Panel",
      },
      {
        title: "Fatigue & Muscle Panel",
        icon: <GiMuscleUp className="text-xl text-amber-400" />,
        descriptionTittle: "High physical laborers",
        description: "Vitamin D",
      },
      {
        title: "Fatigue & Muscle Panel",
        icon: <GiMuscleUp className="text-xl text-amber-400" />,
        descriptionTittle: "High physical laborers",
        description: "Calcium",
      },
      {
        title: "Fatigue & Muscle Panel",
        icon: <GiMuscleUp className="text-xl text-amber-400" />,
        descriptionTittle: "High physical laborers",
        description: "ESR, ECG",
      },
      {
        title: "Fatigue & Muscle Panel",
        icon: <GiMuscleUp className="text-xl text-amber-400" />,
        descriptionTittle: "High physical laborers",
        description: "Bone Density Scan",
      },
      {
        title: "Comprehensive Safety Plus",
        icon: <GiShield className="text-xl text-amber-400" />,
        descriptionTittle: "Long-tenured staff, supervisors",
        description:
          "All above + Audiometry, Eye Check, Full Physical Examination",
      },
    ],
  },
  {
    title: "Maintenance & Engineers",
    icon: <FaTools className="text-2xl text-teal-600" />,
    issues: [
      {
        title: "Core Wellness Kit",
        icon: <GiHealthNormal className="text-xl text-amber-400" />,
        descriptionTittle: "Junior Technicians",
        description: "CBC, BP, ECG",
      },
      {
        title: "Core Wellness Kit",
        icon: <GiHealthNormal className="text-xl text-amber-400" />,
        descriptionTittle: "Junior Technicians",
        description: "Glucose",
      },
      {
        title: "Stress & Hearing Panel",
        icon: <GiBrain className="text-xl text-amber-400" />,
        descriptionTittle: "Machine operators",
        description:
          "Lipid Profile",
      },
      {
        title: "Stress & Hearing Panel",
        icon: <GiBrain className="text-xl text-amber-400" />,
        descriptionTittle: "Machine operators",
        description:
          "Audiometry",
      },
      {
        title: "Stress & Hearing Panel",
        icon: <GiBrain className="text-xl text-amber-400" />,
        descriptionTittle: "Machine operators",
        description:
          "Liver Tests",
      },
      {
        title: "Stress & Hearing Panel",
        icon: <GiBrain className="text-xl text-amber-400" />,
        descriptionTittle: "Machine operators",
        description:
          "Thyroid",
      },
      {
        title: "Stress & Hearing Panel",
        icon: <GiBrain className="text-xl text-amber-400" />,
        descriptionTittle: "Machine operators",
        description:
          "Stress Test",
      },
      {
        title: "Tool-Time Wellness Pack",
        icon: <GiMechanicalArm className="text-xl text-amber-400" />,
        descriptionTittle: "Welding/mechanical staff",
        description: "Eye Check, B12, D3",
      },
      {
        title: "Tool-Time Wellness Pack",
        icon: <GiMechanicalArm className="text-xl text-amber-400" />,
        descriptionTittle: "Welding/mechanical staff",
        description: "Nerve Conduction",
      },
      {
        title: "Tool-Time Wellness Pack",
        icon: <GiMechanicalArm className="text-xl text-amber-400" />,
        descriptionTittle: "Welding/mechanical staff",
        description: "Ergonomic Scan",
      },
      {
        title: "Heavy-Duty Health Pack",
        icon: <GiWeightLiftingUp className="text-xl text-amber-400" />,
        descriptionTittle: "Senior/aging engineers",
        description:
          "Complete Cardiac Profile, Spirometry, Fitness Evaluation, Ortho Screening",
      },
    ],
  },
  {
    title: "Admin & Supervisory Staff",
    icon: <MdOutlineSupervisorAccount className="text-2xl text-teal-600" />,
    issues: [
      {
        title: "DeskFit Basic",
        icon: <GiDesk className="text-xl text-amber-400" />,
        descriptionTittle: "Junior admin staff",
        description: "BP, Sugar",
      },
      {
        title: "DeskFit Basic",
        icon: <GiDesk className="text-xl text-amber-400" />,
        descriptionTittle: "Junior admin staff",
        description: "Lipid",
      },
      {
        title: "DeskFit Basic",
        icon: <GiDesk className="text-xl text-amber-400" />,
        descriptionTittle: "Junior admin staff",
        description: "Eye Check",
      },
      {
        title: "DeskFit Basic",
        icon: <GiDesk className="text-xl text-amber-400" />,
        descriptionTittle: "Junior admin staff",
        description: "BMI",
      },
      {
        title: "Screen Stress Buster",
        icon: <GiComputerFan className="text-xl text-amber-400" />,
        descriptionTittle: "Compliance & report staff",
        description:
          "Thyroid",
      },
      {
        title: "Screen Stress Buster",
        icon: <GiComputerFan className="text-xl text-amber-400" />,
        descriptionTittle: "Compliance & report staff",
        description:
          "Vitamin D",
      },
      {
        title: "Screen Stress Buster",
        icon: <GiComputerFan className="text-xl text-amber-400" />,
        descriptionTittle: "Compliance & report staff",
        description:
          "Liver Function",
      },
      {
        title: "Screen Stress Buster",
        icon: <GiComputerFan className="text-xl text-amber-400" />,
        descriptionTittle: "Compliance & report staff",
        description:
          "Eye & Spine Exam",
      },
      {
        title: "Executive Wellness Scan",
        icon: <GiHeartBeats className="text-xl text-amber-400" />,
        descriptionTittle: "Mid-level management",
        description:
          "Cardiac Test, Liver",
      },
      {
        title: "Executive Wellness Scan",
        icon: <GiHeartBeats className="text-xl text-amber-400" />,
        descriptionTittle: "Mid-level management",
        description:
          "Kidney, Diabetes",
      },
      {
        title: "Executive Wellness Scan",
        icon: <GiHeartBeats className="text-xl text-amber-400" />,
        descriptionTittle: "Mid-level management",
        description:
          "Vision",
      },
      {
        title: "Executive Wellness Scan",
        icon: <GiHeartBeats className="text-xl text-amber-400" />,
        descriptionTittle: "Mid-level management",
        description:
          "Neuro Check",
      },
      {
        title: "Leadership Health360",
        icon: <GiHealthIncrease className="text-xl text-amber-400" />,
        descriptionTittle: "Plant heads, senior officers",
        description:
          "Holistic Test Panel + Stress Counseling + Annual Wellness Plan",
      },
    ],
  },
  {
    title: "Contract Workers & Sanitation Crew",
    icon: <GiHazmatSuit className="text-2xl text-teal-600" />,
    issues: [
      {
        title: "Basic Hygiene Check",
        icon: <FaHandHoldingWater className="text-xl text-amber-400" />,
        descriptionTittle: "Daily-wage sanitation crew",
        description: "CBC, BP",
      },
      {
        title: "Basic Hygiene Check",
        icon: <FaHandHoldingWater className="text-xl text-amber-400" />,
        descriptionTittle: "Daily-wage sanitation crew",
        description: "Urine",
      },
      {
        title: "Basic Hygiene Check",
        icon: <FaHandHoldingWater className="text-xl text-amber-400" />,
        descriptionTittle: "Daily-wage sanitation crew",
        description: "Stool Test",
      },
      {
        title: "Infection Risk Panel",
        icon: <GiVirus className="text-xl text-amber-400" />,
        descriptionTittle: "Tank/latrine cleaners",
        description: "Hepatitis",
      },
      {
        title: "Infection Risk Panel",
        icon: <GiVirus className="text-xl text-amber-400" />,
        descriptionTittle: "Tank/latrine cleaners",
        description: "Typhoid",
      },
      {
        title: "Infection Risk Panel",
        icon: <GiVirus className="text-xl text-amber-400" />,
        descriptionTittle: "Tank/latrine cleaners",
        description: "TB Screening",
      },
      {
        title: "Infection Risk Panel",
        icon: <GiVirus className="text-xl text-amber-400" />,
        descriptionTittle: "Tank/latrine cleaners",
        description: "WBC count",
      },
      {
        title: "Hydration & Nutrition Scan",
        icon: <GiDroplets className="text-xl text-amber-400" />,
        descriptionTittle: "Long-shift workers",
        description:
          "Electrolytes, Vitamins",
      },
      {
        title: "Hydration & Nutrition Scan",
        icon: <GiDroplets className="text-xl text-amber-400" />,
        descriptionTittle: "Long-shift workers",
        description:
          "Hemoglobin",
      },
      {
        title: "Hydration & Nutrition Scan",
        icon: <GiDroplets className="text-xl text-amber-400" />,
        descriptionTittle: "Long-shift workers",
        description:
          "Physical Strength Assessment",
      },
      {
        title: "Safety Net Plus",
        icon: <GiLifeBar className="text-xl text-amber-400" />,
        descriptionTittle: "Contract staff with >1yr exp",
        description:
          "All above + Mental Health Screening + Vaccination Support",
      },
    ],
  },
];

const HealthPackagesCards = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h2
          className="text-3xl md:text-4xl font-bold mb-4"
          data-aos="fade-up"
        >
          <span className="text-teal-600">Tailored Health Packages</span> for Every Role
        </h2>

        <p
          className="text-lg text-slate-500 mb-10"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Comprehensive preventive health packages customized to match
          the unique risks and routines of each workforce group.
        </p>

        <div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          {data.map((group, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100 flex flex-col h-[450px]"
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
                      className="bg-teal-50 px-3 py-2 rounded-lg text-sm text-gray-800 shadow-sm"
                    >
                      <div className="font-semibold">
                        {/* {issue.icon} */}
                        {/* <span>{issue.title}</span> */}
                      </div>
                      <p className="text-[13px] text-slate-700 mt-1 font-medium">
                        {/* {issue.descriptionTittle} */}
                      </p>
                      <p className="text-[12px] text-gray-600 mt-0.5">
                        {issue.description}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
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
    <HealthPackagesCards />
  </>
);