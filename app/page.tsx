export default function Home() {
  return (
    <div className="page page-home flex-1">
      <main className="column stagger">
        <h1 className="font-extended mb-1.5 text-[30px] leading-9">Alisa Kopanieva</h1>
        <p className="text-muted-foreground">Product Designer</p>
        <p className="mt-6">
          Designing complex, data-heavy B2C HealthTech and AI products, from
          concept to App Store launch.
        </p>
        <p className="mt-4">
          Most recently, I led the end-to-end launch of a health app that brings
          lab results and medical records together in one structured picture.
          Before that, I designed internal, business-critical tools, including an
          AI-powered candidate search and an LMS platform.
        </p>

        <h2 className="section-title">Contact me</h2>
        <p>
          You can reach out to me on{" "}
          <a className="text-link" href="https://www.linkedin.com/in/alisa-kopanieva/">
            LinkedIn
          </a>
          ,{" "}
          <a className="text-link" href="https://t.me/alkpv">
            Telegram
          </a>
          , or via{" "}
          <a className="text-link" href="mailto:alisakopanieva@gmail.com">
            Email
          </a>
          .
        </p>
      </main>
    </div>
  );
}
