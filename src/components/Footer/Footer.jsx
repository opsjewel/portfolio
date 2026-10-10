import Container from "../Layout/Container";
const Footer = () => {
  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Education", href: "#education" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];
  const socialLinks = [
    { name: "GitHub", href: "https://github.com/opsjewel" },
    { name: "LinkedIn", href: "http://www.linkedin.com/in/ashrafulalamjewel" },
    { name: "Facebook", href: "https://www.facebook.com/" },
    { name: "Email", href: "mailto:ashrafulalamjewel1996@gmail.com" },
  ];
  return (
    <footer className="relative overflow-hidden border-t border-[#26365B] bg-[#020715] text-white">
      {" "}
      {/* Background Glow */}{" "}
      <div className="pointer-events-none absolute -top-32 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-[#7A5AFB]/10 blur-3xl" />{" "}
      <Container>
        {" "}
        <div className="relative grid grid-cols-1 gap-10 py-12 sm:py-14 lg:grid-cols-3 lg:gap-12">
          {" "}
          {/* Brand */}{" "}
          <div>
            {" "}
            <a
              href="#home"
              className="inline-flex items-center gap-2 text-2xl font-bold"
            >
              {" "}
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#7A5AFB] text-lg text-white shadow-lg shadow-purple-900/30">
                {" "}
                J{" "}
              </span>{" "}
              <span>
                {" "}
                Jewel<span className="text-[#7A5AFB]">.</span>{" "}
              </span>{" "}
            </a>{" "}
            <p className="mt-5 max-w-sm text-sm leading-7 text-gray-400">
              {" "}
              I'm a Front-End Developer passionate about building modern,
              responsive, and user-friendly web applications with React and
              Next.js.{" "}
            </p>{" "}
            <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-green-500/20 bg-green-500/10 px-3 py-2 text-sm text-green-400">
              {" "}
              <span className="h-2 w-2 rounded-full bg-green-400" /> Open to
              Opportunities{" "}
            </div>{" "}
          </div>{" "}
          {/* Quick Links */}{" "}
          <div>
            {" "}
            <h3 className="text-lg font-bold">
              {" "}
              Quick <span className="text-[#7A5AFB]">Links</span>{" "}
            </h3>{" "}
            <div className="mt-5 grid grid-cols-2 gap-x-6 gap-y-4">
              {" "}
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="w-fit text-sm text-gray-400 transition duration-300 hover:translate-x-1 hover:text-[#A99AFF]"
                >
                  {" "}
                  {link.name}{" "}
                </a>
              ))}{" "}
            </div>{" "}
          </div>{" "}
          {/* Connect */}{" "}
          <div>
            {" "}
            <h3 className="text-lg font-bold">
              {" "}
              Let's <span className="text-[#7A5AFB]">Connect</span>{" "}
            </h3>{" "}
            <p className="mt-5 text-sm leading-7 text-gray-400">
              {" "}
              Have a project idea or a job opportunity? Feel free to reach out.
              Let's build something great together.{" "}
            </p>{" "}
            <div className="mt-5 flex flex-wrap gap-3">
              {" "}
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target={social.name === "Email" ? undefined : "_blank"}
                  rel={social.name === "Email" ? undefined : "noreferrer"}
                  aria-label={social.name}
                  className="rounded-lg border border-[#26365B] bg-[#080F20] px-4 py-2.5 text-sm font-medium text-gray-300 transition duration-300 hover:border-[#7A5AFB] hover:bg-[#7A5AFB]/10 hover:text-white"
                >
                  {" "}
                  {social.name}{" "}
                  <span className="ml-1 text-[#A99AFF]">↗</span>{" "}
                </a>
              ))}{" "}
            </div>{" "}
            <a
              href="#contact"
              className="mt-5 inline-flex items-center gap-2 rounded-lg bg-[#7A5AFB] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#6544E8]"
            >
              {" "}
              Contact Me <span aria-hidden="true">→</span>{" "}
            </a>{" "}
          </div>{" "}
        </div>{" "}
        {/* Bottom Bar */}{" "}
        <div className="relative flex flex-col items-center justify-between gap-4 border-t border-[#26365B] py-6 text-center sm:flex-row sm:text-left">
          {" "}
          <p className="text-sm text-gray-500">
            {" "}
            © {new Date().getFullYear()}{" "}
            <span className="font-semibold text-gray-300"> Jewel </span> . All
            rights reserved.{" "}
          </p>{" "}
          <p className="text-sm text-gray-500">
            {" "}
            Designed & Built with <span className="text-[#A99AFF]">
              React
            </span>{" "}
            and <span className="text-[#A99AFF]">Tailwind CSS</span>{" "}
          </p>{" "}
          {/* Back to Top */}{" "}
          <a
            href="#home"
            aria-label="Back to top"
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#7A5AFB]/40 bg-[#7A5AFB]/10 text-xl text-[#A99AFF] transition hover:-translate-y-1 hover:bg-[#7A5AFB] hover:text-white"
          >
            {" "}
            ↑{" "}
          </a>{" "}
        </div>{" "}
      </Container>{" "}
    </footer>
  );
};
export default Footer;
