import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  FaTruckLoading,
  FaUserTie,
} from "react-icons/fa";
import {
  MdOutlineSupport,
  MdOutlineTravelExplore,
} from "react-icons/md";
import {
  GiHealthNormal,
  GiStomach,
  GiShield,
  GiSleepy,
  GiEyeShield,
  GiLiver,
  GiRoad,
  GiHeartBeats,
  GiHospital,
  GiHealingShield,
} from "react-icons/gi";

const data = [
  {
    title: "Tour Guides & Coordinators",
    icon: <MdOutlineTravelExplore className="text-xl text-teal-700" />,
    issues: [
      {
        title: "Trail Ready Basic",
        descriptionTittle: "New joiners",
        description: "CBC, BP",
      },
       {
        title: "Trail Ready Basic",
        descriptionTittle: "New joiners",
        description: "ECG, ENT",
      },
       {
        title: "Trail Ready Basic",
        descriptionTittle: "New joiners",
        description: "Eye Check",
      },
      {
        title: "Explorer Plus",
        descriptionTittle: "Field staff",
        description: "Vitamin D/B12",
      },
      {
        title: "Explorer Plus",
        descriptionTittle: "Field staff",
        description: "Liver & Renal",
      },
      {
        title: "Explorer Plus",
        descriptionTittle: "Field staff",
        description: "Thyroid",
      },
      {
        title: "Journey Shield Advanced",
        descriptionTittle: "Senior coordinators",
        description: "Cardiac Profile",
      },
      {
        title: "Journey Shield Advanced",
        descriptionTittle: "Senior coordinators",
        description: "Stress Test",
      },
      {
        title: "Journey Shield Advanced",
        descriptionTittle: "Senior coordinators",
        description: "Audiometry",
      },
      {
        title: "Global Trek Master",
        descriptionTittle: "Managers on international routes",
        description: "Holter",
      },
      {
        title: "Global Trek Master",
        descriptionTittle: "Managers on international routes",
        description: "Sleep Apnea Study",
      },
      {
        title: "Global Trek Master",
        descriptionTittle: "Managers on international routes",
        description: "Full Body Check",
      },
    ],
  },
  {
    title: "Transport & Logistics Staff",
    icon: <FaTruckLoading className="text-xl text-teal-700" />,
    issues: [
      {
        title: "Driver’s Basic",
        descriptionTittle: "Entry-level",
        description: "Blood Sugar",
      },
      {
        title: "Driver’s Basic",
        descriptionTittle: "Entry-level",
        description: "BP",
      },
      {
        title: "Driver’s Basic",
        descriptionTittle: "Entry-level",
        description: "Eye Check",
      },
      {
        title: "Fleet Wellness",
        descriptionTittle: "Mid-level",
        description: "ECG, Lipid Profile",
      },
      {
        title: "Fleet Wellness",
        descriptionTittle: "Mid-level",
        description: "Liver Function",
      },
      {
        title: "Transport Shield",
        descriptionTittle: "Long-distance staff",
        description: "Heart Scan",
      },
      {
        title: "Transport Shield",
        descriptionTittle: "Long-distance staff",
        description: "Sleep Test",
      },
      {
        title: "Transport Shield",
        descriptionTittle: "Long-distance staff",
        description: "Spine X-ray",
      },
      {
        title: "On-Road Pro+",
        descriptionTittle: "Senior transport crew",
        description: "Stress Test",
      },
      {
        title: "On-Road Pro+",
        descriptionTittle: "Senior transport crew",
        description: "Neurological Exam",
      },
    ],
  },
  {
    title: "Hospitality & Frontline Staff",
    icon: <MdOutlineSupport className="text-xl text-teal-700" />,
    issues: [
      {
        title: "Frontline Fit",
        descriptionTittle: "Entry-level staff",
        description: "BMI",
      },
      {
        title: "Frontline Fit",
        descriptionTittle: "Entry-level staff",
        description: "BP",
      },
      {
        title: "Frontline Fit",
        descriptionTittle: "Entry-level staff",
        description: "Hemogram",
      },
      {
        title: "Hospitality Plus",
        descriptionTittle: "Housekeeping, waiters",
        description: "Vision",
      },
       {
        title: "Hospitality Plus",
        descriptionTittle: "Housekeeping, waiters",
        description: "Dental",
      },
       {
        title: "Hospitality Plus",
        descriptionTittle: "Housekeeping, waiters",
        description: "Vitamin Profile",
      },
      {
        title: "Guest Care Wellness",
        descriptionTittle: "Front desk",
        description: "Allergy Screening",
      },
      {
        title: "Guest Care Wellness",
        descriptionTittle: "Front desk",
        description: "ENT, ECG",
      },
      {
        title: "Elite Service Pro",
        descriptionTittle: "Managers & leads",
        description: "Advanced Cardiac & Lifestyle Panel",
      },
    ],
  },
  {
    title: "Sales & Marketing Professionals",
    icon: <FaUserTie className="text-xl text-teal-700" />,
    issues: [
      {
        title: "Sales Hustle Basic",
        descriptionTittle: "Field reps",
        description: "Sugar, BP",
      },
      {
        title: "Sales Hustle Basic",
        descriptionTittle: "Field reps",
        description: "CBC",
      },
      {
        title: "Pitch Ready Plus",
        descriptionTittle: "Territory execs",
        description: "Thyroid",
      },
      {
        title: "Pitch Ready Plus",
        descriptionTittle: "Territory execs",
        description: "Liver",
      },
      {
        title: "Pitch Ready Plus",
        descriptionTittle: "Territory execs",
        description: "Vision",
      },
      {
        title: "Road Warrior Wellness",
        descriptionTittle: "Frequent travelers",
        description: "Cardiac Risk",
      },
      {
        title: "Road Warrior Wellness",
        descriptionTittle: "Frequent travelers",
        description: "Sleep & Stress Test",
      },
      {
        title: "Global Sales Leader",
        descriptionTittle: "National heads",
        description: "Full Body Screening, Lifestyle Profile",
      },
    ],
  },
];

const TourismHealthPackages = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="py-12 px-4">
      <h2
        className="text-3xl md:text-4xl font-bold text-center mb-4"
        data-aos="fade-up"
      >
        Recommended <span className="text-teal-600">Health Check-ups</span> for
        Tourism Teams
      </h2>

      <p
        className="text-lg text-slate-500 mb-10 text-center"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        Precision health packages designed for every travel role — from
        frontliners to managers — ensuring wellness on and off the route.
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
            <h3 className="text-xl font-semibold text-teal-700 mb-4 flex items-center gap-2">
              {group.icon}
              {group.title}
            </h3>

            <div className="overflow-y-auto pr-2 custom-scrollbar">
              <ul className="space-y-3">
                {group.issues.map((issue, i) => (
                  <li
                    key={i}
                    className="bg-teal-50 px-4 py-3 rounded-lg text-sm font-medium text-gray-800"
                  >
                    <div className="font-semibold text-teal-700 text-[14px]">
                      {/* {issue.title} */}
                    </div>
                    <div className="text-gray-600 text-[13px]">
                      {/* {issue.descriptionTittle} —{" "} */}
                      <span className="font-normal">{issue.description}</span>
                    </div>
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
  background-color: rgba(13, 148, 136, 0.7);
}
.custom-scrollbar::-webkit-scrollbar-track {
  background: transparent;
}
`;

export default () => (
  <>
    <style>{styles}</style>
    <TourismHealthPackages />
  </>
);