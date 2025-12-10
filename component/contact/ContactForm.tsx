"use client";
import { send } from "@emailjs/browser";
import { useState } from "react";
import { FaEnvelope, FaMapMarkerAlt, FaPhone } from "react-icons/fa";
import Swal from "sweetalert2";
import ScrollMotion from "../motion/ScrollMotion";

type ContactFormState = {
  firstname: string;
  lastname: string;
  email: string;
  phone: string;
  message: string;
};

type ContactFormErrors = {
  firstname?: string;
  lastname?: string;
  email?: string;
  phone?: string;
  message?: string;
};

export default function ContactForm() {
  const goldColor = "#FFD700";

  const [formState, setFormState] = useState<ContactFormState>({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [formErrors, setFormErrors] = useState<ContactFormErrors>({});

  const validate = (values: ContactFormState): ContactFormErrors => {
    const errors: ContactFormErrors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.firstname) errors.firstname = "First name is required!";
    if (!values.lastname) errors.lastname = "Last name is required!";
    if (!values.email) errors.email = "Email is required!";
    else if (!regex.test(values.email)) errors.email = "Invalid email format!";
    if (!values.phone) errors.phone = "Phone number is required!";
    if (!values.message) errors.message = "Message is required!";
    return errors;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const errors = validate(formState);
    setFormErrors(errors);

    if (Object.keys(errors).length === 0) {
      send(
        "service_78ezzng", // Your EmailJS service ID
        "template_jd79ph8", // Your EmailJS template ID
        formState,
        "FAcMdTK-cDe5gXZaD" // Your EmailJS public key
      )
        .then(() => {
          setLoading(false);
          Swal.fire({
            icon: "success",
            text: "Thank you for reaching out. Your information has been successfully submitted. Our team will respond shortly.",
            confirmButtonColor: "#131b2a",
          }).then(() => {
            setFormState({
              firstname: "",
              lastname: "",
              email: "",
              phone: "",
              message: "",
            });
            setFormErrors({});
          });
        })
        .catch((err) => {
          console.error("Email error:", err);
          setLoading(false);
          Swal.fire({
            icon: "error",
            text: "Something went wrong! Please try again.",
          });
        });
    } else {
      setLoading(false);
    }
  };

  return (
    <section className="relative py-24 min-h-screen overflow-hidden bg-gradient-to-br from-[#005B70] to-[#004050]">
      {/* --- Background Elements --- */}
      {/* Abstract shapes for a 'cool' modern feel */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-teal-400/20 blur-[120px]" />
        <div className="absolute top-[40%] -right-[10%] w-[40%] h-[40%] rounded-full bg-cyan-300/10 blur-[100px]" />
        <div className="absolute -bottom-[10%] left-[20%] w-[60%] h-[40%] rounded-full bg-[#003845]/40 blur-[120px]" />
      </div>

      <div className="relative container mx-auto px-4 md:px-8 z-10">
        {/* Title */}
        <ScrollMotion>
          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold font-serif tracking-wide leading-tight mb-8 text-center"
            style={{
              color: goldColor,
              textShadow: "2px 2px 4px rgba(0,0,0,0.4)",
            }}
          >
            Polk Country Bully Project <br /> Contact form
          </h2>
        </ScrollMotion>

        {/* Info Cards */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* Address Card */}
          <ScrollMotion delay={0.1}>
            <div className="relative bg-white/10 backdrop-blur-md rounded-3xl p-8 shadow-2xl flex flex-col items-center text-center gap-4 h-full border border-white/20 group hover:-translate-y-2 transition-transform duration-300 hover:bg-white/15">
              <div className="p-5 bg-white/20 text-white rounded-2xl shadow-inner mb-2 relative z-10 border border-white/10">
                <FaMapMarkerAlt className="text-2xl" />
              </div>
              <div className="relative z-10 text-white">
                <h3 className="text-xl font-bold font-serif mb-2 tracking-wide text-[#FFD700]">
                  Address
                </h3>
                <p className="text-gray-100/90 text-base leading-relaxed">
                  5840 W Brannen Rd, Lakeland,
                  <br />
                  FL 33813, United States
                </p>
              </div>
            </div>
          </ScrollMotion>

          {/* Email Card */}
          <ScrollMotion delay={0.2}>
            <div className="relative bg-white/10 backdrop-blur-md rounded-3xl p-8 shadow-2xl flex flex-col items-center text-center gap-4 h-full border border-white/20 group hover:-translate-y-2 transition-transform duration-300 hover:bg-white/15">
              <div className="p-5 bg-white/20 text-white rounded-2xl shadow-inner mb-2 relative z-10 border border-white/10">
                <FaEnvelope className="text-2xl" />
              </div>
              <div className="relative z-10 text-white">
                <h3 className="text-xl font-bold font-serif mb-2 tracking-wide text-[#FFD700]">
                  Email Address
                </h3>
                <p className="text-gray-100/90 text-base break-all">
                  support@bullyprojectrescue.com
                </p>
              </div>
            </div>
          </ScrollMotion>

          {/* Phone Card */}
          <ScrollMotion delay={0.3}>
            <div className="relative bg-white/10 backdrop-blur-md rounded-3xl p-8 shadow-2xl flex flex-col items-center text-center gap-4 h-full border border-white/20 group hover:-translate-y-2 transition-transform duration-300 hover:bg-white/15">
              <div className="p-5 bg-white/20 text-white rounded-2xl shadow-inner mb-2 relative z-10 border border-white/10">
                <FaPhone className="text-2xl" />
              </div>
              <div className="relative z-10 text-white">
                <h3 className="text-xl font-bold font-serif mb-2 tracking-wide text-[#FFD700]">
                  Phone
                </h3>
                <p className="text-gray-100/90 text-base">+1 863-816-6995</p>
              </div>
            </div>
          </ScrollMotion>
        </div>

        {/* Form */}
        <ScrollMotion delay={0.4}>
          <div className="relative max-w-7xl mx-auto bg-white/10 backdrop-blur-xl rounded-3xl p-8 md:p-12 shadow-2xl overflow-hidden border border-white/20">
            <form className="space-y-8 relative z-10" onSubmit={handleSubmit}>
              {/* First Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="block text-sm font-bold text-white/90 tracking-wide uppercase">
                    First Name
                  </label>
                  <input
                    type="text"
                    name="firstname"
                    value={formState.firstname}
                    onChange={(e) =>
                      setFormState({ ...formState, firstname: e.target.value })
                    }
                    placeholder="Enter first name"
                    className="w-full p-4 rounded-xl bg-black/20 border border-white/10 text-white placeholder-white/40 focus:border-[#FFD700] focus:ring-2 focus:ring-[#FFD700]/50 transition-all outline-none"
                  />
                  {formErrors.firstname && (
                    <span className="text-red-300 text-sm font-medium ml-1">
                      {formErrors.firstname}
                    </span>
                  )}
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-bold text-white/90 tracking-wide uppercase">
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="lastname"
                    value={formState.lastname}
                    onChange={(e) =>
                      setFormState({ ...formState, lastname: e.target.value })
                    }
                    placeholder="Enter last name"
                    className="w-full p-4 rounded-xl bg-black/20 border border-white/10 text-white placeholder-white/40 focus:border-[#FFD700] focus:ring-2 focus:ring-[#FFD700]/50 transition-all outline-none"
                  />
                  {formErrors.lastname && (
                    <span className="text-red-300 text-sm font-medium ml-1">
                      {formErrors.lastname}
                    </span>
                  )}
                </div>
              </div>

              {/* Second Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="block text-sm font-bold text-white/90 tracking-wide uppercase">
                    Phone
                  </label>
                  <input
                    type="text"
                    name="phone"
                    value={formState.phone}
                    onChange={(e) =>
                      setFormState({ ...formState, phone: e.target.value })
                    }
                    placeholder="(123) 456-7890"
                    className="w-full p-4 rounded-xl bg-black/20 border border-white/10 text-white placeholder-white/40 focus:border-[#FFD700] focus:ring-2 focus:ring-[#FFD700]/50 transition-all outline-none"
                  />
                  {formErrors.phone && (
                    <span className="text-red-300 text-sm font-medium ml-1">
                      {formErrors.phone}
                    </span>
                  )}
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-bold text-white/90 tracking-wide uppercase">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formState.email}
                    onChange={(e) =>
                      setFormState({ ...formState, email: e.target.value })
                    }
                    placeholder="you@example.com"
                    className="w-full p-4 rounded-xl bg-black/20 border border-white/10 text-white placeholder-white/40 focus:border-[#FFD700] focus:ring-2 focus:ring-[#FFD700]/50 transition-all outline-none"
                  />
                  {formErrors.email && (
                    <span className="text-red-300 text-sm font-medium ml-1">
                      {formErrors.email}
                    </span>
                  )}
                </div>
              </div>

              {/* Message */}
              <div className="space-y-2">
                <label className="block text-sm font-bold text-white/90 tracking-wide uppercase">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formState.message}
                  onChange={(e) =>
                    setFormState({ ...formState, message: e.target.value })
                  }
                  placeholder="How can we help you?"
                  className="w-full p-4 h-48 rounded-xl bg-black/20 border border-white/10 text-white placeholder-white/40 focus:border-[#FFD700] focus:ring-2 focus:ring-[#FFD700]/50 transition-all outline-none resize-none"
                ></textarea>
                {formErrors.message && (
                  <span className="text-red-300 text-sm font-medium ml-1">
                    {formErrors.message}
                  </span>
                )}
              </div>

              {/* Submit Button */}
              <div className="text-center pt-4">
                <button
                  type="submit"
                  disabled={loading}
                  className="px-12 py-4 rounded-full bg-white text-[#005B70] shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 font-bold tracking-wide flex items-center justify-center gap-3 mx-auto disabled:opacity-70 disabled:cursor-not-allowed uppercase"
                >
                  {loading ? (
                    "Sending..."
                  ) : (
                    <>
                      <FaEnvelope /> Send Message
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </ScrollMotion>
      </div>
    </section>
  );
}
