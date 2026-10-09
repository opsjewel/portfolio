
import { useState } from "react";
import Container from "../Layout/Container";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Replace this placeholder with your real contact email.
    const contactEmail = "your.email@example.com";
    const subject = encodeURIComponent(formData.subject.trim());
    const body = encodeURIComponent(
      `Name: ${formData.name.trim()}\nEmail: ${formData.email.trim()}\n\n${formData.message.trim()}`,
    );

    window.location.href = `mailto:${contactEmail}?subject=${subject}&body=${body}`;
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#020617] py-16 text-white sm:py-20 lg:py-24"
    >
      {/* Background Decorations */}
      <div className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-pink-500/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-10 h-72 w-72 rounded-full bg-purple-500/10 blur-3xl" />

      <Container>
        <div className="relative z-10">
          {/* Section Heading */}
          <div className="mx-auto mb-12 max-w-2xl text-center sm:mb-16">
            <span className="inline-block rounded-full border border-pink-400/30 bg-pink-400/10 px-4 py-2 text-sm font-medium text-pink-300">
              Contact Me
            </span>

            <h2 className="mt-5 text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
              Let's Work{" "}
              <span className="text-pink-400">Together</span>
            </h2>

            <p className="mt-4 text-sm leading-7 text-slate-400 sm:text-base">
              Have a project in mind or want to work together?
              Feel free to send me a message. I'd love to hear from you.
            </p>
          </div>

          {/* Contact Content */}
          <div className="grid min-w-0 grid-cols-1 gap-6 sm:gap-8 lg:grid-cols-5 lg:gap-12">
            {/* Contact Information */}
            <div className="lg:col-span-2">
              <div className="h-full rounded-2xl border border-white/10 bg-white/[0.03] p-5 sm:p-8">
                <h3 className="text-2xl font-semibold">
                  Get in Touch
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-400 sm:text-base">
                  I'm always open to discussing new projects,
                  creative ideas, or opportunities to be part of your vision.
                </p>

                <div className="mt-8 space-y-6">
                  {/* Email */}
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-pink-500/10 text-xl text-pink-400">
                      ✉
                    </div>

                    <div className="min-w-0">
                      <h4 className="font-medium">Email</h4>
                      <p className="mt-1 break-all text-sm text-slate-400">
                        your.email@example.com
                      </p>
                    </div>
                  </div>

                  {/* Location */}
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-pink-500/10 text-xl text-pink-400">
                      📍
                    </div>

                    <div>
                      <h4 className="font-medium">Location</h4>
                      <p className="mt-1 text-sm text-slate-400">
                        Mymensingh, Bangladesh
                      </p>
                    </div>
                  </div>

                  {/* Availability */}
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-pink-500/10 text-xl text-pink-400">
                      ◷
                    </div>

                    <div>
                      <h4 className="font-medium">Availability</h4>
                      <p className="mt-1 text-sm text-slate-400">
                        Open to new opportunities
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 border-t border-white/10 pt-6">
                  <p className="mb-4 text-sm font-medium text-slate-300">
                    Let's connect
                  </p>

                  <div className="flex flex-wrap gap-3">
                    <a
                      href="https://github.com/opsjewel"
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-lg border border-white/10 px-4 py-2 text-sm text-slate-300 transition hover:border-pink-400 hover:text-pink-400"
                    >
                      GitHub ↗
                    </a>

                    <a
                      href="https://www.linkedin.com/"
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-lg border border-white/10 px-4 py-2 text-sm text-slate-300 transition hover:border-pink-400 hover:text-pink-400"
                    >
                      LinkedIn ↗
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <form
                onSubmit={handleSubmit}
                className="min-w-0 rounded-2xl border border-white/10 bg-white/[0.03] p-4 sm:p-8"
              >
                <h3 className="text-2xl font-semibold">
                  Send Me a Message
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-400">
                  Fill out the form below and tell me about your project.
                </p>

                <div className="mt-7 grid grid-cols-1 gap-5 sm:grid-cols-2">
                  {/* Name */}
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-2 block text-sm font-medium text-slate-300"
                    >
                      Your Name
                    </label>

                    <input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Enter your name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full rounded-xl border border-white/10 bg-[#0f172a] px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-pink-400 focus:ring-2 focus:ring-pink-400/20"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 block text-sm font-medium text-slate-300"
                    >
                      Your Email
                    </label>

                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Enter your email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full rounded-xl border border-white/10 bg-[#0f172a] px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-pink-400 focus:ring-2 focus:ring-pink-400/20"
                    />
                  </div>

                  {/* Subject */}
                  <div className="sm:col-span-2">
                    <label
                      htmlFor="subject"
                      className="mb-2 block text-sm font-medium text-slate-300"
                    >
                      Subject
                    </label>

                    <input
                      id="subject"
                      name="subject"
                      type="text"
                      placeholder="What is this about?"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full rounded-xl border border-white/10 bg-[#0f172a] px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-pink-400 focus:ring-2 focus:ring-pink-400/20"
                    />
                  </div>

                  {/* Message */}
                  <div className="sm:col-span-2">
                    <label
                      htmlFor="message"
                      className="mb-2 block text-sm font-medium text-slate-300"
                    >
                      Your Message
                    </label>

                    <textarea
                      id="message"
                      name="message"
                      rows="5"
                      placeholder="Tell me about your project..."
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="w-full resize-y rounded-xl border border-white/10 bg-[#0f172a] px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-pink-400 focus:ring-2 focus:ring-pink-400/20"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-pink-500 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:ring-offset-2 focus:ring-offset-[#020617] sm:w-auto"
                >
                  Send Message <span aria-hidden="true">→</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Contact;

