import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";
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
  FaQuoteLeft,
} from "react-icons/fa";

const whatWillYouGain = [
  {
    icon: FaHeartbeat,
    title: "Reduce Sick Days",
    description: "Fewer absences, smoother operations, and happier guests.",
  },
  {
    icon: FaSmile,
    title: "Boost Morale & Retention",
    description:
      "Show your team you care—improve retention and workplace culture.",
  },
  {
    icon: FaStar,
    title: "Enhanced Reputation",
    description: "Healthier staff means better service and higher guest ratings.",
  },
  {
    icon: FaShieldAlt,
    title: "Compliance Made Easy",
    description: "Meet health and safety standards effortlessly.",
  },
  {
    icon: FaCubes,
    title: "All-in-One Solution",
    description: "From check-ups to wellness workshops, we handle it all.",
  },
];

const whyNizcare = [
  { icon: FaMapMarkedAlt, title: "Pan-India Coverage" },
  { icon: FaCogs, title: "Tailored Packages for All Roles" },
  { icon: FaCheckCircle, title: "Zero Admin Hassle" },
  { icon: FaChartLine, title: "Instant Digital Reports + HR Dashboard" },
  { icon: FaWallet, title: "Affordable Per-Employee Plans" },
];

const FancyCard = ({ icon: Icon, title, description, aos, delay }) => (
  <div
    className="group rounded-xl p-6 bg-white hover:bg-teal-50 shadow-md hover:shadow-xl transition-all duration-300 border border-slate-100 hover:border-teal-400 cursor-pointer"
    data-aos={aos}
    data-aos-delay={delay}
  >
    <div className="flex items-center justify-center w-14 h-14 rounded-full bg-teal-100 group-hover:bg-teal-500 mb-4 mx-auto transition-colors">
      <Icon className="text-teal-600 group-hover:text-white text-xl" />
    </div>
    <h3 className="text-center font-bold text-slate-800 text-lg mb-2">{title}</h3>
    {description && (
      <p className="text-sm text-center font-semibold text-slate-600 group-hover:text-slate-700 transition-all">
        {description}
      </p>
    )}
  </div>
);

const TestimonialCard = () => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    className="max-w-4xl mx-auto bg-gradient-to-r from-teal-50 via-white to-teal-50 shadow-xl rounded-3xl p-10 border border-slate-200 relative"
  >
    {/* Quote Icon */}
    <div className="absolute -top-6 left-8 bg-teal-500 text-white p-4 rounded-full shadow-lg">
      <FaQuoteLeft className="text-2xl" />
    </div>

    {/* Testimonial Content */}
    <h3 className="text-2xl font-extrabold text-teal-700 mb-6 text-center">
      Client Testimonial – IndiGo Airlines
    </h3>
    <p className="text-slate-700 text-lg leading-relaxed text-center italic mb-8">
      "Our partnership with Nizcare for conducting medicals for new hires has
      been a smooth experience. The HR team truly appreciates their prompt
      scheduling, seamless coordination, and reliable reporting. With minor
      enhancements in report turnaround time and proactive communication, we
      believe the process will become even more seamless. We value Nizcare’s
      continued support and look forward to strengthening this successful
      collaboration."
    </p>

    {/* Footer */}
    <div className="flex flex-col items-center">
      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-teal-400 to-teal-600 flex items-center justify-center text-white font-bold text-lg shadow-lg">
        NR
      </div>
      <p className="mt-4 font-semibold text-slate-900">
        Nitesh Reddy KS
      </p>
      <p className="text-sm text-slate-600">HR Team, IndiGo Airlines</p>
    </div>
  </motion.div>
);

const UniqueWhyNizcareSection = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto space-y-20">
        {/* What Will You Gain */}
        <div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-center text-slate-900 mb-10">
            What Will You Gain?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-8">
            {whatWillYouGain.map((item, idx) => (
              <FancyCard key={idx} {...item} aos="fade-up" delay={idx * 100} />
            ))}
          </div>
        </div>

        {/* Why Nizcare */}
        <div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-center text-slate-900 mb-10">
            Why Nizcare?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-8">
            {whyNizcare.map((item, idx) => (
              <FancyCard key={idx} {...item} aos="fade-up" delay={idx * 100} />
            ))}
          </div>
        </div>

        {/* Testimonial Section */}
        <TestimonialCard />
      </div>
    </section>
  );
};

export default UniqueWhyNizcareSection;