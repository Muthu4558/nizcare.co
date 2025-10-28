import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import {
  GiFactory,
  GiGears,
  GiHealthNormal,
  GiPowerLightning,
  GiHealthCapsule,
  GiShield,
  GiStethoscope,
} from 'react-icons/gi';
import { FaPlus, FaUserTie } from 'react-icons/fa';

const data = [
  {
    title: 'Assembly Line & Plant Workers',
    icon: <GiFactory className="text-xl text-black" />,
    issues: [
      { title: 'Essential Engine Check', descriptionTittle: 'All factory floor workers', description: 'BP, CBC' },
      { title: 'Essential Engine Check', descriptionTittle: 'All factory floor workers', description: 'Random Blood Sugar' },
      { title: 'Essential Engine Check', descriptionTittle: 'All factory floor workers', description: 'Audiometry' },
      { title: 'Essential Engine Check', descriptionTittle: 'All factory floor workers', description: 'Vision' },
      { title: 'Core Gear Wellness', descriptionTittle: 'Technicians, operators over age 35', description: 'Basic + Liver Function, Chest X-ray, ECG' },
      { title: 'Heavy Duty Health Pro', descriptionTittle: 'Senior workers / high-risk zones', description: 'All above + Lung Function, Kidney Function, Vitamin D, TSH' },
    ],
  },
  {
    title: 'Supervisors & Floor Managers',
    icon: <GiGears className="text-xl text-black" />,
    issues: [
      { title: 'Shift Shield', descriptionTittle: 'Young shift leaders', description: 'BP' },
      { title: 'Shift Shield', descriptionTittle: 'Young shift leaders', description: 'Lipid Profile' },
      { title: 'Shift Shield', descriptionTittle: 'Young shift leaders', description: 'ECG' },
      { title: 'Shift Shield', descriptionTittle: 'Young shift leaders', description: 'RBS' },
      { title: 'Manager’s Wellness Kit', descriptionTittle: 'Mid-level managers', description: 'Basic + LFT, Stress ECG, TMT' },
      { title: 'Leadership Wellness Max', descriptionTittle: 'Senior floor heads / 40+ age group', description: 'All above + Thyroid, Diabetes Panel, Vitamin B12, Eye Check' },
    ],
  },
  {
    title: 'Corporate Staff & Engineers',
    icon: <FaUserTie className="text-xl text-black" />,
    issues: [
      { title: 'Desk Health Check', descriptionTittle: 'Entry-level staff', description: 'BMI' },
      { title: 'Desk Health Check', descriptionTittle: 'Entry-level staff', description: 'RBS' },
      { title: 'Desk Health Check', descriptionTittle: 'Entry-level staff', description: 'CBC' },
      { title: 'Desk Health Check', descriptionTittle: 'Entry-level staff', description: 'Vision' },
      { title: 'Smart Office Fit', descriptionTittle: 'Mid-level executives', description: 'Basic + Liver Function, Lipid, ECG, Vitamin D' },
      { title: 'Corporate Wellness Elite', descriptionTittle: '35+ engineers, HR, project leads', description: 'Full Body + Thyroid, HBA1C, Chest X-ray, Stress Assessment' },
    ],
  },
];

const HealthPackagesGrid = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section className="py-12 px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-4" data-aos="fade-up">
        From Assembly Lines to Admin – <span className="text-teal-600">We Diagnose Every Drive</span>
      </h2>

      <p
        className="text-lg text-slate-500 mb-10 text-center max-w-3xl mx-auto"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        Every role deserves precision health insight. Our diagnostic packages are tailored to meet the unique risks and routines of your workforce.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto" data-aos="fade-up" data-aos-delay="200">
        {data.map((group, groupIdx) => (
          <div
            key={groupIdx}
            className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100 flex flex-col h-[420px]"
          >
            <h3 className="text-xl font-semibold text-teal-600 mb-4 flex items-center gap-2">
              {group.icon}
              {group.title}
            </h3>

            <div className="overflow-y-auto pr-2 custom-scrollbar">
              <ul className="space-y-3">
                {group.issues.map((issue, idx) => (
                  <li
                    key={idx}
                    className="bg-teal-50 px-4 py-2 rounded-lg text-sm font-medium text-gray-800"
                  >
                    <span className="block text-[13px] text-teal-700 font-semibold mb-0.5">
                      {/* {issue.descriptionTittle} */}
                    </span>
                    <span className="text-gray-700">{issue.description}</span>
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

// ✅ Custom scrollbar styles (same as your previous version)
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
    <HealthPackagesGrid />
  </>
);