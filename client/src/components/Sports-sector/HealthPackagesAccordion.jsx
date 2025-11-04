import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  GiHealthNormal,
  GiChemicalDrop,
  GiWeightLiftingUp,
  GiStethoscope,
  GiSpinalCoil,
  GiBrain,
  GiStrongMan,
  GiFarmTractor,
  GiCow,
} from "react-icons/gi";
import { FaUserTie } from "react-icons/fa";

const data = [
  {
    title: "For Athletes & Players",
    icon: <GiCow className="text-xl" />,
    issues: [
      {
        title: "Basic Fitness Pulse",
        icon: <GiHealthNormal className="text-amber-400 text-lg" />,
        descriptionTittle: "Amateur players, early-stage athletes",
        description: "BP, BMI",
      },
      {
        title: "Basic Fitness Pulse",
        icon: <GiHealthNormal className="text-amber-400 text-lg" />,
        descriptionTittle: "Amateur players, early-stage athletes",
        description: "ECG, CBC",
      },
      {
        title: "Core Performance Panel",
        icon: <GiSpinalCoil className="text-amber-400 text-lg" />,
        descriptionTittle: "Club players, semi-pro athletes",
        description:
          "Vitamin D",
      },
      {
        title: "Core Performance Panel",
        icon: <GiSpinalCoil className="text-amber-400 text-lg" />,
        descriptionTittle: "Club players, semi-pro athletes",
        description:
          "Calcium",
      },
      {
        title: "Core Performance Panel",
        icon: <GiSpinalCoil className="text-amber-400 text-lg" />,
        descriptionTittle: "Club players, semi-pro athletes",
        description:
          "Creatine Kinase",
      },
      {
        title: "Core Performance Panel",
        icon: <GiSpinalCoil className="text-amber-400 text-lg" />,
        descriptionTittle: "Club players, semi-pro athletes",
        description:
          "Liver & Kidney profile",
      },
      {
        title: "Elite Athlete Scan",
        icon: <GiChemicalDrop className="text-amber-400 text-lg" />,
        descriptionTittle: "Professional athletes",
        description:
          "Cardiac Profile",
      },
      {
        title: "Elite Athlete Scan",
        icon: <GiChemicalDrop className="text-amber-400 text-lg" />,
        descriptionTittle: "Professional athletes",
        description:
          "VO2 Max",
      },
      {
        title: "Elite Athlete Scan",
        icon: <GiChemicalDrop className="text-amber-400 text-lg" />,
        descriptionTittle: "Professional athletes",
        description:
          "Hormonal Panel",
      },
      {
        title: "Elite Athlete Scan",
        icon: <GiChemicalDrop className="text-amber-400 text-lg" />,
        descriptionTittle: "Professional athletes",
        description:
          "MRI (if needed)",
      },
      {
        title: "Injury Recovery Tracker",
        icon: <GiStethoscope className="text-amber-400 text-lg" />,
        descriptionTittle: "Players undergoing rehab or post-injury monitoring",
        description: "X-ray",
      },
      {
        title: "Injury Recovery Tracker",
        icon: <GiStethoscope className="text-amber-400 text-lg" />,
        descriptionTittle: "Players undergoing rehab or post-injury monitoring",
        description: "Bone Density",
      },
      {
        title: "Injury Recovery Tracker",
        icon: <GiStethoscope className="text-amber-400 text-lg" />,
        descriptionTittle: "Players undergoing rehab or post-injury monitoring",
        description: "Inflammation Markers",
      },
    ],
  },
  {
    title: "For Coaches & Trainers",
    icon: <GiStrongMan className="text-xl" />,
    issues: [
      {
        title: "Fit Coach Check",
        icon: <GiHealthNormal className="text-amber-400 text-lg" />,
        descriptionTittle: "New fitness instructors",
        description: "CBC, BP, ECG",
      },
      {
        title: "Active Mind & Body",
        icon: <GiSpinalCoil className="text-amber-400 text-lg" />,
        descriptionTittle: "Senior trainers",
        description: "Thyroid",
      },
      {
        title: "Active Mind & Body",
        icon: <GiSpinalCoil className="text-amber-400 text-lg" />,
        descriptionTittle: "Senior trainers",
        description: "Vitamin B12",
      },
      {
        title: "Active Mind & Body",
        icon: <GiSpinalCoil className="text-amber-400 text-lg" />,
        descriptionTittle: "Senior trainers",
        description: "Stress Profile",
      },
      {
        title: "Functional Fitness Panel",
        icon: <GiWeightLiftingUp className="text-amber-400 text-lg" />,
        descriptionTittle: "Head coaches or physiotherapists",
        description: "ECG",
      },
      {
        title: "Functional Fitness Panel",
        icon: <GiWeightLiftingUp className="text-amber-400 text-lg" />,
        descriptionTittle: "Head coaches or physiotherapists",
        description: "Lipid Profile",
      },
      {
        title: "Functional Fitness Panel",
        icon: <GiWeightLiftingUp className="text-amber-400 text-lg" />,
        descriptionTittle: "Head coaches or physiotherapists",
        description: "Joint Assessment",
      },
      {
        title: "Coach Pro Care",
        icon: <GiStethoscope className="text-amber-400 text-lg" />,
        descriptionTittle: "Full-time coaching staff",
        description: "Annual fitness screening with specialist review",
      },
    ],
  },
  {
    title: "For Support & Operational Staff",
    icon: <GiFarmTractor className="text-xl" />,
    issues: [
      {
        title: "Routine Health Check",
        icon: <GiHealthNormal className="text-amber-400 text-lg" />,
        descriptionTittle: "Ground or equipment staff",
        description: "CBC, Sugar, BP",
      },
      {
        title: "Outdoor Worker Safety Panel",
        icon: <GiSpinalCoil className="text-amber-400 text-lg" />,
        descriptionTittle: "Turf/ground crew",
        description: "Vitamin D",
      },
      {
        title: "Outdoor Worker Safety Panel",
        icon: <GiSpinalCoil className="text-amber-400 text-lg" />,
        descriptionTittle: "Turf/ground crew",
        description: "Electrolytes",
      },
      {
        title: "Outdoor Worker Safety Panel",
        icon: <GiSpinalCoil className="text-amber-400 text-lg" />,
        descriptionTittle: "Turf/ground crew",
        description: "Skin Check",
      },
      {
        title: "Strength & Bone Panel",
        icon: <GiChemicalDrop className="text-amber-400 text-lg" />,
        descriptionTittle: "Field support staff",
        description: "Calcium",
      },
      {
        title: "Strength & Bone Panel",
        icon: <GiChemicalDrop className="text-amber-400 text-lg" />,
        descriptionTittle: "Field support staff",
        description: "Bone Density",
      },
      {
        title: "Strength & Bone Panel",
        icon: <GiChemicalDrop className="text-amber-400 text-lg" />,
        descriptionTittle: "Field support staff",
        description: "Joint Health",
      },
      {
        title: "Full Body Screen",
        icon: <GiStethoscope className="text-amber-400 text-lg" />,
        descriptionTittle: "Maintenance heads",
        description: "Comprehensive panel + physician consultation",
      },
    ],
  },
  {
    title: "For Admin & Management",
    icon: <FaUserTie className="text-xl" />,
    issues: [
      {
        title: "Wellness Starter",
        icon: <GiHealthNormal className="text-amber-400 text-lg" />,
        descriptionTittle: "Office executives",
        description: "BP, Sugar, BMI",
      },
      {
        title: "Desk Stress Relief Panel",
        icon: <GiSpinalCoil className="text-amber-400 text-lg" />,
        descriptionTittle: "Back-end & marketing teams",
        description: "Thyroid",
      },
      {
        title: "Desk Stress Relief Panel",
        icon: <GiSpinalCoil className="text-amber-400 text-lg" />,
        descriptionTittle: "Back-end & marketing teams",
        description: "Vitamin D/B12",
      },
      {
        title: "Desk Stress Relief Panel",
        icon: <GiSpinalCoil className="text-amber-400 text-lg" />,
        descriptionTittle: "Back-end & marketing teams",
        description: "Lipid Profile",
      },
      {
        title: "Executive Health Panel",
        icon: <GiBrain className="text-amber-400 text-lg" />,
        descriptionTittle: "Mid to senior-level executives",
        description: "Liver",
      },
      {
        title: "Executive Health Panel",
        icon: <GiBrain className="text-amber-400 text-lg" />,
        descriptionTittle: "Mid to senior-level executives",
        description: "Kidney",
      },
      {
        title: "Executive Health Panel",
        icon: <GiBrain className="text-amber-400 text-lg" />,
        descriptionTittle: "Mid to senior-level executives",
        description: "Heart Risk Markers",
      },
      {
        title: "Director’s Annual Screening",
        icon: <GiStethoscope className="text-amber-400 text-lg" />,
        descriptionTittle: "Top decision-makers",
        description: "Premium full body + lifestyle consultation",
      },
    ],
  },
];

const SportsHealthCheckPackages = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section className="py-16 px-4">
      <h2
        className="text-3xl md:text-4xl font-bold text-center mb-4"
        data-aos="fade-up"
      >
        Recommended <span className="text-teal-600">Sports Health Check-ups</span>
      </h2>
      <p
        className="text-lg text-slate-500 mb-10 text-center"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        From baseline screenings to elite performance panels — tailored for each
        role in the sports ecosystem.
      </p>

      <div
        className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        {data.map((group, idx) => (
          <div
            key={idx}
            className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100 flex flex-col h-[420px]"
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
                    className="bg-teal-50 px-4 py-2 rounded-lg text-sm font-medium text-gray-800"
                  >
                    <div className="flex items-center gap-2 mb-1">
                      {/* {issue.icon} */}
                      <span className="font-semibold text-slate-900">
                        {/* {issue.title} */}
                      </span>
                    </div>
                    <p className="text-[13px] text-slate-600">
                      {/* {issue.descriptionTittle} */}
                    </p>
                    <p className="text-[12px] text-slate-500 italic">
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

// ✅ Custom Scrollbar Styles
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
    <SportsHealthCheckPackages />
  </>
);