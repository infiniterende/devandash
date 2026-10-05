import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Tag from "@/components/ui/Tag";
import Button from "@/components/ui/Button";
import Halftone from "@/components/ui/Halftone";
import { PROJECTS, getProject, projectHref } from "@/lib/projects";
import { SITE_URL } from "@/lib/site";
import pageStyles from "@/app/page.module.css";
import styles from "./case-study.module.css";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return PROJECTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  const title = `${project.name} case study — dev&dash`;
  return {
    title,
    description: project.caseStudy.summary,
    openGraph: {
      title,
      description: project.caseStudy.summary,
      url: new URL(projectHref(project), SITE_URL).toString(),
      images: [{ url: project.image, width: project.imageWidth, height: project.imageHeight }],
    },
  };
}

const SECTIONS = [
  { key: "solution", label: "Solution", heading: "What we built" },
  { key: "design", label: "Design", heading: "How it looks and feels" },
  { key: "engineering", label: "Engineering", heading: "How it works" },
  { key: "result", label: "Result", heading: "Where it landed" },
] as const;

export default async function CaseStudyPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const cs = project.caseStudy;
  const index = PROJECTS.findIndex((p) => p.slug === project.slug);
  const next = PROJECTS[(index + 1) % PROJECTS.length];
  const accentVars = { "--accent": project.accent } as React.CSSProperties;

  return (
    <main className={pageStyles.page} style={accentVars}>
      {/* Header */}
      <section className={styles.header} aria-label={`${project.name} case study`}>
        <Halftone
          mask="radial-gradient(38% 42% at 12% 70%, #000, transparent 70%), radial-gradient(34% 40% at 90% 60%, #000, transparent 70%)"
          opacity={0.7}
        />
        <Nav active="/#work" />
        <div className={styles.headerBody}>
          <Link href="/#work" className={styles.back}>
            ← All work
          </Link>
          <Tag onGradient>
            Case Study · {cs.industry}
          </Tag>
          <h1 className={styles.h1}>{project.title}</h1>
          <p className={styles.summary}>{cs.summary}</p>
        </div>
      </section>

      {/* Screenshot overlapping the header */}
      <div className={styles.shotCard}>
        <div className={styles.shotFrame} style={{ background: project.frameBackground }}>
          <div className={styles.shot} style={{ boxShadow: project.imageShadow }}>
            <Image
              src={project.image}
              alt={project.imageAlt}
              width={project.imageWidth}
              height={project.imageHeight}
              sizes="(max-width: 1320px) 100vw, 1280px"
              priority
              className={styles.img}
            />
          </div>
        </div>
      </div>

      {/* Problem + constraint, with facts panel */}
      <section className={styles.overview}>
        <div className={styles.overviewText}>
          <div className={styles.block}>
            <span className={styles.label}>01 — Problem</span>
            <h2 className={styles.h2}>What needed solving</h2>
            <div className={styles.body}>
              {cs.problem.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
          <div className={styles.block}>
            <span className={styles.label}>02 — Constraint</span>
            <h2 className={styles.h2}>What made it hard</h2>
            <div className={styles.body}>
              {cs.constraint.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
        </div>

        <aside className={styles.facts} aria-label="Project facts">
          <div className={styles.factRow}>
            <span className={styles.factKey}>Client</span>
            <span className={styles.factValue}>{project.name}</span>
          </div>
          <div className={styles.factRow}>
            <span className={styles.factKey}>Industry</span>
            <span className={styles.factValue}>{cs.industry}</span>
          </div>
          <div className={styles.factRow}>
            <span className={styles.factKey}>Product</span>
            <span className={styles.factValue}>{cs.productType}</span>
          </div>
          <div className={styles.factGroup}>
            <span className={styles.factKey}>What dev&amp;dash delivered</span>
            <ul className={styles.list}>
              {cs.delivered.map((d) => (
                <li key={d} className={styles.listItem}>
                  {d}
                </li>
              ))}
            </ul>
          </div>
          {cs.builtWith.length > 0 && (
            <div className={styles.factGroup}>
              <span className={styles.factKey}>Built with</span>
              <ul className={styles.chips}>
                {cs.builtWith.map((t) => (
                  <li key={t} className={styles.chip}>
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </aside>
      </section>

      {/* Narrative sections */}
      <section className={styles.sections}>
        {SECTIONS.map((s, i) => (
          <div key={s.key} className={styles.section}>
            <div className={styles.sectionLabel}>
              <span className={styles.label}>
                {String(i + 3).padStart(2, "0")} — {s.label}
              </span>
            </div>
            <div className={styles.sectionText}>
              <h2 className={styles.h2}>{s.heading}</h2>
              <div className={styles.body}>
                {cs[s.key].map((p, j) => (
                  <p key={j}>{p}</p>
                ))}
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Next project + CTA */}
      <section className={styles.outro}>
        <Link href={projectHref(next)} className={styles.nextCard}>
          <span className={styles.label}>Next project</span>
          <span className={styles.nextTitle}>{next.title}</span>
          <span className={styles.nextSubtitle} style={{ color: next.accent }}>
            {next.subtitle}
          </span>
          <span className={styles.nextCta}>Read the case study →</span>
        </Link>
        <div className={styles.ctaCard}>
          <Tag>Have a project like this?</Tag>
          <p className={styles.ctaText}>
            From idea to production, we design and build the whole thing.
          </p>
          <Button href="/#contact" variant="dark" hoverColor={project.accent}>
            Start a Project →
          </Button>
        </div>
      </section>

      <Footer />
    </main>
  );
}
