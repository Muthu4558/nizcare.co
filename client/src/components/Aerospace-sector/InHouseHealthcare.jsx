import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

import { FaUserNurse, FaHeartbeat, FaFirstAid } from 'react-icons/fa';
import { MdAssignmentInd, MdEmergency } from 'react-icons/md';
import { FiBarChart2 } from 'react-icons/fi';
import { GiMedicalPack } from 'react-icons/gi';

import AOS from 'aos';
import 'aos/dist/aos.css';

const features = [
    {
        title: 'Daily Health Monitoring',
        icon: <FaHeartbeat className="text-3xl text-sky-400" />,
    },
    {
        title: 'On-Site Nurse/Doctor',
        icon: <FaUserNurse className="text-3xl text-sky-400" />,
    },
    {
        title: 'First Aid & Minor Illnesses',
        icon: <FaFirstAid className="text-3xl text-sky-400" />,
    },
    {
        title: 'Pre-employment & Annual Checks',
        icon: <MdAssignmentInd className="text-3xl text-sky-400" />,
    },
    {
        title: 'Emergency Response Setup',
        icon: <MdEmergency className="text-3xl text-sky-400" />,
    },
    {
        title: 'Vaccination Drives & Screenings',
        icon: <GiMedicalPack className="text-3xl text-sky-400" />,
    },
];

const InHouseHealthcare = () => {
    useEffect(() => {
        AOS.init({ duration: 800, once: true });
    }, []);

    return (
        <section className="py-16 px-4 bg-gray-50">
            <div className="max-w-7xl mx-auto">
                {/* Banner */}
                <div
                    className="bg-teal-600 text-white rounded-2xl px-6 py-10 text-center shadow-lg mb-12"
                    data-aos="fade-up"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-2">
                        Bring Healthcare In-House with{' '}
                        <span className="text-yellow-400">Nizcare’s OHC</span>
                    </h2>
                    <p className="text-lg text-white/90 max-w-4xl mx-auto">
                        Empower your workplace with on-site medical care, wellness insights,
                        and proactive health solutions—all tailored for your team.
                    </p>
                </div>

                {/* Swiper Cards */}
                <Swiper
                    modules={[Autoplay]}
                    spaceBetween={20}
                    slidesPerView={1}
                    autoplay={{ delay: 2500, disableOnInteraction: false }}
                    loop={true}
                    breakpoints={{
                        640: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                        1280: { slidesPerView: 4 },
                    }}
                >
                    {features.map((item, index) => (
                        <SwiperSlide key={index} className="flex h-auto">
                            <div className="flex flex-col justify-between bg-white rounded-xl shadow-md p-4 text-center hover:shadow-2xl transition-all duration-300 w-full min-h-[110px] mb-5">
                                <div className="mb-3 flex justify-center">{item.icon}</div>
                                <p className="font-medium text-slate-800 text-sm leading-snug">
                                    {item.title}
                                </p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default InHouseHealthcare;