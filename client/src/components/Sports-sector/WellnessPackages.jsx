import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { BsCheckCircleFill } from 'react-icons/bs';
import { FaUserTie } from 'react-icons/fa';
import { GiCow, GiFarmTractor, GiStrongMan } from 'react-icons/gi';

const packages = [
  {
  title: 'For Athletes & Players',
  icon: <GiCow className="text-2xl text-orange-400" />,
  benefits: [
    'Strength & flexibility workshops',
    'Hydration & nutrition guidance',
    'Mental toughness and mindset coaching',
    'Cryotherapy & recovery sessions'
  ],
},
{
  title: 'For Coaches & Trainers',
  icon: <GiStrongMan className="text-2xl text-orange-400" />,
  benefits: [
    'Voice care and ergonomics training',
    'Preventive physiotherapy sessions',
    'Group meditation & stress relief sessions'
  ],
},
{
  title: 'For Support & Operational Staff',
  icon: <GiFarmTractor className="text-2xl text-orange-400" />,
  benefits: [
    'Back pain prevention workshops',
    'PPE training & hygiene awareness',
    'Healthy eating on shift training'
  ],
},
{
  title: 'For Admin & Management',
  icon: <FaUserTie className="text-2xl text-orange-400" />,
  benefits: [
    'Screen fatigue workshops',
    'Corporate yoga & stretching breaks',
    'Time management & burnout prevention'
  ],
},

];

const WellnessPackages = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section className="py-16 bg-white px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h2
          className="text-3xl md:text-4xl font-bold mb-2"
          data-aos="fade-up"
        >
          Wellness Boosters That Take Performance Beyond the Basics
        </h2>
        <p
          className="text-lg text-slate-500 mb-10"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Tailored wellness support from Nizcare for every role in your team.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {packages.map((pkg, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl shadow-md p-6 border-l-8 border-teal-600 transition-transform duration-300 hover:shadow-xl hover:scale-105"
              data-aos="zoom-in-up"
              data-aos-delay={idx * 150}
            >
              <h3 className="text-lg font-bold flex items-center gap-2 mb-4 text-slate-900">
                {pkg.icon}
                <span className="text-[1.1rem] text-orange-500 font-semibold">
                  {pkg.title}
                </span>
              </h3>
              <ul className="space-y-3">
                {pkg.benefits.map((benefit, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2 text-slate-800 font-medium leading-snug"
                  >
                    <BsCheckCircleFill className="text-teal-500 mt-1 shrink-0" />
                    <span className="text-left">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WellnessPackages;