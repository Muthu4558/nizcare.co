// import React, { useEffect } from "react";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import { motion } from "framer-motion";
// import {
//   FaHeartbeat,
//   FaSmile,
//   FaStar,
//   FaShieldAlt,
//   FaCubes,
//   FaMapMarkedAlt,
//   FaCogs,
//   FaCheckCircle,
//   FaChartLine,
//   FaWallet,
//   FaQuoteLeft,
// } from "react-icons/fa";

// const whatWillYouGain = [
//   {
//     icon: FaHeartbeat,
//     title: "Reduce Sick Days",
//     description: "Fewer absences, smoother operations, and happier guests.",
//   },
//   {
//     icon: FaSmile,
//     title: "Boost Morale & Retention",
//     description:
//       "Show your team you care—improve retention and workplace culture.",
//   },
//   {
//     icon: FaStar,
//     title: "Enhanced Reputation",
//     description: "Healthier staff means better service and higher guest ratings.",
//   },
//   {
//     icon: FaShieldAlt,
//     title: "Compliance Made Easy",
//     description: "Meet health and safety standards effortlessly.",
//   },
//   {
//     icon: FaCubes,
//     title: "All-in-One Solution",
//     description: "From check-ups to wellness workshops, we handle it all.",
//   },
// ];

// const whyNizcare = [
//   { icon: FaMapMarkedAlt, title: "Pan-India Coverage" },
//   { icon: FaCogs, title: "Tailored Packages for All Roles" },
//   { icon: FaCheckCircle, title: "Zero Admin Hassle" },
//   { icon: FaChartLine, title: "Instant Digital Reports + HR Dashboard" },
//   { icon: FaWallet, title: "Affordable Per-Employee Plans" },
// ];

// const FancyCard = ({ icon: Icon, title, description, aos, delay }) => (
//   <div
//     className="group rounded-xl p-6 bg-white hover:bg-teal-50 shadow-md hover:shadow-xl transition-all duration-300 border border-slate-100 hover:border-teal-400 cursor-pointer"
//     data-aos={aos}
//     data-aos-delay={delay}
//   >
//     <div className="flex items-center justify-center w-14 h-14 rounded-full bg-teal-100 group-hover:bg-teal-500 mb-4 mx-auto transition-colors">
//       <Icon className="text-teal-600 group-hover:text-white text-xl" />
//     </div>
//     <h3 className="text-center font-bold text-slate-800 text-lg mb-2">{title}</h3>
//     {description && (
//       <p className="text-sm text-center font-semibold text-slate-600 group-hover:text-slate-700 transition-all">
//         {description}
//       </p>
//     )}
//   </div>
// );

// const TestimonialCard = () => (
//   <motion.div
//     initial={{ opacity: 0, y: 50 }}
//     animate={{ opacity: 1, y: 0 }}
//     transition={{ duration: 0.8 }}
//     className="max-w-4xl mx-auto bg-gradient-to-r from-teal-50 via-white to-teal-50 shadow-xl rounded-3xl p-10 border border-slate-200 relative"
//   >
//     {/* Quote Icon */}
//     <div className="absolute -top-6 left-8 bg-teal-500 text-white p-4 rounded-full shadow-lg">
//       <FaQuoteLeft className="text-2xl" />
//     </div>

//     {/* Testimonial Content */}
//     <h3 className="text-2xl font-extrabold text-teal-700 mb-6 text-center">
//       Client Testimonial – IndiGo Airlines
//     </h3>
//     <p className="text-slate-700 text-lg leading-relaxed text-center italic mb-8">
//       "Our partnership with Nizcare for conducting medicals for new hires has
//       been a smooth experience. The HR team truly appreciates their prompt
//       scheduling, seamless coordination, and reliable reporting. With minor
//       enhancements in report turnaround time and proactive communication, we
//       believe the process will become even more seamless. We value Nizcare’s
//       continued support and look forward to strengthening this successful
//       collaboration."
//     </p>

//     {/* Footer */}
//     <div className="flex flex-col items-center">
//       <div className="w-16 h-16 rounded-full bg-gradient-to-br from-teal-400 to-teal-600 flex items-center justify-center text-white font-bold text-lg shadow-lg">
//         NR
//       </div>
//       <p className="mt-4 font-semibold text-slate-900">
//         Nitesh Reddy KS
//       </p>
//       <p className="text-sm text-slate-600">HR Team, IndiGo Airlines</p>
//     </div>
//   </motion.div>
// );

// const UniqueWhyNizcareSection = () => {
//   useEffect(() => {
//     AOS.init({ duration: 800, once: true });
//   }, []);

//   return (
//     <section className="py-20 px-4 bg-gradient-to-b from-white to-slate-50">
//       <div className="max-w-7xl mx-auto space-y-20">
//         {/* What Will You Gain */}
//         <div>
//           <h2 className="text-3xl md:text-4xl font-extrabold text-center text-slate-900 mb-10">
//             What Will You Gain?
//           </h2>
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-8">
//             {whatWillYouGain.map((item, idx) => (
//               <FancyCard key={idx} {...item} aos="fade-up" delay={idx * 100} />
//             ))}
//           </div>
//         </div>

//         {/* Why Nizcare */}
//         <div>
//           <h2 className="text-3xl md:text-4xl font-extrabold text-center text-slate-900 mb-10">
//             Why Nizcare?
//           </h2>
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-8">
//             {whyNizcare.map((item, idx) => (
//               <FancyCard key={idx} {...item} aos="fade-up" delay={idx * 100} />
//             ))}
//           </div>
//         </div>

//         {/* Testimonial Section */}
//         <TestimonialCard />
//       </div>
//     </section>
//   );
// };

// export default UniqueWhyNizcareSection;




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