import type { TagId } from "../data/tags";
import type { TechnologyId } from "../data/technologies";

import WebsiteImage from "../images/projects/website.jpg";

export interface Project {
    description?: string;
    endDate?: Date;
    id: string;
    image?: typeof WebsiteImage;
    repo?: string;
    startDate: Date;
    tags: readonly TagId[];
    technologies: readonly TechnologyId[];
    title: string;
    url?: string;
}

export const projects = [
  {
    description: "The website you're currently visiting",
    id: "website",
    image: WebsiteImage,
    title: "Personal Website",
    technologies: ["html", "javascript", "tailwindcss"],
    tags: ["web", "personal"],
    repo: "https://github.com/sophie-mc-dev/my-svelte-portfolio",
    url: "https://sophie-mc.dev",
    startDate: new Date("2023-07-21"),
  },
  // add more
] as const satisfies readonly Project[];
