import React, { useEffect } from 'react';
import { GiFurnace, GiCargoCrane, GiHealthIncrease, GiToolbox } from 'react-icons/gi';
import { FaTools, FaUsersCog, FaUserShield, FaUserCheck, FaRegBuilding, FaWrench, FaPeopleCarry } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';

const data = [
  {
    title: 'For Production Floor Workers',
    icon: <GiFurnace className="text-xl" />,
    issues: [
      { title: 'SpinCare Basic', descriptionTittle: 'CBC' },
      { title: 'SpinCare Basic', descriptionTittle: 'RBS' },
      { title: 'SpinCare Basic', descriptionTittle: 'BMI' },
      { title: 'SpinCare Basic', descriptionTittle: 'BP' },
      { title: 'SpinCare Basic', descriptionTittle: 'Lung Function Test' },
      { title: 'SpinCare Plus', descriptionTittle: 'ECG' },
      { title: 'SpinCare Plus', descriptionTittle: 'Spirometry, Audiometry' },
      { title: 'SpinCare Plus', descriptionTittle: 'Vision' },
      { title: 'SpinCare Plus', descriptionTittle: 'Liver & Renal Profile' },
      { title: 'SpinCare Advanced', descriptionTittle: 'Full Body Check, Ergonomic Assessment, Chest X-Ray' },
    ],
  },
  {
    title: 'For Dyeing & Chemical Unit',
    icon: <FaTools className="text-xl" />,
    issues: [
      { title: 'ChemShield Basic', descriptionTittle: 'CBC' },
      { title: 'ChemShield Basic', descriptionTittle: 'Skin Allergy Panel' },
      { title: 'ChemShield Basic', descriptionTittle: 'Urinalysis' },
      { title: 'ChemShield Plus', descriptionTittle: 'Spirometry' },
      { title: 'ChemShield Plus', descriptionTittle: 'Liver Panel' },
      { title: 'ChemShield Plus', descriptionTittle: 'Blood Lead Levels' },
      { title: 'ChemShield Plus', descriptionTittle: 'Vision Test' },
      { title: 'ChemShield Advanced', descriptionTittle: 'ECG' },
      { title: 'ChemShield Advanced', descriptionTittle: 'Chest X-Ray' },
      { title: 'ChemShield Advanced', descriptionTittle: 'Lung Function Test' },
      { title: 'ChemShield Advanced', descriptionTittle: 'Kidney Profile' },
    ],
  },
  {
    title: 'For Supervisors & Admin Staff',
    icon: <FaRegBuilding className="text-xl" />,
    issues: [
      { title: 'DeskFit Basic', descriptionTittle: 'BP' },
      { title: 'DeskFit Basic', descriptionTittle: 'BMI' },
      { title: 'DeskFit Basic', descriptionTittle: 'RBS' },
      { title: 'DeskFit Basic', descriptionTittle: 'Eye Check' },
      { title: 'DeskFit Plus', descriptionTittle: 'Lipid Profile' },
      { title: 'DeskFit Plus', descriptionTittle: 'ECG' },
      { title: 'DeskFit Plus', descriptionTittle: 'Liver Function' },
      { title: 'DeskFit Advanced', descriptionTittle: 'TMT' },
      { title: 'DeskFit Advanced', descriptionTittle: 'Cardiac Risk Markers' },
      { title: 'DeskFit Advanced', descriptionTittle: 'Stress Assessment' },
    ],
  },
];

const TextileHealthPackages = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section className="py-12 px-4">
      <h2
        className="text-3xl md:text-4xl font-bold text-center mb-4"
        data-aos="fade-up"
      >
        <span className="text-teal-600">Health Woven Right</span> – Tiered Checkups for Every Thread
      </h2>
      <p
        className="text-lg text-slate-500 mb-10 text-center max-w-3xl mx-auto"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        Preventive care tailored for every role in the textile ecosystem — from the spinning floor to the supervisor’s desk.
      </p>

      <div
        className="grid md:grid-cols-3 gap-6 max-w-7xl mx-auto"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        {data.map((group, idx) => (
          <div
            key={idx}
            className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100 flex flex-col h-[400px]"
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
                    {/* <span className="text-amber-500 font-semibold mr-2">{issue.title}:</span> */}
                    {issue.descriptionTittle}
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

// ✅ Custom scrollbar style
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
    <TextileHealthPackages />
  </>
);