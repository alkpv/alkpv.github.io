import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

import { CaseVideo } from "@/components/case-video";

import { CaseToc } from "./case-toc";

const title = "Medication tracking";

export const metadata: Metadata = {
  title: `${title} · Alisa Kopanieva`,
};

export default function MedicationsCase() {
  return (
    <>
      <header className="crumbs-bar">
        <Breadcrumb>
          <BreadcrumbList className="flex-nowrap text-[16px] leading-[25px]">
            <BreadcrumbItem className="shrink-0">
              <BreadcrumbLink render={<Link href="/" />}>Alisa Kopanieva</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator>/</BreadcrumbSeparator>
            <BreadcrumbItem className="min-w-0">
              <BreadcrumbPage className="truncate font-medium">{title}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </header>

      <div className="page flex-1">
        <div className="column">
          <main className="case stagger">
            <h1 id="top">{title}</h1>
            <p className="meta">Longetic · Product designer · Autumn 2026</p>

            <p>
              Longetic is a B2C HealthTech app on the App Store. Its medications feature lets users keep track of their prescribed medications and supplements.
            </p>
            <p>
              I worked on the user flow and the UI, seeing design through to development. Everything shown here shipped, except where noted.
            </p>

            {/* Prototype placeholder, hidden until the prototype is built.
            <figure>
              <div className="slot slot-phone">
                <strong>Paste clickable prototype</strong>
                <span>Add a medication → receive a reminder → see the consistency rate. With a “Start here” hint and a reset button.</span>
              </div>
            </figure>
            */}

            <h2 id="does" className="section-title">What it does</h2>
            <ul>
              <li>Tracks prescribed medications and supplements.</li>
              <li>Lets users add a medication in five steps: name, form, strength, schedule, and confirmation. Form and strength can be skipped.</li>
              <li>Offers the most common supplements and medications, suggests them as the user types, and accepts a name of their own.</li>
              <li>Displays common forms and strengths for a medication picked from the suggestions.</li>
              <li>Sends notifications as reminders to take a medication.</li>
              <li>Shows a consistency rate for each medication.</li>
            </ul>

            <h2 id="decisions" className="section-title">Product decisions</h2>

            <h3 id="speed">Suggestions make adding a medication quick</h3>
            <p>Name, form, and strength all come with suggestions, so a medication can be added quickly.</p>
            <figure>
              <div className="media-frame media-frame-video">
                <CaseVideo
                  src="/medications/medication-add.mp4"
                  poster="/medications/medication-add-poster.jpg"
                  label="Adding Vitamin D3: picking the name, form, and strength, setting a schedule, then marking both doses as taken."
                  width={720}
                  height={1456}
                />
              </div>
              <figcaption>Adding medications flow in 5 steps: writing name/choosing suggested, choosing form, inputting or choosing strength, setting up schedule, and confirming details.</figcaption>
            </figure>

            <h3 id="database">Longetic has its own medication and supplement database</h3>
            <p>Suggestions come from Longetic’s own database of medications and their forms and strengths. It covers medications from anywhere in the world, in different languages.</p>
            <figure>
              <div className="media-frame media-frame-video">
                <CaseVideo
                  src="/medications/meds-suggestions.mp4"
                  poster="/medications/meds-suggestions-poster.jpg"
                  label="Typing a medication name in Ukrainian, then in English, with suggestions following the input in each language."
                  width={720}
                  height={1460}
                />
              </div>
              <figcaption>Medication suggestions in Ukrainian and English.</figcaption>
            </figure>

            <h3 id="consistency">The consistency rate makes tracking efficient</h3>
            <p>Each medication shows its own consistency rate. It helps the user answer when a doctor asks what they take, and keep track of what they take and when.</p>
            <figure>
              <div className="media-frame media-frame-crop">
                <Image
                  src="/medications/consistency-rate.svg"
                  alt="A medication with its consistency rate."
                  width={640}
                  height={556}
                />
              </div>
              <figcaption>Medication consistency rate.</figcaption>
            </figure>

            <h2 id="status" className="section-title">Status</h2>
            <p>
              Shipped in autumn 2026. Adding a medication from a photo of the packaging or a doctor’s note is planned. Doctor’s notes already come into the app through upload, as shown in{" "}
              <Link className="text-link" href="/biomarkers">One place for every biomarker</Link>.
            </p>
          </main>
        </div>

        <CaseToc />
      </div>
    </>
  );
}
