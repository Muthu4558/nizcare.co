import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import HeroSection from '../components/Paper-sector/SectionHeader';
import PaperHealthChallenges from '../components/Paper-sector/PaperHealthChallenges';
import HealthPackagesAccordion from '../components/Paper-sector/HealthPackagesAccordion';
import WellnessPackages from '../components/Paper-sector/WellnessPackages';
import InHouseHealthcare from '../components/Paper-sector/InHouseHealthcare';
import WhatWillYouGain from '../components/Paper-sector/UniqueWhyNizcareSection';
import Footer from '../components/Paper-sector/Footer';
import BackgroundAnimation from '../components/BackgroundAnimation';
import Introduction from '../components/Paper-sector/introduction';
import NCDTopics from '../components/Paper-sector/NCDTopics';

const PaperSector = () => {
    const [loading, setLoading] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [formData, setFormData] = useState({
        companyName: '',
        hrName: '',
        hrSpocName: '',
        mobile: '',
        email: '',
        city: '',
        sector: '',
        usingWellness: '',
        employeeCount: '',
        expectedFeatures: '',
        anythingElse: ''
    });

    const sectorOptions = [
        'Cement',
        'Fertilizer',
        'Food processing',
        'Steel',
        'Pharma',
        'Hotels',
        'IT',
        'Banks',
        'Airlines',
        'Leather Industry',
        'Heavy industry',
        'Cottage',
        'Chemical',
        'Mining',
        'Textile',
        'Automobile',
        'ITES',
        'Aerospace & Defense',
        'Metals',
        'Petroleum Industry',
        'Telecommunication',
        'Ports, Shipping & Maritime',
        'Water Treatment & Sanitation Services',
        'Dairy & Livestock Industry',
        'Tourism & Travel',
        'Paper',
        'Real Estate Tech',
        'Sports Industry'
    ];

    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    const handleChange = (field, value) => {
        if (['companyName', 'hrName', 'hrSpocName', 'city'].includes(field)) {
            value = value.replace(/[^A-Za-z\s]/g, '');
        }
        if (field === 'mobile') {
            value = value.replace(/[^\d]/g, '').slice(0, 10);
        }
        if (field === 'employeeCount') {
            value = value.replace(/[^\d]/g, '');
        }
        setFormData(prev => ({ ...prev, [field]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const res = await fetch(`${import.meta.env.VITE_APP_BASE_URL}/api/company/submit`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });
            const data = await res.json();
            if (res.ok) {
                setIsSubmitted(true);
            } else {
                alert('Submission failed');
                console.error(data);
            }
        } catch (error) {
            console.error('Error submitting form:', error);
        } finally {
            setLoading(false);
        }
    };

    const ThankYouMessage = () => (
        <div className="flex flex-col justify-center items-center min-h-screen bg-gradient-to-br from-teal-200 to-green-100 px-6 text-center relative z-10">
            <h1 className="text-5xl font-bold mb-4">🎉 Thank you!</h1>
            <p className="text-lg">We will get in touch with you shortly.</p>
        </div>
    );

    if (isSubmitted) return <ThankYouMessage />;

    return (
        <div className="relative">
            {/* Full-page Background Animation */}
            <div className="fixed inset-0 -z-10">
                <BackgroundAnimation />
            </div>

            {/* Page Content */}
            <div className="relative z-10">
                <HeroSection />
                <Introduction />
                <WhatWillYouGain />
                <PaperHealthChallenges />
                <WellnessPackages />
                <HealthPackagesAccordion />
                <NCDTopics />
                <InHouseHealthcare />
                <Footer />
            </div>
        </div>
    );
};

export default PaperSector;