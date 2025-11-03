import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  GiCow,
  GiHealthNormal,
  GiMuscleUp,
  GiShield,
  GiStethoscope,
  GiBrain,
  GiVirus,
  GiDroplets,
  GiMechanicalArm,
  GiDesk,
  GiComputerFan,
  GiHeartBeats,
  GiHealthIncrease,
  GiChemicalDrop,
} from "react-icons/gi";
import { FaTruckLoading, FaTemperatureHigh } from "react-icons/fa";
import { MdOutlineSupervisorAccount } from "react-icons/md";

const data = [
  {
    title: "Dairy Farm Workers & Milkers",
    icon: <GiCow className="text-xl text-black" />,
    issues: [
      {
        title: "Basic Hoof Package",
        icon: <GiHealthNormal className="text-xl text-amber-400" />,
        descriptionTittle: "Daily field workers, fresh joiners",
        description: "CBC",
      },
      {
        title: "Basic Hoof Package",
        icon: <GiHealthNormal className="text-xl text-amber-400" />,
        descriptionTittle: "Daily field workers, fresh joiners",
        description: "BP Check",
      },
      {
        title: "Basic Hoof Package",
        icon: <GiHealthNormal className="text-xl text-amber-400" />,
        descriptionTittle: "Daily field workers, fresh joiners",
        description: "Blood Sugar",
      },
      {
        title: "Basic Hoof Package",
        icon: <GiHealthNormal className="text-xl text-amber-400" />,
        descriptionTittle: "Daily field workers, fresh joiners",
        description: "Skin Exam",
      },
      {
        title: "Active Udder Package",
        icon: <GiMuscleUp className="text-xl text-amber-400" />,
        descriptionTittle: "Senior field staff",
        description: "All Basic + Eye Check, Liver & Renal Panel",
      },
      {
        title: "Stamina Plus Package",
        icon: <GiShield className="text-xl text-amber-400" />,
        descriptionTittle: "Aging or high-labor staff",
        description: "All above + Vitamin D, ECG, Urinalysis",
      },
      {
        title: "Safety Supreme Package",
        icon: <GiChemicalDrop className="text-xl text-amber-400" />,
        descriptionTittle: "Supervisors or frequently ill workers",
        description: "All above + Chest X-ray, Spirometry",
      },
    ],
  },
  {
    title: "Veterinary & Animal Health Staff",
    icon: <GiStethoscope className="text-xl text-black" />,
    issues: [
      {
        title: "Vital Vet Package",
        icon: <GiHealthNormal className="text-xl text-amber-400" />,
        descriptionTittle: "Entry-level assistants",
        description: "CBC",
      },
      {
        title: "Vital Vet Package",
        icon: <GiHealthNormal className="text-xl text-amber-400" />,
        descriptionTittle: "Entry-level assistants",
        description: "LFT",
      },
      {
        title: "Vital Vet Package",
        icon: <GiHealthNormal className="text-xl text-amber-400" />,
        descriptionTittle: "Entry-level assistants",
        description: "Hepatitis Screening",
      },
      {
        title: "Pro-Vet Wellness Plan",
        icon: <GiBrain className="text-xl text-amber-400" />,
        descriptionTittle: "Mid-level vet professionals",
        description: "All above + Tetanus, Eye, ECG",
      },
      {
        title: "Infection Shield Package",
        icon: <GiVirus className="text-xl text-amber-400" />,
        descriptionTittle: "Vets in direct animal contact",
        description: "All above + Vaccination Review, Chest X-ray",
      },
      {
        title: "Critical Care Pro+",
        icon: <GiShield className="text-xl text-amber-400" />,
        descriptionTittle: "Senior vet doctors, admin",
        description: "All above + Spirometry, Advanced Blood Panel",
      },
    ],
  },
  {
    title: "Logistics & Processing Workers",
    icon: <FaTruckLoading className="text-xl text-black" />,
    issues: [
      {
        title: "Milk Mover Essentials",
        icon: <GiHealthNormal className="text-xl text-amber-400" />,
        descriptionTittle: "Drivers & loaders",
        description: "BP",
      },
      {
        title: "Milk Mover Essentials",
        icon: <GiHealthNormal className="text-xl text-amber-400" />,
        descriptionTittle: "Drivers & loaders",
        description: "Sugar",
      },
      {
        title: "Milk Mover Essentials",
        icon: <GiHealthNormal className="text-xl text-amber-400" />,
        descriptionTittle: "Drivers & loaders",
        description: "ECG",
      },
      {
        title: "Pack & Process Shield",
        icon: <GiMechanicalArm className="text-xl text-amber-400" />,
        descriptionTittle: "Plant floor workers",
        description: "All above + Hearing Test, Renal Function",
      },
      {
        title: "Cool Crew Care Plan",
        icon: <GiDroplets className="text-xl text-amber-400" />,
        descriptionTittle: "Cold storage crew",
        description: "All above + Vitamin Panel, Liver Test",
      },
      {
        title: "Heat Zone Ultra Check",
        icon: <FaTemperatureHigh className="text-xl text-amber-400" />,
        descriptionTittle: "Machinery operators, forklift staff",
        description: "All above + Eye, Chest X-ray, Cardiac Profile",
      },
    ],
  },
  {
    title: "Admin, Managers & Office Teams",
    icon: <MdOutlineSupervisorAccount className="text-xl text-black" />,
    issues: [
      {
        title: "Desk Fit Basic",
        icon: <GiDesk className="text-xl text-amber-400" />,
        descriptionTittle: "Entry-level clerks",
        description: "BP",
      },
      {
        title: "Desk Fit Basic",
        icon: <GiDesk className="text-xl text-amber-400" />,
        descriptionTittle: "Entry-level clerks",
        description: "Sugar",
      },
      {
        title: "Desk Fit Basic",
        icon: <GiDesk className="text-xl text-amber-400" />,
        descriptionTittle: "Entry-level clerks",
        description: "BMI",
      },
      {
        title: "Manager’s Vital Plan",
        icon: <GiComputerFan className="text-xl text-amber-400" />,
        descriptionTittle: "Mid-management",
        description: "All above + Lipid Profile, Eye Test",
      },
      {
        title: "Smart Leader Check-up",
        icon: <GiHeartBeats className="text-xl text-amber-400" />,
        descriptionTittle: "Supervisors & HR heads",
        description: "All above + ECG, Liver, Vitamin D",
      },
      {
        title: "Executive Wellness Gold",
        icon: <GiHealthIncrease className="text-xl text-amber-400" />,
        descriptionTittle: "Top management",
        description: "All above + Stress & Sleep Assessment, TMT",
      },
    ],
  },
];

const DairyHealthPackages = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section className="py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <h2
          className="text-3xl md:text-4xl font-bold text-center mb-4"
          data-aos="fade-up"
        >
          Layered Wellness, Tailored Precision –{" "}
          <span className="text-teal-600">Health Check-ups That Fit Every Role</span>
        </h2>

        <p
          className="text-lg text-slate-500 mb-10 text-center"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Specialized health screening packages designed for every segment of your dairy workforce.
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
              <h3 className="text-lg font-semibold text-teal-600 mb-4 flex items-center gap-2">
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
                      <div className="flex items-center gap-2">
                        {/* {issue.icon} */}
                        {/* <span className="font-semibold">{issue.title}</span> */}
                      </div>
                      <p className="text-gray-600 text-[13px] mt-1">
                        {/* {issue.descriptionTittle} */}
                      </p>
                      <p className="text-gray-700 text-[13px]">
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

// Scrollbar styling
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
    <DairyHealthPackages />
  </>
);