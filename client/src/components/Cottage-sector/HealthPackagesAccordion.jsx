import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  GiSpinningWheel,
  GiSewingNeedle,
  GiPaintedPottery,
  GiHealthNormal,
  GiSpinalCoil,
  GiChemicalDrop,
  GiHealthIncrease,
  GiEyeTarget,
  GiChestArmor,
  GiMuscleUp,
  GiTalk,
} from "react-icons/gi";
import { FaUsers } from "react-icons/fa";

const data = [
  {
    title: "Handloom & Weaving Artisans",
    icon: <GiSpinningWheel className="text-xl text-black" />,
    issues: [
      {
        title: "ThreadCare Basic",
        icon: <GiHealthNormal className="text-lg text-amber-500" />,
        descriptionTittle: "All artisans",
        description: "BP, Sugar",
      },
      {
        title: "ThreadCare Basic",
        icon: <GiHealthNormal className="text-lg text-amber-500" />,
        descriptionTittle: "All artisans",
        description: "Vision Test",
      },
      {
        title: "ThreadCare Plus",
        icon: <GiSpinalCoil className="text-lg text-amber-500" />,
        descriptionTittle: "Senior workers",
        description: "ECG",
      },
      {
        title: "ThreadCare Plus",
        icon: <GiSpinalCoil className="text-lg text-amber-500" />,
        descriptionTittle: "Senior workers",
        description: "Spirometry",
      },
      {
        title: "ThreadCare Plus",
        icon: <GiSpinalCoil className="text-lg text-amber-500" />,
        descriptionTittle: "Senior workers",
        description: "Posture Screening",
      },
      {
        title: "ThreadCare Pro",
        icon: <GiChemicalDrop className="text-lg text-amber-500" />,
        descriptionTittle: "Supervisors",
        description: "Liver, Kidney",
      },
      {
        title: "ThreadCare Pro",
        icon: <GiChemicalDrop className="text-lg text-amber-500" />,
        descriptionTittle: "Supervisors",
        description: "Lipid, CBC",
      },
      {
        title: "ThreadCare Master",
        icon: <GiHealthIncrease className="text-lg text-amber-500" />,
        descriptionTittle: "Elderly weavers",
        description: "Full Body Checkup + Bone Density",
      },
    ],
  },
  {
    title: "Embroidery & Tailoring Workers",
    icon: <GiSewingNeedle className="text-xl text-black" />,
    issues: [
      {
        title: "StitchSmart Basic",
        icon: <GiHealthNormal className="text-lg text-amber-500" />,
        descriptionTittle: "Young workers",
        description: "BMI",
      },
      {
        title: "StitchSmart Basic",
        icon: <GiHealthNormal className="text-lg text-amber-500" />,
        descriptionTittle: "Young workers",
        description: "BP, Sugar",
      },
      {
        title: "StitchSmart Plus",
        icon: <GiEyeTarget className="text-lg text-amber-500" />,
        descriptionTittle: "Mid-career tailors",
        description: "Eye Test",
      },
      {
        title: "StitchSmart Plus",
        icon: <GiEyeTarget className="text-lg text-amber-500" />,
        descriptionTittle: "Mid-career tailors",
        description: "Ergonomic Assessment",
      },
      {
        title: "StitchSmart Pro",
        icon: <GiTalk className="text-lg text-amber-500" />,
        descriptionTittle: "Supervisors",
        description: "Thyroid",
      },
      {
        title: "StitchSmart Pro",
        icon: <GiTalk className="text-lg text-amber-500" />,
        descriptionTittle: "Supervisors",
        description: "CBC",
      },
      {
        title: "StitchSmart Pro",
        icon: <GiTalk className="text-lg text-amber-500" />,
        descriptionTittle: "Supervisors",
        description: "ECG",
      },
      {
        title: "StitchSmart Master",
        icon: <GiHealthIncrease className="text-lg text-amber-500" />,
        descriptionTittle: "Long-serving staff",
        description: "Full Body + Stress Screening",
      },
    ],
  },
  {
    title: "Pottery & Craft Workers",
    icon: <GiPaintedPottery className="text-xl text-black" />,
    issues: [
      {
        title: "ClayCare Basic",
        icon: <GiHealthNormal className="text-lg text-amber-500" />,
        descriptionTittle: "All potters",
        description: "BP",
      },
      {
        title: "ClayCare Basic",
        icon: <GiHealthNormal className="text-lg text-amber-500" />,
        descriptionTittle: "All potters",
        description: "Sugar",
      },
      {
        title: "ClayCare Basic",
        icon: <GiHealthNormal className="text-lg text-amber-500" />,
        descriptionTittle: "All potters",
        description: "Pulmonary Test",
      },
      {
        title: "ClayCare Plus",
        icon: <GiChestArmor className="text-lg text-amber-500" />,
        descriptionTittle: "Clay handlers",
        description: "Chest X-Ray",
      },
      {
        title: "ClayCare Plus",
        icon: <GiChestArmor className="text-lg text-amber-500" />,
        descriptionTittle: "Clay handlers",
        description: "ECG",
      },
      {
        title: "ClayCare Pro",
        icon: <GiChemicalDrop className="text-lg text-amber-500" />,
        descriptionTittle: "Senior craftsmen",
        description: "Liver",
      },
      {
        title: "ClayCare Pro",
        icon: <GiChemicalDrop className="text-lg text-amber-500" />,
        descriptionTittle: "Senior craftsmen",
        description: "Kidney",
      },
      {
        title: "ClayCare Pro",
        icon: <GiChemicalDrop className="text-lg text-amber-500" />,
        descriptionTittle: "Senior craftsmen",
        description: "Lung Function",
      },
      {
        title: "ClayCare Master",
        icon: <GiMuscleUp className="text-lg text-amber-500" />,
        descriptionTittle: "Aged artisans",
        description: "Full Panel + Bone & Joint Screening",
      },
    ],
  },
  {
    title: "Women in SHGs",
    icon: <FaUsers className="text-xl text-black" />,
    issues: [
      {
        title: "SHG Wellness Basic",
        icon: <GiHealthNormal className="text-lg text-amber-500" />,
        descriptionTittle: "All women",
        description: "Hemoglobin",
      },
      {
        title: "SHG Wellness Basic",
        icon: <GiHealthNormal className="text-lg text-amber-500" />,
        descriptionTittle: "All women",
        description: "BP",
      },
      {
        title: "SHG Wellness Basic",
        icon: <GiHealthNormal className="text-lg text-amber-500" />,
        descriptionTittle: "All women",
        description: "Sugar",
      },
      {
        title: "SHG Wellness Plus",
        icon: <GiEyeTarget className="text-lg text-amber-500" />,
        descriptionTittle: "Home-based workers",
        description: "Thyroid",
      },
      {
        title: "SHG Wellness Plus",
        icon: <GiEyeTarget className="text-lg text-amber-500" />,
        descriptionTittle: "Home-based workers",
        description: "Calcium",
      },
      {
        title: "SHG Wellness Plus",
        icon: <GiEyeTarget className="text-lg text-amber-500" />,
        descriptionTittle: "Home-based workers",
        description: "Vision",
      },
      {
        title: "SHG Wellness Pro",
        icon: <GiChemicalDrop className="text-lg text-amber-500" />,
        descriptionTittle: "Group leaders",
        description: "Lipid Profile",
      },
      {
        title: "SHG Wellness Pro",
        icon: <GiChemicalDrop className="text-lg text-amber-500" />,
        descriptionTittle: "Group leaders",
        description: "Liver",
      },
      {
        title: "SHG Wellness Pro",
        icon: <GiChemicalDrop className="text-lg text-amber-500" />,
        descriptionTittle: "Group leaders",
        description: "CBC",
      },
      {
        title: "SHG Wellness Master",
        icon: <GiHealthIncrease className="text-lg text-amber-500" />,
        descriptionTittle: "Older members & leaders",
        description: "Full Body + Women’s Health",
      },
    ],
  },
];

const CottageHealthPackages = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section className="py-16 px-4">
      <h2
        className="text-3xl md:text-4xl font-bold text-center mb-4"
        data-aos="fade-up"
      >
        <span className="text-teal-600">Health Check-up Packages</span> for
        Cottage Sector Workers
      </h2>
      <p
        className="text-lg text-slate-500 mb-10 text-center max-w-3xl mx-auto"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        Custom wellness and diagnostic bundles designed for artisans, potters,
        tailors, and self-help groups — promoting early detection and preventive
        care for every skill level.
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
            <h3 className="text-lg font-bold text-teal-600 mb-4 flex items-center gap-2">
              {group.icon}
              {group.title}
            </h3>

            <div className="overflow-y-auto pr-2 custom-scrollbar">
              <ul className="space-y-3">
                {group.issues.map((issue, i) => (
                  <li
                    key={i}
                    className="bg-teal-50 px-4 py-2 rounded-lg text-sm font-medium text-gray-800 flex flex-col"
                  >
                    <span className="flex items-center gap-2 text-amber-700 font-semibold">
                      {/* {issue.icon} */}
                      {/* {issue.title} */}
                    </span>
                    <span className="text-gray-700 text-[13px] ml-6 leading-tight">
                      {issue.description}
                    </span>
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
  background-color: rgba(245, 158, 11, 0.8);
}
.custom-scrollbar::-webkit-scrollbar-track {
  background: transparent;
}
`;

export default () => (
  <>
    <style>{styles}</style>
    <CottageHealthPackages />
  </>
);