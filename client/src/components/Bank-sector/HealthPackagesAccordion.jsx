import React, { useEffect } from 'react';
import {
  GiHealthNormal,
  GiShield,
  GiHealthIncrease,
  GiStethoscope,
  GiBank,
  GiComputerFan,
  GiBrain,
  GiStarMedal,
  GiRunningNinja,
  GiPathDistance,
} from 'react-icons/gi';
import { FaBusinessTime } from 'react-icons/fa';
import { MdOutlineWork } from 'react-icons/md';
import AOS from 'aos';
import 'aos/dist/aos.css';

const data = [
  {
    title: 'Branch-Level Operations',
    icon: <GiBank className="text-xl text-black" />,
    issues: [
      {
        title: 'Smart Shield',
        icon: <GiHealthNormal className="text-lg text-amber-500" />,
        descriptionTittle: 'BP, BMI, CBC, RBS',
        description: 'Cashiers, Tellers, Sales Reps',
      },
      {
        title: 'Smart Shield',
        icon: <GiHealthNormal className="text-lg text-amber-500" />,
        descriptionTittle: 'Eye Check',
        description: 'Cashiers, Tellers, Sales Reps',
      },
      {
        title: 'DeskCare Plus',
        icon: <GiStethoscope className="text-lg text-amber-500" />,
        descriptionTittle: 'ECG, LFT',
        description: 'Senior Front Office',
      },
      {
        title: 'DeskCare Plus',
        icon: <GiStethoscope className="text-lg text-amber-500" />,
        descriptionTittle: 'Lipid Profile',
        description: 'Senior Front Office',
      },
      {
        title: 'DeskCare Plus',
        icon: <GiStethoscope className="text-lg text-amber-500" />,
        descriptionTittle: 'Vitamin D',
        description: 'Senior Front Office',
      },
      {
        title: 'DeskCare Plus',
        icon: <GiStethoscope className="text-lg text-amber-500" />,
        descriptionTittle: 'HbA1c',
        description: 'Senior Front Office',
      },
      {
        title: 'Prime Wellness Pro',
        icon: <GiHealthIncrease className="text-lg text-amber-500" />,
        descriptionTittle: 'TMT',
        description: 'Branch Managers & Team Leads',
      },
      {
        title: 'Prime Wellness Pro',
        icon: <GiHealthIncrease className="text-lg text-amber-500" />,
        descriptionTittle: 'Kidney Profile',
        description: 'Branch Managers & Team Leads',
      },
      {
        title: 'Prime Wellness Pro',
        icon: <GiHealthIncrease className="text-lg text-amber-500" />,
        descriptionTittle: 'Liver Function',
        description: 'Branch Managers & Team Leads',
      },
      {
        title: 'Prime Wellness Pro',
        icon: <GiHealthIncrease className="text-lg text-amber-500" />,
        descriptionTittle: 'Stress ECG',
        description: 'Branch Managers & Team Leads',
      },
      {
        title: 'Prime Wellness Pro',
        icon: <GiHealthIncrease className="text-lg text-amber-500" />,
        descriptionTittle: 'Eye OCT',
        description: 'Branch Managers & Team Leads',
      },
    ],
  },
  {
    title: 'Corporate & IT Staff',
    icon: <MdOutlineWork className="text-xl text-black" />,
    issues: [
      {
        title: 'ScreenSafe Basic',
        icon: <GiComputerFan className="text-lg text-amber-500" />,
        descriptionTittle: 'CBC, FBS, LFT',
        description: 'Entry-Level Analysts',
      },
      {
        title: 'ScreenSafe Basic',
        icon: <GiComputerFan className="text-lg text-amber-500" />,
        descriptionTittle: 'Eye Check',
        description: 'Entry-Level Analysts',
      },
      {
        title: 'ScreenSafe Basic',
        icon: <GiComputerFan className="text-lg text-amber-500" />,
        descriptionTittle: 'ECG',
        description: 'Entry-Level Analysts',
      },
      {
        title: 'Stress Buster Elite',
        icon: <GiBrain className="text-lg text-amber-500" />,
        descriptionTittle: 'TSH',
        description: 'Mid-level Management',
      },
      {
        title: 'Stress Buster Elite',
        icon: <GiBrain className="text-lg text-amber-500" />,
        descriptionTittle: 'Lipid',
        description: 'Mid-level Management',
      },
      {
        title: 'Stress Buster Elite',
        icon: <GiBrain className="text-lg text-amber-500" />,
        descriptionTittle: 'HbA1c',
        description: 'Mid-level Management',
      },
      {
        title: 'Stress Buster Elite',
        icon: <GiBrain className="text-lg text-amber-500" />,
        descriptionTittle: 'Vitamin B12/D',
        description: 'Mid-level Management',
      },
      {
        title: 'Stress Buster Elite',
        icon: <GiBrain className="text-lg text-amber-500" />,
        descriptionTittle: 'Liver Panel',
        description: 'Mid-level Management',
      },
      {
        title: 'Stress Buster Elite',
        icon: <GiBrain className="text-lg text-amber-500" />,
        descriptionTittle: 'Mental Wellness Survey',
        description: 'Mid-level Management',
      },
      {
        title: 'ExecCare Premium',
        icon: <GiStarMedal className="text-lg text-amber-500" />,
        descriptionTittle: 'TMT',
        description: 'CXOs, Senior Managers',
      },
      {
        title: 'ExecCare Premium',
        icon: <GiStarMedal className="text-lg text-amber-500" />,
        descriptionTittle: 'Cardiac Markers',
        description: 'CXOs, Senior Managers',
      },
      {
        title: 'ExecCare Premium',
        icon: <GiStarMedal className="text-lg text-amber-500" />,
        descriptionTittle: 'Kidney/Liver Panel, Thyroid',
        description: 'CXOs, Senior Managers',
      },
      {
        title: 'ExecCare Premium',
        icon: <GiStarMedal className="text-lg text-amber-500" />,
        descriptionTittle: 'Mental Health Eval',
        description: 'CXOs, Senior Managers',
      },
    ],
  },
  {
    title: 'Field & Marketing Force',
    icon: <FaBusinessTime className="text-xl text-black" />,
    issues: [
      {
        title: 'FieldFit Starter',
        icon: <GiRunningNinja className="text-lg text-amber-500" />,
        descriptionTittle: 'BP, CBC',
        description: 'Sales Trainees, Interns',
      },
      {
        title: 'FieldFit Starter',
        icon: <GiRunningNinja className="text-lg text-amber-500" />,
        descriptionTittle: 'Vitamin D',
        description: 'Sales Trainees, Interns',
      },
      {
        title: 'FieldFit Starter',
        icon: <GiRunningNinja className="text-lg text-amber-500" />,
        descriptionTittle: 'Eye Test',
        description: 'Sales Trainees, Interns',
      },
      {
        title: 'FieldFit Starter',
        icon: <GiRunningNinja className="text-lg text-amber-500" />,
        descriptionTittle: 'Random Sugar',
        description: 'Sales Trainees, Interns',
      },
      {
        title: 'RoadSafe Plus',
        icon: <GiPathDistance className="text-lg text-amber-500" />,
        descriptionTittle: 'Lipid Profile, HbA1c',
        description: 'Executives & Field Staff',
      },
      {
        title: 'RoadSafe Plus',
        icon: <GiPathDistance className="text-lg text-amber-500" />,
        descriptionTittle: 'ECG',
        description: 'Executives & Field Staff',
      },
      {
        title: 'RoadSafe Plus',
        icon: <GiPathDistance className="text-lg text-amber-500" />,
        descriptionTittle: 'ECG',
        description: 'Executives & Field Staff',
      },
      {
        title: 'RoadSafe Plus',
        icon: <GiPathDistance className="text-lg text-amber-500" />,
        descriptionTittle: 'Vision',
        description: 'Executives & Field Staff',
      },
      {
        title: 'RoadSafe Plus',
        icon: <GiPathDistance className="text-lg text-amber-500" />,
        descriptionTittle: 'Ortho Screening',
        description: 'Executives & Field Staff',
      },
      {
        title: 'TotalShield Max',
        icon: <GiShield className="text-lg text-amber-500" />,
        descriptionTittle: 'TMT',
        description: 'Regional Managers, Seniors',
      },
      {
        title: 'TotalShield Max',
        icon: <GiShield className="text-lg text-amber-500" />,
        descriptionTittle: 'Cardiac Risk Markers',
        description: 'Regional Managers, Seniors',
      },
      {
        title: 'TotalShield Max',
        icon: <GiShield className="text-lg text-amber-500" />,
        descriptionTittle: 'Liver/Kidney',
        description: 'Regional Managers, Seniors',
      },
      {
        title: 'TotalShield Max',
        icon: <GiShield className="text-lg text-amber-500" />,
        descriptionTittle: 'X-Ray',
        description: 'Regional Managers, Seniors',
      },
      {
        title: 'TotalShield Max',
        icon: <GiShield className="text-lg text-amber-500" />,
        descriptionTittle: 'Fatigue Index',
        description: 'Regional Managers, Seniors',
      },
    ],
  },
];

const HealthPackagesGrid = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section className="py-12 px-4">
      <h2
        className="text-3xl md:text-4xl font-bold text-center mb-10"
        data-aos="fade-up"
      >
        Tiered <span className="text-teal-600">Health Check-ups</span> Built for the Banking Backbone
      </h2>

      <p
        className="text-lg text-slate-500 mb-10 text-center max-w-3xl mx-auto"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        From tellers to top management — discover health packages customized for every responsibility tier.
      </p>

      <div
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        {data.map((group, idx) => (
          <div
            key={idx}
            className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100 flex flex-col h-[420px]"
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
                    className="bg-teal-50 px-4 py-3 rounded-lg text-sm text-gray-800 shadow-sm border border-teal-100"
                  >
                    <div className="flex items-center gap-2 mb-1 font-medium">
                      {/* {issue.icon} */}
                      {/* <span>{issue.title}</span> */}
                    </div>
                    <div className="text-gray-700 text-[13px] leading-snug">
                      {issue.descriptionTittle}
                      {/* <br /> */}
                      {/* <strong>For:</strong> {issue.description} */}
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
    <HealthPackagesGrid />
  </>
);