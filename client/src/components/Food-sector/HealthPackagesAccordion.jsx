import React, { useEffect } from 'react';
import { FaUserTie, FaUsersCog, FaUserNurse } from 'react-icons/fa';
import { GiCrown, GiPlantRoots, GiHealthCapsule } from 'react-icons/gi';
import AOS from 'aos';
import 'aos/dist/aos.css';

const data = [
  {
    title: 'Frontline Workers',
    icon: <FaUserTie className="text-xl" />,
    issues: [
      { title: 'Basic Vital Shield', descriptionTittle: 'CBC, BP, Sugar' },
      { title: 'Basic Vital Shield', descriptionTittle: 'BMI' },
      { title: 'Basic Vital Shield', descriptionTittle: 'Eye Check' },
      { title: 'Core Health Pack', descriptionTittle: 'LFT' },
      { title: 'Core Health Pack', descriptionTittle: 'Urine Routine' },
      { title: 'Core Health Pack', descriptionTittle: 'ECG, PFT' },
      { title: 'Core Health Pack', descriptionTittle: 'Hearing Test' },
      { title: 'Core Health Pack', descriptionTittle: 'Dermatology Screening' },
      { title: 'Fit & Safe Pack', descriptionTittle: 'All tests above + Chest X-ray, Skin Allergy Panel, Nutrition Evaluation' },
    ],
  },
  {
    title: 'Supervisors & Admin Staff',
    icon: <FaUsersCog className="text-xl" />,
    issues: [
      { title: 'Admin Basics', descriptionTittle: 'CBC, ECG' },
      { title: 'Admin Basics', descriptionTittle: 'Eye Check' },
      { title: 'Admin Basics', descriptionTittle: 'BMI' },
      { title: 'Admin Basics', descriptionTittle: 'Vitamin D' },
      { title: 'Work-Life Wellness Pack', descriptionTittle: 'Lipid Profile' },
      { title: 'Work-Life Wellness Pack', descriptionTittle: 'LFT, TSH' },
      { title: 'Work-Life Wellness Pack', descriptionTittle: 'Urine Analysis' },
      { title: 'Work-Life Wellness Pack', descriptionTittle: 'Stress Score Assessment' },
      { title: 'Performance Pro Pack', descriptionTittle: 'Includes all above + Liver, Kidney, Cardiac Risk Markers, Mental Wellness Screening' },
    ],
  },
  {
    title: 'Management & Executives',
    icon: <FaUserNurse className="text-xl" />,
    issues: [
      { title: 'Executive Snapshot', descriptionTittle: 'CBC' },
      { title: 'Executive Snapshot', descriptionTittle: 'Sugar' },
      { title: 'Executive Snapshot', descriptionTittle: 'BMI' },
      { title: 'Executive Snapshot', descriptionTittle: 'BP' },
      { title: 'Executive Snapshot', descriptionTittle: 'Lipid Profile' },
      { title: 'Leadership Wellness Pack', descriptionTittle: 'Master Health Check (Liver, Kidney, Diabetes, ECG, Eye, Hearing)' },
      { title: 'Leadership Wellness Pack', descriptionTittle: 'Stress Scan' },
      { title: "Director's 360 Health Suite", descriptionTittle: 'Full Body Check + Cardiac Echo, Thyroid, Vitamin Panels, Oncological Markers, Specialist Consults (Cardio, Ortho)' },
    ],
  },
];

const SimplifiedHealthPackagesAccordion = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section className="py-10 px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
        Recommended <span className="text-teal-600">Health Check-ups</span>
      </h2>
      <p className="text-lg text-slate-500 mb-10 text-center">
        Early Detection is Mission Control. We provide health check packages tailored to the specific risks of each job profile.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {data.map((group, idx) => (
          <div
            key={idx}
            className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100 flex flex-col h-[400px]"
            data-aos="fade-up"
            data-aos-delay={idx * 150}
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
    <SimplifiedHealthPackagesAccordion />
  </>
);



// import React, { useState, useEffect } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import {
//   FaUserTie, FaUsersCog, FaUserNurse,
// } from 'react-icons/fa';
// import {
//   GiPlantRoots, GiHealthCapsule, GiCrown, GiStrong,
//   GiBurningBook, GiCook, GiHealthNormal,
// } from 'react-icons/gi';
// import { BiCollapse, BiExpand } from 'react-icons/bi';
// import AOS from 'aos';
// import 'aos/dist/aos.css';

// const data = [
//   {
//     title: 'Frontline Workers',
//     icon: <FaUserTie className="text-xl text-black" />,
//     issues: [
//       {
//         title: 'Basic Vital Shield',
//         icon: <GiPlantRoots className="text-xl text-amber-400" />,
//         descriptionTittle: 'CBC, BP, Sugar (RBS), BMI, Eye Check',
//         description: 'Ideal for: New joiners, daily wage workers, seasonal staff',
//       },
//       {
//         title: 'Core Health Pack',
//         icon: <GiHealthCapsule className="text-xl text-amber-400" />,
//         descriptionTittle: 'LFT, Urine Routine, ECG, PFT, Hearing Test, Dermatology Screening',
//         description: 'Ideal for: Machine operators, sanitation staff, cold storage handlers',
//       },
//       {
//         title: 'Fit & Safe Pack',
//         icon: <GiCrown className="text-xl text-amber-400" />,
//         descriptionTittle: 'All tests above + Chest X-ray, Skin Allergy Panel, Nutrition Evaluation',
//         description: 'Ideal for: Long-term employees, production supervisors',
//       },
//     ],
//   },
//   {
//     title: 'Supervisors & Admin Staff',
//     icon: <FaUsersCog className="text-xl text-black" />,
//     issues: [
//       {
//         title: 'Admin Basics',
//         icon: <GiHealthNormal className="text-xl text-amber-400" />,
//         descriptionTittle : 'CBC, ECG, Eye Check, BMI, Vitamin D',
//         description: 'Ideal for: New admin/support staff',
//       },
//       {
//         title: 'Work-Life Wellness Pack',
//         icon: <GiStrong className="text-xl text-amber-400" />,
//         descriptionTittle : 'Lipid Profile, LFT, TSH, ECG, Urine Analysis, Stress Score Assessment',
//         description: 'Ideal for: Shift leads, floor supervisors',
//       },
//       {
//         title: 'Performance Pro Pack',
//         icon: <GiCrown className="text-xl text-amber-400" />,
//         descriptionTittle: 'Includes all above + Liver, Kidney, Cardiac Risk Markers, Mental Wellness Screening',
//         description: 'Ideal for: QA heads, documentation managers',
//       },
//     ],
//   },
//   {
//     title: 'Management & Executives',
//     icon: <FaUserNurse className="text-xl text-black" />,
//     issues: [
//       {
//         title: 'Executive Snapshot',
//         icon: <GiHealthNormal className="text-xl text-amber-400" />,
//         descriptionTittle: 'CBC, Lipid Profile, Sugar, BMI, BP',
//         description: 'Ideal for: New joinees at executive level',
//       },
//       {
//         title: 'Leadership Wellness Pack',
//         icon: <GiCook className="text-xl text-amber-400" />,
//         descriptionTittle: 'Master Health Check (Liver, Kidney, Diabetes, ECG, Eye, Hearing), Stress Scan',
//         description: 'Ideal for: Mid-level managers',
//       },
//       {
//         title: "3. Director's 360 Health Suite",
//         icon: <GiBurningBook className="text-xl text-amber-500" />,
//         descriptionTittle: 'Full Body Check + Cardiac Echo, Thyroid, Vitamin Panels, Oncological Markers, Specialist Consults (Cardio, Ortho)',
//         description: 'Ideal for: Senior leadership, directors',
//       },
//     ],
//   },
// ];

// const AccordionItem = ({ item, idx, openIndex, setOpenIndex }) => {
//   const isOpen = idx === openIndex;

//   return (
//     <div className="mb-3">
//       <button
//         onClick={() => setOpenIndex(isOpen ? null : idx)}
//         className="w-full flex justify-between items-center bg-teal-600 hover:bg-teal-700 text-white px-4 py-3 rounded-md text-left font-semibold transition-all"
//       >
//         <span className="flex items-center gap-2">
//           {item.icon}
//           {item.title}
//         </span>
//         <span>{isOpen ? <BiCollapse /> : <BiExpand />}</span>
//       </button>

//       <AnimatePresence initial={false}>
//         {isOpen && item.description && (
//           <motion.div
//             key="content"
//             initial={{ height: 0, opacity: 0 }}
//             animate={{ height: 'auto', opacity: 1 }}
//             exit={{ height: 0, opacity: 0 }}
//             transition={{ duration: 0.3 }}
//             className="overflow-hidden"
//           >
//             <div className="bg-teal-50 px-4 mt-4 text-[15px] font-semibold rounded-t-md shadow text-green-800">
//               {item.descriptionTittle}
//             </div>
//             <div className="bg-gray-50 px-4 py-3 font-semibold text-gray-800 text-sm whitespace-pre-line rounded-b-md shadow">
//               {item.description}
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// };

// const HealthPackagesAccordion = () => {
//   const [openIndexes, setOpenIndexes] = useState(data.map(() => 0));

//   useEffect(() => {
//     AOS.init({ duration: 800, once: true });
//   }, []);

//   return (
//     <section className="py-12 px-4">
//       <h2
//         className="text-3xl font-bold text-center mb-10"
//         data-aos="fade-up"
//       >
//         Health Check-up Packages for Hotel Teams
//       </h2>

//       <div className="grid md:grid-cols-3 gap-6 max-w-7xl mx-auto">
//         {data.map((group, groupIdx) => (
//           <div
//             key={groupIdx}
//             className="bg-white rounded-2xl shadow-lg p-6"
//             data-aos="zoom-in-up"
//             data-aos-delay={groupIdx * 100}
//           >
//             <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
//               {group.icon}
//               {group.title}
//             </h3>

//             {group.issues.map((issue, idx) => (
//               <AccordionItem
//                 key={idx}
//                 item={issue}
//                 idx={idx}
//                 openIndex={openIndexes[groupIdx]}
//                 setOpenIndex={(newIndex) => {
//                   const updated = [...openIndexes];
//                   updated[groupIdx] = newIndex;
//                   setOpenIndexes(updated);
//                 }}
//               />
//             ))}
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default HealthPackagesAccordion;