"use client";

import { send } from "@emailjs/browser";
import { CalendarDays, PawPrint, Ticket, Users, X } from "lucide-react";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";

type TicketFormState = {
  firstname: string;
  lastname: string;
  email: string;
  phone: string;
  eventName: string;
  ticketCount: string;
  eventDate: string;
  message: string;
};

type TicketFormErrors = Partial<Record<keyof TicketFormState, string>>;

const initialFormState: TicketFormState = {
  firstname: "",
  lastname: "",
  email: "",
  phone: "",
  eventName: "",
  ticketCount: "2",
  eventDate: "",
  message: "",
};

const formFieldClassName =
  "w-full rounded-2xl border border-white/15 bg-black/30 px-4 py-3 text-white placeholder:text-white/40 outline-none transition-all focus:border-[#FFD700] focus:ring-2 focus:ring-[#FFD700]/45";

const popupStorageKey = "hero-ticket-popup";

const HeroTicketPopup = ({ startTimer }: { startTimer: boolean }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formState, setFormState] = useState<TicketFormState>(initialFormState);
  const [formErrors, setFormErrors] = useState<TicketFormErrors>({});

  useEffect(() => {
    if (!startTimer) {
      return;
    }

    const hasSeenPopup =
      process.env.NODE_ENV === "development"
        ? null
        : window.sessionStorage.getItem(popupStorageKey);

    if (hasSeenPopup === "dismissed" || hasSeenPopup === "submitted") {
      return;
    }

    const timer = window.setTimeout(() => {
      setIsOpen(true);
    }, 5000);

    return () => window.clearTimeout(timer);
  }, [startTimer]);

  useEffect(() => {
    const originalStyle = window.getComputedStyle(document.body).overflow;

    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = originalStyle;
    }

    return () => {
      document.body.style.overflow = originalStyle;
    };
  }, [isOpen]);

  const closePopup = () => {
    window.sessionStorage.setItem(popupStorageKey, "dismissed");
    setIsOpen(false);
  };

  const validate = (values: TicketFormState): TicketFormErrors => {
    const errors: TicketFormErrors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if (!values.firstname.trim()) errors.firstname = "First name is required.";
    if (!values.lastname.trim()) errors.lastname = "Last name is required.";
    if (!values.email.trim()) errors.email = "Email is required.";
    else if (!regex.test(values.email)) {
      errors.email = "Enter a valid email address.";
    }
    if (!values.phone.trim()) errors.phone = "Phone number is required.";
    if (!values.eventName.trim()) errors.eventName = "Choose an event.";
    if (!values.ticketCount.trim()) {
      errors.ticketCount = "Select ticket quantity.";
    }
    if (!values.eventDate.trim()) errors.eventDate = "Pick a preferred date.";

    return errors;
  };

  const handleChange =
    (field: keyof TicketFormState) =>
    (
      e: React.ChangeEvent<
        HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
      >,
    ) => {
      setFormState((prev) => ({ ...prev, [field]: e.target.value }));
      setFormErrors((prev) => ({ ...prev, [field]: undefined }));
    };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const errors = validate(formState);
    setFormErrors(errors);

    if (Object.keys(errors).length > 0) {
      return;
    }

    setLoading(true);

    const emailPayload = {
      firstname: formState.firstname,
      lastname: formState.lastname,
      email: formState.email,
      phone: formState.phone,
      message: [
        "New ticket booking request",
        `Event: ${formState.eventName}`,
        `Tickets: ${formState.ticketCount}`,
        `Preferred Date: ${formState.eventDate}`,
        formState.message ? `Notes: ${formState.message}` : "",
      ]
        .filter(Boolean)
        .join("\n"),
    };

    try {
      await send(
        "service_78ezzng",
        "template_jd79ph8",
        emailPayload,
        "FAcMdTK-cDe5gXZaD",
      );

      window.sessionStorage.setItem(popupStorageKey, "submitted");
      setIsOpen(false);
      setFormState(initialFormState);
      setFormErrors({});

      await Swal.fire({
        icon: "success",
        text: "Ticket request submitted. The rescue team will contact you with availability and confirmation details.",
        confirmButtonColor: "#131b2a",
      });
    } catch (error) {
      console.error("Ticket booking request failed:", error);
      await Swal.fire({
        icon: "error",
        text: "Something went wrong while sending your booking request. Please try again.",
        confirmButtonColor: "#131b2a",
      });
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/75 p-4 backdrop-blur-md">
      <div className="relative w-full max-w-5xl overflow-hidden rounded-[2rem] border border-white/15 bg-[#031b24]/95 shadow-[0_30px_80px_rgba(0,0,0,0.45)]">
        <div className="absolute inset-0 bg-linear-to-br from-cyan-900/35 via-transparent to-amber-700/25 pointer-events-none" />
        <div className="absolute -left-16 top-12 h-48 w-48 rounded-full bg-[#F424B2]/18 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-0 h-56 w-56 rounded-full bg-[#FFD700]/16 blur-3xl pointer-events-none" />

        <button
          type="button"
          onClick={closePopup}
          aria-label="Close ticket popup"
          className="absolute right-4 top-4 z-20 rounded-full border border-white/10 bg-white/10 p-2 text-white transition-colors hover:bg-white/20"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-[0.92fr_1.08fr]">
          <div className="border-b border-white/10 p-7 lg:border-b-0 lg:border-r lg:p-10">
            <p className="mb-3 text-sm font-black uppercase tracking-[0.35em] text-[#F8D76E]">
              Limited Seats
            </p>
            <h3
              className="mb-5 max-w-md text-4xl font-extrabold leading-tight text-[#FFD700] md:text-5xl font-serif"
              style={{ textShadow: "2px 2px 0 rgba(0,0,0,0.35)" }}
            >
              Reserve your spot at the next rescue event
            </h3>

            <div className="space-y-4">
              <div className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/8 p-4">
                <div className="rounded-2xl bg-white/10 p-3">
                  <Ticket className="h-5 w-5 text-[#FFD700]" />
                </div>
                <div>
                  <p className="font-bold text-white">Fast booking request</p>
                  <p className="text-sm leading-6 text-white/70">
                    Guests can request seats without leaving the homepage.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/8 p-4">
                <div className="rounded-2xl bg-white/10 p-3">
                  <CalendarDays className="h-5 w-5 text-[#FFD700]" />
                </div>
                <div>
                  <p className="font-bold text-white">Event-aware fields</p>
                  <p className="text-sm leading-6 text-white/70">
                    Includes event type, date, ticket count, and special notes.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/8 p-4">
                <div className="rounded-2xl bg-white/10 p-3">
                  <Users className="h-5 w-5 text-[#FFD700]" />
                </div>
                <div>
                  <p className="font-bold text-white">Matches site behavior</p>
                  <p className="text-sm leading-6 text-white/70">
                    Uses the same email flow and modal treatment already present
                    in the project.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="p-7 lg:p-10">
            <form className="space-y-5" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-bold uppercase tracking-wide text-white/85">
                    First Name
                  </label>
                  <input
                    type="text"
                    value={formState.firstname}
                    onChange={handleChange("firstname")}
                    placeholder="Enter first name"
                    className={formFieldClassName}
                  />
                  {formErrors.firstname && (
                    <p className="mt-2 text-sm text-red-300">
                      {formErrors.firstname}
                    </p>
                  )}
                </div>

                <div>
                  <label className="mb-2 block text-sm font-bold uppercase tracking-wide text-white/85">
                    Last Name
                  </label>
                  <input
                    type="text"
                    value={formState.lastname}
                    onChange={handleChange("lastname")}
                    placeholder="Enter last name"
                    className={formFieldClassName}
                  />
                  {formErrors.lastname && (
                    <p className="mt-2 text-sm text-red-300">
                      {formErrors.lastname}
                    </p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-bold uppercase tracking-wide text-white/85">
                    Email
                  </label>
                  <input
                    type="email"
                    value={formState.email}
                    onChange={handleChange("email")}
                    placeholder="you@example.com"
                    className={formFieldClassName}
                  />
                  {formErrors.email && (
                    <p className="mt-2 text-sm text-red-300">
                      {formErrors.email}
                    </p>
                  )}
                </div>

                <div>
                  <label className="mb-2 block text-sm font-bold uppercase tracking-wide text-white/85">
                    Phone
                  </label>
                  <input
                    type="text"
                    value={formState.phone}
                    onChange={handleChange("phone")}
                    placeholder="(123) 456-7890"
                    className={formFieldClassName}
                  />
                  {formErrors.phone && (
                    <p className="mt-2 text-sm text-red-300">
                      {formErrors.phone}
                    </p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-bold uppercase tracking-wide text-white/85">
                    Event
                  </label>
                  <select
                    value={formState.eventName}
                    onChange={handleChange("eventName")}
                    className={formFieldClassName}
                  >
                    <option value="" className="text-black">
                      Select an event
                    </option>
                    <option value="Meet Our Bullies" className="text-black">
                      Meet Our Bullies
                    </option>
                    <option
                      value="Caregiver Coffee Chat"
                      className="text-black"
                    >
                      Caregiver Coffee Chat
                    </option>
                    <option value="Rescue Roundtable" className="text-black">
                      Rescue Roundtable
                    </option>
                    <option value="Walk, Wag & Hang" className="text-black">
                      Walk, Wag & Hang
                    </option>
                  </select>
                  {formErrors.eventName && (
                    <p className="mt-2 text-sm text-red-300">
                      {formErrors.eventName}
                    </p>
                  )}
                </div>

                <div>
                  <label className="mb-2 block text-sm font-bold uppercase tracking-wide text-white/85">
                    Tickets
                  </label>
                  <select
                    value={formState.ticketCount}
                    onChange={handleChange("ticketCount")}
                    className={formFieldClassName}
                  >
                    <option value="1" className="text-black">
                      1 Ticket
                    </option>
                    <option value="2" className="text-black">
                      2 Tickets
                    </option>
                    <option value="3" className="text-black">
                      3 Tickets
                    </option>
                    <option value="4" className="text-black">
                      4 Tickets
                    </option>
                    <option value="5+" className="text-black">
                      5+ Tickets
                    </option>
                  </select>
                  {formErrors.ticketCount && (
                    <p className="mt-2 text-sm text-red-300">
                      {formErrors.ticketCount}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <label className="mb-2 block text-sm font-bold uppercase tracking-wide text-white/85">
                  Preferred Date
                </label>
                <input
                  type="date"
                  value={formState.eventDate}
                  onChange={handleChange("eventDate")}
                  className={formFieldClassName}
                />
                {formErrors.eventDate && (
                  <p className="mt-2 text-sm text-red-300">
                    {formErrors.eventDate}
                  </p>
                )}
              </div>

              <div>
                <label className="mb-2 block text-sm font-bold uppercase tracking-wide text-white/85">
                  Notes
                </label>
                <textarea
                  value={formState.message}
                  onChange={handleChange("message")}
                  placeholder="Add guest names, accessibility needs, or anything the team should know."
                  className={`${formFieldClassName} min-h-28 resize-none`}
                />
              </div>

              <div className="flex flex-col gap-3 pt-2 sm:flex-row">
                <button
                  type="submit"
                  disabled={loading}
                  className="inline-flex flex-1 items-center justify-center rounded-full bg-[#F424B2] px-8 py-4 text-base font-extrabold text-white shadow-[0_6px_0_#9e1773] transition-all duration-300 hover:translate-y-1 hover:bg-[#d91a9b] hover:shadow-[0_4px_0_#9e1773] disabled:cursor-not-allowed disabled:opacity-70"
                >
                  <PawPrint className="mr-2 h-5 w-5 fill-current" />
                  {loading ? "Submitting..." : "Book Tickets"}
                </button>

                <button
                  type="button"
                  onClick={closePopup}
                  className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/10 px-6 py-4 text-base font-bold text-white transition-colors hover:bg-white/15"
                >
                  Maybe later
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroTicketPopup;
