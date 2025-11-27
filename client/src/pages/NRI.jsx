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
              Become a <span className="bg-gradient-to-r from-teal-500 to-teal-700 bg-clip-text text-transparent">Nizcare Global Partner</span>
            </h1>

            <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
              Promote Nizcare to NRIs in your country and earn recurring income every month.
              <span className="font-semibold"> No investment. Full support.</span>
            </p>

            <div className="space-y-4 text-gray-700">
              <p>
                For millions of Indians abroad, caring for families in India is difficult.
                Nizcare solves this through AI-powered preventive care, home support, medicine assistance, and a dedicated wellness manager.
              </p>
              <p className="font-semibold">
                If you have access to NRI communities, you can be the bridge — and earn.
              </p>
            </div>
          </div>
        </section>

        {/* BENEFITS SECTION */}
        <section className="px-6 md:px-20 py-16 sm:py-20">
          <div className="container mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center mb-10 sm:mb-14 text-gray-800 tracking-tight">
              Partner <span className="bg-gradient-to-r from-teal-500 to-teal-700 bg-clip-text text-transparent">Benefits</span>
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10 relative z-10">
              {[
                { icon: <FiTrendingUp />, title: "Recurring Commissions", desc: "Earn long-term income for every referral." },
                { icon: <FiTool />, title: "Full Marketing Toolkit", desc: "Get ready-made content, creatives & funnels." },
                { icon: <FiGift />, title: "Exclusive Rewards", desc: "Unlock bonuses, milestones & performance gifts." },
                { icon: <FiStar />, title: "Zero Investment", desc: "Join for free — no upfront cost required." },
                { icon: <FiUsers />, title: "Training & Support", desc: "Personal guidance, strategy sessions & webinars." },
                { icon: <FiMail />, title: "Monthly Payouts", desc: "Reliable payout cycle straight to your account." },
              ].map((item, i) => (
                <div
                  key={i}
                  className="group p-6 md:p-8 rounded-2xl bg-white/80 backdrop-blur-sm shadow-md hover:shadow-2xl transition-all duration-300 border border-teal-50 hover:-translate-y-1"
                >
                  <div className="text-teal-600 text-4xl md:text-5xl mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-2 text-center">{item.title}</h3>
                  <p className="text-gray-600 text-sm md:text-base text-center">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* WHO CAN JOIN — MODERN TAG/CHIP UI */}
        <section className="px-6 md:px-20 py-16 sm:py-20">
          <div className="container mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-gray-900 mb-10 sm:mb-14">
              Who Can <span className="bg-gradient-to-r from-teal-500 to-teal-700 bg-clip-text text-transparent">Join?</span>
            </h2>

            <div className="flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-6 max-w-4xl mx-auto">

              {[
                "Community Members",
                "Professional Networks",
                "Entrepreneurs",
                "Travel / Insurance / Education Agents",
                "Wellness Providers",
                "Small Business Owners",
              ].map((text, i) => (
                <span
                  key={i}
                  className="
            px-4 sm:px-6 py-2 sm:py-3 
            rounded-full 
            bg-gradient-to-r from-teal-50 to-teal-100 
            text-teal-700 
            font-medium 
            text-sm sm:text-lg
            shadow-sm
            hover:shadow-md 
            hover:from-teal-100 hover:to-teal-200
            transition-all 
            cursor-default
          "
                >
                  {text}
                </span>
              ))}

            </div>
          </div>
        </section>

        {/* HOW IT WORKS — PREMIUM HORIZONTAL STEP FLOW */}
        <section className="px-6 md:px-20 py-16 sm:py-20">
          <div className="container mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-gray-900 mb-10 sm:mb-14">
              How It <span className="bg-gradient-to-r from-teal-500 to-teal-700 bg-clip-text text-transparent">Works</span>
            </h2>

            <div className="flex flex-col md:flex-row items-start md:items-center justify-center gap-6 md:gap-12">
              {[
                "Register",
                "Get Partner Kit",
                "Promote Nizcare",
                "Earn Monthly Income",
              ].map((step, i) => (
                <div key={i} className="flex items-center w-full md:w-auto">
                  {/* STEP NUMBER */}
                  <div className="
            w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center 
            rounded-full bg-teal-600 text-white 
            text-lg sm:text-xl font-bold
            shadow-lg
            transform transition-all duration-300
            hover:scale-105
          ">
                    {i + 1}
                  </div>

                  {/* LABEL */}
                  <p className="ml-3 text-sm sm:text-base md:text-lg font-semibold text-gray-800">
                    {step}
                  </p>

                  {/* CONNECTOR LINE */}
                  {i !== 3 && (
                    <div className="hidden md:block w-12 h-1 bg-teal-300 ml-4"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* COMMISSION SECTION — PREMIUM CLEAN */}
        <section className="px-6 md:px-20 py-12 sm:py-16 text-center">
          <div className="container mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6 sm:mb-10">
              Commission <span className="bg-gradient-to-r from-teal-500 to-teal-700 bg-clip-text text-transparent">Structure</span>
            </h2>

            <p className="text-base sm:text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed">
              Earn <span className="font-bold text-teal-600">10% commission</span> for every successful NRI subscription.
              <br />
              Top performers are elevated to
              <span className="font-bold text-gray-900"> Country Leads</span> with higher earning potential.
            </p>
          </div>
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