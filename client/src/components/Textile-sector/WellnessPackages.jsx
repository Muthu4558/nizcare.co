import React, { useEffect } from 'react';
import { BsCheckCircleFill } from 'react-icons/bs';
import { GiFurnace } from 'react-icons/gi';
import { FaToolbox } from 'react-icons/fa';
import { MdOutlineAdminPanelSettings } from 'react-icons/md';
import AOS from 'aos';
import 'aos/dist/aos.css';

// ✅ Images
import ProductionImg from '../../assets/Textile-sector-img/production.jpeg';
import DyeingImg from '../../assets/Textile-sector-img/dying.jpeg';
import AdminImg from '../../assets/Textile-sector-img/administrative.jpeg';

const packages = [
  {
    id: "01",
    title: "Production Floor Workers",
    icon: <GiFurnace className="text-white text-2xl" />,
    img: ProductionImg,
    benefits: [
      "On-floor stretching & mobility sessions",
      "Hydration challenge & awareness days",
      "Ergonomic workstation training",
      "Dust allergy prevention kits",
      "Pulse oximeter stations at shift change",
    ],
  },
  {
    id: "02",
    title: "Dyeing & Chemical Unit Workers",
    icon: <FaToolbox className="text-white text-2xl" />,
    img: DyeingImg,
    benefits: [
      "Chemical safety & skin protection workshops",
      "Mask usage training & lung health drives",
      "Stress-relief breathing sessions",
      "On-site hydration & cooling stations",
      "PPE compliance behavior nudges",
    ],
  },
  {
    id: "03",
    title: "Supervisors & Admin Staff",
    icon: <MdOutlineAdminPanelSettings className="text-white text-2xl" />,
    img: AdminImg,
    benefits: [
      "Digital detox and screen time wellness breaks",
      "Desk yoga & posture correction",
      "Stress and burnout prevention talks",
      "Mental wellness hotline access",
      "Lifestyle disease reversal sessions",
    ],
  },
];

const WellnessPackages = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: "ease-in-out",
      once: true,
      offset: 100,
    });
  }, []);

  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto text-center">
        {/* Heading */}
        <h2
          className="text-3xl md:text-4xl font-bold mb-6 text-slate-900"
          data-aos="fade-down"
        >
          Stronger Minds, Safer Hands – <span className="text-teal-600">Add-Ons That Matter</span>
        </h2>

        {/* Subtitle */}
        <p
          className="text-lg text-slate-500 mb-10"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Tailored wellness programs from Nizcare that keep every textile team role healthy, alert, and productive — from the loom floor to the admin office.
        </p>

        {/* Grid of Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className="group bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 relative"
              data-aos="fade-up"
              data-aos-delay={200 + index * 150}
            >
              {/* Image + Overlay */}
              <div className="relative overflow-hidden">
                <img
                  src={pkg.img}
                  alt={pkg.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Icon Box */}
                <div className="absolute top-4 left-4 bg-teal-600 text-white rounded-xl px-4 py-3 flex flex-col items-center justify-center shadow-md group-hover:shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <div>{pkg.icon}</div>
                  <p className="text-sm font-semibold mt-1">{pkg.id}</p>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6 text-left">
                <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-4 group-hover:text-teal-600 transition-colors">
                  {pkg.title}
                </h3>

                <ul className="space-y-3">
                  {pkg.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-start gap-2 text-gray-700">
                      <BsCheckCircleFill className="text-teal-500 mt-1 shrink-0 group-hover:animate-pulse" />
                      <span className="text-[15px] leading-snug">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WellnessPackages;