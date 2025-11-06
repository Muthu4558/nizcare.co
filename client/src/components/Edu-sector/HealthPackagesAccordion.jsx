import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  FaChalkboardTeacher,
  FaLaptopCode,
  FaPeopleCarry,
} from "react-icons/fa";
import { MdOutlineAdminPanelSettings } from "react-icons/md";
import {
  GiHealthNormal,
  GiHealthIncrease,
  GiTalk,
  GiMeditation,
  GiEyeTarget,
  GiDesk,
  GiShieldBash,
  GiCircuitry,
  GiComputerFan,
  GiShieldReflect,
  GiFirstAidKit,
} from "react-icons/gi";

const data = [
  {
    title: "Teaching & Academic Staff",
    icon: <FaChalkboardTeacher className="text-xl text-teal-700" />,
    issues: [
      {
        title: "EduCare Basic",
        icon: <GiHealthNormal className="text-lg text-amber-500" />,
        descriptionTittle: "All Teachers",
        description: "CBC",
      },
      {
        title: "EduCare Basic",
        icon: <GiHealthNormal className="text-lg text-amber-500" />,
        descriptionTittle: "All Teachers",
        description: "BP, Sugar",
      },
      {
        title: "EduCare Basic",
        icon: <GiHealthNormal className="text-lg text-amber-500" />,
        descriptionTittle: "All Teachers",
        description: "BMI",
      },
      {
        title: "Voice & Vital+",
        icon: <GiTalk className="text-lg text-amber-500" />,
        descriptionTittle: "Senior Educators",
        description: "ENT",
      },
      {
        title: "Voice & Vital+",
        icon: <GiTalk className="text-lg text-amber-500" />,
        descriptionTittle: "Senior Educators",
        description: "Thyroid",
      },
      {
        title: "Voice & Vital+",
        icon: <GiTalk className="text-lg text-amber-500" />,
        descriptionTittle: "Senior Educators",
        description: "ECG, LFT",
      },
      {
        title: "EduStress Pro",
        icon: <GiMeditation className="text-lg text-amber-500" />,
        descriptionTittle: "Academic Heads",
        description: "Cortisol",
      },
      {
        title: "EduStress Pro",
        icon: <GiMeditation className="text-lg text-amber-500" />,
        descriptionTittle: "Academic Heads",
        description: "Vitamin D",
      },
      {
        title: "EduStress Pro",
        icon: <GiMeditation className="text-lg text-amber-500" />,
        descriptionTittle: "Academic Heads",
        description: "Lipid, ECG",
      },
      {
        title: "EduMaster Wellness",
        icon: <GiHealthIncrease className="text-lg text-amber-500" />,
        descriptionTittle: "Professors with 10+ yrs",
        description: "Stress Test",
      },
      {
        title: "EduMaster Wellness",
        icon: <GiHealthIncrease className="text-lg text-amber-500" />,
        descriptionTittle: "Professors with 10+ yrs",
        description: "Eye Check",
      },
      {
        title: "EduMaster Wellness",
        icon: <GiHealthIncrease className="text-lg text-amber-500" />,
        descriptionTittle: "Professors with 10+ yrs",
        description: "Master Health Check",
      },
    ],
  },
  {
    title: "Administrative & Management Staff",
    icon: <MdOutlineAdminPanelSettings className="text-xl text-teal-700" />,
    issues: [
      {
        title: "AdminFit Basic",
        icon: <GiHealthNormal className="text-lg text-amber-500" />,
        descriptionTittle: "Office Staff",
        description: "CBC",
      },
      {
        title: "AdminFit Basic",
        icon: <GiHealthNormal className="text-lg text-amber-500" />,
        descriptionTittle: "Office Staff",
        description: "Lipid",
      },
      {
        title: "AdminFit Basic",
        icon: <GiHealthNormal className="text-lg text-amber-500" />,
        descriptionTittle: "Office Staff",
        description: "Sugar, BP",
      },
      {
        title: "Vision & Vital+",
        icon: <GiEyeTarget className="text-lg text-amber-500" />,
        descriptionTittle: "Registrars/Admin Leads",
        description: "Eye Test",
      },
      {
        title: "Vision & Vital+",
        icon: <GiEyeTarget className="text-lg text-amber-500" />,
        descriptionTittle: "Registrars/Admin Leads",
        description: "ECG",
      },
      {
        title: "Vision & Vital+",
        icon: <GiEyeTarget className="text-lg text-amber-500" />,
        descriptionTittle: "Registrars/Admin Leads",
        description: "LFT",
      },
      {
        title: "DeskPro Care",
        icon: <GiDesk className="text-lg text-amber-500" />,
        descriptionTittle: "Mid-management",
        description: "Vitamin B12, D",
      },
      {
        title: "DeskPro Care",
        icon: <GiDesk className="text-lg text-amber-500" />,
        descriptionTittle: "Mid-management",
        description: "Stress Profile",
      },
      {
        title: "DeskPro Care",
        icon: <GiDesk className="text-lg text-amber-500" />,
        descriptionTittle: "Mid-management",
        description: "USG",
      },
      {
        title: "AdminMaster Shield",
        icon: <GiShieldBash className="text-lg text-amber-500" />,
        descriptionTittle: "Senior Mgmt/Principals",
        description: "Cardiac Risk",
      },
      {
        title: "AdminMaster Shield",
        icon: <GiShieldBash className="text-lg text-amber-500" />,
        descriptionTittle: "Senior Mgmt/Principals",
        description: "TMT, Thyroid",
      },
      {
        title: "AdminMaster Shield",
        icon: <GiShieldBash className="text-lg text-amber-500" />,
        descriptionTittle: "Senior Mgmt/Principals",
        description: "Echo",
      },
    ],
  },
  {
    title: "Tech & Product Teams (EdTech)",
    icon: <FaLaptopCode className="text-xl text-teal-700" />,
    issues: [
      {
        title: "CodeFit Basic",
        icon: <GiHealthNormal className="text-lg text-amber-500" />,
        descriptionTittle: "Junior Devs",
        description: "CBC",
      },
      {
        title: "CodeFit Basic",
        icon: <GiHealthNormal className="text-lg text-amber-500" />,
        descriptionTittle: "Junior Devs",
        description: "Sugar",
      },
      {
        title: "CodeFit Basic",
        icon: <GiHealthNormal className="text-lg text-amber-500" />,
        descriptionTittle: "Junior Devs",
        description: "Vitamin D",
      },
      {
        title: "ScreenCare+",
        icon: <GiComputerFan className="text-lg text-amber-500" />,
        descriptionTittle: "Product Designers",
        description: "Eye Test",
      },
      {
        title: "ScreenCare+",
        icon: <GiComputerFan className="text-lg text-amber-500" />,
        descriptionTittle: "Product Designers",
        description: "BP",
      },
      {
        title: "ScreenCare+",
        icon: <GiComputerFan className="text-lg text-amber-500" />,
        descriptionTittle: "Product Designers",
        description: "Spine Screening",
      },
      {
        title: "Debug Wellness",
        icon: <GiCircuitry className="text-lg text-amber-500" />,
        descriptionTittle: "Mid-Level Tech Leads",
        description: "TMT, Lipid",
      },
      {
        title: "Debug Wellness",
        icon: <GiCircuitry className="text-lg text-amber-500" />,
        descriptionTittle: "Mid-Level Tech Leads",
        description: "Liver Panel",
      },
      {
        title: "TechMaster 360",
        icon: <GiHealthIncrease className="text-lg text-amber-500" />,
        descriptionTittle: "CTOs/PMs/Sr Engineers",
        description: "Master Health Check + Stress Panel",
      },
    ],
  },
  {
    title: "Support & Ground Staff",
    icon: <FaPeopleCarry className="text-xl text-teal-700" />,
    issues: [
      {
        title: "GroundHealth Basic",
        icon: <GiHealthNormal className="text-lg text-amber-500" />,
        descriptionTittle: "All Workers",
        description: "BP, Sugar",
      },
      {
        title: "GroundHealth Basic",
        icon: <GiHealthNormal className="text-lg text-amber-500" />,
        descriptionTittle: "All Workers",
        description: "BMI",
      },
      {
        title: "FirstLine+",
        icon: <GiFirstAidKit className="text-lg text-amber-500" />,
        descriptionTittle: "Field/Housekeeping",
        description: "CBC",
      },
      {
        title: "FirstLine+",
        icon: <GiFirstAidKit className="text-lg text-amber-500" />,
        descriptionTittle: "Field/Housekeeping",
        description: "X-Ray",
      },
      {
        title: "FirstLine+",
        icon: <GiFirstAidKit className="text-lg text-amber-500" />,
        descriptionTittle: "Field/Housekeeping",
        description: "ECG",
      },
      {
        title: "VitalShield",
        icon: <GiShieldReflect className="text-lg text-amber-500" />,
        descriptionTittle: "Drivers, Security",
        description: "General Health + Ortho",
      },
      {
        title: "SupportMaster",
        icon: <GiHealthIncrease className="text-lg text-amber-500" />,
        descriptionTittle: "Long-Term Support Staff",
        description: "Full Body Checkup",
      },
    ],
  },
];

const EducationHealthPackages = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section className="py-12 px-4">
      <h2
        className="text-3xl md:text-4xl font-bold text-center mb-4"
        data-aos="fade-up"
      >
        Recommended <span className="text-teal-600">Health Check-ups</span> for Educational Roles
      </h2>

      <p
        className="text-lg text-slate-500 mb-10 text-center"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        Early detection keeps your campus thriving. Tailored health packages for each staff group.
      </p>

      <div
        className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        {data.map((group, idx) => (
          <div
            key={idx}
            className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100 flex flex-col h-[420px] hover:shadow-xl transition-shadow duration-300"
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
                    className="bg-teal-50 px-4 py-2 rounded-lg text-sm text-gray-800 shadow-sm"
                  >
                    <div className="flex items-center gap-2 font-semibold text-teal-700">
                      {/* {issue.icon} */}
                      {/* {issue.title}  */}
                    </div>
                    <div className="text-[13px] mt-1 text-gray-600">
                      {/* <strong>{issue.descriptionTittle}:</strong>  */}
                      {issue.description}
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
    <EducationHealthPackages />
  </>
);