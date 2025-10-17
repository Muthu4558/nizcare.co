import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {
  FaHeartbeat,
  FaSmile,
  FaStar,
  FaShieldAlt,
  FaCubes,
  FaMapMarkedAlt,
  FaCogs,
  FaCheckCircle,
  FaChartLine,
  FaWallet,
  FaHandsHelping,
} from 'react-icons/fa';

// ---------------- DATA ----------------
const whatWillYouGain = [
  { icon: FaHeartbeat, title: 'Reduce Sick Days' },
  { icon: FaWallet, title: 'Cut Healthcare Costs' },
  { icon: FaSmile, title: 'Boost Morale and Retention' },
  { icon: FaStar, title: 'Enhance Company Reputation' },
  { icon: FaChartLine, title: 'Increase Productivity' },
  { icon: FaShieldAlt, title: 'Compliance Made Easy' },
  { icon: FaHandsHelping, title: 'Create a Positive Work Culture' },
];

const whyNizcare = [
  { icon: FaMapMarkedAlt, title: 'Preventive Power' },
  { icon: FaCogs, title: 'Smart Insights' },
  { icon: FaCheckCircle, title: 'Engagement Made Easy' },
  { icon: FaChartLine, title: 'Boost Productivity' },
  { icon: FaWallet, title: 'Seamless Onboarding' },
  { icon: FaCubes, title: 'Expert Access' },
  { icon: FaStar, title: 'Personalized Care' },
  { icon: FaStar, title: 'All-in-One Platform' },
  { icon: FaStar, title: 'Early Detection' },
  { icon: FaStar, title: 'Trusted & Proven' },
];

// ---------------- MAIN COMPONENT ----------------
const UniqueWhyNizcareSection = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  // Determine the maximum list length
  const maxItems = Math.max(whatWillYouGain.length, whyNizcare.length);

  return (
    <section className="py-20 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-stretch">
        {/* What Will You Gain */}
        <div
          data-aos="fade-right"
          className="flex flex-col justify-between bg-white rounded-2xl shadow-sm p-6 border border-slate-200"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-8 text-center md:text-left">
            What Will <span className="text-teal-600">You Gain?</span>
          </h2>
          <ul className={`grid gap-4`} style={{ gridTemplateRows: `repeat(${maxItems}, 1fr)` }}>
            {whatWillYouGain.map((item, idx) => {
              const Icon = item.icon;
              return (
                <li
                  key={idx}
                  className="flex items-center gap-3 p-3 rounded-xl border border-teal-500 bg-teal-50 hover:bg-teal-100 transition-all duration-300"
                >
                  <Icon className="text-teal-600 text-xl flex-shrink-0" />
                  <span className="font-medium text-slate-800">{item.title}</span>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Why Nizcare */}
        <div
          data-aos="fade-left"
          className="flex flex-col justify-between bg-white rounded-2xl shadow-sm p-6 border border-slate-200"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-8 text-center md:text-left">
            Why <span className="text-teal-600">Nizcare?</span>
          </h2>
          <ul className={`grid gap-4`} style={{ gridTemplateRows: `repeat(${maxItems}, 1fr)` }}>
            {whyNizcare.map((item, idx) => {
              const Icon = item.icon;
              return (
                <li
                  key={idx}
                  className="flex items-center gap-3 p-3 rounded-xl border border-teal-500 bg-teal-50 hover:bg-teal-100 transition-all duration-300"
                >
                  <Icon className="text-teal-600 text-xl flex-shrink-0" />
                  <span className="font-medium text-slate-800">{item.title}</span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default UniqueWhyNizcareSection;