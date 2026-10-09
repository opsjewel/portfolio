import Container from "../Layout/Container";
const Skills = () => {
  const skillGroups = [
    {
      title: "Frontend",
      icon: "</>",
      description: "Building interactive and responsive user interfaces.",
      skills: ["HTML5", "CSS3", "JavaScript", "React", "Next.js"],
    },
    {
      title: "Styling",
      icon: "✦",
      description: "Creating beautiful and consistent designs.",
      skills: ["Tailwind CSS", "Bootstrap"],
    },
    {
      title: "State / Data",
      icon: "◈",
      description: "Managing application state and working with data.",
      skills: ["Redux", "Firebase", "REST API"],
    },
  ];
  const technologies = [
    "HTML5",
    "CSS3",
    "JavaScript",
    "React",
    "Next.js",
    "Tailwind CSS",
    "Git & GitHub",
  ];
  return (
    <section
      id="skills"
      className="relative overflow-hidden bg-[#020715] py-16 text-white sm:py-20 lg:py-24"
    >
      {" "}
      {/* Background Decorations */}{" "}
      <div className="pointer-events-none absolute -left-20 top-20 h-48 w-48 rounded-full bg-[#7A5AFB]/10 blur-3xl" />{" "}
      <div className="pointer-events-none absolute -right-20 bottom-10 h-56 w-56 rounded-full bg-purple-600/10 blur-3xl" />{" "}
      <Container>
        {" "}
        {/* Section Heading */}{" "}
        <div className="relative mx-auto mb-12 max-w-2xl text-center sm:mb-16">
          {" "}
          <span className="inline-block rounded-full border border-[#7A5AFB]/40 bg-[#7A5AFB]/10 px-5 py-2 text-sm font-semibold text-[#A99AFF]">
            {" "}
            What I Know{" "}
          </span>{" "}
          <h2 className="mt-5 text-3xl font-bold sm:text-4xl md:text-5xl">
            {" "}
            My <span className="text-[#7A5AFB]">Skills</span>{" "}
          </h2>{" "}
          <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-[#7A5AFB]" />{" "}
          <p className="mt-5 text-sm leading-7 text-gray-400 sm:text-base">
            {" "}
            I have developed a solid set of skills in modern web technologies.
            Here are the tools and technologies I work with.{" "}
          </p>{" "}
        </div>{" "}
        {/* Skill Category Cards */}{" "}
        <div className="grid min-w-0 grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {" "}
          {skillGroups.map((group) => (
            <div
              key={group.title}
              className="rounded-2xl border border-[#26365B] bg-[#080F20] p-5 transition duration-300 hover:-translate-y-1 hover:border-[#7A5AFB]/70 hover:shadow-[0_0_25px_rgba(122,90,251,0.10)] sm:p-6"
            >
              {" "}
              {/* Card Heading */}{" "}
              <div className="flex items-start gap-4">
                {" "}
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#7A5AFB] to-[#4C1DDB] text-2xl font-bold text-white shadow-lg shadow-purple-900/20">
                  {" "}
                  {group.icon}{" "}
                </div>{" "}
                <div>
                  {" "}
                  <h3 className="text-xl font-bold"> {group.title} </h3>{" "}
                  <p className="mt-2 text-sm leading-6 text-gray-400">
                    {" "}
                    {group.description}{" "}
                  </p>{" "}
                </div>{" "}
              </div>{" "}
              {/* Skill Badges */}{" "}
              <div className="mt-6 flex flex-wrap gap-3">
                {" "}
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-[#334477] bg-[#0B1530] px-4 py-2 text-sm font-medium text-gray-200 transition duration-300 hover:border-[#7A5AFB] hover:bg-[#7A5AFB]/20 hover:text-white"
                  >
                    {" "}
                    {skill}{" "}
                  </span>
                ))}{" "}
              </div>{" "}
            </div>
          ))}{" "}
        </div>{" "}
        {/* Always Learning Card */}{" "}
        <div className="mt-8 rounded-2xl border border-[#26365B] bg-[#080F20] p-5 sm:p-7">
          {" "}
          <div className="flex flex-col gap-7 lg:flex-row lg:items-center">
            {" "}
            {/* Learning Text */}{" "}
            <div className="flex items-center gap-4 lg:w-1/3">
              {" "}
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#7A5AFB] to-[#4C1DDB] text-2xl text-white">
                {" "}
                ↗{" "}
              </div>{" "}
              <div>
                {" "}
                <h3 className="text-lg font-bold"> Always Learning </h3>{" "}
                <p className="mt-2 text-sm leading-6 text-gray-400">
                  {" "}
                  Staying up to date with new technologies and improving my
                  skills every day.{" "}
                </p>{" "}
              </div>{" "}
            </div>{" "}
            {/* Technology List */}{" "}
            <div className="grid grid-cols-2 gap-4 border-t border-[#26365B] pt-6 sm:grid-cols-3 md:grid-cols-4 lg:flex lg:flex-1 lg:justify-around lg:border-l lg:border-t-0 lg:pl-6 lg:pt-0">
              {" "}
              {technologies.map((technology) => (
                <div
                  key={technology}
                  className="flex flex-col items-center justify-center gap-2 rounded-xl p-3 text-center transition hover:bg-[#7A5AFB]/10"
                >
                  {" "}
                  <span className="text-sm font-semibold text-[#B9A9FF] sm:text-base">
                    {" "}
                    {technology}{" "}
                  </span>{" "}
                </div>
              ))}{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </Container>{" "}
    </section>
  );
};
export default Skills;
