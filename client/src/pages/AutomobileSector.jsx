import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import HeroSection from '../components/Automobile-sector/SectionHeader';
import AutomobileHealthChallenges from '../components/Automobile-sector/AutomobileHealthChallenges';
import HealthPackagesAccordion from '../components/Automobile-sector/HealthPackagesAccordion';
import WellnessPackages from '../components/Automobile-sector/WellnessPackages';
import InHouseHealthcare from '../components/Automobile-sector/InHouseHealthcare';
import WhatWillYouGain from '../components/Automobile-sector/UniqueWhyNizcareSection';
import Footer from '../components/Automobile-sector/Footer';
import BackgroundAnimation from '../components/BackgroundAnimation';
import Introduction from '../components/Automobile-sector/introduction';
import NCDTopics from '../components/Automobile-sector/NCDTopics';

const AutomobileSector = () => {
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
      {/* 🌌 Animated Background */}
      <div className="fixed inset-0 -z-10">
        <BackgroundAnimation />
      </div>

      {/* 📘 Main Page Content */}
      <div className="relative z-10">
        <HeroSection />
        <Introduction />
        <WhatWillYouGain />
        <AutomobileHealthChallenges />
        <WellnessPackages />
        <HealthPackagesAccordion />
        <NCDTopics />
        <InHouseHealthcare />
        <Footer />
      </div>
    </div>
  );
};

export default AutomobileSector;