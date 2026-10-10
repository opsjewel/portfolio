import Container from "../Layout/Container";
const Education = () => {
  const courses = [
    {
      title: "Front-End Web Development with React",
      institute: "Creative IT Institute",
      duration: "October 2024 – September 2025",
      description:
        "Learned front-end development using React, component-based architecture, and modern web technologies.",
      status: "Completed",
      icon: "⚛",
    },
    {
      title: "Reactive Accelerator",
      institute: "Learn With Sumit",
      duration: "Currently Learning",
      description:
        "Learning advanced React, Next.js, and modern web development concepts to build real-world applications.",
      status: "In Progress",
      icon: "LWS",
    },
  ];
  return (
    <section
      id="education"
      className="relative overflow-hidden bg-[#020715] py-16 text-white sm:py-20 lg:py-24"
    >
      {" "}
      {/* Background Decorations */}{" "}
      <div className="pointer-events-none absolute -left-20 top-10 h-48 w-48 rounded-full bg-[#7A5AFB]/10 blur-3xl" />{" "}
      <div className="pointer-events-none absolute -right-20 bottom-10 h-56 w-56 rounded-full bg-purple-600/10 blur-3xl" />{" "}
      <Container>
        {" "}
        {/* Section Heading */}{" "}
        <div className="relative mx-auto mb-12 max-w-2xl text-center sm:mb-16">
          {" "}
          <span className="inline-block rounded-full border border-[#7A5AFB]/40 bg-[#7A5AFB]/10 px-5 py-2 text-sm font-semibold text-[#A99AFF]">
            {" "}
            My Journey{" "}
          </span>{" "}
          <h2 className="mt-5 text-3xl font-bold sm:text-4xl md:text-5xl">
            {" "}
            <span className="text-white">Edu</span>{" "}
            <span className="text-[#7A5AFB]">cation</span>{" "}
          </h2>{" "}
          <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-[#7A5AFB]" />{" "}
          <p className="mt-5 text-sm leading-7 text-gray-400 sm:text-base">
            {" "}
            My academic background and continuous learning journey have helped
            me build a foundation in technology and development.{" "}
          </p>{" "}
        </div>{" "}
        {/* Education and Courses */}{" "}
        <div className="grid grid-cols-1 items-stretch gap-6 lg:grid-cols-2">
          {" "}
          {/* Academic Education */}{" "}
          <div className="rounded-2xl border border-[#26365B] bg-[#080F20] p-5 sm:p-7">
            {" "}
            <div className="flex items-center gap-4 border-b border-[#26365B] pb-6">
              {" "}
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#7A5AFB] to-[#4C1DDB] text-2xl">
                {" "}
                🎓{" "}
              </div>{" "}
              <div>
                {" "}
                <h3 className="text-xl font-bold sm:text-2xl">
                  {" "}
                  Education{" "}
                </h3>{" "}
                <p className="mt-1 text-sm text-gray-400">
                  {" "}
                  My Academic Background{" "}
                </p>{" "}
              </div>{" "}
            </div>{" "}
            {/* Timeline */}{" "}
            <div className="relative ml-3 mt-7 border-l border-[#7A5AFB]/60 pb-2 pl-7">
              {" "}
              <div className="absolute -left-[7px] top-2 h-3.5 w-3.5 rounded-full bg-[#7A5AFB] ring-4 ring-[#7A5AFB]/15" />{" "}
              <span className="inline-block rounded-full border border-[#7A5AFB]/40 bg-[#7A5AFB]/15 px-3 py-1 text-xs font-medium text-[#B9A9FF] sm:text-sm">
                {" "}
                August 2019 – December 2023
{" "}
              </span>{" "}
              <h4 className="mt-4 text-lg font-bold leading-snug sm:text-xl">
                {" "}
                Diploma in Electrical Engineering{" "}
              </h4>{" "}
              <p className="mt-2 text-sm font-medium text-[#A99AFF]">
                {" "}
                Mymensingh Polytechnic Institute{" "}
              </p>{" "}
              <div className="mt-4 inline-flex items-center gap-2 rounded-lg border border-[#26365B] bg-[#0B1530] px-3 py-2">
                {" "}
                <span className="text-sm text-gray-400"> CGPA </span>{" "}
                <span className="font-bold text-white"> 3.10 / 4.00 </span>{" "}
              </div>{" "}
              <p className="mt-4 text-sm leading-7 text-gray-400">
                {" "}
                Studied electrical systems, power, control, and circuit
                fundamentals as part of my diploma program.{" "}
              </p>{" "}
            </div>{" "}
          </div>{" "}
          {/* Courses & Training */}{" "}
          <div className="rounded-2xl border border-[#26365B] bg-[#080F20] p-5 sm:p-7">
            {" "}
            <div className="flex items-center gap-4 border-b border-[#26365B] pb-6">
              {" "}
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#7A5AFB] to-[#4C1DDB] text-2xl">
                {" "}
                📚{" "}
              </div>{" "}
              <div>
                {" "}
                <h3 className="text-xl font-bold sm:text-2xl">
                  {" "}
                  Courses & Training{" "}
                </h3>{" "}
                <p className="mt-1 text-sm text-gray-400">
                  {" "}
                  Upgrading My Skills{" "}
                </p>{" "}
              </div>{" "}
            </div>{" "}
            {/* Course Timeline */}{" "}
            <div className="relative ml-3 mt-7 space-y-8 border-l border-[#7A5AFB]/60 pb-2 pl-7">
              {" "}
              {courses.map((course) => (
                <div key={course.title} className="relative">
                  {" "}
                  <div className="absolute -left-[35px] top-2 h-3.5 w-3.5 rounded-full bg-[#7A5AFB] ring-4 ring-[#7A5AFB]/15" />{" "}
                  <span className="inline-block rounded-full border border-[#7A5AFB]/40 bg-[#7A5AFB]/15 px-3 py-1 text-xs font-medium text-[#B9A9FF] sm:text-sm">
                    {" "}
                    {course.duration}{" "}
                  </span>{" "}
                  <h4 className="mt-3 text-base font-bold leading-snug sm:text-lg">
                    {" "}
                    {course.title}{" "}
                  </h4>{" "}
                  <p className="mt-2 text-sm font-medium text-[#A99AFF]">
                    {" "}
                    {course.institute}{" "}
                  </p>{" "}
                  <p className="mt-3 text-sm leading-7 text-gray-400">
                    {" "}
                    {course.description}{" "}
                  </p>{" "}
                  <span
                    className={`mt-3 inline-flex rounded-full px-3 py-1 text-xs font-medium ${course.status === "Completed" ? "bg-green-500/10 text-green-400" : "bg-[#7A5AFB]/15 text-[#B9A9FF]"}`}
                  >
                    {" "}
                    {course.status}{" "}
                  </span>{" "}
                </div>
              ))}{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
        {/* Learning Banner */}{" "}
        <div className="mt-8 flex flex-col gap-4 rounded-2xl border border-[#7A5AFB]/40 bg-gradient-to-r from-[#17113A] via-[#0B1224] to-[#080F20] p-6 sm:flex-row sm:items-center sm:gap-6 sm:p-8">
          {" "}
          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-[#7A5AFB]/20 text-3xl text-[#A99AFF]">
            {" "}
            ↗{" "}
          </div>{" "}
          <div>
            {" "}
            <h3 className="text-lg font-bold sm:text-xl">
              {" "}
              Always Learning, Always Growing{" "}
            </h3>{" "}
            <p className="mt-2 max-w-2xl text-sm leading-7 text-gray-400">
              {" "}
              I believe in continuous learning and I'm always exploring new
              technologies to improve my development skills and build better web
              experiences.{" "}
            </p>{" "}
          </div>{" "}
        </div>{" "}
      </Container>{" "}
    </section>
  );
};
export default Education;
