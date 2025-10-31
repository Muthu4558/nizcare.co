import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  GiCargoCrate,
  GiMuscleUp,
  GiWaterDrop,
  GiHealing,
  GiSteeringWheel,
  GiHeartBattery,
  GiAnchor,
  GiBrain,
  GiCargoShip,
  GiTimeTrap,
  GiHealingShield,
  GiHealthIncrease,
  GiSecurityGate,
  GiHealthNormal,
  GiNightSleep,
  GiLifeSupport,
} from "react-icons/gi";

const data = [
  {
    title: "Dock & Cargo Workers",
    icon: <GiCargoCrate className="text-xl" />,
    issues: [
      {
        title: "Basic Movement Check",
        descriptionTittle: "X-ray (Spine)",
      },
      {
        title: "Basic Movement Check",
        descriptionTittle: "BP, BMI, CBC",
      },
      {
        title: "Basic Movement Check",
        descriptionTittle: "Vitamin D",
      },
      {
        title: "Strength & Endurance",
        descriptionTittle: "ECG",
      },
      {
        title: "Strength & Endurance",
        descriptionTittle: "Creatinine",
      },
      {
        title: "Strength & Endurance",
        descriptionTittle: "Electrolytes",
      },
      {
        title: "Strength & Endurance",
        descriptionTittle: "Muscle & Joint Assessment",
      },
      {
        title: "Hydration & Heat Safety",
        descriptionTittle: "Kidney function",
      },
      {
        title: "Hydration & Heat Safety",
        descriptionTittle: "Electrolyte Panel",
      },
      {
        title: "Hydration & Heat Safety",
        descriptionTittle: "Urine Routine",
      },
      {
        title: "Total Worker Wellness",
        descriptionTittle: "Full Body Checkup",
      },
      {
        title: "Total Worker Wellness",
        descriptionTittle: "Ortho consult",
      },
      {
        title: "Total Worker Wellness",
        descriptionTittle: "Eye check",
      },
      {
        title: "Total Worker Wellness",
        descriptionTittle: "Hearing test",
      },
      {
        title: "Total Worker Wellness",
        descriptionTittle: "Liver Panel",
      },
    ],
  },
  {
    title: "Maritime Crew",
    icon: <GiSteeringWheel className="text-xl" />,
    issues: [
      {
        title: "SeaFit Essentials",
        descriptionTittle: "ECG, BP",
      },
      {
        title: "SeaFit Essentials",
        descriptionTittle: "Glucose",
      },
      {
        title: "SeaFit Essentials",
        descriptionTittle: "Lipid",
      },
      {
        title: "SeaFit Essentials",
        descriptionTittle: "Sleep Quality Checklist",
      },
      {
        title: "Cardio & Sleep Panel",
        descriptionTittle: "2D Echo, TMT",
      },
      {
        title: "Cardio & Sleep Panel",
        descriptionTittle: "Sleep Apnea Screening",
      },
      {
        title: "Cardio & Sleep Panel",
        descriptionTittle: "Vitamin B12",
      },
      {
        title: "Long Voyage Survival",
        descriptionTittle: "Liver Function",
      },
      {
        title: "Long Voyage Survival",
        descriptionTittle: "Renal Function",
      },
      {
        title: "Long Voyage Survival",
        descriptionTittle: "Stress Marker",
      },
      {
        title: "Long Voyage Survival",
        descriptionTittle: "Eye Check",
      },
      {
        title: "Mental Wellness Pro",
        descriptionTittle: "Psychological Assessment",
      },
      {
        title: "Mental Wellness Pro",
        descriptionTittle: "Stress Test",
      },
      {
        title: "Mental Wellness Pro",
        descriptionTittle: "Hormonal Panel",
      },
      {
        title: "Mental Wellness Pro",
        descriptionTittle: "Nutrition Counseling",
      },
    ],
  },
  {
    title: "Port Administration & Logistics",
    icon: <GiCargoShip className="text-xl" />,
    issues: [
      {
        title: "Desk Health Basic",
        descriptionTittle: "BMI, BP",
      },
      {
        title: "Desk Health Basic",
        descriptionTittle: "Glucose",
      },
      {
        title: "Desk Health Basic",
        descriptionTittle: "Eye Check",
      },
      {
        title: "Desk Health Basic",
        descriptionTittle: "CBC",
      },
      {
        title: "Work-Life Balance Plan",
        descriptionTittle: "Thyroid",
      },
      {
        title: "Work-Life Balance Plan",
        descriptionTittle: "Lipid",
      },
      {
        title: "Work-Life Balance Plan",
        descriptionTittle: "Liver Function",
      },
      {
        title: "Work-Life Balance Plan",
        descriptionTittle: "Stress Index",
      },
      {
        title: "Metabolic Rescue Pack",
        descriptionTittle: "HbA1c, ECG",
      },
      {
        title: "Metabolic Rescue Pack",
        descriptionTittle: "Vitamin D/B12",
      },
      {
        title: "Metabolic Rescue Pack",
        descriptionTittle: "Nutrition Consult",
      },
      {
        title: "360 Admin Care",
        descriptionTittle: "Full Body Profile, Cardio Panel, Mental Health Screening, Sleep Quality",
      },
    ],
  },
  {
    title: "Security & Safety Officers",
    icon: <GiSecurityGate className="text-xl" />,
    issues: [
      {
        title: "Quick Shift Check",
        descriptionTittle: "BP, ECG",
      },
      {
        title: "Quick Shift Check",
        descriptionTittle: "Vision",
      },
      {
        title: "Quick Shift Check",
        descriptionTittle: "CBC",
      },
      {
        title: "Fatigue Fighter Panel",
        descriptionTittle: "Sleep Assessment",
      },
      {
        title: "Fatigue Fighter Panel",
        descriptionTittle: "Hormonal Profile",
      },
      {
        title: "Fatigue Fighter Panel",
        descriptionTittle: "Iron Studies",
      },
      {
        title: "Response Ready Health",
        descriptionTittle: "Cardiac Screening",
      },
       {
        title: "Response Ready Health",
        descriptionTittle: "Vitamin Panel",
      },
       {
        title: "Response Ready Health",
        descriptionTittle: "Mental Health Assessment",
      },
      {
        title: "Defender Max Package",
        descriptionTittle: "Full Body Screening, Physical Fitness Test, Diet Counseling",
      },
    ],
  },
];

const MaritimeHealthPackages = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="py-10 px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
        <span className="text-teal-600">Role-Based</span> Maritime Health Packages
      </h2>
      <p
        className="text-lg text-slate-500 mb-10 text-center"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        Every role deserves specialized care — from dockyards to decks, we tailor check-ups for maritime health and endurance.
      </p>

      <div
        className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto"
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
                    {/* <p className="font-semibold text-gray-700">{issue.title}</p> */}
                    <p className="text-gray-600 text-[13px]">
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

// Custom scrollbar styling
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
    <MaritimeHealthPackages />
  </>
);