
const projects = [
  {
    number: "01",
    name: "FabWatch",
    category: "SEMICONDUCTOR · SOFTWARE",
    description:
      "A semiconductor process monitoring project using Python-based sensor simulation and anomaly detection logic.",
    status: "IN DEVELOPMENT",
  },
  {
    number: "02",
    name: "WaferVision",
    category: "COMPUTER VISION · AI/ML",
    description:
      "An upcoming exploration of computer vision for automated semiconductor wafer inspection.",
    status: "PLANNED",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f8f8f6] text-[#191919]">
      <header className="mx-auto flex max-w-6xl items-center justify-between px-6 py-8">
        <a href="/" className="text-xl font-bold tracking-tight">
          KEEMLAB<span className="text-neutral-400">.</span>
        </a>

        <nav className="flex items-center gap-6 text-sm">
          <a href="#work" className="hover:text-neutral-500">
            Work
          </a>
          <a href="#about" className="hover:text-neutral-500">
            About
          </a>
          <a
            href="https://github.com/kyliekeem"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-neutral-500"
          >
            GitHub ↗
          </a>
        </nav>
      </header>

      <section className="mx-auto max-w-6xl px-6 pb-32 pt-28 md:pt-40">
        <p className="mb-8 text-xs font-semibold uppercase tracking-[0.25em] text-neutral-500">
          Engineering Portfolio
        </p>

        <h1 className="max-w-4xl text-5xl font-semibold leading-[1.1] tracking-[-0.05em] md:text-8xl">
          Engineering ideas
          <span className="block text-neutral-400">
            into working systems.
          </span>
        </h1>

        <p className="mt-10 max-w-xl text-lg leading-relaxed text-neutral-600">
          Exploring the intersection of semiconductor technology,
          software engineering, artificial intelligence, and automation.
        </p>

        <a
          href="#work"
          className="mt-10 inline-block rounded-full bg-[#191919] px-7 py-4 text-sm font-medium text-white transition hover:bg-neutral-700"
        >
          Explore My Work ↗
        </a>
      </section>

      <section
        id="work"
        className="border-t border-neutral-200 bg-white"
      >
        <div className="mx-auto max-w-6xl px-6 py-24">
          <div className="mb-14 flex items-end justify-between">
            <div>
              <p className="mb-3 text-xs uppercase tracking-[0.25em] text-neutral-500">
                Portfolio / 001
              </p>
              <h2 className="text-4xl font-semibold tracking-tight">
                Selected Work
              </h2>
            </div>
            <span className="text-sm text-neutral-400">
              2026 — Present
            </span>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {projects.map((project) => (
              <article
                key={project.number}
                className="rounded-2xl border border-neutral-200 bg-[#f8f8f6] p-8"
              >
                <div className="mb-28 flex justify-between text-xs text-neutral-500">
                  <span>{project.number} / PROJECT</span>
                  <span>{project.status}</span>
                </div>

                <p className="mb-3 text-xs tracking-wider text-neutral-500">
                  {project.category}
                </p>
                <h3 className="mb-4 text-3xl font-semibold">
                  {project.name}
                </h3>
                <p className="leading-relaxed text-neutral-600">
                  {project.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="about"
        className="mx-auto grid max-w-6xl gap-12 px-6 py-32 md:grid-cols-2"
      >
        <h2 className="text-4xl font-semibold tracking-tight">
          Curious by nature.
          <br />
          Engineer by practice.
        </h2>
        <p className="text-lg leading-relaxed text-neutral-600">
          I enjoy turning complex technical problems into practical
          solutions through software, experimentation, and continuous
          learning. This space documents what I build and how I build it.
        </p>
      </section>

      <footer className="border-t border-neutral-200">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-10 text-sm">
          <span className="font-semibold">KEEMLAB © 2026</span>
          <a
            href="https://github.com/kyliekeem"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-500 hover:text-black"
          >
            GitHub ↗
          </a>
        </div>
      </footer>
    </main>
  );
}
