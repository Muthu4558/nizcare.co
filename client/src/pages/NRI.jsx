import React, { useState, useRef } from "react";
import toast from "react-hot-toast";
import {
  FiUser,
  FiMail,
  FiPhone,
  FiGlobe,
  FiBriefcase,
  FiUsers,
  FiStar,
  FiTrendingUp,
  FiTool,
  FiGift,
  FiChevronDown
} from "react-icons/fi";
import { FaLinkedinIn, FaInstagram, FaGlobe } from "react-icons/fa";
import { ShieldCheck, Globe2, LayoutDashboard, Building } from "lucide-react";
import { HeartPulse, AlertTriangle, Handshake, Eye } from "lucide-react";
import { Users, Plane, Stethoscope, Building2 } from "lucide-react";
import { DollarSign, Globe, UserCheck, Award, BookOpen, Calendar, BarChart2 } from "lucide-react";
import { Heart, Home, Monitor, Briefcase } from "lucide-react";
import { BarChart } from "lucide-react";
import Logo from "../assets/logo.png";
import BackgroundAnimation from "../components/BackgroundAnimation.jsx";

const NRI = () => {
  const [countryDropdownOpen, setCountryDropdownOpen] = useState(false);

  const [form, setForm] = useState({
    fullName: "",
    email: "",
    whatsapp: "",
    currentCountry: "",
    profession: "",
    workWithCommunities: "",
    promoteNizcare: "",
    expectedReach: "",
  });

  const [errors, setErrors] = useState({});

  // References to focus first invalid input
  const refs = {
    fullName: useRef(),
    email: useRef(),
    whatsapp: useRef(),
    currentCountry: useRef(),
    profession: useRef(),
    workWithCommunities: useRef(),
    promoteNizcare: useRef(),
    expectedReach: useRef(),
  };

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  // ---------------- VALIDATION FUNCTION ---------------- //
  const validateForm = () => {
    let newErrors = {};

    if (!form.fullName.trim())
      newErrors.fullName = "Full name is required";
    else if (!/^[A-Za-z\s]+$/.test(form.fullName))
      newErrors.fullName = "Only alphabets allowed";

    if (!form.email.trim()) newErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      newErrors.email = "Enter a valid email";

    if (!form.currentCountry.trim())
      newErrors.currentCountry = "Country selection is required";

    if (!form.whatsapp.trim())
      newErrors.whatsapp = "WhatsApp number is required";
    else if (!/^[0-9]+$/.test(form.whatsapp))
      newErrors.whatsapp = "Only numbers allowed";

    if (!form.profession.trim())
      newErrors.profession = "Profession is required";

    if (!form.workWithCommunities.trim())
      newErrors.workWithCommunities = "Please select an option";

    if (!form.promoteNizcare.trim())
      newErrors.promoteNizcare = "Please select an option";

    if (!form.expectedReach.trim())
      newErrors.expectedReach = "Expected reach is required";
    else if (!/^[0-9]+$/.test(form.expectedReach))
      newErrors.expectedReach = "Only numbers allowed";


    setErrors(newErrors);

    // Focus first invalid field
    const keys = Object.keys(newErrors);
    if (keys.length > 0) {
      const firstErrorKey = keys[0];
      refs[firstErrorKey]?.current?.focus();
      return false;
    }

    return true;
  };

  // ---------------- FORM SUBMIT ---------------- //
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    try {
      const res = await fetch(
        `${import.meta.env.VITE_APP_BASE_URL}/api/nri/submit`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(form),
        }
      );

      const data = await res.json();

      if (data.form) {
        toast.success("Form submitted");
        setForm({
          fullName: "",
          email: "",
          whatsapp: "",
          currentCountry: "",
          profession: "",
          workWithCommunities: "",
          promoteNizcare: "",
          expectedReach: "",
        });
      }
    } catch {
      toast.error("Submission failed");
    }
  };

  const countryList = [
    { name: "Saudi Arabia", src: "/flags/saudi.png" },
    { name: "UAE", src: "/flags/uae.png" },
    { name: "Singapore", src: "/flags/singapore.png" },
    { name: "Sri Lanka", src: "/flags/srilanka.png" },
    { name: "Malaysia", src: "/flags/malaysia.png" },
    { name: "USA", src: "/flags/usa.png" },
    { name: "UK", src: "/flags/uk.png" },
    { name: "Canada", src: "/flags/canada.png" },
    { name: "Australia", src: "/flags/australia.png" },
    { name: "Germany", src: "/flags/germany.png" },
    { name: "Kuwait", src: "/flags/kuwait.png" },
    { name: "New Zealand", src: "/flags/new-zealand.png" },
    { name: "Oman", src: "/flags/oman.png" },
    { name: "Qatar", src: "/flags/qatar.png" },
    { name: "South Africa", src: "/flags/south-africa.png" },
    { name: "Switzerland", src: "/flags/switzerland.png" },
  ];
  return (
    <div className="relative">
      {/* Full-page Background Animation */}
      <div className="fixed inset-0 -z-10">
        <BackgroundAnimation />
      </div>

      <div className="w-full relative z-10">

        <img
          src={Logo}
          alt="Logo"
          className="absolute top-4 right-4 md:right-auto md:left-4 w-24 sm:w-28 md:w-40 z-10"
          data-aos="fade-down"
          data-aos-delay="200"
        />
        {/* HERO SECTION */}
        <section
          className="flex flex-col-reverse md:flex-row items-start md:items-center mx-auto px-6 md:px-20 py-10 gap-8 md:gap-10"
          style={{
            backgroundImage: "url('/bg.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundAttachment: "scroll",
          }}
        >

          {/* LEFT CONTENT */}
          <div className="w-full md:w-1/2 mt-12">

            {/* Flags Grid */}
            <div className="grid grid-cols-3 sm:grid-cols-4 gap-6 opacity-0">

              {/* Example Flag Item */}
              {[
                { src: "/flags/saudi.png", name: "Saudi Arabia" },
                { src: "/flags/uae.png", name: "UAE" },
                { src: "/flags/singapore.png", name: "Singapore" },
                { src: "/flags/srilanka.png", name: "Sri Lanka" },
                { src: "/flags/malaysia.png", name: "Malaysia" },
                { src: "/flags/usa.png", name: "USA" },
                { src: "/flags/uk.png", name: "UK" },
                { src: "/flags/canada.png", name: "Canada" },
                { src: "/flags/australia.png", name: "Australia" },
                { src: "/flags/germany.png", name: "Germany" },
                { src: "/flags/kuwait.png", name: "Kuwait" },
                { src: "/flags/new-zealand.png", name: "New Zealand" },
                { src: "/flags/oman.png", name: "Oman" },
                { src: "/flags/qatar.png", name: "Qatar" },
                // { src: "/flags/south-africa.png", name: "South Africa" },
                // { src: "/flags/switzerland.png", name: "Switzerland" },
              ].map((flag, i) => (
                <div key={i} className="flex flex-col items-center space-y-2">
                  <img
                    src={flag.src}
                    alt={flag.name}
                    className="w-20 h-20 sm:w-24 sm:h-24 object-cover rounded-full shadow"
                  />
                  <p className="text-sm text-gray-700 text-center">{flag.name}</p>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT — FORM */}
          <div className="relative w-full md:w-1/2 flex justify-center md:justify-end mt-80 md:mt-4">
            <form
              onSubmit={handleSubmit}
              className="absolute w-full max-w-xl sm:max-w-md md:max-w-lg bg-white backdrop-blur-xl shadow-2xl rounded-3xl p-6 sm:p-8 md:p-10 border border-white/30"
            >
              <h2 className="text-2xl font-bold text-center text-gray-800 mb-6 sm:mb-8">
                Partner <span className="text-teal-600">Registration</span>
              </h2>

              <div className="space-y-4 sm:space-y-5">

                {/* NAME + EMAIL */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                  {/* Full Name */}
                  <div className="relative">
                    <div className="absolute top-4 left-3 text-gray-400">
                      <FiUser />
                    </div>
                    <input
                      name="fullName"
                      value={form.fullName}
                      onChange={(e) => {
                        const value = e.target.value;
                        if (/^[A-Za-z\s]*$/.test(value)) {
                          handleChange(e);
                        }
                      }}
                      placeholder="Full Name"
                      className="w-full pl-10 p-3 rounded-xl border focus:ring-2 focus:ring-teal-500 outline-none text-sm sm:text-base"
                    />

                  </div>

                  {/* Email */}
                  <div className="relative">
                    <div className="absolute top-4 left-3 text-gray-400">
                      <FiMail />
                    </div>
                    <input
                      ref={refs.email}
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="Email"
                      className={`w-full pl-10 p-3 rounded-xl border text-sm sm:text-base 
                        ${errors.email ? "border-red-500" : ""}`}
                    />
                    {errors.email && (
                      <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                    )}
                  </div>

                </div>

                {/* COUNTRY + WHATSAPP */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                  {/* Country */}
                  <div className="relative">
                    <button
                      ref={refs.currentCountry}
                      type="button"
                      className={`w-full pl-3 pr-4 py-3 rounded-xl border bg-white flex items-center justify-between text-sm 
                        ${errors.currentCountry ? "border-red-500" : ""}`}
                      onClick={() => setCountryDropdownOpen(!countryDropdownOpen)}
                    >
                      <div className="flex items-center gap-2">
                        {form.currentCountry ? (
                          <img
                            src={
                              countryList.find((c) => c.name === form.currentCountry)?.src
                            }
                            alt={form.currentCountry}
                            className="w-6 h-6 rounded-full object-cover"
                          />
                        ) : (
                          <FiGlobe className="text-gray-400" />
                        )}
                        <span>{form.currentCountry || "Select Country"}</span>
                      </div>

                      <FiChevronDown />
                    </button>

                    {countryDropdownOpen && (
                      <div className="absolute z-20 mt-1 w-full bg-white border rounded-xl shadow-lg max-h-64 overflow-y-auto">
                        {countryList.map((country, idx) => (
                          <div
                            key={idx}
                            className="flex items-center gap-2 px-4 py-2 hover:bg-teal-50 cursor-pointer"
                            onClick={() => {
                              handleChange({
                                target: {
                                  name: "currentCountry",
                                  value: country.name,
                                },
                              });
                              setCountryDropdownOpen(false);
                            }}
                          >
                            <img
                              src={country.src}
                              alt={country.name}
                              className="w-6 h-6 rounded-full object-cover"
                            />
                            <span>{country.name}</span>
                          </div>
                        ))}
                      </div>
                    )}

                    {errors.currentCountry && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.currentCountry}
                      </p>
                    )}
                  </div>

                  {/* WhatsApp */}
                  <div className="relative">
                    <div className="absolute top-4 left-3 text-gray-400">
                      <FiPhone />
                    </div>
                    <input
                      ref={refs.whatsapp}
                      name="whatsapp"
                      value={form.whatsapp}
                      onChange={handleChange}
                      placeholder="WhatsApp Number"
                      className={`w-full pl-10 p-3 rounded-xl border text-sm sm:text-base 
                        ${errors.whatsapp ? "border-red-500" : ""}`}
                    />
                    {errors.whatsapp && (
                      <p className="text-red-500 text-xs mt-1">{errors.whatsapp}</p>
                    )}
                  </div>
                </div>

                {/* Profession */}
                <div className="relative">
                  <div className="absolute top-4 left-3 text-gray-400">
                    <FiBriefcase />
                  </div>
                  <input
                    ref={refs.profession}
                    name="profession"
                    value={form.profession}
                    onChange={handleChange}
                    placeholder="Profession"
                    className={`w-full pl-10 p-3 rounded-xl border text-sm sm:text-base 
                      ${errors.profession ? "border-red-500" : ""}`}
                  />
                  {errors.profession && (
                    <p className="text-red-500 text-xs mt-1">{errors.profession}</p>
                  )}
                </div>

                {/* Work With Communities */}
                <div className="relative">
                  <FiUsers className="absolute top-4 left-3 text-gray-400" />
                  <select
                    ref={refs.workWithCommunities}
                    name="workWithCommunities"
                    value={form.workWithCommunities}
                    onChange={handleChange}
                    className={`w-full pl-10 p-3 rounded-xl border bg-white text-sm sm:text-base 
                      ${errors.workWithCommunities ? "border-red-500" : ""}`}
                  >
                    <option value="">Do you work with NRI communities?</option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                  </select>
                  {errors.workWithCommunities && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.workWithCommunities}
                    </p>
                  )}
                </div>

                {/* Promote Nizcare */}
                <div className="relative">
                  <FiStar className="absolute top-4 left-3 text-gray-400" />
                  <select
                    ref={refs.promoteNizcare}
                    name="promoteNizcare"
                    value={form.promoteNizcare}
                    onChange={handleChange}
                    className={`w-full pl-10 p-3 rounded-xl border bg-white text-sm sm:text-base 
                      ${errors.promoteNizcare ? "border-red-500" : ""}`}
                  >
                    <option value="">
                      Would you like to promote Nizcare as a Partner/Affiliate?
                    </option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                  </select>
                  {errors.promoteNizcare && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.promoteNizcare}
                    </p>
                  )}
                </div>

                {/* Expected Reach */}
                <div className="relative">
                  <FiTrendingUp className="absolute top-4 left-3 text-gray-400" />
                  <input
                    name="expectedReach"
                    value={form.expectedReach}
                    onChange={(e) => {
                      const value = e.target.value;
                      if (/^[0-9]*$/.test(value)) {
                        handleChange(e);
                      }
                    }}
                    placeholder="Expected monthly reach (approx.)"
                    className="w-full pl-10 p-3 rounded-xl border focus:ring-2 focus:ring-teal-500 outline-none text-sm sm:text-base"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="mt-2 w-full bg-teal-600 text-white py-3 rounded-xl text-base sm:text-lg font-semibold hover:bg-teal-700 transition-all shadow-lg"
                >
                  Submit
                </button>
              </div>

            </form>
          </div>
        </section>

        {/* second page */}
        <section className="px-6 md:px-20 py-16 sm:py-20 md:grid md:grid-cols-2">
          <div className="text-center md:text-start">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
              Become a <span className="bg-gradient-to-r from-teal-500 to-teal-700 bg-clip-text text-transparent">Nizcare Country Partner</span>
            </h1>

            <p className="text-base sm:text-lg text-gray-600 leading-relaxed mt-4">
              <h2 className="font-semibold text-2xl"> Lead Nizcare’s Global Expansion in</h2>
            </p>

            <div className="space-y-4 text-gray-700 mt-4">
              <p>
                NRI Wellness • Medical Tourism • Clinic Pro SaaS • Corporate Healthcare
              </p>
              <p className="font-semibold">
                A Leadership Opportunity for NRI Business Influencers Worldwide
              </p>
            </div>
          </div>
        </section>

        {/* Opportunity SECTION */}
        <section className="px-6 md:px-20 py-16 sm:py-20">
          <div className="container mx-auto">

            {/* Section Heading */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center mb-6 sm:mb-8 text-gray-900 tracking-tight">
              The {" "}
              <span className="bg-gradient-to-r from-teal-500 to-teal-700 bg-clip-text text-transparent">
                Opportunity
              </span>
            </h2>

            <p className="text-center text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              4 Fast-Growing Healthcare Verticals. One Global Platform.
            </p>

            <p className="text-center text-base sm:text-lg text-gray-600 mt-2 max-w-2xl mx-auto">
              As a Country Partner, you represent all four revenue channels of Nizcare in your nation.
            </p>

            {/* Opportunity Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mt-12">

              {/* 1: NRI Wellness */}
              <div className="group p-7 rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-teal-100 bg-gradient-to-br from-white to-teal-50/20">
                <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-teal-100 text-teal-700 mb-5 shadow-inner">
                  <ShieldCheck size={32} />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  NRI Wellness Subscriptions
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Help NRIs ensure their families in India receive reliable, coordinated medical care.
                </p>
              </div>

              {/* 2: Medical Tourism */}
              <div className="group p-7 rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-teal-100 bg-gradient-to-br from-white to-teal-50/20">
                <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-teal-100 text-teal-700 mb-5 shadow-inner">
                  <Globe2 size={32} />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Medical Tourism Facilitation
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Support global patients coming to India for surgeries, second opinions, treatments &
                  wellness programs through Nizcare’s curated medical network.
                </p>
              </div>

              {/* 3: Clinic Pro SaaS */}
              <div className="group p-7 rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-teal-100 bg-gradient-to-br from-white to-teal-50/20">
                <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-teal-100 text-teal-700 mb-5 shadow-inner">
                  <LayoutDashboard size={32} />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Nizcare Clinic Pro (Doctor SaaS)
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Promote our AI-powered clinic management suite to clinics, doctors & polyclinics.
                  Earn recurring software licensing revenue.
                </p>
              </div>

              {/* 4: Corporate Digital Health */}
              <div className="group p-7 rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-teal-100 bg-gradient-to-br from-white to-teal-50/20">
                <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-teal-100 text-teal-700 mb-5 shadow-inner">
                  <Building size={32} />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Corporate Digital Health (B2B)
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Provide corporate wellness solutions—employee healthcare, preventive screenings,
                  chronic care, and mental health programs.
                </p>
              </div>
            </div>

            {/* Footer */}
            <p className="text-center text-lg sm:text-xl font-semibold text-gray-800 mt-12 max-w-3xl mx-auto">
              A complete multi-vertical healthcare model —{" "}
              <span className="text-teal-600">you will lead Nizcare's growth in your country.</span>
            </p>
          </div>
        </section>

        {/* WHY NIZCARE */}
        <section className="px-6 md:px-20 py-20">
          <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

            {/* RIGHT SIDE — Hero Content (should come first on mobile) */}
            <div className="bg-white rounded-3xl shadow-xl p-10 border border-teal-100 order-1 lg:order-2">
              <h2 className="text-4xl font-extrabold text-gray-800 leading-tight mb-4">
                Why{" "}
                <span className="bg-gradient-to-r from-teal-500 to-teal-700 bg-clip-text text-transparent">
                  Nizcare?
                </span>
              </h2>

              <p className="text-lg text-gray-700 leading-relaxed">
                Nizcare is a complete global health ecosystem designed for Indians living abroad.
                We address the biggest challenges faced by international families through a
                coordinated, transparent and high-quality medical platform trusted worldwide.
              </p>

              <div className="mt-6 h-1 w-24 bg-gradient-to-r from-teal-400 to-teal-600 rounded-full"></div>
            </div>

            {/* LEFT SIDE — Timeline with Icons */}
            <div className="space-y-10 order-2 lg:order-1">

              {[
                {
                  icon: <HeartPulse size={30} />,
                  title: "Parents’ Health Back Home",
                  // desc: "Coordinated medical care for aging parents with real-time updates."
                },
                {
                  icon: <AlertTriangle size={30} />,
                  title: "Rising Medical Costs",
                  // desc: "Transparent, affordable medical pricing protecting families abroad."
                },
                {
                  icon: <Handshake size={30} />,
                  title: "Uncoordinated Care",
                  // desc: "End-to-end support from diagnosis to follow-up."
                },
                {
                  icon: <Eye size={30} />,
                  title: "Lack of Transparency",
                  // desc: "Full visibility into reports, tests, consultations & treatments."
                },
                {
                  icon: <ShieldCheck size={30} />,
                  title: "Assessing Medical Quality",
                  // desc: "Only verified hospitals, accredited doctors & proven protocols."
                }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-5">

                  <div className="w-14 h-14 flex items-center justify-center bg-teal-100 text-teal-700 rounded-xl shadow-inner">
                    {item.icon}
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">{item.title}</h3>
                    {/* <p className="text-gray-600 leading-relaxed mt-1">{item.desc}</p> */}
                  </div>

                </div>
              ))}
            </div>

          </div>
        </section>

        {/* COUNTRY PARTNER */}
        <section className="px-6 md:px-20 py-20">
          <div className="container mx-auto">

            {/* Section Title */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-gray-900 mb-16">
              What You Do as a<span className="bg-gradient-to-r from-teal-500 to-teal-700 bg-clip-text text-transparent"> Country Partner</span>
            </h2>

            {/* Card Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

              {/* A — NRI Engagement */}
              <div className="bg-white rounded-3xl shadow-xl p-6 hover:shadow-2xl transition-transform transform hover:-translate-y-2 border border-teal-100">
                <div className="w-16 h-16 flex items-center justify-center rounded-full bg-gradient-to-r from-teal-400 to-teal-600 text-white mb-4 mx-auto">
                  <Users size={28} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 text-center mb-2">NRI Engagement</h3>
                <ul className="text-gray-700 text-sm space-y-1 leading-relaxed text-center">
                  <li>• Promote Nizcare’s family health plans</li>
                  <li>• Support NRIs needing help for parents in India</li>
                  <li>• Organise community awareness programs</li>
                </ul>
              </div>

              {/* B — Medical Tourism */}
              <div className="bg-white rounded-3xl shadow-xl p-6 hover:shadow-2xl transition-transform transform hover:-translate-y-2 border border-teal-100">
                <div className="w-16 h-16 flex items-center justify-center rounded-full bg-gradient-to-r from-teal-400 to-teal-600 text-white mb-4 mx-auto">
                  <Plane size={28} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 text-center mb-2">Medical Tourism</h3>
                <ul className="text-gray-700 text-sm space-y-1 leading-relaxed text-center">
                  <li>• Handle first-level enquiries</li>
                  <li>• Coordinate pre-travel clinical discussions</li>
                  <li>• Build relationships with local doctors & networks</li>
                </ul>
              </div>

              {/* C — Clinic Pro Sales */}
              <div className="bg-white rounded-3xl shadow-xl p-6 hover:shadow-2xl transition-transform transform hover:-translate-y-2 border border-teal-100">
                <div className="w-16 h-16 flex items-center justify-center rounded-full bg-gradient-to-r from-teal-400 to-teal-600 text-white mb-4 mx-auto">
                  <Stethoscope size={28} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 text-center mb-2">Clinic Pro Sales (SaaS)</h3>
                <ul className="text-gray-700 text-sm space-y-1 leading-relaxed text-center">
                  <li>• Onboard clinics & doctors to Nizcare Clinic Pro</li>
                  <li>• Promote digital transformation using AI tools</li>
                </ul>
              </div>

              {/* D — Corporate Sales */}
              <div className="bg-white rounded-3xl shadow-xl p-6 hover:shadow-2xl transition-transform transform hover:-translate-y-2 border border-teal-100">
                <div className="w-16 h-16 flex items-center justify-center rounded-full bg-gradient-to-r from-teal-400 to-teal-600 text-white mb-4 mx-auto">
                  <Building2 size={28} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 text-center mb-2">Corporate Sales (B2B)</h3>
                <ul className="text-gray-700 text-sm space-y-1 leading-relaxed text-center">
                  <li>• Pitch employee wellness solutions to businesses</li>
                  <li>• Run preventive health campaigns</li>
                  <li>• Facilitate annual health check partnerships</li>
                </ul>
              </div>

            </div>

            {/* Footer Note */}
            <p className="text-center text-gray-700 text-lg mt-12 leading-relaxed">
              <span className="font-semibold">You grow Nizcare’s brand.</span><br />
              <span className="text-teal-700 font-semibold">We handle 100% of healthcare operations.</span>
            </p>

          </div>
        </section>

        {/* WHAT YOU GET */}
        <section className="relative px-6 md:px-20 py-28 overflow-hidden">
          <div className="container mx-auto relative z-10">

            {/* Section Title */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center text-gray-900 mb-20">
              What You <span className="bg-gradient-to-r from-teal-500 to-teal-700 bg-clip-text text-transparent">Get</span>
            </h2>

            {/* Flow Grid */}
            <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

              {[
                { icon: <DollarSign size={28} />, title: "Revenue Share", desc: "Earn from all 4 verticals with recurring commissions." },
                { icon: <Globe size={28} />, title: "Exclusive Representation", desc: "Be the official partner for your country/region." },
                { icon: <UserCheck size={28} />, title: "Partner Success Manager", desc: "Dedicated guidance to help you succeed." },
                { icon: <Award size={28} />, title: "Global Recognition", desc: "Boost your authority with our trusted brand." },
                { icon: <BookOpen size={28} />, title: "Marketing & Training", desc: "Access ready-made content, brochures, and workshops." },
                { icon: <Calendar size={28} />, title: "Co-branded Events", desc: "Participate in webinars, events, and exhibitions." },
                { icon: <BarChart2 size={28} />, title: "Analytics Dashboard", desc: "Track your leads and performance in real-time." },
              ].map((benefit, i) => (
                <div
                  key={i}
                  className={`bg-white p-8 rounded-3xl shadow-2xl border border-gray-100 flex flex-col items-center text-center transform transition-transform duration-300 hover:-translate-y-4 hover:shadow-3xl`}
                  style={{ zIndex: i + 1 }}
                >
                  {/* Floating Icon Badge */}
                  <div className="w-20 h-20 flex items-center justify-center bg-gradient-to-r from-teal-500 to-teal-700 text-white rounded-full mb-4 shadow-xl animate-bounce-slow">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{benefit.title}</h3>
                  <p className="text-gray-600 text-sm sm:text-base">{benefit.desc}</p>
                </div>
              ))}

            </div>

          </div>
        </section>

        {/* Nizcare Delivers */}
        <section className="px-6 md:px-20 py-28 relative">
          <div className="container mx-auto relative z-10">

            {/* Section Title */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center text-gray-900 mb-16">
              What <span className="bg-gradient-to-r from-teal-500 to-teal-700 bg-clip-text text-transparent">Nizcare Delivers</span>
              <br />
              <span className="text-gray-600 text-xl font-semibold">End-to-end Operations in India</span>
            </h2>

            {/* Grid for 4 Verticals */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

              {/* NRI Wellness */}
              <div className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-100 hover:shadow-3xl transition-all transform hover:-translate-y-2">
                <div className="w-16 h-16 flex items-center justify-center bg-teal-100 text-teal-700 rounded-xl mb-4">
                  <Heart size={28} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">NRI Wellness</h3>
                <ul className="text-gray-600 space-y-2 text-sm sm:text-base">
                  <li>• Elder care assistance</li>
                  <li>• Teleconsults & home nurse</li>
                  <li>• Checkups & emergency support</li>
                  <li>• Care manager & medication management</li>
                </ul>
              </div>

              {/* Medical Tourism */}
              <div className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-100 hover:shadow-3xl transition-all transform hover:-translate-y-2">
                <div className="w-16 h-16 flex items-center justify-center bg-teal-100 text-teal-700 rounded-xl mb-4">
                  <Home size={28} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Medical Tourism</h3>
                <ul className="text-gray-600 space-y-2 text-sm sm:text-base">
                  <li>• Hospital tie-ups</li>
                  <li>• Surgeons & specialist network</li>
                  <li>• End-to-end case coordination</li>
                </ul>
              </div>

              {/* Clinic Pro */}
              <div className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-100 hover:shadow-3xl transition-all transform hover:-translate-y-2">
                <div className="w-16 h-16 flex items-center justify-center bg-teal-100 text-teal-700 rounded-xl mb-4">
                  <Monitor size={28} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Clinic Pro</h3>
                <ul className="text-gray-600 space-y-2 text-sm sm:text-base">
                  <li>• SaaS product for clinics</li>
                  <li>• Training & tech support</li>
                  <li>• Updates & feature rollouts</li>
                </ul>
              </div>

              {/* Corporate Health */}
              <div className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-100 hover:shadow-3xl transition-all transform hover:-translate-y-2">
                <div className="w-16 h-16 flex items-center justify-center bg-teal-100 text-teal-700 rounded-xl mb-4">
                  <Briefcase size={28} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Corporate Health</h3>
                <ul className="text-gray-600 space-y-2 text-sm sm:text-base">
                  <li>• Checkup management & dashboards</li>
                  <li>• Digital risk assessments</li>
                  <li>• Employee wellness content</li>
                </ul>
              </div>

            </div>

            {/* CTA */}
            <div className="mt-16 text-center">
              <p className="text-gray-700 text-lg sm:text-xl mb-6">
                <span className="font-semibold text-gray-900">You focus on growth.</span><br />
                <span className="text-teal-700 font-semibold">We handle 100% of execution in India.</span>
              </p>
              <a
                href="#"
                className="inline-block bg-gradient-to-r from-teal-500 to-teal-700 text-white px-10 py-4 rounded-full text-lg font-semibold shadow-xl hover:scale-105 transition-transform duration-300"
              >
                Become a Partner
              </a>
            </div>

          </div>

        </section>

        {/* SECTION 6 — Who Can Apply? */}
        <section className="px-6 md:px-20 py-20">
          <div className="container mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 text-center mb-14">
              Who Can <span className="bg-gradient-to-r from-teal-500 to-teal-700 bg-clip-text text-transparent">Apply?</span>
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: <Users size={24} />, text: "NRI Business Leaders" },
                { icon: <Briefcase size={24} />, text: "Entrepreneurs / Investors" },
                { icon: <Users size={24} />, text: "Presidents / Secretaries of Indian Associations" },
                { icon: <Globe size={24} />, text: "Owners of Small–Mid Businesses Abroad" },
                { icon: <Heart size={24} />, text: "Healthcare Professionals" },
                { icon: <Users size={24} />, text: "Community Influencers" },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 p-6 bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all border border-gray-100"
                >
                  <div className="w-12 h-12 flex items-center justify-center bg-teal-100 text-teal-700 rounded-xl">
                    {item.icon}
                  </div>
                  <p className="text-gray-700 font-semibold">{item.text}</p>
                </div>
              ))}
            </div>

            <p className="mt-8 text-gray-700 text-center text-sm sm:text-base font-medium">
              This is an opportunity for <span className="text-teal-700 font-bold">leaders</span>, not affiliates.
            </p>
          </div>
        </section>

        {/* SECTION 7 — Impact & Market Potential */}
        <section className="w-full py-20 px-6 md:px-20">
          <div className="container mx-auto flex flex-col space-y-16">

            {/* Section Title */}
            <h2 className="text-4xl md:text-5xl font-extrabold text-center text-gray-900">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 text-center mb-4">
                Impact & Market<span className="bg-gradient-to-r from-teal-500 to-teal-700 bg-clip-text text-transparent"> Potential</span>
              </h2>
            </h2>

            {/* Numbers List Horizontal & Responsive */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 w-full">
              {[
                { number: "32M+", label: "Indian Diaspora", icon: <Globe size={32} /> },
                { number: "$9B", label: "Medical Tourism Industry", icon: <Briefcase size={32} /> },
                { number: "High", label: "Emotional & Financial Stake in Parents’ Wellbeing", icon: <Heart size={32} /> },
                { number: "Rapid", label: "Digital Health Adoption", icon: <Globe size={32} /> },
                { number: "Growing", label: "Corporate Wellness Interest Abroad", icon: <Users size={32} /> },
              ].map((item, i) => (
                <div key={i} className="flex flex-col items-center justify-start rounded-3xl p-6 transition-all">
                  <div className="w-24 h-24 flex items-center justify-center rounded-full bg-gradient-to-br from-teal-400 to-teal-600 text-white text-3xl shadow-2xl transform transition-all hover:scale-110">
                    {item.icon}
                  </div>
                  <p className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-4 text-center">{item.number}</p>
                  <p className="text-gray-700 font-medium text-center mt-2">{item.label}</p>
                </div>
              ))}
            </div>

            {/* Footer Text */}
            <p className="text-center text-xl md:text-2xl font-semibold text-gray-800">
              Your participation accelerates <span className="text-teal-700">Nizcare’s global footprint</span>.
            </p>

          </div>
        </section>

        {/* INCOME — PREMIUM CLEAN */}
        <section className="px-6 md:px-20 py-12 flex flex-col items-center text-center">
          {/* Title */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Lead <span className="bg-gradient-to-r from-teal-500 to-teal-700 bg-clip-text text-transparent">Nizcare</span> in Your Country
          </h2>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-gray-700 mb-6 max-w-xl">
            Build Impact & Income. <br />
            Change the way <span className="font-semibold text-teal-600">Indians</span> abroad care for their families.
          </p>

          {/* CTA Button */}
          <a
            href="#"
            className="inline-block bg-gradient-to-r from-teal-500 to-teal-700 text-white font-bold text-lg sm:text-xl px-8 py-3 rounded-full shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300"
          >
            Apply to Become a Country Partner
          </a>
        </section>

        {/* CLEAN FOOTER */}
        <footer className="bg-gray-50 border-t pt-12 pb-8 px-6 md:px-20">
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">

            {/* LOGO + TEXT */}
            <div className="text-center md:text-left">
              <img src={Logo} width={140} alt="logo" className="mx-auto md:mx-0" />
              <p className="mt-4 text-gray-600 leading-relaxed text-sm sm:text-base">
                Connecting NRIs with reliable healthcare and support services in India.
                Join our partner network and make an impact globally.
              </p>

              <div className="flex gap-3 justify-center md:justify-start mt-4">
                <a
                  href="http://in.linkedin.com/company/nizcare"
                  className="w-10 h-10 flex items-center justify-center rounded-full border text-gray-700 hover:bg-teal-600 hover:text-white transition"
                  aria-label="LinkedIn"
                >
                  <FaLinkedinIn size={16} />
                </a>

                <a
                  href="https://www.instagram.com/niz_care?igsh=cGRqY3VrdmRveGxk"
                  className="w-10 h-10 flex items-center justify-center rounded-full border text-gray-700 hover:bg-pink-600 hover:text-white transition"
                  aria-label="Instagram"
                >
                  <FaInstagram size={16} />
                </a>

                <a
                  href="https://nizcare.com"
                  className="w-10 h-10 flex items-center justify-center rounded-full border text-gray-700 hover:bg-teal-700 hover:text-white transition"
                  aria-label="Website"
                >
                  <FaGlobe size={16} />
                </a>
              </div>
            </div>

            {/* CONTACT */}
            <div className="text-center md:text-left">
              <h3 className="text-lg font-semibold text-teal-600 mb-3">Contact</h3>
              <ul className="space-y-3 text-gray-600 text-sm sm:text-base">
                <li>
                  <span className="font-bold">Phone:</span> +91 98765 43210
                </li>
                <li>
                  <span className="font-bold">Email:</span> support@nizcare.com
                </li>
              </ul>
            </div>

            {/* Explore */}
            <div className="text-center md:text-left">
              <h3 className="text-lg font-semibold text-teal-600 mb-3">Explore</h3>
              <p className="text-gray-600 text-sm sm:text-base">
                Join the Nizcare Global Partner Network Today.
              </p>
              <p className="text-gray-600 mb-4 text-sm sm:text-base">
                Expand healthcare access. Earn recurring income. Make a difference.
              </p>
              <a
                href="#"
                className="inline-block bg-gradient-to-r from-teal-500 to-teal-700 text-white p-2 rounded-2xl px-6
             transition-all duration-300 
             hover:bg-teal-700 hover:shadow-lg hover:scale-[1.03]"
              >
                Become a Global Partner
              </a>

            </div>
          </div>

          {/* BOTTOM BAR */}
          <div className="border-t mt-10 pt-6 text-center text-gray-600 text-sm">
            © 2025 <span className="text-teal-600">Nizcare</span>. All rights reserved.
          </div>
        </footer>

      </div>

    </div>

  );
};

export default NRI;