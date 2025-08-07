import AOS from 'aos';
import 'aos/dist/aos.css';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { BiCollapse, BiExpand } from 'react-icons/bi';
import {
  GiFactory,
  GiHealthNormal,
  GiChemicalDrop,
  GiMuscleUp,
  GiShield,
  GiBrain,
  GiMechanicalArm,
  GiWeightLiftingUp,
  GiDesk,
  GiComputerFan,
  GiHealthIncrease,
  GiHazmatSuit,
  GiVirus,
  GiDroplets,
  GiLifeBar,
  GiHeartBeats
} from "react-icons/gi";
import { FaTools, FaHandHoldingWater } from "react-icons/fa";
import { MdOutlineSupervisorAccount } from "react-icons/md";



const data = [
  {
  title: 'Plant Operators & Technicians',
  icon: <GiFactory className="text-xl text-black" />,
  issues: [
    {
      title: 'Basic Flow Scan',
      icon: <GiHealthNormal className="text-xl text-amber-400" />,
      descriptionTittle: 'All ground-level staff',
      description: 'Core Parameters: BP, CBC, Sugar, Urine Test, Chest X-Ray',
    },
    {
      title: 'Chemical Exposure Check',
      icon: <GiChemicalDrop className="text-xl text-amber-400" />,
      descriptionTittle: 'Chlorine handlers, shift workers',
      description: 'Core Parameters: Liver Function Test, Kidney Profile, Spirometry, Heavy Metal Panel',
    },
    {
      title: 'Fatigue & Muscle Panel',
      icon: <GiMuscleUp className="text-xl text-amber-400" />,
      descriptionTittle: 'High physical laborers',
      description: 'Core Parameters: Vitamin D, Calcium, ESR, ECG, Bone Density Scan',
    },
    {
      title: 'Comprehensive Safety Plus',
      icon: <GiShield className="text-xl text-amber-400" />,
      descriptionTittle: 'Long-tenured staff, supervisors',
      description: 'Core Parameters: All above + Audiometry, Eye Check, Full Physical Exam',
    },
  ],
},
{
  title: 'Maintenance & Engineers',
  icon: <FaTools className="text-xl text-black" />,
  issues: [
    {
      title: 'Core Wellness Kit',
      icon: <GiHealthNormal className="text-xl text-amber-400" />,
      descriptionTittle: 'Junior Technicians',
      description: 'Core Parameters: CBC, BP, Glucose, ECG',
    },
    {
      title: 'Stress & Hearing Panel',
      icon: <GiBrain className="text-xl text-amber-400" />,
      descriptionTittle: 'Machine operators',
      description: 'Core Parameters: Lipid Profile, Audiometry, Liver Tests, Thyroid, Stress Test',
    },
    {
      title: 'Tool-Time Wellness Pack',
      icon: <GiMechanicalArm className="text-xl text-amber-400" />,
      descriptionTittle: 'Welding/mechanical staff',
      description: 'Core Parameters: Eye Check, B12, D3, Nerve Conduction, Ergonomic Assessment',
    },
    {
      title: 'Heavy-Duty Health Pack',
      icon: <GiWeightLiftingUp className="text-xl text-amber-400" />,
      descriptionTittle: 'Senior/aging engineers',
      description: 'Core Parameters: Complete Cardiac Profile, Spirometry, Fitness Evaluation, Ortho Screening',
    },
  ],
},
{
  title: 'Admin & Supervisory Staff',
  icon: <MdOutlineSupervisorAccount className="text-xl text-black" />,
  issues: [
    {
      title: 'DeskFit Basic',
      icon: <GiDesk className="text-xl text-amber-400" />,
      descriptionTittle: 'Junior admin staff',
      description: 'Core Parameters: BP, Sugar, Lipid, Eye Check, BMI',
    },
    {
      title: 'Screen Stress Buster',
      icon: <GiComputerFan className="text-xl text-amber-400" />,
      descriptionTittle: 'Compliance & report staff',
      description: 'Core Parameters: Thyroid, Vitamin D, Liver Function, Eye & Spine Exam',
    },
    {
      title: 'Executive Wellness Scan',
      icon: <GiHeartBeats className="text-xl text-amber-400" />,
      descriptionTittle: 'Mid-level management',
      description: 'Core Parameters: Cardiac Test, Liver, Kidney, Diabetes, Vision, Neuro Check',
    },
    {
      title: 'Leadership Health360',
      icon: <GiHealthIncrease className="text-xl text-amber-400" />,
      descriptionTittle: 'Plant heads, senior officers',
      description: 'Core Parameters: Holistic Test Panel + Stress Management Counseling + Annual Wellness Plan',
    },
  ],
},
{
  title: 'Contract Workers & Sanitation Crew',
  icon: <GiHazmatSuit className="text-xl text-black" />,
  issues: [
    {
      title: 'Basic Hygiene Check',
      icon: <FaHandHoldingWater className="text-xl text-amber-400" />,
      descriptionTittle: 'Daily-wage sanitation crew',
      description: 'Core Parameters: CBC, Urine, BP, Stool Test',
    },
    {
      title: 'Infection Risk Panel',
      icon: <GiVirus className="text-xl text-amber-400" />,
      descriptionTittle: 'Tank/latrine cleaners',
      description: 'Core Parameters: Hepatitis, Typhoid, TB Screening, WBC count',
    },
    {
      title: 'Hydration & Nutrition Scan',
      icon: <GiDroplets className="text-xl text-amber-400" />,
      descriptionTittle: 'Long-shift workers',
      description: 'Core Parameters: Electrolytes, Vitamins, Hemoglobin, Physical Strength Assessment',
    },
    {
      title: 'Safety Net Plus',
      icon: <GiLifeBar className="text-xl text-amber-400" />,
      descriptionTittle: 'Contract staff with >1yr exp',
      description: 'Core Parameters: All above + Mental Health Screening + Vaccination Support',
    },
  ],
}
];

const AccordionItem = ({ item, idx, openIndex, setOpenIndex }) => {
  const isOpen = idx === openIndex;

  return (
    <div className="mb-3">
      <button
        onClick={() => setOpenIndex(isOpen ? null : idx)}
        className="w-full flex justify-between items-center bg-teal-600 hover:bg-teal-700 text-white px-4 py-3 rounded-md text-left font-semibold transition-all"
      >
        <span className="flex items-center gap-2">
          {item.icon}
          {item.title}
        </span>
        <span>{isOpen ? <BiCollapse /> : <BiExpand />}</span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && item.description && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="bg-teal-50 px-4 mt-4 text-[15px] font-semibold rounded-t-md shadow text-green-800">
              {item.descriptionTittle}
            </div>
            <div className="bg-gray-50 px-4 py-3 font-semibold text-gray-800 text-sm whitespace-pre-line rounded-b-md shadow">
              {item.description}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const HealthPackagesAccordion = () => {
  const [openIndexes, setOpenIndexes] = useState(data.map(() => 0));

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section className="py-12 px-4 bg-gray-50">
      <h2
        className="text-3xl font-bold text-center mb-10"
        data-aos="fade-up"
      >
        Health Packages Engineered for Every Level of Your Workforce
      </h2>

      <div className="grid md:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {data.map((group, groupIdx) => (
          <div
            key={groupIdx}
            className="bg-white rounded-2xl shadow-lg p-6"
            data-aos="zoom-in-up"
            data-aos-delay={groupIdx * 100}
          >
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              {group.icon}
              {group.title}
            </h3>

            {group.issues.map((issue, idx) => (
              <AccordionItem
                key={idx}
                item={issue}
                idx={idx}
                openIndex={openIndexes[groupIdx]}
                setOpenIndex={(newIndex) => {
                  const updated = [...openIndexes];
                  updated[groupIdx] = newIndex;
                  setOpenIndexes(updated);
                }}
              />
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export default HealthPackagesAccordion;