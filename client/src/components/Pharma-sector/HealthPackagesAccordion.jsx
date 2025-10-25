import React, { useEffect } from 'react';
import { FaUserTie, FaUsersCog, FaUserNurse } from 'react-icons/fa';
import { GiCrown, GiHealthNormal, GiChemicalDrop, GiVirus, GiStrong, GiStandingPotion } from 'react-icons/gi';
import { BiBody } from 'react-icons/bi';
import { MdHealthAndSafety, MdOutlineLocalHospital } from 'react-icons/md';
import AOS from 'aos';
import 'aos/dist/aos.css';

const data = [
  {
    title: 'Lab Technicians & QC Staff',
    icon: <FaUserNurse className="text-xl text-black" />,
    issues: [
      { title: 'Basic BioSafety Package', descriptionTittle: 'CBC' },
      { title: 'Basic BioSafety Package', descriptionTittle: 'LFT' },
      { title: 'Basic BioSafety Package', descriptionTittle: 'RFT' },
      { title: 'Basic BioSafety Package', descriptionTittle: 'Spirometry' },
      { title: 'Basic BioSafety Package', descriptionTittle: 'Vision Test' },
      { title: 'LabGuard Plus', descriptionTittle: 'Basic + Urinalysis, Chest X-Ray, Allergy Panel, Liver Enzymes' },
      { title: 'SterileCare Elite', descriptionTittle: 'Plus + ECG, Vitamin D, Heavy Metal Screen, Mental Health Check' },
    ],
  },
  {
    title: 'Production & Packaging Staff',
    icon: <FaUsersCog className="text-xl text-black" />,
    issues: [
      { title: 'Core Worker Check', descriptionTittle: 'CBC' },
      { title: 'Core Worker Check', descriptionTittle: 'ECG' },
      { title: 'Core Worker Check', descriptionTittle: 'Audiometry' },
      { title: 'Core Worker Check', descriptionTittle: 'Spirometry' },
      { title: 'Core Worker Check', descriptionTittle: 'Blood Sugar' },
      { title: 'ShiftSafe Plan', descriptionTittle: 'Core + Eye Test, Ergonomic Assessment, Creatinine Test' },
      { title: 'PlantWell Elite', descriptionTittle: 'ShiftSafe + Chest X-ray, Liver Profile, Vitamin D, Hepatitis Panel' },
    ],
  },
  {
    title: 'Sales & Corporate Executives',
    icon: <FaUserTie className="text-xl text-black" />,
    issues: [
      { title: 'DeskFit Basic', descriptionTittle: 'CBC' },
      { title: 'DeskFit Basic', descriptionTittle: 'BP' },
      { title: 'DeskFit Basic', descriptionTittle: 'BMI' },
      { title: 'DeskFit Basic', descriptionTittle: 'Fasting Glucose' },
      { title: 'FieldForce Wellness', descriptionTittle: 'Basic + Lipid Profile, Eye Test, Vitamin D, ECG' },
      { title: 'Leadership Shield', descriptionTittle: 'FieldForce + Liver Panel, Sleep Analysis, Stress Test, Cardiac Risk Panel' },
    ],
  },
];

const HealthPackagesGrid = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section className="py-10 px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
        Recommended <span className='text-teal-600'>Health Check-ups</span>
      </h2>
      <p
        className="text-lg text-slate-500 mb-10 text-center"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        Early Detection is Mission Control. We provide health check packages tailored to the specific risks of each job profile.
      </p>

      <div className="grid md:grid-cols-3 gap-6 max-w-7xl mx-auto" data-aos="fade-up" data-aos-delay="200">
        {data.map((group, idx) => (
          <div
            key={idx}
            className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100 flex flex-col h-[400px]"
          >
            <h3 className="text-xl font-semibold text-teal-600 mb-4 flex items-center gap-2">
              {group.icon} {group.title}
            </h3>

            <div className="overflow-y-auto pr-2 custom-scrollbar">
              <ul className="space-y-3">
                {group.issues.map((issue, i) => (
                  <li
                    key={i}
                    className="bg-teal-50 px-4 py-2 rounded-lg text-sm font-medium text-gray-800"
                  >
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

export default HealthPackagesGrid;
