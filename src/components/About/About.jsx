import Container from "../Layout/Container";
import jewel from "../../assets/jewel.jpeg";

const About = () => {
  const skills = [
    "HTML5",
    "CSS3",
    "JavaScript",
    "React",
    "Next.js",
    "Tailwind CSS",
    "Git & GitHub",
  ];
  const features = [
    {
      icon: "</>",
      title: "Clean Code",
      description: "Readable and maintainable code",
    },
    {
      icon: "✦",
      title: "Problem Solving",
      description: "Finding effective solutions",
    },
    {
      icon: "◎",
      title: "User Experience",
      description: "Building user-friendly interfaces",
    },
    {
      icon: "↗",
      title: "Always Learning",
      description: "Improving my skills every day",
    },
  ];
  const details = [
    { label: "Name", value: "Jewel" },
    { label: "Location", value: "Bangladesh" },
    { label: "Experience", value: "Personal Projects" },
  ];
  return (
    <section
      id="about"
      className="overflow-hidden bg-[#020715] py-16 text-white sm:py-20 lg:py-24"
    >
      {" "}
      <Container>
        {" "}
        {/* Section Heading */}{" "}
        <div className="mx-auto mb-12 max-w-2xl text-center sm:mb-16">
          {" "}
          <span className="inline-block rounded-full border border-[#7A5AFB]/30 bg-[#7A5AFB]/10 px-4 py-2 text-sm font-semibold text-[#A99AFF]">
            {" "}
            Get To Know Me{" "}
          </span>{" "}
          <h2 className="mt-4 text-3xl font-bold sm:text-4xl md:text-5xl">
            {" "}
            About <span className="text-[#7A5AFB]">Me</span>{" "}
          </h2>{" "}
          <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-[#7A5AFB]" />{" "}
          <p className="mt-5 text-sm leading-7 text-gray-400 sm:text-base">
            {" "}
            I'm a passionate Front-End Developer who loves building clean,
            modern and responsive web applications. I enjoy turning ideas into
            real products with great user experiences.{" "}
          </p>{" "}
        </div>{" "}
        {/* Main Content */}{" "}
        <div className="grid min-w-0 grid-cols-1 items-center gap-8 md:grid-cols-2 md:gap-10 lg:gap-16">
          {" "}
          {/* Profile Image */}{" "}
          <div className="relative mx-auto w-full max-w-md">
            {" "}
            <div className="absolute -left-4 top-8 h-32 w-32 rounded-full bg-[#7A5AFB]/20 blur-3xl sm:h-40 sm:w-40" />{" "}
            <div className="absolute -bottom-4 right-0 h-40 w-40 rounded-full bg-purple-600/20 blur-3xl" />{" "}
            <div className="relative overflow-hidden rounded-3xl border border-[#7A5AFB]/40 bg-gradient-to-br from-[#17113A] to-[#0B1224] p-3 shadow-[0_0_40px_rgba(122,90,251,0.12)]">
              {" "}
              <img
                src={jewel}
                alt="Professional portrait"
                className="h-80 w-full rounded-2xl object-cover object-center sm:h-96"
                loading="lazy"
              />{" "}
              {/* Image Badge */}{" "}
              <div className="absolute bottom-6 left-6 right-6 rounded-xl border border-[#7A5AFB]/40 bg-[#0B1224]/95 p-4 shadow-lg">
                {" "}
                <p className="font-bold text-white">
                  {" "}
                  Front-End Developer{" "}
                </p>{" "}
                <p className="mt-1 text-sm text-gray-400">
                  {" "}
                  React · Next.js · Tailwind CSS{" "}
                </p>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
          {/* About Details */}{" "}
          <div className="w-full">
            {" "}
            <span className="inline-flex items-center gap-2 rounded-full border border-[#7A5AFB]/30 bg-[#7A5AFB]/10 px-4 py-2 text-sm font-semibold text-[#A99AFF]">
              {" "}
              <span className="h-2 w-2 rounded-full bg-green-400" /> Open to
              Work{" "}
            </span>{" "}
            <h3 className="mt-5 text-2xl font-bold leading-snug sm:text-3xl">
              {" "}
              Hi, I'm <span className="text-[#7A5AFB]">Jewel</span>{" "}
            </h3>{" "}
            <p className="mt-4 text-sm leading-7 text-gray-400 sm:text-base">
              {" "}
              I enjoy creating user-friendly websites with clean layouts and
              responsive designs. I work with React, Next.js and modern web
              technologies, and I'm continuously improving my development and
              problem-solving skills.{" "}
            </p>{" "}
            {/* Personal Information */}{" "}
            <div className="mt-7 space-y-3">
              {" "}
              {details.map((item) => (
                <div
                  key={item.label}
                  className="flex items-center justify-between gap-4 rounded-xl border border-[#1E2A49] bg-[#0B1224] p-4 transition hover:border-[#7A5AFB]/50"
                >
                  {" "}
                  <span className="text-sm text-gray-400">
                    {" "}
                    {item.label}{" "}
                  </span>{" "}
                  <span className="text-right text-sm font-semibold text-gray-100 sm:text-base">
                    {" "}
                    {item.value}{" "}
                  </span>{" "}
                </div>
              ))}{" "}
              <div className="flex items-center justify-between gap-4 rounded-xl border border-[#1E2A49] bg-[#0B1224] p-4">
                {" "}
                <span className="text-sm text-gray-400">
                  {" "}
                  Availability{" "}
                </span>{" "}
                <span className="flex items-center gap-2 text-right text-sm font-semibold text-green-400 sm:text-base">
                  {" "}
                  <span className="h-2 w-2 shrink-0 rounded-full bg-green-400" />{" "}
                  Open to Opportunities{" "}
                </span>{" "}
              </div>{" "}
            </div>{" "}
            {/* Skills */}{" "}
            <div className="mt-7">
              {" "}
              <h4 className="mb-4 text-lg font-bold">
                {" "}
                Technologies I Use{" "}
              </h4>{" "}
              <div className="flex flex-wrap gap-2">
                {" "}
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-lg border border-[#7A5AFB]/30 bg-[#7A5AFB]/10 px-3 py-2 text-sm font-medium text-[#B9A9FF] transition duration-300 hover:border-[#7A5AFB] hover:bg-[#7A5AFB] hover:text-white"
                  >
                    {" "}
                    {skill}{" "}
                  </span>
                ))}{" "}
              </div>{" "}
            </div>{" "}
            {/* Download CV */}{" "}
            <a
              href="/Jewel-CV.pdf"
              download
              className="mt-8 inline-flex items-center gap-2 rounded-lg bg-[#7A5AFB] px-6 py-3 font-semibold text-white transition duration-300 hover:-translate-y-1 hover:bg-[#6544E8] hover:shadow-[0_0_25px_rgba(122,90,251,0.3)]"
            >
              {" "}
              Download CV <span aria-hidden="true">↓</span>{" "}
            </a>{" "}
          </div>{" "}
        </div>{" "}
        {/* Feature Cards */}{" "}
        <div className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:mt-20 lg:grid-cols-4">
          {" "}
          {features.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-[#1E2A49] bg-[#080F20] p-6 transition duration-300 hover:-translate-y-1 hover:border-[#7A5AFB]/60 hover:bg-[#0B1224] hover:shadow-[0_0_25px_rgba(122,90,251,0.08)]"
            >
              {" "}
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#7A5AFB]/20 text-2xl font-bold text-[#A99AFF]">
                {" "}
                {item.icon}{" "}
              </span>{" "}
              <h4 className="mt-4 font-bold text-white"> {item.title} </h4>{" "}
              <p className="mt-2 text-sm leading-6 text-gray-400">
                {" "}
                {item.description}{" "}
              </p>{" "}
            </div>
          ))}{" "}
        </div>{" "}
      </Container>{" "}
    </section>
  );
};
export default About;
