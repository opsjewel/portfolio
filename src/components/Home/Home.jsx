import Container from "../Layout/Container";
import cartoon from "../../assets/cartoon.jpg";
const Home = () => {
  return (
    <section id="home" className="overflow-hidden bg-[#020715] text-white">
      {" "}
      <Container>
        {" "}
        <div className="flex flex-col-reverse items-center gap-10 py-12 sm:py-16 md:py-20 lg:flex-row lg:justify-between lg:gap-8">
          {" "}
          {/* Left Content */}{" "}
          <div className="w-full min-w-0 text-center lg:w-1/2 lg:text-left">
            {" "}
            <p className="mb-4 inline-block rounded-full border border-[#7A5AFB]/40 bg-[#7A5AFB]/10 px-4 py-2 text-sm font-medium text-[#A99AFF]">
              {" "}
              Front-End Developer{" "}
            </p>{" "}
            <h1 className="text-3xl font-bold leading-tight sm:text-4xl md:text-5xl xl:text-6xl">
              {" "}
              Hi, I'm <span className="text-[#7A5AFB]">Jewel</span>{" "}
            </h1>{" "}
            <h2 className="mt-3 text-xl font-semibold text-gray-200 sm:text-2xl">
              {" "}
              I Build Modern Web Experiences{" "}
            </h2>{" "}
            <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-gray-400 sm:text-base lg:mx-0">
              {" "}
              I build modern, responsive, and user-friendly web applications
              using React and Next.js. I enjoy turning ideas into clean,
              interactive, and engaging digital experiences.{" "}
            </p>{" "}
            {/* Action Buttons */}{" "}
            <div className="mt-7 flex flex-wrap justify-center gap-3 sm:gap-4 lg:justify-start">
              {" "}
              <a
                href="#projects"
                className="rounded-lg bg-[#7A5AFB] px-5 py-3 text-sm font-semibold transition duration-300 hover:bg-[#6544E8] sm:text-base"
              >
                {" "}
                View My Projects{" "}
              </a>{" "}
              <a
                href="../../../public/Ashraful_Alam_Jewel_Resume.pdf"
                download
                className="rounded-lg border border-[#7A5AFB] px-5 py-3 text-sm font-semibold transition duration-300 hover:bg-[#7A5AFB] sm:text-base"
              >
                {" "}
                Download CV{" "}
              </a>{" "}
            </div>{" "}
            {/* Social Links */}{" "}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3 lg:justify-start">
              {" "}
              <a
                href="https://github.com/opsjewel"
                target="_blank"
                rel="noreferrer"
                className="rounded-lg border border-white/10 px-4 py-2 text-sm text-gray-300 transition hover:border-[#7A5AFB] hover:text-white"
              >
                {" "}
                GitHub ↗{" "}
              </a>{" "}
              <a
                href="http://www.linkedin.com/in/ashrafulalamjewel"
                target="_blank"
                rel="noreferrer"
                className="rounded-lg border border-white/10 px-4 py-2 text-sm text-gray-300 transition hover:border-[#7A5AFB] hover:text-white"
              >
                {" "}
                LinkedIn ↗{" "}
              </a>{" "}
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noreferrer"
                className="rounded-lg border border-white/10 px-4 py-2 text-sm text-gray-300 transition hover:border-[#7A5AFB] hover:text-white"
              >
                {" "}
                Facebook ↗{" "}
              </a>{" "}
              <a
                href="mailto:ashrafulalamjewel1996@gmail.com"
                className="rounded-lg border border-white/10 px-4 py-2 text-sm text-gray-300 transition hover:border-[#7A5AFB] hover:text-white"
              >
                {" "}
                Email ↗{" "}
              </a>{" "}
            </div>{" "}
          </div>{" "}
          {/* Right Image */}{" "}
          <div className="flex w-full min-w-0 justify-center lg:w-1/2 lg:justify-end">
            {" "}
            <div className="relative flex h-64 w-64 items-center justify-center rounded-full border border-[#7A5AFB]/40 bg-gradient-to-br from-[#7A5AFB]/20 to-transparent p-3 shadow-[0_0_60px_rgba(122,90,251,0.15)] sm:h-80 sm:w-80 md:h-96 md:w-96 lg:h-[420px] lg:w-[420px]">
              {" "}
              <div className="absolute inset-4 rounded-full border border-dashed border-[#7A5AFB]/40" />{" "}
              <img
                src={cartoon}
                alt="Jewel's developer avatar"
                className="relative z-10 h-full w-full rounded-full object-contain"
              />{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </Container>{" "}
    </section>
  );
};
export default Home;
