import React from 'react';
import { FaUserTie, FaUsersCog, FaUserNurse } from 'react-icons/fa';
import { GiCrown } from 'react-icons/gi';

const data = [
  {
    title: 'For Engineers & Designers',
    icon: <FaUserTie className="text-xl" />,
    issues: [
      { title: 'VisionPro', descriptionTittle: 'Eye exam' },
      { title: 'VisionPro', descriptionTittle: 'screen fatigue test' },
      { title: 'VisionPro', descriptionTittle: 'neurological assessment' },
      { title: 'PostureCare', descriptionTittle: 'Spine X-ray' },
      { title: 'PostureCare', descriptionTittle: 'neck/shoulder ultrasound' },
      { title: 'PostureCare', descriptionTittle: 'physio eval' },
      { title: 'BrainBoost', descriptionTittle: 'Vitamin B12/D3' },
      { title: 'BrainBoost', descriptionTittle: 'stress hormone panel' },
      { title: 'BrainBoost', descriptionTittle: 'sleep cycle check' },
      { title: 'Core360', descriptionTittle: 'Complete wellness panel + ECG + mental health screening' },
    ],
  },
  {
    title: 'For Manufacturing Workers',
    icon: <FaUsersCog className="text-xl" />,
    issues: [
      { title: 'AirGuard', descriptionTittle: 'Pulmonary function test' },
      { title: 'AirGuard', descriptionTittle: 'CBC' },
      { title: 'AirGuard', descriptionTittle: 'heavy metals panel' },
      { title: 'SoundSafe', descriptionTittle: 'Audiometry' },
      { title: 'SoundSafe', descriptionTittle: 'ENT check' },
      { title: 'SoundSafe', descriptionTittle: 'noise sensitivity test' },
      { title: 'BodyFit', descriptionTittle: 'Joint flexibility' },
      { title: 'BodyFit', descriptionTittle: 'ergonomic scan' },
      { title: 'BodyFit', descriptionTittle: 'physiotherapy review' },
      { title: 'VitaCheck Max', descriptionTittle: 'Annual master health check + preventive care consult' },
    ],
  },
  {
    title: 'For Field Operators',
    icon: <FaUserNurse className="text-xl" />,
    issues: [
      { title: 'ShiftShield', descriptionTittle: 'Thyroid panel' },
      { title: 'CortisolCheck', descriptionTittle: 'Cortisol level' },
      { title: 'FatigueMonitor', descriptionTittle: 'Fatigue index' },
      { title: 'MoveStrong', descriptionTittle: 'Ortho screening' },
      { title: 'MoveStrong', descriptionTittle: 'Gait analysis' },
      { title: 'MoveStrong', descriptionTittle: 'Vitamin D3' },
      { title: 'QuickRecover', descriptionTittle: 'Immunity markers' },
      { title: 'QuickRecover', descriptionTittle: 'inflammatory panel' },
      { title: 'QuickRecover', descriptionTittle: 'lifestyle coaching' },
      { title: 'PowerPilot', descriptionTittle: 'Master health + sleep lab + cardiac fitness' },
    ],
  },
  {
    title: 'For Admin & Strategic Staff',
    icon: <GiCrown className="text-xl" />,
    issues: [
      { title: 'DeskDefend', descriptionTittle: 'Diabetes' },
      { title: 'DeskDefend', descriptionTittle: 'cholesterol' },
      { title: 'DeskDefend', descriptionTittle: 'ECG' },
      { title: 'DeskDefend', descriptionTittle: 'liver profile' },
      { title: 'MindMatters', descriptionTittle: 'Mental health assessment' },
      { title: 'MindMatters', descriptionTittle: 'burnout scale' },
      { title: 'MindMatters', descriptionTittle: 'counseling' },
      { title: 'HeartWise', descriptionTittle: 'Cardiac stress test' },
      { title: 'HeartWise', descriptionTittle: 'lipid profile' },
      { title: 'LeadershipShield', descriptionTittle: 'Full executive health package + fitness plan' },
    ],
  },
];

const SimplifiedHealthPackages = () => {
  return (
    <section className="py-10 px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
       Recommended <span className='text-teal-600'>Health Check-ups</span>
      </h2>
      {/* <p
      className="text-lg text-slate-500 mb-4 text-center"
          data-aos="fade-up"
          data-aos-delay="100">
        <span>Engineered for Every Duty Level</span>
      </p> */}
      <p
          className="text-lg text-slate-500 mb-10 text-center"
          data-aos="fade-up"
          data-aos-delay="100"
        >
           Early Detection is Mission Control. We provide health check packages tailored to the specific risks of each job profile.
        </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
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
    <SimplifiedHealthPackages />
  </>
);

// Old code
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
//     title: 'For Engineers & Designers',
//     title1: '(Focus: Metabolic & Mental Health)',
//     icon: <FaUserTie className="text-xl text-black" />,
//     issues: [
//       {
//         title: 'VisionPro ',
//         icon: <GiPlantRoots className="text-xl text-amber-400" />,
//         descriptionTittle: 'Eye exam, screen fatigue test, neurological assessment',
//         description: 'All CAD engineers & visual design staff',
//       },
//       {
//         title: 'PostureCare',
//         icon: <GiHealthCapsule className="text-xl text-amber-400" />,
//         descriptionTittle: 'Spine X-ray, neck/shoulder ultrasound, physio eval',
//         description: 'Long-hour seated workers',
//       },
//       {
//         title: 'BrainBoost',
//         icon: <GiCrown className="text-xl text-amber-400" />,
//         descriptionTittle: 'Vitamin B12/D3, stress hormone panel, sleep cycle check',
//         description: 'Project-critical design teams',
//       },
//       {
//         title: 'Core360',
//         icon: <GiCrown className="text-xl text-amber-400" />,
//         descriptionTittle: 'Complete wellness panel + ECG + mental health screening',
//         description: 'Mid to senior engineering leaders',
//       },
//     ],
//   },
//   {
//     title: 'For Manufacturing Workers',
//     icon: <FaUsersCog className="text-xl text-black" />,
//     issues: [
//       {
//         title: 'AirGuard',
//         icon: <GiHealthNormal className="text-xl text-amber-400" />,
//         descriptionTittle : 'Pulmonary function test, CBC, heavy metals panel  ',
//         description: 'Workers in fumes/dust-prone areas',
//       },
//       {
//         title: 'SoundSafe',
//         icon: <GiStrong className="text-xl text-amber-400" />,
//         descriptionTittle : 'Audiometry, ENT check, noise sensitivity test ',
//         description: 'Factory floor & testing units',
//       },
//       {
//         title: 'BodyFit',
//         icon: <GiCrown className="text-xl text-amber-400" />,
//         descriptionTittle: 'Joint flexibility, ergonomic scan, physiotherapy review',
//         description: 'Assembly & manual handling teams',
//       },
//       {
//         title: 'VitaCheck Max',
//         icon: <GiCrown className="text-xl text-amber-400" />,
//         descriptionTittle: ' Annual master health check + preventive care consult',
//         description: 'Senior plant technicians',
//       },
//     ],
//   },
//   {
//     title: 'For Field Operators',
//     icon: <FaUserNurse className="text-xl text-black" />,
//     issues: [
//       {
//         title: 'ShiftShield ',
//         icon: <GiHealthNormal className="text-xl text-amber-400" />,
//         descriptionTittle: ' Thyroid panel, cortisol level, fatigue index',
//         description: 'Maintenance teams under rotating shifts',
//       },
//       {
//         title: 'MoveStrong',
//         icon: <GiCook className="text-xl text-amber-400" />,
//         descriptionTittle: 'Ortho screening, gait analysis, vitamin D3 ',
//         description: ' Field teams in high-motion jobs',
//       },
//       {
//         title: "QuickRecover",
//         icon: <GiBurningBook className="text-xl text-amber-500" />,
//         descriptionTittle: ' Immunity markers, inflammatory panel, lifestyle coaching ',
//         description: 'Travel-heavy tech support roles',
//       },
//       {
//         title: "PowerPilot",
//         icon: <GiBurningBook className="text-xl text-amber-500" />,
//         descriptionTittle: ' Master health + sleep lab + cardiac fitness',
//         description: ' Long-haul technical leaders',
//       },
//     ],
//   },
//    {
//     title: 'For Admin & Strategic Staff',
//     icon: <FaUserNurse className="text-xl text-black" />,
//     issues: [
//       {
//         title: 'DeskDefend',
//         icon: <GiHealthNormal className="text-xl text-amber-400" />,
//         descriptionTittle: 'Diabetes, cholesterol, ECG, liver profile ',
//         description: 'Desk-based senior staff',
//       },
//       {
//         title: 'MindMatters ',
//         icon: <GiCook className="text-xl text-amber-400" />,
//         descriptionTittle: 'Mental health assessment, burnout scale, counseling ',
//         description: 'HR & compliance officers',
//       },
//       {
//         title: "HeartWise",
//         icon: <GiBurningBook className="text-xl text-amber-500" />,
//         descriptionTittle: 'Cardiac stress test, lipid profile, ECG',
//         description: 'Executives & top command roles',
//       },
//       {
//         title: "LeadershipShield",
//         icon: <GiBurningBook className="text-xl text-amber-500" />,
//         descriptionTittle: 'Full executive health package + fitness plan',
//         description: 'CXOs and strategic heads',
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
//           {item.title1}
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
//         Health Check-ups Engineered for <span className='text-teal-600'>Every Duty Level</span>
//       </h2>
//       <p
//         className="text-lg text-slate-500 mb-10 text-center"
//           data-aos="fade-up"
//           data-aos-delay="100"
//       >
//          Early Detection is Mission Control. We provide NCD-focused health check packages tailored to the specific risks of each job profile.
//       </p>

//       <div className="grid md:grid-cols-4 gap-6 max-w-10xl mx-auto">
//         {data.map((group, groupIdx) => (
//           <div
//             key={groupIdx}
//             className="bg-white rounded-2xl shadow-lg p-6"
//             data-aos="zoom-in-up"
//             data-aos-delay={groupIdx * 100}
//           >
//             <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
//               {group.icon}
//               {group.title}
//             </h3>
//             <p className='text-center mb-2'>
//               <span className="text-sm text-slate-500">{group.title1}</span>
//             </p>

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