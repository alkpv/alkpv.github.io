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

const title = "One place for every biomarker";

export const metadata: Metadata = {
  title: `${title} · Alisa Kopanieva`,
};

function Comparison({
  name,
  size,
  phoneSize,
  alt,
  rejectedAlt,
  shippedAlt,
  subject,
}: {
  name: string;
  size: [number, number];
  phoneSize: [number, number];
  alt: string;
  rejectedAlt: string;
  shippedAlt: string;
  subject: string;
}) {
  return (
    <figure>
      <div className="media-frame media-wide-only">
        <Image src={`/biomarkers/${name}-comparison.svg`} alt={alt} width={size[0]} height={size[1]} />
      </div>
      <div className="media-stack media-phone-only">
        <div className="media-frame">
          <Image src={`/biomarkers/${name}-rejected.svg`} alt={rejectedAlt} width={phoneSize[0]} height={phoneSize[1]} />
        </div>
        <div className="media-frame">
          <Image src={`/biomarkers/${name}-shipped.svg`} alt={shippedAlt} width={phoneSize[0]} height={phoneSize[1]} />
        </div>
      </div>
      <figcaption>
        <span className="media-wide-only">Rejected (left) and shipped (right) versions of {subject}.</span>
        <span className="media-phone-only">Rejected (top) and shipped (bottom) versions of {subject}.</span>
      </figcaption>
    </figure>
  );
}

export default function BiomarkersCase() {
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
            <p className="meta">Longetic · Product designer · Summer 2026</p>

            <p>
              Longetic is a B2C HealthTech app on the App Store that brings lab results and medical records together in one structured picture.
            </p>
            <p>
              This feature’s goal is to be one place for every biomarker: users upload their lab results and doctor’s notes, and the app organises them in a simple interface.
            </p>
            <p>
              I worked on the flows, the information architecture, and the UI, seeing design through to development. Everything shown here shipped, except where noted.
            </p>

            {/* Prototype placeholder, hidden until the prototype is built.
            <figure>
              <div className="slot slot-phone">
                <strong>Paste clickable prototype</strong>
                <span>“Try with a sample report” → processing → report → body system → biomarker → visits. With a “Start here” hint and a reset button.</span>
              </div>
            </figure>
            */}

            <h2 id="does" className="section-title">What it does</h2>
            <ul>
              <li>Collects lab results and doctor’s notes from a photo or a file via phone, web upload, or a forwarded email.</li>
              <li>Matches each biomarker across files into one history.</li>
              <li>Groups biomarkers into ten body systems.</li>
              <li>Shows stats for each uploaded file and across all files.</li>
              <li>Gives background on each biomarker: what affects it, what to track over time, and what to ask your doctor.</li>
              <li>Arranges doctor’s visits on a timeline.</li>
            </ul>

            <h2 id="does-not" className="section-title">What it does not do</h2>
            <ul>
              <li>Does not compare a value to a general reference range. It uses only the range printed by the lab.</li>
              <li>Does not compare a user to other users. It compares the user’s results only to their own previous results.</li>
              <li>Does not diagnose or recommend.</li>
            </ul>

            <h2 id="decisions" className="section-title">Product decisions</h2>

            <h3 id="upload">Upload is where the user’s documents are</h3>
            <p>Upload started with a phone file or a photo.</p>
            <figure>
              <div className="media-frame media-frame-video">
                <Image
                  src="/biomarkers/add-documents.svg"
                  alt="The Build your health profile sheet on the Home screen, with options to add a medication, take a photo, choose a photo, or attach a file."
                  width={393}
                  height={800}
                />
              </div>
              <figcaption>Three ways to upload from the phone: take a photo, choose a photo, or attach a file.</figcaption>
            </figure>
            <p>We then asked around about where users keep their health files. Having them on the phone was not the norm. So we added two more routes: web upload from a desktop, and an address users can forward lab emails to. Documents from every route appear in the app.</p>

            <h3 id="systems">Body systems come before a full list</h3>
            <p>A long list of biomarker names says little to most users. Ten body systems divide the same results into categories users can understand: vitamins, hormones, blood, heart, kidneys, liver, minerals, whole body, metabolism, and immunity.</p>
            <figure>
              <div className="media-frame media-frame-video">
                <CaseVideo
                  src="/biomarkers/body-systems.mp4"
                  poster="/biomarkers/body-systems-poster.jpg"
                  label="The Health screen with results grouped by body system, then opening Vitamins and the Vitamin B12 page."
                  width={720}
                  height={1466}
                />
              </div>
              <figcaption>Results grouped into body systems, from the Health screen down to a single biomarker.</figcaption>
            </figure>
            <p>Some users will want to see everything at once without opening each system. A plain list covers this as a secondary view. It is ready for development and has not shipped yet.</p>
            <figure>
              <div className="media-frame media-wide-only">
                <Image
                  src="/biomarkers/list-view.svg"
                  alt="The Health screen in two views: biomarkers grouped by body system, and the same biomarkers as a plain list."
                  width={880}
                  height={935}
                />
              </div>
              <div className="media-stack media-phone-only">
                <div className="media-frame">
                  <Image
                    src="/biomarkers/list-view-systems.svg"
                    alt="The Health screen with biomarkers grouped by body system."
                    width={420}
                    height={620}
                  />
                </div>
                <div className="media-frame">
                  <Image
                    src="/biomarkers/list-view-list.svg"
                    alt="The Health screen with biomarkers shown as a plain list."
                    width={420}
                    height={620}
                  />
                </div>
              </div>
              <figcaption>Additional view of biomarkers as a list. Not shipped yet.</figcaption>
            </figure>

            <h3 id="history">Each biomarker has one history</h3>
            <p>A biomarker page shows the latest result with its source file and date, the results from other files, and the background on that biomarker.</p>
            <figure>
              <div className="media-frame media-frame-video">
                <CaseVideo
                  src="/biomarkers/biomarker-page.mp4"
                  poster="/biomarkers/biomarker-page-poster.jpg"
                  label="The TSH biomarker page, scrolling from the latest result with its file and date, to a result from another file, to the background on the biomarker."
                  width={720}
                  height={1464}
                />
              </div>
              <figcaption>Biomarker page for TSH (Thyroid-Stimulating Hormone), with the latest result, a result from another file, and the background.</figcaption>
            </figure>
            <p>Matching relies on a canonical biomarker table built by the team. If no match is found, the biomarker stays as printed, without a description. If a value is read incorrectly, the user can write to support to have it corrected.</p>

            <h3 id="out-of-range">Out of range is soft orange, not red</h3>
            <p>Red was rejected as alarming. A result outside the range is soft orange, with a marker on a scale of the lab’s printed range.</p>
            <Comparison
              name="colour"
              size={[920, 216]}
              phoneSize={[461, 182]}
              alt="Two versions of a biomarker result card: rejected in red, shipped in soft orange."
              rejectedAlt="Rejected biomarker result card in red."
              shippedAlt="Shipped biomarker result card in soft orange."
              subject="the colour for out of range biomarkers"
            />
            <p>The label says “Out of range”, not “High” or “Low”. Results can fall above or below a range, and separate categories make sorting harder. One label keeps the categories consistent, and the marker shows which side of the range the result falls on.</p>
            <figure>
              <div className="media-frame media-frame-crop-wide">
                <Image
                  src="/biomarkers/out-of-range.svg"
                  alt="Three biomarker result cards labelled “Out of range”, with markers on the scale showing which side of the range each result falls on."
                  width={640}
                  height={554}
                />
              </div>
              <figcaption>Out of range biomarkers.</figcaption>
            </figure>

            <h3 id="conditional">A conditional range shows its conditions</h3>
            <p>Some biomarkers have different lab ranges depending on factors such as menstrual cycle day, pregnancy, or underlying conditions.</p>
            <p>These get a grey status and a list of the ranges as printed, with no scale.</p>
            <figure>
              <div className="media-frame media-frame-crop">
                <Image
                  src="/biomarkers/conditional-range.svg"
                  alt="A TSH result card with a grey conditional range status and a list of the printed reference ranges."
                  width={640}
                  height={358}
                />
              </div>
              <figcaption>Conditional range of TSH (Thyroid-Stimulating Hormone) during pregnancy.</figcaption>
            </figure>

            <h3 id="visits">Doctor’s visits stay neutral</h3>
            <p>Doctor’s notes become a timeline of visits, with a graph showing when in the year each one happened.</p>
            <p>Biomarkers use system orange and green. The visits graph uses the brand colour instead: seeing a doctor is neither good nor bad, so the graph neither praises nor punishes it.</p>
            <Comparison
              name="visits"
              size={[880, 513]}
              phoneSize={[420, 494]}
              alt="Two versions of the doctor visits screen: the rejected graph in orange and green, the shipped graph in the brand colour."
              rejectedAlt="Rejected doctor visits screen with the graph in orange and green."
              shippedAlt="Shipped doctor visits screen with the graph in the brand colour."
              subject="doctor visits"
            />
            <p>Inside a visit, the note is reduced to what matters: when and where the appointment happened, diagnoses, recommendations, prescriptions, and follow-ups. All of it appears as printed.</p>
            <figure>
              <div className="media-frame media-wide-only">
                <Image
                  src="/biomarkers/visit-screens.svg"
                  alt="The Visits timeline next to one opened visit, showing visit information, diagnosis, and recommendations."
                  width={880}
                  height={513}
                />
              </div>
              <div className="media-stack media-phone-only">
                <div className="media-frame">
                  <Image
                    src="/biomarkers/visit-screens-timeline.svg"
                    alt="The Visits timeline with a graph of the year and a list of visits by date."
                    width={420}
                    height={494}
                  />
                </div>
                <div className="media-frame">
                  <Image
                    src="/biomarkers/visit-screens-detail.svg"
                    alt="One opened visit showing visit information, diagnosis, and recommendations."
                    width={420}
                    height={494}
                  />
                </div>
              </div>
              <figcaption>
                <span className="media-wide-only">Visits timeline (left) and an opened visit (right).</span>
                <span className="media-phone-only">Visits timeline (top) and an opened visit (bottom).</span>
              </figcaption>
            </figure>

            <h2 id="status" className="section-title">Status</h2>
            <p>Shipped in summer 2026. The plain list is ready for development.</p>
            <p>
              Next case:{" "}
              <Link className="text-link" href="/medications">Medication tracking</Link>
            </p>
          </main>
        </div>

        <CaseToc />
      </div>
    </>
  );
}
