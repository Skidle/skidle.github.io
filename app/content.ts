import { Entry } from "./components/EntryList";

export const links = [
  { label: "GitHub", href: "https://github.com/Skidle" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/dariadoronina/" },
  { label: "CV", href: "/daria_doronina_cv.pdf", download: true },
];

export const projects: Entry[] = [
  {
    title: "BuildHype",
    href: "https://github.com/Skidle/BuildHype",
    meta: "A waitlist tool built with Next.js, TypeScript, and Supabase, with social auth, an embeddable signup widget, and Redis-backed rate limiting.",
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
    meta: "An article on the Mews engineering blog.",
  },
];

export const talks: Entry[] = [
  {
    title: "Practical React Testing with Jest & React Testing Library",
    href: "https://www.youtube.com/watch?v=sTgNcM8Frw8",
    meta: "A talk for React Girls Prague (in Czech).",
  },
];

export const bio = {
  text: "Originally from Russia, I moved to Europe in 2013 and called Prague home for twelve years before settling in Barcelona. I graduated in chemical engineering, then made the switch to programming in 2017. These days I speak Russian, English, Czech, and Spanish, and I'm working on picking up Catalan. Outside of work, I practice Muay Thai and enjoy exploring the city or getting out into nature.",
  note: "If you've got something interesting to work on, I'd love to hear about it on",
  cta: "LinkedIn",
  ctaHref: "https://www.linkedin.com/in/dariadoronina/",
};
