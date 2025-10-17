import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaCheckCircle } from 'react-icons/fa';

// ---------------- DATA ----------------
const whatWillYouGain = [
  {
    title: 'Reduce Sick Days',
    description:
      'Lower absenteeism means consistent team availability, fewer disruptions, and greater productivity for the whole company.',
  },
  {
    title: 'Cut Healthcare Costs',
    description:
      'Healthier employees lead to fewer insurance claims and reduced corporate healthcare expenses—direct bottom-line savings.',
  },
  {
    title: 'Boost Morale and Retention',
    description:
      'A visible investment in wellness boosts engagement, satisfaction, and loyalty, making it easier to attract and retain talent.',
  },
  {
    title: 'Enhance Company Reputation',
    description:
      'Healthy, happy teams enhance your employer brand—attracting better candidates and client trust.',
  },
  {
    title: 'Increase Productivity',
    description:
      'Wellness initiatives improve physical and mental health, leading to higher focus, energy, and performance.',
  },
  {
    title: 'Compliance Made Easy',
    description:
      'Proactive health programs simplify workplace safety and legislative compliance, reducing operational risk.',
  },
  {
    title: 'Create a Positive Work Culture',
    description:
      'Holistic wellness fosters teamwork, connection, and care, supporting both wellbeing and business goals.',
  },
];

const whyNizcare = [
  {
    title: 'Preventive Power',
    description:
      'On-site checkups, webinars, yoga, Zumba & stress sessions.',
  },
  {
    title: 'Smart Insights',
    description: 'Corporate health scorecards to catch risks early.',
  },
  {
    title: 'Engagement Made Easy',
    description: 'Monthly wellness programs for a motivated workforce.',
  },
  {
    title: 'Boost Productivity',
    description: 'Healthy employees = higher morale & lower absenteeism.',
  },
  {
    title: 'Seamless Onboarding',
    description: 'Effortless app & program integration for employees.',
  },
  {
    title: 'Expert Access',
    description: 'GP & specialist consultations anytime, anywhere.',
  },
  {
    title: 'Personalized Care',
    description: 'Tailored wellness journeys for each employee.',
  },
  {
    title: 'All-in-One Platform',
    description:
      'Records, reminders, teleconsultations, and preventive care.',
  },
];

// ---------------- MAIN COMPONENT ----------------
const UniqueWhyNizcareSection = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section className="py-20 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-stretch">
        
        {/* Why Nizcare */}
        <div data-aos="fade-left" className='bg-white p-8 rounded-2xl shadow-lg'>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-8 text-center md:text-left">
            Why <span className="text-teal-600">Nizcare?</span>
          </h2>
          <ul className="space-y-6">
            {whyNizcare.map((item, idx) => (
              <li key={idx} className="flex gap-4">
                <FaCheckCircle className="text-teal-600 text-2xl flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-slate-900">{item.title}</h3>
                  <p className="text-slate-700 text-sm mt-1">{item.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* What Will You Gain */}
        <div data-aos="fade-right" className='bg-white p-8 rounded-2xl shadow-lg'>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-8 text-center md:text-left">
            What <span className="text-teal-600">You Gain?</span>
          </h2>
          <ul className="space-y-6">
            {whatWillYouGain.map((item, idx) => (
              <li key={idx} className="flex gap-4">
                <FaCheckCircle className="text-teal-600 text-2xl flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-slate-900">{item.title}</h3>
                  <p className="text-slate-700 text-sm mt-1">{item.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default UniqueWhyNizcareSection;