import AOS from 'aos';
import 'aos/dist/aos.css';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { BiCollapse, BiExpand } from 'react-icons/bi';
import { GiCow, GiStrongMan, GiFarmTractor, GiHealthNormal, GiChemicalDrop, GiWeightLiftingUp, GiStethoscope, GiSpinalCoil, GiBrain } from 'react-icons/gi';
import { FaUserTie } from 'react-icons/fa';

const data = [
  {
  title: 'For Athletes & Players',
  // icon: <GiCow className="text-xl text-black" />,
  issues: [
    {
      title: 'Basic Fitness Pulse',
      icon: <GiHealthNormal className="text-xl text-amber-400" />,
      descriptionTittle: 'Amateur players, early-stage athletes',
      description: 'BP, BMI, ECG, CBC',
    },
    {
      title: 'Core Performance Panel',
      icon: <GiSpinalCoil className="text-xl text-amber-400" />,
      descriptionTittle: 'Club players, semi-pro athletes',
      description: 'Vitamin D, Calcium, Creatine Kinase, Liver & Kidney profile',
    },
    {
      title: 'Elite Athlete Scan',
      icon: <GiChemicalDrop className="text-xl text-amber-400" />,
      descriptionTittle: 'Professional athletes',
      description: 'Cardiac Profile, VO2 Max, Hormonal Panel, MRI (if needed)',
    },
    {
      title: 'Injury Recovery Tracker',
      icon: <GiStethoscope className="text-xl text-amber-400" />,
      descriptionTittle: 'Players undergoing rehab or post-injury monitoring',
      description: 'X-ray, Bone Density, Inflammation Markers',
    },
  ],
},
{
  title: 'For Coaches & Trainers',
  // icon: <GiStrongMan className="text-xl text-black" />,
  issues: [
    {
      title: 'Fit Coach Check',
      icon: <GiHealthNormal className="text-xl text-amber-400" />,
      descriptionTittle: 'New fitness instructors',
      description: 'CBC, BP, ECG',
    },
    {
      title: 'Active Mind & Body',
      icon: <GiSpinalCoil className="text-xl text-amber-400" />,
      descriptionTittle: 'Senior trainers',
      description: 'Thyroid, Vitamin B12, Stress Profile',
    },
    {
      title: 'Functional Fitness Panel',
      icon: <GiWeightLiftingUp className="text-xl text-amber-400" />,
      descriptionTittle: 'Head coaches or physiotherapists',
      description: 'ECG, Lipid Profile, Joint Assessment',
    },
    {
      title: 'Coach Pro Care',
      icon: <GiStethoscope className="text-xl text-amber-400" />,
      descriptionTittle: 'Full-time coaching staff',
      description: 'Annual fitness screening with specialist review',
    },
  ],
},
{
  title: 'For Support & Operational Staff',
  // icon: <GiFarmTractor className="text-xl text-black" />,
  issues: [
    {
      title: 'Routine Health Check',
      icon: <GiHealthNormal className="text-xl text-amber-400" />,
      descriptionTittle: 'Ground or equipment staff',
      description: 'CBC, Sugar, BP',
    },
    {
      title: 'Outdoor Worker Safety Panel',
      icon: <GiSpinalCoil className="text-xl text-amber-400" />,
      descriptionTittle: 'Turf/ground crew',
      description: 'Vitamin D, Electrolytes, Skin Check',
    },
    {
      title: 'Strength & Bone Panel',
      icon: <GiChemicalDrop className="text-xl text-amber-400" />,
      descriptionTittle: 'Field support staff',
      description: 'Calcium, Bone Density, Joint Health',
    },
    {
      title: 'Full Body Screen',
      icon: <GiStethoscope className="text-xl text-amber-400" />,
      descriptionTittle: 'Maintenance heads',
      description: 'Comprehensive panel + physician consultation',
    },
  ],
},
{
  title: 'For Admin & Management',
  // icon: <FaUserTie className="text-xl text-black" />,
  issues: [
    {
      title: 'Wellness Starter',
      icon: <GiHealthNormal className="text-xl text-amber-400" />,
      descriptionTittle: 'Office executives',
      description: 'BP, Sugar, BMI',
    },
    {
      title: 'Desk Stress Relief Panel',
      icon: <GiSpinalCoil className="text-xl text-amber-400" />,
      descriptionTittle: 'Back-end & marketing teams',
      description: 'Thyroid, Vitamin D/B12, Lipid Profile',
    },
    {
      title: 'Executive Health Panel',
      icon: <GiBrain className="text-xl text-amber-400" />,
      descriptionTittle: 'Mid to senior-level executives',
      description: 'Liver, Kidney, Heart Risk Markers',
    },
    {
      title: 'Director’s Annual Screening',
      icon: <GiStethoscope className="text-xl text-amber-400" />,
      descriptionTittle: 'Top decision-makers',
      description: 'Premium full body + lifestyle consultation',
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
        From Baseline to Elite: Health Check-ups That Match Your Game
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