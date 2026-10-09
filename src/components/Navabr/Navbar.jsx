import { useState } from "react";
import Container from "../Layout/Container";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Education", href: "#education" },
    { name: "Contact", href: "#contact" },
  ];

  const closeMenu = () => setIsOpen(false);

  const actionButton =
    "inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-300";

  return (
    <nav className="sticky top-0 z-50 border-b border-white/10 bg-[#080B1A]/90 text-white shadow-lg shadow-black/10 backdrop-blur-xl">
      <Container>
        {/* Navbar Header */}
        <div className="flex min-h-[76px] items-center justify-between gap-4">
          {/* Logo */}
          <a
            href="#home"
            onClick={closeMenu}
            className="shrink-0 text-2xl font-extrabold tracking-tight sm:text-3xl"
          >
            Jewel<span className="text-fuchsia-400">.</span>
          </a>

          {/* Desktop Navigation */}
          <ul className="hidden items-center gap-5 xl:flex 2xl:gap-7">
            {navLinks.map((link, index) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className={`relative py-2 text-sm font-medium transition-colors duration-300 hover:text-fuchsia-400 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-gradient-to-r after:from-violet-500 after:to-fuchsia-400 after:transition-all after:duration-300 hover:after:w-full ${
                    index === 0
                      ? "text-fuchsia-400 after:w-full"
                      : "text-slate-300"
                  }`}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          {/* Desktop Actions */}
          <div className="hidden shrink-0 items-center gap-2 xl:flex">
            <a
              href="#contact"
              className={`${actionButton} bg-gradient-to-r from-violet-600 to-fuchsia-500 text-white shadow-lg shadow-violet-500/20 hover:-translate-y-0.5 hover:shadow-fuchsia-500/30`}
            >
              Hire Me <span className="ml-2">↗</span>
            </a>

            <a
              href="#login"
              className={`${actionButton} border border-white/20 text-slate-200 hover:border-fuchsia-400 hover:text-fuchsia-400`}
            >
              Login
            </a>

            <a
              href="#register"
              className={`${actionButton} border border-white/20 text-slate-200 hover:border-fuchsia-400 hover:text-fuchsia-400`}
            >
              Register
            </a>
          </div>

          {/* Mobile / Tablet Actions */}
          <div className="flex items-center gap-3 xl:hidden">
            <a
              href="#contact"
              onClick={closeMenu}
              className="rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-500 px-4 py-2.5 text-sm font-semibold text-white transition hover:opacity-90 sm:px-5"
            >
              Hire Me
            </a>

            <button
              type="button"
              onClick={() => setIsOpen((prev) => !prev)}
              aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={isOpen}
              aria-controls="mobile-navigation"
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/15 text-white transition hover:border-fuchsia-400 hover:bg-white/5"
            >
              {isOpen ? (
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="h-6 w-6"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 6l12 12M18 6L6 18"
                  />
                </svg>
              ) : (
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="h-6 w-6"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 7h16M4 12h16M4 17h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile / Tablet Dropdown */}
        <div
          id="mobile-navigation"
          className={`grid transition-[grid-template-rows,opacity,padding] duration-300 ease-in-out xl:hidden ${
            isOpen
              ? "grid-rows-[1fr] pb-5 opacity-100"
              : "grid-rows-[0fr] pb-0 opacity-0"
          }`}
          aria-hidden={!isOpen}
        >
          <div className="overflow-hidden">
            <div className="rounded-2xl border border-white/10 bg-[#0D1124] p-3 sm:p-4">
              <ul className="flex flex-col gap-1">
                {navLinks.map((link, index) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      onClick={closeMenu}
                      tabIndex={isOpen ? 0 : -1}
                      className={`flex items-center justify-between rounded-xl px-4 py-3 text-sm font-medium transition ${
                        index === 0
                          ? "bg-violet-500/10 text-fuchsia-400"
                          : "text-slate-300 hover:bg-white/5 hover:text-fuchsia-400"
                      }`}
                    >
                      {link.name}
                      <span className="text-lg opacity-60">→</span>
                    </a>
                  </li>
                ))}
              </ul>

              <div className="mt-3 grid grid-cols-2 gap-3 border-t border-white/10 pt-4">
                <a
                  href="#login"
                  onClick={closeMenu}
                  tabIndex={isOpen ? 0 : -1}
                  className="rounded-xl border border-white/15 px-4 py-3 text-center text-sm font-medium transition hover:border-fuchsia-400 hover:text-fuchsia-400"
                >
                  Login
                </a>

                <a
                  href="#register"
                  onClick={closeMenu}
                  tabIndex={isOpen ? 0 : -1}
                  className="rounded-xl border border-white/15 px-4 py-3 text-center text-sm font-medium transition hover:border-fuchsia-400 hover:text-fuchsia-400"
                >
                  Register
                </a>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;

