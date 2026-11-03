
import { useState } from "react";
import emailjs from "@emailjs/browser";

import {
  Mail,
  Phone,
  ArrowUpRight,
  Send,
  MessageCircle,
  Globe,
  Sparkles,
  CheckCircle,
  AlertCircle
} from "lucide-react";

const SERVICE_ID = "service_89ytp74";
const TEMPLATE_ID = "template_1dixsvn";
const PUBLIC_KEY = "Wk82cxwIcjj0W3JE9";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const [loading, setLoading] = useState(false);

  const [status, setStatus] = useState({
    type: "",
    message: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value
    }));

    if (status.message) {
      setStatus({ type: "", message: "" });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (loading) return;

    const name = formData.name.trim();
    const email = formData.email.trim();
    const subject = formData.subject.trim();
    const message = formData.message.trim();

    if (!name || !subject || !message) {
      setStatus({
        type: "error",
        message: "Please fill in your name, subject and message."
      });
      return;
    }

    if (
      email &&
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
    ) {
      setStatus({
        type: "error",
        message: "Please enter a valid email address."
      });
      return;
    }

    setLoading(true);
    setStatus({ type: "", message: "" });

    try {
      const response = await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          name: name,
          email: email || "Not provided",
          subject: subject,
          title: subject,
          message: message,

          // If visitor provides email, replies go to them.
          // Otherwise, replies go to your own email.
          reply_to: email || "mdmehadifahim1@gmail.com",

          time: new Date().toLocaleString()
        },
        {
          publicKey: PUBLIC_KEY
        }
      );

      console.log("Email sent successfully:", response);

      setStatus({
        type: "success",
        message: "Message sent successfully! Thank you for contacting me."
      });

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });

    } catch (error) {
      console.error("EmailJS Error:", error);

      setStatus({
        type: "error",
        message:
          error.text ||
          "Message could not be sent. Please try again later."
      });

    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <style>{`
        @keyframes contactReveal {
          from {
            opacity: 0;
            transform: translateY(25px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes contactGlow {
          0%, 100% {
            opacity: .25;
          }
          50% {
            opacity: .7;
          }
        }

        .contact-reveal {
          animation: contactReveal .8s ease both;
        }

        .contact-glow {
          animation: contactGlow 5s ease-in-out infinite;
        }

        .contact-card {
          transition:
            transform .35s ease,
            border-color .35s ease,
            box-shadow .35s ease;
        }

        .contact-card:hover {
          transform: translateY(-5px);
          border-color: rgba(52,211,153,.5);
          box-shadow: 0 15px 35px rgba(16,185,129,.09);
        }

        .contact-input {
          transition:
            border-color .3s ease,
            box-shadow .3s ease,
            background .3s ease;
        }

        .contact-input:focus {
          outline: none;
          border-color: rgba(52,211,153,.7);
          box-shadow: 0 0 0 3px rgba(16,185,129,.1);
          background: rgba(16,185,129,.04);
        }

        .contact-submit {
          transition:
            transform .3s ease,
            box-shadow .3s ease;
        }

        .contact-submit:hover:not(:disabled) {
          transform: translateY(-3px);
          box-shadow: 0 10px 30px rgba(16,185,129,.2);
        }

        .contact-submit:disabled {
          cursor: not-allowed;
          opacity: .65;
        }

        @media (prefers-reduced-motion: reduce) {
          .contact-reveal,
          .contact-glow {
            animation: none !important;
          }

          .contact-card,
          .contact-submit {
            transition: none !important;
          }
        }
      `}</style>

      <section
        id="contact"
        className="relative min-h-[calc(100svh-76px)] flex items-center justify-center overflow-hidden bg-[#080b14] text-white px-5 md:px-8 py-8 md:py-10 scroll-mt-[76px]"
      >

        {/* Background Effects */}

        <div className="contact-glow absolute top-0 left-0 w-72 h-72 bg-emerald-500/10 blur-[110px] rounded-full pointer-events-none" />

        <div className="contact-glow absolute bottom-0 right-0 w-72 h-72 bg-cyan-500/10 blur-[110px] rounded-full pointer-events-none" />

        <div className="relative z-10 max-w-7xl w-full mx-auto">

          {/* Heading */}

          <div className="text-center mb-8 contact-reveal">

            <p className="text-emerald-400 text-xs font-bold tracking-[0.3em] uppercase">
              Let's Connect
            </p>

            <h2 className="text-3xl md:text-4xl font-extrabold mt-3">
              Get In{" "}
              <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Touch
              </span>
            </h2>

            <div className="w-16 h-1 rounded-full bg-gradient-to-r from-emerald-400 to-cyan-400 mx-auto mt-4" />

            <p className="text-slate-400 text-sm mt-4">
              Have a project, opportunity, or collaboration in mind?
              Let's connect.
            </p>

          </div>

          {/* Main Content */}

          <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-6 items-stretch">

            {/* Left Information */}

            <div className="contact-reveal flex flex-col gap-5">

              <div className="rounded-3xl border border-white/10 bg-[#111827]/90 p-6 md:p-7 flex-1">

                <div className="flex items-center gap-3 mb-5">

                  <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-400/20 flex items-center justify-center">
                    <MessageCircle
                      size={23}
                      className="text-emerald-400"
                    />
                  </div>

                  <div>
                    <p className="text-[10px] text-emerald-400 tracking-widest uppercase font-bold">
                      Contact Information
                    </p>

                    <h3 className="text-xl font-bold text-white mt-1">
                      Let's Talk
                    </h3>
                  </div>

                </div>

                <p className="text-sm text-slate-400 leading-7 mb-7">
                  I am interested in GIS opportunities, geospatial
                  projects, professional collaboration, and
                  connecting with people working in spatial
                  technology.
                </p>

                {/* Email */}

                <a
                  href="mailto:mdmehadifahim1@gmail.com"
                  className="contact-card flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-4 mb-3"
                >

                  <div className="w-11 h-11 rounded-xl bg-emerald-500/10 flex items-center justify-center shrink-0">
                    <Mail size={20} className="text-emerald-400" />
                  </div>

                  <div className="min-w-0 flex-1">
                    <p className="text-[10px] text-slate-500 uppercase tracking-widest">
                      Email Address
                    </p>

                    <p className="text-xs md:text-sm text-slate-200 font-medium mt-1 break-all">
                      mdmehadifahim1@gmail.com
                    </p>
                  </div>

                  <ArrowUpRight size={17} className="text-emerald-400 shrink-0" />

                </a>

                {/* Phone */}

                <a
                  href="tel:+8801878200775"
                  className="contact-card flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-4 mb-3"
                >

                  <div className="w-11 h-11 rounded-xl bg-cyan-500/10 flex items-center justify-center shrink-0">
                    <Phone size={20} className="text-cyan-400" />
                  </div>

                  <div className="min-w-0 flex-1">
                    <p className="text-[10px] text-slate-500 uppercase tracking-widest">
                      Phone Number
                    </p>

                    <p className="text-sm text-slate-200 font-medium mt-1">
                      +8801878200775
                    </p>
                  </div>

                  <ArrowUpRight size={17} className="text-cyan-400 shrink-0" />

                </a>

                {/* LinkedIn */}

                <a
                  href="https://www.linkedin.com/in/mdmehadihasanfahim"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-card flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-4"
                >

                  <div className="w-11 h-11 rounded-xl bg-blue-500/10 flex items-center justify-center shrink-0">
                    <Globe size={20} className="text-blue-400" />
                  </div>

                  <div className="min-w-0 flex-1">
                    <p className="text-[10px] text-slate-500 uppercase tracking-widest">
                      Professional Network
                    </p>

                    <p className="text-sm text-slate-200 font-medium mt-1">
                      LinkedIn Profile
                    </p>
                  </div>

                  <ArrowUpRight size={17} className="text-blue-400 shrink-0" />

                </a>

              </div>

              {/* Availability */}

              <div className="rounded-2xl border border-emerald-400/20 bg-emerald-500/[0.06] p-5">

                <div className="flex items-center gap-3">

                  <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center">
                    <Sparkles size={20} className="text-emerald-400" />
                  </div>

                  <div>
                    <h4 className="text-sm font-bold text-emerald-300">
                      Open to Opportunities
                    </h4>

                    <p className="text-[11px] text-slate-400 mt-1">
                      GIS • Remote Sensing • Geospatial Projects
                    </p>
                  </div>

                </div>

              </div>

            </div>

            {/* Right Contact Form */}

            <div
              style={{ animationDelay: "200ms" }}
              className="contact-reveal rounded-3xl border border-white/10 bg-[#111827]/95 p-6 md:p-8 relative overflow-hidden"
            >

              <div className="absolute -top-20 -right-20 w-52 h-52 bg-emerald-500/10 blur-[90px] rounded-full pointer-events-none" />

              <div className="relative z-10">

                <div className="mb-6">

                  <p className="text-[10px] tracking-widest uppercase text-emerald-400 font-bold">
                    Send a Message
                  </p>

                  <h3 className="text-2xl font-bold text-white mt-2">
                    Contact Me
                  </h3>

                  <p className="text-xs text-slate-400 mt-2">
                    Fill out the form to send me a direct email.
                  </p>

                </div>

                <form
                  onSubmit={handleSubmit}
                  className="space-y-4"
                >

                  {/* Name */}

                  <div>
                    <label className="block text-xs text-slate-300 mb-2">
                      Your Name *
                    </label>

                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your name"
                      maxLength={100}
                      autoComplete="name"
                      required
                      className="contact-input w-full rounded-xl bg-[#080b14] border border-white/10 px-4 py-3 text-sm text-white placeholder:text-slate-600"
                    />
                  </div>

                  {/* Optional Email */}

                  <div>
                    <label className="block text-xs text-slate-300 mb-2">
                      Your Email (Optional)
                    </label>

                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter your email (optional)"
                      maxLength={254}
                      autoComplete="email"
                      className="contact-input w-full rounded-xl bg-[#080b14] border border-white/10 px-4 py-3 text-sm text-white placeholder:text-slate-600"
                    />

                    <p className="text-[10px] text-slate-500 mt-1">
                      You can send a message without providing your email.
                    </p>
                  </div>

                  {/* Subject */}

                  <div>
                    <label className="block text-xs text-slate-300 mb-2">
                      Subject *
                    </label>

                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Enter message subject"
                      maxLength={150}
                      required
                      className="contact-input w-full rounded-xl bg-[#080b14] border border-white/10 px-4 py-3 text-sm text-white placeholder:text-slate-600"
                    />
                  </div>

                  {/* Message */}

                  <div>
                    <label className="block text-xs text-slate-300 mb-2">
                      Your Message *
                    </label>

                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Write your message here..."
                      rows={4}
                      maxLength={3000}
                      required
                      className="contact-input w-full resize-none rounded-xl bg-[#080b14] border border-white/10 px-4 py-3 text-sm text-white placeholder:text-slate-600"
                    />
                  </div>

                  {/* Status Message */}

                  {status.message && (
                    <div
                      role="status"
                      aria-live="polite"
                      className={`flex items-start gap-2 rounded-xl p-3 text-xs ${
                        status.type === "success"
                          ? "bg-emerald-500/10 border border-emerald-400/20 text-emerald-300"
                          : "bg-red-500/10 border border-red-400/20 text-red-300"
                      }`}
                    >

                      {status.type === "success" ? (
                        <CheckCircle size={17} className="shrink-0" />
                      ) : (
                        <AlertCircle size={17} className="shrink-0" />
                      )}

                      <span>{status.message}</span>

                    </div>
                  )}

                  {/* Submit Button */}

                  <button
                    type="submit"
                    disabled={loading}
                    className="contact-submit w-full flex items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-emerald-600 to-cyan-600 hover:from-emerald-500 hover:to-cyan-500 px-6 py-3.5 text-sm font-bold text-white"
                  >

                    {loading ? (
                      <>
                        <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending Message...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send size={17} />
                      </>
                    )}

                  </button>

                  <p className="text-[10px] text-slate-500 text-center">
                    Your message will be delivered directly to my email.
                  </p>

                </form>

              </div>

            </div>

          </div>

          {/* Footer */}

          <div className="text-center mt-8">

            <p className="text-[9px] tracking-[0.25em] text-slate-500 uppercase">
              Thank You For Visiting My Portfolio
            </p>

          </div>

        </div>

      </section>
    </>
  );
}

export default Contact;
