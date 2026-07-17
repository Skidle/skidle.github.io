import { Entry } from "./components/EntryList";

export const links = [
  { label: "GitHub", href: "https://github.com/Skidle" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/dariadoronina/" },
  { label: "CV", href: "/daria_doronina_cv.pdf" },
];

export const projects: Entry[] = [
  {
    title: "BuildHype",
    href: "https://github.com/Skidle/BuildHype",
    meta: "A waitlist tool. Next.js, TypeScript, Supabase, Google sign-in, an embeddable signup widget, Redis rate limiting.",
  },
  {
    title: "spotify-client",
    href: "https://github.com/Skidle/spotify-client",
    meta: "An example Redux app, built to teach Redux at a React Girls webinar.",
  },
];

export const writing: Entry[] = [
  {
    title: "How to Write Custom ESLint Rules",
    href: "https://developers.mews.com/how-to-write-custom-eslint-rules/",
    meta: "An article on the Mews engineering blog about writing custom ESLint rules.",
  },
];
