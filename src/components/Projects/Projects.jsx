import Container from "../Layout/Container";
import innovate from "../../assets/innovate.png";
import exclusive from "../../assets/exclusive.png";

const Projects = () => {
  const projects = [
    {
      title: "Exclusive E-commerce",
      category: "E-commerce Website",
      description:
        "A modern e-commerce website built with React. It features product listings, shopping cart functionality, and a responsive user interface.",
      image: exclusive,
      technologies: [
        "React",
        "JavaScript",
        "Tailwind CSS",
        "Firebase",
      ],
      liveLink: "https://exclusive-one-gamma.vercel.app",
      githubLink: "https://github.com/opsjewel/exclusive",
    },
    {
      title: "Innovate",
      category: "Business Website",
      description:
        "A modern business website focused on clean design, responsive layouts, and an engaging user experience across different devices.",
      image: innovate,
      technologies: [
        "React",
        "JavaScript",
        "Tailwind CSS",
        "Responsive Design",
      ],
      liveLink: "https://innovate-ashy.vercel.app",
      githubLink: "https://github.com/opsjewel/Innovate",
    },
  ];

  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-[#020715] py-16 text-white sm:py-20 lg:py-24"
    >
      {/* Background Decorations */}
      <div className="pointer-events-none absolute -left-24 top-20 h-64 w-64 rounded-full bg-[#7A5AFB]/10 blur-3xl" />

      <div className="pointer-events-none absolute -right-24 bottom-10 h-64 w-64 rounded-full bg-purple-600/10 blur-3xl" />

      <Container>
        {/* Section Heading */}
        <div className="relative mx-auto mb-12 max-w-2xl text-center sm:mb-16">
          <span className="inline-block rounded-full border border-[#7A5AFB]/40 bg-[#7A5AFB]/10 px-5 py-2 text-sm font-semibold text-[#A99AFF]">
            My Work
          </span>

          <h2 className="mt-5 text-3xl font-bold sm:text-4xl md:text-5xl">
            My <span className="text-[#7A5AFB]">Projects</span>
          </h2>

          <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-[#7A5AFB]" />

          <p className="mt-5 text-sm leading-7 text-gray-400 sm:text-base">
            Here are some of my personal projects built with React.
            Each project has helped me learn, grow, and improve my
            development skills.
          </p>
        </div>

        {/* Project Cards */}
        <div className="grid min-w-0 grid-cols-1 gap-6 sm:gap-7 lg:grid-cols-2 lg:gap-8">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group min-w-0 overflow-hidden rounded-2xl border border-[#26365B] bg-[#080F20] transition duration-300 hover:-translate-y-1 hover:border-[#7A5AFB]/70 hover:shadow-[0_0_30px_rgba(122,90,251,0.10)]"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden p-3 sm:p-4">
                <div className="overflow-hidden rounded-xl border border-[#26365B]">
                  <img
                    src={project.image}
                    alt={`${project.title} project preview`}
                    loading="lazy"
                    onError={(e) => {
                      console.error(
                        `Failed to load image for ${project.title}:`,
                        project.image
                      );
                    }}
                    className="h-52 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-64 lg:h-60 xl:h-72"
                  />
                </div>

                <span className="absolute left-6 top-6 rounded-full border border-[#7A5AFB]/40 bg-[#020715]/90 px-3 py-1.5 text-xs font-medium text-[#C4B5FD] backdrop-blur">
                  {project.category}
                </span>
              </div>

              {/* Project Information */}
              <div className="p-5 pt-2 sm:p-6 sm:pt-2">
                <h3 className="text-xl font-bold transition-colors group-hover:text-[#A99AFF] sm:text-2xl">
                  {project.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-gray-400 sm:text-base">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-full border border-[#7A5AFB]/30 bg-[#7A5AFB]/10 px-3 py-2 text-xs font-medium text-[#C4B5FD] sm:text-sm"
                    >
                      {technology}
                    </span>
                  ))}
                </div>

                {/* Project Links */}
                <div className="mt-7 flex flex-wrap gap-3">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg bg-[#7A5AFB] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#6544E8]"
                  >
                    Live Demo <span aria-hidden="true">↗</span>
                  </a>

                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg border border-[#7A5AFB]/50 px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#7A5AFB]/15"
                  >
                    GitHub <span aria-hidden="true">↗</span>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom Message */}
        <div className="mt-12 text-center">
          <p className="text-sm text-gray-400 sm:text-base">
            More projects and improvements are coming soon.
          </p>
        </div>
      </Container>
    </section>
  );
};

export default Projects;