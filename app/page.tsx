import Link from "next/link";

const projects = [
  { href: "/biomarkers", title: "One place for every biomarker", meta: "Longetic, Summer 2026" },
  { href: "/medications", title: "Medication tracking", meta: "Longetic, Autumn 2026" },
];

export default function Home() {
  return (
    <div className="page page-home flex-1">
      <main className="column stagger">
        <h1 className="font-extended mb-1.5 text-[30px] leading-9">Alisa Kopanieva</h1>
        <p className="text-muted-foreground">Product designer</p>
        <p className="mt-6">
          Designing complex, data-heavy B2C HealthTech and AI products, from
          concept to App Store launch.
        </p>
        <p className="mt-4">
          Most recently, I led the end-to-end launch of a health app that brings
          lab results and medical records together in one structured picture.
          Before that, I designed internal, business-critical tools, including an
          AI-powered candidate search and an LMS.
        </p>

        <h2 className="section-title">Projects</h2>
        <ul className="project-list">
          {projects.map((project) => (
            <li key={project.href}>
              <Link className="project-row" href={project.href}>
                <span className="font-medium">{project.title}</span>
                <span className="text-muted-foreground">{project.meta}</span>
              </Link>
            </li>
          ))}
        </ul>

        <h2 className="section-title">Contact me</h2>
        <p>
          You can reach out to me on{" "}
          <a className="text-link" href="https://www.linkedin.com/in/alisa-kopanieva/">
            LinkedIn
          </a>{" "}
          or{" "}
          <a className="text-link" href="https://t.me/alkpv">
            Telegram
          </a>
          , or by{" "}
          <a className="text-link" href="mailto:alisakopanieva@gmail.com">
            email
          </a>
          .
        </p>
      </main>
    </div>
  );
}
