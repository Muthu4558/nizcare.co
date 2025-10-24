import React, { useEffect } from 'react';
import {
  FaUserTie, FaUsersCog, FaUserNurse,
} from 'react-icons/fa';
import {
  GiPlantRoots, GiHealthCapsule, GiCrown, GiStrong,
  GiBurningBook, GiCook, GiHealthNormal,
} from 'react-icons/gi';
import AOS from 'aos';
import 'aos/dist/aos.css';

const data = [
  {
    title: 'Production & Kiln Operators',
    icon: <FaUserTie className="text-xl text-black" />,
    issues: [
      { title: 'HeatSafe Basic', icon: <GiPlantRoots className="text-xl text-amber-400" />, descriptionTittle: 'CBC, ECG' },
      { title: 'HeatSafe Basic', icon: <GiPlantRoots className="text-xl text-amber-400" />, descriptionTittle: 'Urine Routine' },
      { title: 'HeatSafe Basic', icon: <GiPlantRoots className="text-xl text-amber-400" />, descriptionTittle: 'BP' },
      { title: 'HeatSafe Basic', icon: <GiPlantRoots className="text-xl text-amber-400" />, descriptionTittle: 'Pulse Check' },
      { title: 'LungGuard Plus', icon: <GiHealthCapsule className="text-xl text-amber-400" />, descriptionTittle: 'All Basic + Chest X-ray, Spirometry, Pulse Oxymetry' },
      { title: 'KilnCare Max', icon: <GiCrown className="text-xl text-amber-400" />, descriptionTittle: 'All Plus + Audiometry, Liver Function, Stress ECG' },
    ],
  },
  {
    title: 'Logistics & Maintenance Crew',
    icon: <FaUsersCog className="text-xl text-black" />,
    issues: [
      { title: 'FlexiFit Basic', icon: <GiHealthNormal className="text-xl text-amber-400" />, descriptionTittle: 'BP' },
      { title: 'FlexiFit Basic', icon: <GiHealthNormal className="text-xl text-amber-400" />, descriptionTittle: 'Sugar (FBS/RBS)' },
      { title: 'FlexiFit Basic', icon: <GiHealthNormal className="text-xl text-amber-400" />, descriptionTittle: 'Eye Check' },
      { title: 'FlexiFit Basic', icon: <GiHealthNormal className="text-xl text-amber-400" />, descriptionTittle: 'Joint Screening' },
      { title: 'MechanicCare Plus', icon: <GiStrong className="text-xl text-amber-400" />, descriptionTittle: 'All Basic + ECG, Uric Acid, Vitamin D, X-ray Spine' },
      { title: 'DriveSafe Max', icon: <GiCrown className="text-xl text-amber-400" />, descriptionTittle: 'All Plus + Fitness Cert, Drug Screening, ECG TMT' },
    ],
  },
  {
    title: 'Contract & Loading Staff',
    icon: <FaUserNurse className="text-xl text-black" />,
    issues: [
      { title: 'LoaderBasic', icon: <GiHealthNormal className="text-xl text-amber-400" />, descriptionTittle: 'CBC' },
      { title: 'LoaderBasic', icon: <GiHealthNormal className="text-xl text-amber-400" />, descriptionTittle: 'BP' },
      { title: 'LoaderBasic', icon: <GiHealthNormal className="text-xl text-amber-400" />, descriptionTittle: 'BMI' },
      { title: 'LoaderBasic', icon: <GiHealthNormal className="text-xl text-amber-400" />, descriptionTittle: 'Urine Routine' },
      { title: 'HygienePlus', icon: <GiCook className="text-xl text-amber-400" />, descriptionTittle: 'All Basic + Sputum, Typhoid, Skin Exam' },
      { title: 'WorkerCare Max', icon: <GiBurningBook className="text-xl text-amber-500" />, descriptionTittle: 'All Plus + HbsAg, HIV, Basic Mental Health Screening' },
    ],
  },
];

const HealthPackagesLayout = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section className="py-12 px-4">
      <h2 className="text-3xl font-bold text-center mb-10" data-aos="fade-up">
        “Right Care, Right Role: Tiered Health Checkups That Fit the Job”
      </h2>

      <div className="grid md:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {data.map((group, groupIdx) => (
          <div
            key={groupIdx}
            className="bg-white rounded-2xl shadow-lg p-6 flex flex-col h-[400px]"
            data-aos="zoom-in-up"
            data-aos-delay={groupIdx * 100}
          >
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              {group.icon}
              {group.title}
            </h3>

            <div className="overflow-y-auto pr-2 custom-scrollbar">
              <ul className="space-y-3">
                {group.issues.map((issue, idx) => (
                  <li key={idx} className="bg-teal-50 px-4 py-2 rounded-lg text-sm font-medium text-gray-800 flex items-center gap-2">
                    {/* {issue.icon} */}
                    {issue.descriptionTittle}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      <style>{`
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
      `}</style>
    </section>
  );
};

export default HealthPackagesLayout;