import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import AmbulanceImg from '../../assets/fertilizer-sector-img/ambulance.png';
import DoctorImg from '../../assets/fertilizer-sector-img/doc.png';
import ParamedicsImg from '../../assets/fertilizer-sector-img/para.png';
import DeviceImg from '../../assets/fertilizer-sector-img/medical-dev.png';

const InHouseHealthcare = () => {
    useEffect(() => {
        AOS.init({ duration: 800, once: true });
    }, []);

    const services = [
        {
            title: 'Ambulance',
            desc: '24/7 equipped ambulance service for emergencies at your hub or airport base.',
            img: AmbulanceImg,
        },
        {
            title: 'Doctor',
            desc: 'Experienced doctors available for consultation, diagnosis, and treatment.',
            img: DoctorImg,
        },
        {
            title: 'Paramedics',
            desc: 'Skilled paramedics providing rapid response and on-site medical care.',
            img: ParamedicsImg,
        },
        {
            title: 'Medical Device',
            desc: 'Advanced medical devices and equipment ensuring top-quality healthcare support.',
            img: DeviceImg,
        },
    ];

    return (
        <section className="py-16 px-4 bg-gray-50">
            <div className="max-w-7xl mx-auto">
                {/* Banner */}
                <div
                    className="bg-teal-600 text-white rounded-2xl px-6 py-10 text-center shadow-lg mb-12"
                    data-aos="fade-up"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-2">
                        Nizcare’s{' '}
                        <span className="text-yellow-400"> Occupational Health Centre (OHC)</span>
                        Offer
                    </h2>
                    <p className="text-lg text-white/90 max-w-4xl mx-auto">
                        Nizcare establishes industry-relevant Occupational Health Centres (OHC) at your hub or airport base. These centers provide,
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="relative rounded-2xl overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-2 transition transform"
                            data-aos="zoom-in"
                            data-aos-delay={index * 150}
                        >
                            <img
                                src={service.img}
                                alt={service.title}
                                className="w-full h-64 object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent flex flex-col justify-end p-4 text-white">
                                <h3 className="text-xl font-semibold mb-2 text-teal-500">{service.title}</h3>
                                <p className="text-sm text-gray-200">{service.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default InHouseHealthcare;