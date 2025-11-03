import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  GiElectric,
  GiHealthNormal,
  GiSpinalCoil,
  GiMuscleUp,
  GiChemicalDrop,
  GiEyeTarget,
  GiTalk,
  GiDesk,
  GiHealthIncrease,
  GiRunningShoe,
  GiStomach,
  GiWeight,
  GiBrain,
  GiMeal,
} from "react-icons/gi";
import { MdHeadsetMic, MdOutlineDevices } from "react-icons/md";
import { FaChartLine } from "react-icons/fa";

const data = [
  {
    title: "Field Technicians & Tower Workers",
    icon: <GiElectric className="text-2xl text-teal-600" />,
    issues: [
      { title: "Basic Vital Watch", descriptionTittle: "BP, Sugar" },
      { title: "Basic Vital Watch", descriptionTittle: "BMI" },
      { title: "Core Mobility Check", descriptionTittle: "ECG" },
      { title: "Core Mobility Check", descriptionTittle: "Vitamin D" },
      { title: "Core Mobility Check", descriptionTittle: "X-ray Spine" },
      { title: "Endurance Panel", descriptionTittle: "PFT" },
      { title: "Endurance Panel", descriptionTittle: "Hemoglobin" },
      { title: "Endurance Panel", descriptionTittle: "Electrolytes" },
      { title: "Complete Field Wellness", descriptionTittle: "Liver/Kidney" },
      { title: "Complete Field Wellness", descriptionTittle: "CBC" },
      { title: "Complete Field Wellness", descriptionTittle: "Stress ECG" },
    ],
  },
  {
    title: "Call Center & Customer Support",
    icon: <MdHeadsetMic className="text-2xl text-teal-600" />,
    issues: [
      { title: "Screen-Time Basic", descriptionTittle: "Eye Test" },
      { title: "Screen-Time Basic", descriptionTittle: "Posture Check" },
      { title: "Screen-Time Basic", descriptionTittle: "BMI" },
      { title: "VoiceCare Panel", descriptionTittle: "ENT Check" },
      { title: "VoiceCare Panel", descriptionTittle: "Stress Screening" },
      { title: "Desk Wellness Plus", descriptionTittle: "Thyroid" },
      { title: "Desk Wellness Plus", descriptionTittle: "Vitamin B12" },
      { title: "Desk Wellness Plus", descriptionTittle: "Cholesterol" },
      { title: "Complete Support Health", descriptionTittle: "Cardiac" },
      { title: "Complete Support Health", descriptionTittle: "Diabetes" },
      { title: "Complete Support Health", descriptionTittle: "Eye, Neuro tests" },
    ],
  },
  {
    title: "Sales & Marketing Executives",
    icon: <FaChartLine className="text-2xl text-teal-600" />,
    issues: [
      { title: "Quick-Fit Basic", descriptionTittle: "Sugar, BP" },
      { title: "Quick-Fit Basic", descriptionTittle: "BMI" },
      { title: "On-the-Go Digest Panel", descriptionTittle: "Liver" },
      { title: "On-the-Go Digest Panel", descriptionTittle: "H. Pylori" },
      { title: "On-the-Go Digest Panel", descriptionTittle: "Vitamin B12" },
      { title: "Road Warrior Wellness", descriptionTittle: "ECG, CBC" },
      { title: "Road Warrior Wellness", descriptionTittle: "Stress Test" },
      { title: "Road Warrior Wellness", descriptionTittle: "ye Test" },
      { title: "Executive Performance Health", descriptionTittle: "Full Wellness + Cardiac Profile" },
    ],
  },
  {
    title: "IT, Network Ops & Admin Teams",
    icon: <MdOutlineDevices className="text-2xl text-teal-600" />,
    issues: [
      { title: "Sedentary Scan", descriptionTittle: "BMI" },
      { title: "Sedentary Scan", descriptionTittle: "Sugar, BP" },
      { title: "Neuro & Sleep Check", descriptionTittle: "Stress ECG" },
      { title: "Neuro & Sleep Check", descriptionTittle: "Sleep Quality Test" },
      { title: "Full Stack Wellness", descriptionTittle: "Vitamin D/B12" },
      { title: "Full Stack Wellness", descriptionTittle: "Lipid" },
      { title: "Full Stack Wellness", descriptionTittle: "Thyroid" },
      { title: "Leadership Health Profile", descriptionTittle: "Cardiac, Diabetes" },
      { title: "Leadership Health Profile", descriptionTittle: "Neuro, Eye" },
    ],
  },
];

const TelecomHealthPackagesGrid = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true, offset: 100 });
  }, []);

  return (
    <section className="py-16 px-6">
      <div className="max-w-7xl mx-auto text-center">
        {/* Heading */}
        <h2
          className="text-3xl md:text-4xl font-bold text-slate-900 mb-4"
          data-aos="fade-up"
        >
          Tiered to Perform: <span className="text-teal-600">Health Packages</span> for Every Telecom Role
        </h2>
        <p
          className="text-lg text-slate-500 mb-12"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Early detection is mission-critical. Explore our health checkups customized to your role’s unique demands.
        </p>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8" data-aos="fade-up" data-aos-delay="200">
          {data.map((group, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100 flex flex-col h-[420px] transition-all duration-500 hover:shadow-xl hover:-translate-y-2"
            >
              {/* Title */}
              <h3 className="text-xl font-semibold text-teal-600 mb-4 flex items-center gap-2">
                {group.icon}
                {group.title}
              </h3>

              {/* Scrollable list */}
              <div className="overflow-y-auto pr-2 custom-scrollbar">
                <ul className="space-y-3">
                  {group.issues.map((issue, i) => (
                    <li key={i} className="bg-teal-50 px-4 py-2 rounded-lg text-sm font-medium text-gray-800 border border-transparent  transition-all">
                      {/* <p className="font-semibold text-gray-900">{issue.title}</p> */}
                      <p className="text-xs text-gray-600">{issue.descriptionTittle}</p>
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

// Custom scrollbar styling
const styles = `
.custom-scrollbar::-webkit-scrollbar {
  width: 6px;
}
.custom-scrollbar::-webkit-scrollbar-thumb {
  background-color: rgba(13, 148, 136, 0.5);
  border-radius: 6px;
}
.custom-scrollbar::-webkit-scrollbar-thumb:hover {
  background-color: rgba(13, 148, 136, 0.8);
}
.custom-scrollbar::-webkit-scrollbar-track {
  background: transparent;
}
`;

export default () => (
  <>
    <style>{styles}</style>
    <TelecomHealthPackagesGrid />
  </>
);