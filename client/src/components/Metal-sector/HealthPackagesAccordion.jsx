import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {
  GiFactory,
  GiHealthNormal,
  GiMuscleUp,
  GiChestArmor,
  GiHealing,
  GiElectric,
  GiBatteryPack,
  GiLifeSupport,
  GiHealthIncrease,
  GiChecklist,
  GiBrain,
  GiTie,
  GiBatteryPackAlt,
} from 'react-icons/gi';

const data = [
  {
    title: 'Shop Floor Workers',
    icon: <GiFactory className="text-xl text-black" />,
    issues: [
      {
        title: 'Iron Guard Basic',
        icon: <GiHealthNormal className="text-xl text-amber-400" />,
        descriptionTittle: 'Entry-level & daily labor',
        description:
          'BP, BMI, CBC',
      },
      {
        title: 'Iron Guard Basic',
        icon: <GiHealthNormal className="text-xl text-amber-400" />,
        descriptionTittle: 'Entry-level & daily labor',
        description:
          'Blood Sugar',
      },
      {
        title: 'Iron Guard Basic',
        icon: <GiHealthNormal className="text-xl text-amber-400" />,
        descriptionTittle: 'Entry-level & daily labor',
        description:
          'Audiometry',
      },
      {
        title: 'Iron Guard Basic',
        icon: <GiHealthNormal className="text-xl text-amber-400" />,
        descriptionTittle: 'Entry-level & daily labor',
        description:
          'Lung Function Test',
      },
      {
        title: 'Iron Guard Plus',
        icon: <GiMuscleUp className="text-xl text-amber-400" />,
        descriptionTittle: '2+ years service workers',
        description:
          'All Basic + ECG, Liver Profile, Kidney Profile',
      },
      {
        title: 'Iron Guard Premium',
        icon: <GiChestArmor className="text-xl text-amber-400" />,
        descriptionTittle: '5+ years or mid-senior operators',
        description:
          'All Plus + Chest X-Ray, Vitamin D, Eye Check-up',
      },
      {
        title: 'Iron Guard Elite',
        icon: <GiHealing className="text-xl text-amber-400" />,
        descriptionTittle: 'Senior/critical operators',
        description:
          'All Premium + Stress ECG, HBA1C, Urine Routine, TMT',
      },
    ],
  },
  {
    title: 'Maintenance & Utility Staff',
    icon: <GiElectric className="text-xl text-black" />,
    issues: [
      {
        title: 'Shield Basic',
        icon: <GiHealthNormal className="text-xl text-amber-400" />,
        descriptionTittle: 'Helpers, new joiners',
        description: 'CBC',
      },
      {
        title: 'Shield Basic',
        icon: <GiHealthNormal className="text-xl text-amber-400" />,
        descriptionTittle: 'Helpers, new joiners',
        description: 'Blood Sugar',
      },
      {
        title: 'Shield Basic',
        icon: <GiHealthNormal className="text-xl text-amber-400" />,
        descriptionTittle: 'Helpers, new joiners',
        description: 'Urine Routine',
      },
      {
        title: 'Shield Basic',
        icon: <GiHealthNormal className="text-xl text-amber-400" />,
        descriptionTittle: 'Helpers, new joiners',
        description: 'ECG',
      },
      {
        title: 'Shield Advanced',
        icon: <GiBatteryPack className="text-xl text-amber-400" />,
        descriptionTittle: 'Electricians, Fitters',
        description:
          'Basic + Kidney, Liver, Electrolytes, Chest X-Ray',
      },
      {
        title: 'Shield Complete',
        icon: <GiLifeSupport className="text-xl text-amber-400" />,
        descriptionTittle: 'Critical machine handlers',
        description:
          'Advanced + Stress Test, TMT, Vision & ENT',
      },
      {
        title: 'Shield Platinum',
        icon: <GiHealthIncrease className="text-xl text-amber-400" />,
        descriptionTittle: 'Experienced technical experts',
        description:
          'Complete + Full Body MRI/Ultrasound (as required)',
      },
    ],
  },
  {
    title: 'Supervisors & QC',
    icon: <GiChecklist className="text-xl text-black" />,
    issues: [
      {
        title: 'ProCare Basic',
        icon: <GiHealthNormal className="text-xl text-amber-400" />,
        descriptionTittle: 'Shift Leads',
        description: 'CBC, ECG, Blood Sugar, BP',
      },
      {
        title: 'ProCare Basic',
        icon: <GiHealthNormal className="text-xl text-amber-400" />,
        descriptionTittle: 'Shift Leads',
        description: 'ECG',
      },
      {
        title: 'ProCare Basic',
        icon: <GiHealthNormal className="text-xl text-amber-400" />,
        descriptionTittle: 'Shift Leads',
        description: 'Blood Sugar',
      },
      {
        title: 'ProCare Basic',
        icon: <GiHealthNormal className="text-xl text-amber-400" />,
        descriptionTittle: 'Shift Leads',
        description: 'BP',
      },
      {
        title: 'ProCare Pro',
        icon: <GiChestArmor className="text-xl text-amber-400" />,
        descriptionTittle: 'QC/Safety Officers',
        description:
          'Basic + Vision Test, Chest X-Ray, Lipid Profile',
      },
      {
        title: 'ProCare Executive',
        icon: <GiMuscleUp className="text-xl text-amber-400" />,
        descriptionTittle: 'Senior inspectors',
        description:
          'Pro + HBA1C, Liver, Kidney, Vitamin D, TSH',
      },
      {
        title: 'ProCare Supreme',
        icon: <GiBrain className="text-xl text-amber-400" />,
        descriptionTittle: 'Floor Managers',
        description:
          'Executive + TMT, Stress ECG, Lifestyle Screening',
      },
    ],
  },
  {
    title: 'Admin & Management',
    icon: <GiTie className="text-xl text-black" />,
    issues: [
      {
        title: 'SmartHealth Start',
        icon: <GiHealthNormal className="text-xl text-amber-400" />,
        descriptionTittle: 'All desk staff',
        description: 'BMI',
      },
      {
        title: 'SmartHealth Start',
        icon: <GiHealthNormal className="text-xl text-amber-400" />,
        descriptionTittle: 'All desk staff',
        description: 'CBC',
      },
      {
        title: 'SmartHealth Start',
        icon: <GiHealthNormal className="text-xl text-amber-400" />,
        descriptionTittle: 'All desk staff',
        description: 'Lipid',
      },
      {
        title: 'SmartHealth Start',
        icon: <GiHealthNormal className="text-xl text-amber-400" />,
        descriptionTittle: 'All desk staff',
        description: 'BP',
      },
      {
        title: 'SmartHealth Start',
        icon: <GiHealthNormal className="text-xl text-amber-400" />,
        descriptionTittle: 'All desk staff',
        description: 'Blood Sugar',
      },
      {
        title: 'SmartHealth Active',
        icon: <GiBatteryPackAlt className="text-xl text-amber-400" />,
        descriptionTittle: 'Mid-senior HR/Admin',
        description:
          'Start + ECG, Liver, Kidney, Thyroid',
      },
      {
        title: 'SmartHealth Prime',
        icon: <GiHealing className="text-xl text-amber-400" />,
        descriptionTittle: 'Managers & Heads',
        description:
          'Active + HBA1C, TMT, Vitamin D, Sleep Assessment',
      },
      {
        title: 'SmartHealth Platinum',
        icon: <GiBrain className="text-xl text-amber-400" />,
        descriptionTittle: 'Directors/CXOs',
        description:
          'Prime + Mental Health Assessment, Lifestyle Consultation',
      },
    ],
  },
];

const HealthPackagesGrid = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section className="py-12 px-4 bg-gray-50">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
        Precision <span className="text-teal-600">Health Packages</span>
      </h2>
      <p
        className="text-lg text-slate-500 mb-10 text-center max-w-2xl mx-auto"
        data-aos="fade-up"
      >
        Built for industrial excellence — tailored health check-ups for every
        role in the metal workforce.
      </p>

      <div
        className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto"
        data-aos="fade-up"
      >
        {data.map((group, idx) => (
          <div
            key={idx}
            className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100 flex flex-col h-[450px]"
          >
            <h3 className="text-xl font-semibold text-teal-600 mb-4 flex items-center gap-2">
              {group.icon}
              {group.title}
            </h3>

            <div className="overflow-y-auto pr-2 custom-scrollbar">
              <ul className="space-y-4">
                {group.issues.map((issue, i) => (
                  <li
                    key={i}
                    className="bg-teal-50 px-4 py-2 rounded-lg text-sm text-gray-800"
                  >
                    <div className="flex items-center gap-2 font-semibold text-teal-700">
                      {/* {issue.icon} */}
                      {/* {issue.title} */}
                    </div>
                    <p className="text-xs font-medium text-gray-600 mt-1">
                      {/* {issue.descriptionTittle} */}
                    </p>
                    <p className="text-xs text-gray-700 mt-1 leading-snug">
                      {issue.description}
                    </p>
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

// Custom scrollbar
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
