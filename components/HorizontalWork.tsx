import ProjectCard from "./ProjectCard";
import HorizontalScroller from "./motion/HorizontalScroller";
import type { Project } from "@/lib/projects";

/** Project cards in a pinned, scroll-driven horizontal pass (vertical stack as fallback). */
export default function HorizontalWork({ projects }: { projects: Project[] }) {
  return (
    <HorizontalScroller>
      {projects.map((project) => (
        <ProjectCard key={project.slug} project={project} />
      ))}
    </HorizontalScroller>
  );
}
