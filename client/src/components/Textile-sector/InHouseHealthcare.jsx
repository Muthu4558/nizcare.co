import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Doc from '../../assets/Aero-sector-img/doctor.png';
import Nurse from '../../assets/Aero-sector-img/nurse.png';
import Ambulance from '../../assets/Aero-sector-img/Ambulance.png';

const InHouseHealthcare = () => {
    useEffect(() => {
        AOS.init({
            duration: 800,
            once: true,
            easing: 'ease-in-out',
            offset: 100,
        });
    }, []);

    return (
        <section className="py-16 px-4">
            <div className="max-w-7xl mx-auto">
                {/* Banner with heading and intro */}
                <div
                    className="bg-teal-600 text-white rounded-2xl px-6 py-12 text-center shadow-lg"
                    data-aos="fade-up"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4" data-aos="fade-down">
                        Bring Healthcare In-House with{' '}
                        <span className="text-yellow-400">Nizcare’s OHC</span>
                    </h2>
                    <p className="text-lg text-white/90 max-w-4xl mx-auto mb-10" data-aos="fade-up" data-aos-delay="100">
                        Empower your workplace with on-site medical care, wellness insights,
                        and proactive health solutions—all tailored for your team.
                    </p>

                    {/* 3 Image Cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                        {[{ img: Ambulance, title: 'Ambulance' }, { img: Doc, title: 'Doctor' }, { img: Nurse, title: 'Nurse' }].map((card, idx) => (
                            <div
                                key={idx}
                                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
                                data-aos="fade-up"
                                data-aos-delay={200 + idx * 150} // stagger animation for cards
                            >
                                <img
                                    src={card.img}
                                    alt={card.title}
                                    className="w-full h-60 object-cover"
                                />
                                <div className="p-4">
                                    <h3 className="text-teal-700 font-semibold text-lg">
                                        {card.title}
                                    </h3>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Closing Message */}
                <div data-aos="fade-up" data-aos-delay="100" className="mt-16 text-center">
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                        Nizcare delivers the specialized health solutions that secure your textile factory's most valuable asset: its people. Partner with us to transform health risks into a foundation for sustained production and ethical excellence.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default InHouseHealthcare;


// old code

// import React, { useEffect } from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Autoplay } from 'swiper/modules';
// import 'swiper/css';

// import { FaUserNurse, FaHeartbeat, FaFirstAid } from 'react-icons/fa';
// import { MdAssignmentInd, MdEmergency } from 'react-icons/md';
// import { FiBarChart2 } from 'react-icons/fi';
// import { GiMedicalPack } from 'react-icons/gi';

// import AOS from 'aos';
// import 'aos/dist/aos.css';

// const features = [
//     {
//         title: 'Daily Health Monitoring',
//         icon: <FaHeartbeat className="text-3xl text-teal-600" />,
//     },
//     {
//         title: 'On-Site Nurse/Doctor',
//         icon: <FaUserNurse className="text-3xl text-teal-600" />,
//     },
//     {
//         title: 'First Aid & Minor Illnesses',
//         icon: <FaFirstAid className="text-3xl text-teal-600" />,
//     },
//     {
//         title: 'Pre-employment & Annual Checks',
//         icon: <MdAssignmentInd className="text-3xl text-teal-600" />,
//     },
//     {
//         title: 'Emergency Response Setup',
//         icon: <MdEmergency className="text-3xl text-teal-600" />,
//     },
//     {
//         title: 'Vaccination Drives & Screenings',
//         icon: <GiMedicalPack className="text-3xl text-teal-600" />,
//     },
// ];

// const InHouseHealthcare = () => {
//     useEffect(() => {
//         AOS.init({ duration: 800, once: true });
//     }, []);

//     return (
//         <section className="py-16 px-4">
//             <div className="max-w-7xl mx-auto">
//                 {/* Banner */}
//                 <div
//                     className="bg-teal-600 text-white rounded-2xl px-6 py-10 text-center shadow-lg mb-12"
//                     data-aos="fade-up"
//                 >
//                     <h2 className="text-3xl md:text-4xl font-bold mb-2">
//                         Bring Healthcare In-House with{' '}
//                         <span className="text-yellow-400">Nizcare’s OHC</span>
//                     </h2>
//                     <p className="text-lg text-white/90 max-w-4xl mx-auto">
//                         Empower your workplace with on-site medical care, wellness insights,
//                         and proactive health solutions—all tailored for your team.
//                     </p>
//                 </div>

//                 {/* Swiper Cards */}
//                 <Swiper
//                     modules={[Autoplay]}
//                     spaceBetween={20}
//                     slidesPerView={1}
//                     autoplay={{ delay: 2500, disableOnInteraction: false }}
//                     loop={true}
//                     breakpoints={{
//                         640: { slidesPerView: 2 },
//                         1024: { slidesPerView: 3 },
//                         1280: { slidesPerView: 4 },
//                     }}
//                 >
//                     {features.map((item, index) => (
//                         <SwiperSlide key={index} className="flex h-auto">
//                             <div className="flex flex-col justify-between bg-white rounded-xl shadow-md p-4 text-center hover:shadow-2xl transition-all duration-300 w-full min-h-[110px] mb-5">
//                                 <div className="mb-3 flex justify-center">{item.icon}</div>
//                                 <p className="font-medium text-slate-800 text-sm leading-snug">
//                                     {item.title}
//                                 </p>
//                             </div>
//                         </SwiperSlide>
//                     ))}
//                 </Swiper>
//             </div>

//             {/* Closing Message */}
//             <div data-aos="fade-up" className="mt-16 text-center">
//                 <p className="text-lg text-gray-600 max-w-3xl mx-auto">
//                     Nizcare delivers the precision and reliability required by the
//                     Aerospace sector. Partner with us to transform NCD risks into
//                     sustained business performance and safety compliance.
//                 </p>
//             </div>
//         </section>
//     );
// };

// export default InHouseHealthcare;