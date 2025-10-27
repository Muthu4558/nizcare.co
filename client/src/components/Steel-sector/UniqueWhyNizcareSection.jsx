import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaCheckCircle } from 'react-icons/fa';

// ---------------- DATA ----------------
const whatWillYouGain = [
  // {
  //   title: 'Fewer Sick Days',
  //   description: 'Consistent teams, smooth operations.',
  // },
  // {
  //   title: 'Lower Healthcare Costs',
  //   description: 'Healthier employees, lower claims.',
  // },
  // {
  //   title: 'Boost Morale & Retention',
  //   description: 'Engaged, satisfied, loyal workforce.',
  // },
  // {
  //   title: 'Stronger Employer Brand',
  //   description: 'Happy teams attract talent & trust.',
  // },
  // {
  //   title: 'Higher Productivity',
  //   description: 'Energized, focused, high-performing employees.',
  // },
  // {
  //   title: 'Simplified Compliance',
  //   description: 'Proactive programs, lower operational risk.',
  // },
  // {
  //   title: 'Positive Work Culture',
  //   description: 'Wellness-driven teamwork & connection.',
  // },
  {
    title: 'Reduced Costs',
    description: 'Preventive care reduces costly claims and lost productivity.',
  },
   {
    title: 'Improved Employee Retention',
    description: 'Support your employees well-being and strengthen their loyalty.',
  },
  {
    title: 'Enhanced Productivity',
    description: 'Healthy employees are more productive and efficient.',
  },
  {
    title: 'Data-Driven Insights',
    description: 'Our AI-driven platform provides actionable insights to inform your health strategy.',
  },
];


const whyNizcare = [
  // {
  //   title: 'Preventive Power',
  //   description:
  //     'On-site checkups, webinars, yoga, Zumba & stress sessions.',
  // },
  // {
  //   title: 'Smart Insights',
  //   description: 'Corporate health scorecards to catch risks early.',
  // },
  // {
  //   title: 'Engagement Made Easy',
  //   description: 'Monthly wellness programs for a motivated workforce.',
  // },
  // {
  //   title: 'Boost Productivity',
  //   description: 'Healthy employees = higher morale & lower absenteeism.',
  // },
  // {
  //   title: 'Seamless Onboarding',
  //   description: 'Effortless app & program integration for employees.',
  // },
  // {
  //   title: 'Expert Access',
  //   description: 'GP & specialist consultations anytime, anywhere.',
  // },
  // {
  //   title: 'Personalized Care',
  //   description: 'Tailored wellness journeys for each employee.',
  // },
  // {
  //   title: 'All-in-One Platform',
  //   description:
  //     'Records, reminders, teleconsultations, and preventive care.',
  // },
  {
    title: 'Risk Assessment',
    description: 'AI-driven assessments identify high-risk employees.',
  },
  {
    title: 'Personalized Care Plans',
    description: 'Tailored plans address specific health needs.',
  },
  {
    title: 'Wellness Platform',
    description: 'Integrated platform for seamless health engagement.',
  },
  {
    title: 'Continuous Monitoring',
    description: 'Ongoing support and monitoring for sustained health.',
  },
];

// ---------------- MAIN COMPONENT ----------------
const UniqueWhyNizcareSection = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section className="py-12 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-stretch">
        
        {/* Why Nizcare */}
        <div data-aos="fade-left" className='bg-white p-8 rounded-2xl shadow-lg'>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-8 text-center md:text-left">
            How Nizcare <span className="text-teal-600">Works</span>
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