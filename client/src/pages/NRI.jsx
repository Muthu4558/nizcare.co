import React, { useState, useRef, useEffect } from "react";
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
import { FaLinkedinIn, FaInstagram, FaGlobe as FaGlobeIcon } from "react-icons/fa";
import {
  ShieldCheck,
  Globe2,
  LayoutDashboard,
  Building,
  ArrowRightCircle,
  ArrowLeftCircle,
  HeartPulse,
  AlertTriangle,
  Handshake,
  Eye,
  Users,
  Plane,
  Stethoscope,
  Building2,
  DollarSign,
  Globe as LucideGlobe,
  UserCheck,
  Award,
  BookOpen,
  Calendar,
  BarChart2,
  Heart,
  Home,
  Monitor,
  Briefcase,
  BarChart,
  Hospital,
  Globe,
  HeartHandshake,
  Cpu
} from "lucide-react";

import AOS from "aos";
import "aos/dist/aos.css";

import Logo from "../assets/logo.png";
import BackgroundAnimation from "../components/BackgroundAnimation.jsx";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import CursorFollower from "../components/CursorFollower.jsx";

const NRI = () => {
  // AOS init
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: true, // animate only once
      mirror: false,
    });
    // refresh on mount (helps when images/backgrounds load)
    AOS.refresh();
  }, []);

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
    <>
      <CursorFollower imageSrc={Logo} size={14} offset={{ x: 18, y: 18 }} />
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

          {/* HERO SECTION — full-screen background, form anchored to right */}
          <section
            className="min-h-screen w-full flex items-center"
            style={{
              backgroundImage: "url('/bg.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundAttachment: "fixed",
            }}
            data-aos="fade-up"
          >
            <div className="w-full max-w-7xl mx-auto px-">
              <div className="w-full flex">
                {/* Spacer to keep form on right on large screens */}
                <div className="hidden md:block md:flex-1" />

                {/* FORM CONTAINER */}
                <div className="w-full md:w-[480px] lg:w-[540px] flex justify-center md:justify-end mt-72 md:mt-0">
                  <form
                    onSubmit={handleSubmit}
                    className="w-[480px] bg-white/95 backdrop-blur-sm shadow-2xl rounded-3xl p-6 sm:p-8 md:p-8 border border-white/30"
                    data-aos="fade-left"
                    data-aos-delay="160"
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
                              if (/^[A-Za-z\s]*$/.test(value) || value === "") {
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
                            className={`w-full pl-10 p-3 rounded-xl border text-sm sm:text-base ${errors.email ? "border-red-500" : ""}`}
                          />
                          {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                        </div>
                      </div>

                      {/* COUNTRY + WHATSAPP */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {/* Country */}
                        <div className="relative">
                          <button
                            ref={refs.currentCountry}
                            type="button"
                            className={`w-full pl-3 pr-4 py-3 rounded-xl border bg-white flex items-center justify-between text-sm ${errors.currentCountry ? "border-red-500" : ""}`}
                            onClick={() => setCountryDropdownOpen(!countryDropdownOpen)}
                            aria-expanded={countryDropdownOpen}
                          >
                            <div className="flex items-center gap-2">
                              {form.currentCountry ? (
                                <img
                                  src={countryList.find((c) => c.name === form.currentCountry)?.src}
                                  alt={form.currentCountry}
                                  className="w-6 h-6 rounded-full object-cover"
                                />
                              ) : (
                                <FiGlobe className="text-gray-400" />
                              )}
                              <span className="truncate">{form.currentCountry || "Select Country"}</span>
                            </div>

                            <FiChevronDown />
                          </button>

                          {countryDropdownOpen && (
                            <div className="absolute right-0 z-30 mt-2 w-full bg-white border rounded-xl shadow-lg max-h-64 overflow-y-auto">
                              {countryList.map((country, idx) => (
                                <button
                                  key={idx}
                                  type="button"
                                  className="w-full text-left flex items-center gap-2 px-4 py-2 hover:bg-teal-50 cursor-pointer"
                                  onClick={() => {
                                    handleChange({ target: { name: "currentCountry", value: country.name } });
                                    setCountryDropdownOpen(false);
                                  }}
                                >
                                  <img src={country.src} alt={country.name} className="w-6 h-6 rounded-full object-cover" />
                                  <span className="truncate">{country.name}</span>
                                </button>
                              ))}
                            </div>
                          )}

                          {errors.currentCountry && <p className="text-red-500 text-xs mt-1">{errors.currentCountry}</p>}
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
                            className={`w-full pl-10 p-3 rounded-xl border text-sm sm:text-base ${errors.whatsapp ? "border-red-500" : ""}`}
                          />
                          {errors.whatsapp && <p className="text-red-500 text-xs mt-1">{errors.whatsapp}</p>}
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
                          className={`w-full pl-10 p-3 rounded-xl border text-sm sm:text-base ${errors.profession ? "border-red-500" : ""}`}
                        />
                        {errors.profession && <p className="text-red-500 text-xs mt-1">{errors.profession}</p>}
                      </div>

                      {/* Work With Communities */}
                      <div className="relative">
                        <FiUsers className="absolute top-4 left-3 text-gray-400" />
                        <select
                          ref={refs.workWithCommunities}
                          name="workWithCommunities"
                          value={form.workWithCommunities}
                          onChange={handleChange}
                          className={`w-full pl-10 p-3 rounded-xl border bg-white text-sm sm:text-base ${errors.workWithCommunities ? "border-red-500" : ""}`}
                        >
                          <option value="">Do you work with NRI communities?</option>
                          <option value="Yes">Yes</option>
                          <option value="No">No</option>
                        </select>
                        {errors.workWithCommunities && <p className="text-red-500 text-xs mt-1">{errors.workWithCommunities}</p>}
                      </div>

                      {/* Promote Nizcare */}
                      <div className="relative">
                        <FiStar className="absolute top-4 left-3 text-gray-400" />
                        <select
                          ref={refs.promoteNizcare}
                          name="promoteNizcare"
                          value={form.promoteNizcare}
                          onChange={handleChange}
                          className={`w-full pl-10 p-3 rounded-xl border bg-white text-sm sm:text-base ${errors.promoteNizcare ? "border-red-500" : ""}`}
                        >
                          <option value="">Would you like to promote Nizcare as a Partner/Affiliate?</option>
                          <option value="Yes">Yes</option>
                          <option value="No">No</option>
                        </select>
                        {errors.promoteNizcare && <p className="text-red-500 text-xs mt-1">{errors.promoteNizcare}</p>}
                      </div>

                      {/* Expected Reach */}
                      <div className="relative">
                        <FiTrendingUp className="absolute top-4 left-3 text-gray-400" />
                        <input
                          name="expectedReach"
                          value={form.expectedReach}
                          onChange={(e) => {
                            const value = e.target.value;
                            if (/^[0-9]*$/.test(value) || value === "") handleChange(e);
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
              </div>
            </div>
          </section>

          {/* second page*/}
          <section className="relative px-6 md:px-20 py-20" data-aos="fade-up">
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center mb-10 leading-tight">
              Why partner with{" "}
              <span className="bg-gradient-to-r from-teal-500 to-teal-700 bg-clip-text text-transparent">
                Nizcare
              </span>
            </h3>
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-25 items-start">
              {/* LEFT FEATURE CARD */}
              <div className="lg:col-span-7 col-span-1 flex items-center md:mt-20">
                <div className="w-full">
                  <div
                    className="bg-white rounded-3xl border border-teal-200 shadow-[0_30px_60px_rgba(6,78,59,0.06)] p-10 lg:p-14 max-w-3xl ml-auto"
                    data-aos="fade-left"
                  >

                    <p className="text-gray-700 text-lg leading-relaxed text-justify">
                      Join us to deliver high-quality healthcare services tailored for NRIs,
                      international patients, and corporate clients. Nizcare empowers you with
                      NRI Wellness, Medical Tourism, ClinicPro SaaS, and Corporate Healthcare
                      solutions — all designed to scale and adapt to local requirements across
                      countries.
                    </p>

                    <div className="mt-8 flex items-center gap-4">
                      <div className="h-1 w-28 bg-gradient-to-r from-teal-400 to-teal-600 rounded-full" />
                      {/* small floating dot under underline */}
                      <div className="w-3 h-3 rounded-full bg-teal-600 shadow-md" />
                    </div>
                  </div>
                </div>
              </div>

              {/* RIGHT TIMELINE / ITEMS (desktop) */}
              <div className="hidden lg:block lg:col-span-5 relative mt-0 md:mt-10">
                {/* vertical line */}
                <div className="absolute left-[240px] top-6 bottom-6 w-[2px] bg-gradient-to-b from-teal-300 to-teal-200 rounded" />

                <div className="space-y-8">
                  {[
                    { icon: <Hospital size={20} />, title: "Access to proven clinical partners and powerful SaaS tools for clinics." },
                    { icon: <Globe size={20} />, title: "Structured support for NRI outreach and medical tourism referrals." },
                    { icon: <Building2 size={20} />, title: "Opportunities to scale corporate healthcare offerings in your country." }

                  ].map((item, i) => (
                    <div key={i} className="relative flex items-center">
                      {/* card */}
                      <div
                        className="bg-white rounded-2xl shadow-sm border border-teal-200 p-6 w-full max-w-[520px]"
                        data-aos="fade-up"
                        data-aos-delay={i * 80}
                      >
                        <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
                      </div>

                      {/* circular icon badge to the right of card, overlapping the vertical line */}
                      <div
                        className="absolute right-[-64px] -translate-x-1/2 flex items-center justify-center"
                        style={{ transformOrigin: "center" }}
                      >
                        <div className="relative">
                          <div className="w-14 h-14 rounded-full bg-white border border-teal-100 shadow-md flex items-center justify-center">
                            <div className="w-10 h-10 rounded-full bg-teal-50 text-teal-600 flex items-center justify-center">
                              {item.icon}
                            </div>
                          </div>
                          {/* small connector dot on the right of vertical line */}
                          <span className="absolute -left-[36px] top-1/2 -translate-y-1/2 w-3 h-3 bg-teal-600 rounded-full shadow-sm" />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* MOBILE / TABLET: stacked fallback (card then list) */}
              <div className="lg:hidden col-span-1 mt-6 space-y-6">

                {/* stacked items */}
                {[
                  { icon: <Hospital size={20} />, title: "Access to proven clinical partners and powerful SaaS tools for clinics." },
                  { icon: <Globe size={20} />, title: "Structured support for NRI outreach and medical tourism referrals." },
                  { icon: <Building2 size={20} />, title: "Opportunities to scale corporate healthcare offerings in your country." }

                ].map((item, i) => (
                  <div
                    key={`m-${i}`}
                    className="flex items-center gap-4 bg-white rounded-lg border border-gray-100 p-4 shadow-sm"
                    data-aos="fade-up"
                    data-aos-delay={i * 60}
                  >
                    <div className="w-12 h-12 rounded-lg bg-teal-50 text-teal-600 flex items-center justify-center">
                      {item.icon}
                    </div>
                    <h3 className="text-base font-medium text-gray-900">{item.title}</h3>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Opportunity SECTION  */}
          <section className="px-6 sm:px-12 md:px-20 py-20" data-aos="fade-up">
            <div className="max-w-7xl mx-auto">

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center mb-6 text-gray-900 tracking-tight" data-aos="zoom-in">
                The{" "}
                <span className="bg-gradient-to-r from-teal-500 to-teal-700 bg-clip-text text-transparent">
                  Opportunity
                </span>
              </h2>

              <p className="text-center text-lg sm:text-3xl text-gray-700 mb-6" data-aos="fade-up">
                4 Fast-Growing Healthcare Verticals. One Global Platform.
              </p>

              <div className="relative">
                <div className="absolute -bottom-12 right-0 flex gap-3 z-20">
                  <button className="swiper-prev px-4 py-2 bg-teal-600 text-white rounded-lg shadow hover:bg-teal-700">
                    <ArrowLeftCircle />
                  </button>
                  <button className="swiper-next px-4 py-2 bg-teal-600 text-white rounded-lg shadow hover:bg-teal-700">
                    <ArrowRightCircle />
                  </button>
                </div>

                <Swiper
                  modules={[Navigation, Autoplay]}
                  spaceBetween={20}
                  slidesPerView={1}
                  navigation={{ nextEl: ".swiper-next", prevEl: ".swiper-prev" }}
                  autoplay={{ delay: 3000, disableOnInteraction: false }}
                  breakpoints={{
                    640: { slidesPerView: 1 },
                    768: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                  }}
                  className="p-6 pb-16"
                >
                  {[
                    {
                      title: "NRI Family Wellness",
                      icon: <Users size={32} />,
                      img: "/service/1.png",
                    },
                    {
                      title: "Medical Tourism",
                      icon: <Plane size={32} />,
                      img: "/service/2.png",
                    },
                    {
                      title: "Clinic Pro",
                      icon: <Stethoscope size={32} />,
                      img: "/service/3.png",
                    },
                    {
                      title: "Corporate Wellness",
                      icon: <Building2 size={32} />,
                      img: "/service/4.png",
                    },
                  ].map((card, i) => (
                    <SwiperSlide key={i}>
                      <div
                        className="
                relative group h-[380px] rounded-3xl overflow-hidden 
                border border-teal-200 transition-all duration-500
                hover:border-teal-700
              "
                        data-aos="fade-up"
                        data-aos-delay={i * 80}
                      >

                        {/* FULL BACKGROUND IMAGE */}
                        <div
                          className="
    absolute inset-0 bg-cover bg-center 
    transition-transform duration-700 group-hover:scale-110
    before:absolute before:inset-0 before:bg-gradient-to-br before:from-transparent before:via-white/70 before:to-transparent
    before:opacity-0 group-hover:before:opacity-100 before:transition-all before:duration-700
    before:translate-x-[-100%] group-hover:before:translate-x-[100%]
  "
                          style={{ backgroundImage: `url(${card.img})` }}
                        />

                        {/* Dark overlay on hover */}
                        <div
                          className="
                  absolute inset-0 
                  bg-gradient-to-b from-black/10 via-black/30 to-black/60
                  opacity-60 group-hover:opacity-90 transition-opacity duration-500
                "
                        />

                        {/* Content Over Image */}
                        <div className="relative z-20 flex flex-col h-full justify-between p-6">

                          {/* Icon + Title */}
                          <div className="flex items-center gap-4">
                            <div
                              className="
                      w-16 h-16 flex items-center justify-center rounded-full
                      bg-white/20 backdrop-blur-md text-white 
                      border border-white/30 shadow-md 
                      transition-all duration-500 
                      group-hover:bg-white group-hover:text-teal-600 group-hover:shadow-xl
                    "
                            >
                              {card.icon}
                            </div>
                            <h3
                              className="
    text-3xl font-bold text-white 
    drop-shadow-lg transition-all duration-500

    /* On hover: show teal gradient text */
    group-hover:bg-gradient-to-r group-hover:from-teal-500 group-hover:to-teal-700 
    group-hover:text-transparent group-hover:bg-clip-text
  "
                            >
                              {card.title}
                            </h3>
                          </div>

                          {/* Bottom Fade Effect */}
                          <div
                            className="
                    absolute inset-x-0 bottom-0 h-24 
                    bg-gradient-to-t from-black/60 to-transparent
                  "
                          />
                        </div>

                        {/* Border glow on hover */}
                        <div
                          className="
                  absolute inset-0 rounded-3xl pointer-events-none 
                  ring-0 group-hover:ring-4 ring-teal-400/40 
                  transition-all duration-500
                "
                        />
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>

              <p
                className="text-center text-gray-700 text-lg mt-16 leading-relaxed"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <span className="font-semibold">You grow Nizcare’s brand.</span><br />
                <span className="text-teal-700 font-semibold">We handle 100% of healthcare operations.</span>
              </p>

            </div>
          </section>

          {/*COUNTRY PARTNER*/}
          <section className="px-6 md:px-20 py-16 sm:py-20 relative" data-aos="fade-up">
            <div className="container mx-auto">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-gray-900 mb-8">
                What You Do as a
                <span className="bg-gradient-to-r from-teal-500 to-teal-700 bg-clip-text text-transparent">
                  {" "}Country Partner
                </span>
              </h2>

              <p
                className="md:text-center text-base sm:text-4xl text-gray-600 mt-2 mx-auto text-justify mb-4"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                As a Country Partner, you represent all four revenue channels of Nizcare in your nation.
              </p>


              <div className="relative mt-12" data-aos="fade-up">
                <div className="absolute bottom-[-3rem] right-0 flex gap-3 z-20">
                  <button className="swiper-prev px-4 py-2 bg-teal-600 text-white rounded-lg shadow hover:bg-teal-700">
                    <ArrowLeftCircle />
                  </button>
                  <button className="swiper-next px-4 py-2 bg-teal-600 text-white rounded-lg shadow hover:bg-teal-700">
                    <ArrowRightCircle />
                  </button>
                </div>

                <Swiper
                  modules={[Navigation, Autoplay]}
                  spaceBetween={20}
                  slidesPerView={1}
                  navigation={{ nextEl: ".swiper-next", prevEl: ".swiper-prev" }}
                  autoplay={{ delay: 3000, disableOnInteraction: false }}
                  breakpoints={{
                    640: { slidesPerView: 1 },
                    768: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                    1280: { slidesPerView: 4 },
                  }}
                  className="p-10 h-[380px]"
                >
                  {[
                    {
                      title: "For NRIs & Their Families in India",
                      desc: (
                        <>
                          <span className="font-bold">Seamless Medical Care:</span> Access top-quality healthcare in India with personalized support and concierge services. <br />
                          <span className="font-bold">Family Health Management:</span> Comprehensive health solutions for your loved ones back home.
                        </>
                      ),
                    },
                    {
                      title: "Medical Tourism for International Patients",
                      desc: (
                        <>
                          <span className="font-bold">India's Best Healthcare:</span> Support global patients coming to India for surgeries, second opinions, treatments & wellness programs.
                        </>
                      ),
                    },
                    {
                      title: "Clinic Pro: Transforming Healthcare Delivery",
                      desc: (
                        <>
                          <span className="font-bold">Digital Clinic Management:</span> Promote our AI-powered clinic management suite to clinics, doctors & polyclinics. Earn recurring software licensing revenue. <br />
                          <span className="font-bold">Partner with Nizcare:</span> Digitize healthcare practice and elevate patient care with our expertise.
                        </>
                      ),
                    },
                    {
                      title: "Corporate Wellness Solutions",
                      desc: (
                        <>
                          <span className="font-bold">Provide corporate wellness:</span> solutions—employee healthcare, preventive screenings, chronic care, and mental health programs. <br />
                          <span className="font-bold">Boost Productivity & Satisfaction:</span> Enhance employee well-being and performance with Nizcare's tailored corporate solutions.
                        </>
                      ),
                    },
                    {
                      title: "Nizcare for Common Users",
                      desc: (
                        <>
                          <span className="font-bold">Accessible Healthcare:</span> Soon launching affordable, high-quality health services directly to individuals. <br />
                          <span className="font-bold">Your Health, Our Priority:</span> Experience personalized health management and wellness support.
                        </>
                      ),
                    },
                  ].map((slide, i) => (
                    <SwiperSlide key={i} className="h-full">
                      <div
                        className="group relative overflow-hidden p-7 rounded-2xl border border-teal-200 h-full flex flex-col transition-all duration-500 ease-in-out"
                        data-aos="fade-up"
                        data-aos-delay={120 + i * 80}
                      >
                        {/* Animated fill — starts height 0, grows to full on hover */}
                        <div
                          className="absolute left-0 right-0 bottom-0 h-0 group-hover:h-full transition-[height] duration-600 ease-in-out bg-gradient-to-t from-teal-700 to-teal-500 z-0"
                          aria-hidden="true"
                        />

                        {/* Content above the animated background */}
                        <div className="relative z-10 flex flex-col h-full">
                          <h3 className="text-xl font-extrabold text-center text-teal-600 mb-2 group-hover:text-white transition-colors duration-300">
                            {slide.title}
                          </h3>
                          <p className="text-gray-600 leading-relaxed flex-grow text-justify group-hover:text-white transition-colors duration-300">
                            {slide.desc}
                          </p>
                        </div>
                      </div>

                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>

              <p
                className="text-center text-lg sm:text-xl font-semibold text-gray-800 mt-16 max-w-3xl mx-auto"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                A complete multi-vertical healthcare model —{" "}
                <span className="text-teal-600">you will lead Nizcare's growth in your country.</span>
              </p>
            </div>
          </section>

          {/* WHY NIZCARE */}
          <section className="relative px-6 md:px-20 py-20" data-aos="fade-up">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-25 items-start">
              {/* LEFT TIMELINE / ITEMS (desktop) */}
              <div className="hidden lg:block lg:col-span-5 relative">
                {/* vertical line */}
                <div className="absolute left-[240px] top-6 bottom-6 w-[2px] bg-gradient-to-b from-teal-300 to-teal-200 rounded" />

                <div className="space-y-8">
                  {[
                    { icon: <HeartPulse size={20} />, title: "Parents’ Health Back Home" },
                    { icon: <AlertTriangle size={20} />, title: "Rising Medical Costs" },
                    { icon: <Handshake size={20} />, title: "Uncoordinated Care" },
                    { icon: <Eye size={20} />, title: "Lack of Transparency" },
                    { icon: <ShieldCheck size={20} />, title: "Assessing Medical Quality" },
                  ].map((item, i) => (
                    <div key={i} className="relative flex items-center">
                      {/* card */}
                      <div
                        className="bg-white rounded-2xl shadow-sm border border-teal-200 p-6 w-full max-w-[520px]"
                        data-aos="fade-up"
                        data-aos-delay={i * 80}
                      >
                        <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
                      </div>

                      {/* circular icon badge to the right of card, overlapping the vertical line */}
                      <div
                        className="absolute right-[-64px] -translate-x-1/2 flex items-center justify-center"
                        style={{ transformOrigin: "center" }}
                      >
                        <div className="relative">
                          <div className="w-14 h-14 rounded-full bg-white border border-teal-100 shadow-md flex items-center justify-center">
                            <div className="w-10 h-10 rounded-full bg-teal-50 text-teal-600 flex items-center justify-center">
                              {item.icon}
                            </div>
                          </div>
                          {/* small connector dot on the right of vertical line */}
                          <span className="absolute -left-[36px] top-1/2 -translate-y-1/2 w-3 h-3 bg-teal-600 rounded-full shadow-sm" />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* RIGHT FEATURE CARD */}
              <div className="lg:col-span-7 col-span-1 flex items-center md:mt-20">
                <div className="w-full">
                  <div
                    className="bg-white rounded-3xl border border-teal-200 shadow-[0_30px_60px_rgba(6,78,59,0.06)] p-10 lg:p-14 max-w-3xl ml-auto"
                    data-aos="fade-left"
                  >
                    <h2 className="text-4xl font-extrabold text-gray-900 mb-6">
                      Why{" "}
                      <span className="bg-gradient-to-r from-teal-500 to-teal-700 bg-clip-text text-transparent">
                        Nizcare?
                      </span>
                    </h2>

                    <p className="text-gray-700 text-lg leading-relaxed text-justify">
                      Nizcare is a complete global health ecosystem designed for Indians living abroad.
                      We address the biggest challenges faced by international families through a
                      coordinated, transparent and high-quality medical platform trusted worldwide.
                    </p>

                    <div className="mt-8 flex items-center gap-4">
                      <div className="h-1 w-28 bg-gradient-to-r from-teal-400 to-teal-600 rounded-full" />
                      {/* small floating dot under underline */}
                      <div className="w-3 h-3 rounded-full bg-teal-600 shadow-md" />
                    </div>
                  </div>
                </div>
              </div>

              {/* MOBILE / TABLET: stacked fallback (card then list) */}
              <div className="lg:hidden col-span-1 mt-6 space-y-6">

                {/* stacked items */}
                {[
                  { icon: <HeartPulse size={20} />, title: "Parents’ Health Back Home" },
                  { icon: <AlertTriangle size={20} />, title: "Rising Medical Costs" },
                  { icon: <Handshake size={20} />, title: "Uncoordinated Care" },
                  { icon: <Eye size={20} />, title: "Lack of Transparency" },
                  { icon: <ShieldCheck size={20} />, title: "Assessing Medical Quality" },
                ].map((item, i) => (
                  <div
                    key={`m-${i}`}
                    className="flex items-center gap-4 bg-white rounded-lg border border-gray-100 p-4 shadow-sm"
                    data-aos="fade-up"
                    data-aos-delay={i * 60}
                  >
                    <div className="w-12 h-12 rounded-lg bg-teal-50 text-teal-600 flex items-center justify-center">
                      {item.icon}
                    </div>
                    <h3 className="text-base font-medium text-gray-900">{item.title}</h3>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Partner Benefits */}
          <section className="relative px-6 md:px-20 py-28 overflow-hidden" data-aos="fade-up">
            <div className="container mx-auto relative z-10">

              {/* Section Title */}
              <h2
                className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center text-gray-900 mb-4"
                data-aos="zoom-in"
              >
                Partner{" "}
                <span className="bg-gradient-to-r from-teal-500 to-teal-700 bg-clip-text text-transparent">
                  Benefits
                </span>
              </h2>

              {/* Wrapper */}
              <div className="max-w-7xl mx-auto py-12 space-y-16">

                {/* ===== FIRST ROW (4 Cards) ===== */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
                  {[
                    {
                      icon: <LucideGlobe size={28} />,
                      title: "Exclusive Territory Rights",
                      desc: "Be the official partner for your country/region.",
                    },
                    {
                      icon: <DollarSign size={28} />,
                      title: "Revenue Share",
                      desc: "Earn from all 5 verticals with recurring commissions.",
                    },
                    {
                      icon: <UserCheck size={28} />,
                      title: "Partner Success Manager",
                      desc: "Dedicated guidance to help you succeed.",
                    },
                    {
                      icon: <Award size={28} />,
                      title: "Global Recognition",
                      desc: "Boost your authority with our trusted brand.",
                    },
                  ].map((benefit, i) => (
                    <div
                      key={i}
                      data-aos="fade-up"
                      data-aos-delay={i * 80}
                      className="
              group bg-white p-8 rounded-3xl border border-teal-200 shadow-xl
              flex flex-col text-left 
              transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl
            "
                    >
                      {/* Header Row: Icon Left & Title Right */}
                      <div className="flex items-center gap-4 mb-4">
                        <div
                          className="
                  w-16 h-16 p-4 flex items-center justify-center rounded-full
                  bg-gradient-to-r from-teal-400 to-teal-600 text-white shadow-md
                  transition-all duration-500 ease-in-out
                  group-hover:shadow-xl
                "
                        >
                          {benefit.icon}
                        </div>

                        <h3
                          className="
                  text-lg font-bold text-gray-900 
                  transition-colors duration-300
                "
                        >
                          {benefit.title}
                        </h3>
                      </div>
                      <hr className="mb-4 text-gray-200" />

                      {/* Description */}
                      <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                        {benefit.desc}
                      </p>
                    </div>
                  ))}
                </div>

                {/* ===== SECOND ROW (3 Cards) ===== */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                  {[
                    {
                      icon: <BookOpen size={28} />,
                      title: "Comprehensive Training & Support",
                      desc: "Access our expertise in healthcare management, marketing, and operations.",
                    },
                    {
                      icon: <Calendar size={28} />,
                      title: "Brand Building Opportunities",
                      desc: "Collaborate on marketing initiatives and promote Nizcare's global brand.",
                    },
                    {
                      icon: <BarChart2 size={28} />,
                      title: "Analytics Dashboard",
                      desc: "Track your leads and performance in real-time.",
                    },
                  ].map((benefit, i) => (
                    <div
                      key={i}
                      data-aos="fade-up"
                      data-aos-delay={120 + i * 80}
                      className="
              group bg-white p-8 rounded-3xl border border-teal-200 shadow-xl
              flex flex-col text-left 
              transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl
            "
                    >
                      {/* Header Row: Icon Left & Title Right */}
                      <div className="flex items-center gap-4 mb-4">
                        <div
                          className="
                  w-16 h-16 p-4 flex items-center justify-center rounded-full
                  bg-gradient-to-r from-teal-400 to-teal-600 text-white shadow-md
                  transition-all duration-500 ease-in-out
                  group-hover:shadow-xl
                "
                        >
                          {benefit.icon}
                        </div>

                        <h3
                          className="
                  text-lg font-bold text-gray-900 
                  transition-colors duration-300
                "
                        >
                          {benefit.title}
                        </h3>
                      </div>
                      <hr className="mb-4 text-gray-200" />

                      {/* Description */}
                      <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                        {benefit.desc}
                      </p>
                    </div>
                  ))}
                </div>

              </div>
            </div>
          </section>

          {/* Eligibility Criteria */}
          <section className="relative px-4 sm:px-8 md:px-20 py-16 sm:py-20 md:py-24" data-aos="fade-up">
            <div className="container mx-auto">
              <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 text-center mb-10 sm:mb-14 md:mb-16 leading-tight" data-aos="zoom-in">
                Eligibility{" "}
                <span className="bg-gradient-to-r from-teal-500 to-teal-700 bg-clip-text text-transparent">
                  Criteria
                </span>
              </h2>

              <div className="max-w-3xl mx-auto space-y-8 sm:space-y-10">
                {[
                  {
                    icon: <Users size={24} />,
                    text: "Strong network and connections with healthcare providers, clinics, and hospitals."
                  },
                  {
                    icon: <Briefcase size={24} />,
                    text: "Proven track record of success in business or entrepreneurship."
                  },
                  {
                    icon: <Users size={24} />,
                    text: "Expertise in regulatory compliance, legal, and local operations."
                  },
                  {
                    icon: <LucideGlobe size={24} />,
                    text: "Passion for transforming healthcare delivery and improving patient outcomes."
                  }
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-4 sm:gap-6 group"
                    data-aos="fade-right"
                    data-aos-delay={i * 80}
                  >
                    <div
                      className="min-w-[48px] min-h-[48px] sm:w-14 sm:h-14 flex items-center justify-center 
                     bg-gradient-to-br from-teal-500 to-teal-700 text-white 
                     rounded-2xl shadow-lg group-hover:scale-110 
                     transition-transform duration-300"
                    >
                      {item.icon}
                    </div>

                    <p className="text-gray-800 text-base sm:text-lg font-medium leading-relaxed">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>

              <div className="text-center mt-16 md:mt-20 px-2" data-aos="fade-up" data-aos-delay="150">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
                Join Our Global <span className="text-teal-600">Partnership</span> Program.
              </h2>

              <p className="mt-4 text-gray-600 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
                Nizcare invites you to be part of a next-generation healthcare movement.
                Together, we can enhance wellness and medical support for Indians worldwide.
              </p>
            </div>
            </div>
          </section>

          {/* Impact & Market Potential */}
          <section className="w-full py-10 px-6 md:px-20" data-aos="fade-up">

            {/* Impact Grid */}
            <div className="container mx-auto flex flex-col mt-16">

              <h3
                className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 text-center mb-10"
                data-aos="zoom-in"
              >
                Impact & Market <span className="text-teal-600">Potential</span>
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 w-full mb-20">

                {[
                  { number: "32M+", label: "Indian Diaspora", icon: <LucideGlobe size={28} /> },
                  { number: "$9B", label: "Medical Tourism Market", icon: <Briefcase size={28} /> },
                  { number: "High", label: "Responsibility Toward Parents", icon: <HeartHandshake size={28} /> },
                  { number: "Rapid", label: "Digital Health Adoption", icon: <Cpu size={28} /> },
                  { number: "Growing", label: "Corporate Wellness Demand", icon: <Users size={28} /> },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex flex-col items-center rounded-xl p-6 border border-gray-200 bg-white hover:border-teal-600 transition-all"
                    data-aos="zoom-in"
                    data-aos-delay={i * 70}
                  >
                    <div className="w-16 h-16 flex items-center justify-center rounded-full bg-teal-100 text-gray-700">
                      {item.icon}
                    </div>

                    <p className="text-3xl font-extrabold text-gray-900 mt-4">{item.number}</p>
                    <p className="text-gray-600 text-center text-sm sm:text-base mt-2">{item.label}</p>
                  </div>
                ))}
              </div>

              {/* Launch Updates */}
              <h3
                className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 text-center mb-3"
                data-aos="fade-up"
              >
                Launch <span className="text-teal-600">Updates</span> & Opportunities
              </h3>

              <p
                className="text-gray-600 max-w-2xl mx-auto text-center text-base sm:text-lg leading-relaxed"
                data-aos="fade-up"
                data-aos-delay="120"
              >
                Stay updated on our global rollout and become one of the first to explore
                Nizcare’s upcoming healthcare services. Partner with us and help shape the
                future of global wellness.
              </p>
            </div>
          </section>

          {/* COUNTRY PARTNER CTA */}
          <section
            className="px-6 md:px-20 py-16 flex flex-col items-center text-center"
            data-aos="fade-up"
          >

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
              Lead <span className="text-teal-600">Nizcare</span> in Your Country
            </h2>

            <p className="text-base sm:text-lg text-gray-600 mb-6 max-w-xl leading-relaxed">
              Build meaningful impact. Grow your income. Support millions of Indians abroad
              in caring for their families.
            </p>

            <a
              href="#"
              className="inline-block bg-teal-600 text-white font-semibold text-lg sm:text-xl px-8 py-3 rounded-full hover:bg-teal-700 transition-all"
              data-aos="zoom-in"
            >
              Apply to Become a Country Partner
            </a>
          </section>

          {/* CLEAN FOOTER */}
          <footer className="bg-gray-50 border-t pt-12 pb-8 px-6 md:px-20" data-aos="fade-up">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
              <div className="text-center md:text-left">
                <img src={Logo} width={140} alt="logo" className="mx-auto md:mx-0" />
                <p className="mt-4 text-gray-600 leading-relaxed text-sm sm:text-base text-justify">
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
                    <FaGlobeIcon size={16} />
                  </a>
                </div>
              </div>

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

              <div className="text-center md:text-left">
                <h3 className="text-lg font-semibold text-teal-600 mb-3">Explore</h3>
                <p className="text-gray-600 text-sm sm:text-base text-justify">
                  Join the Nizcare Global Partner Network Today.
                </p>
                <p className="text-gray-600 mb-4 text-sm sm:text-base text-justify">
                  Expand healthcare access. Earn recurring income. Make a difference.
                </p>
                <a
                  href="#"
                  className="inline-block bg-gradient-to-r from-teal-500 to-teal-700 text-white p-2 rounded-2xl px-6 transition-all duration-300 hover:bg-teal-700 hover:shadow-lg hover:scale-[1.03]"
                >
                  Become a Global Partner
                </a>
              </div>
            </div>

            <div className="border-t mt-10 pt-6 text-center text-gray-600 text-sm">
              © 2025 <span className="text-teal-600">Nizcare</span>. All rights reserved.
            </div>
          </footer>
        </div>
      </div>
    </>
  );
};

export default NRI;