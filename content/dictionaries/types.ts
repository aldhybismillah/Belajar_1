export interface Dictionary {
  meta: {
    title: string;
    description: string;
  };
  nav: {
    work: string;
    about: string;
    writing: string;
    contact: string;
  };
  /** Label shown on the language switch: the language you would switch TO. */
  localeLabel: string;
  hero: {
    eyebrow: string;
    headline: string;
    lead: string;
    ctaWork: string;
    ctaEmail: string;
    ctaCv: string;
    ctaCvPending: string;
    status: string;
  };
  work: {
    kicker: string;
    title: string;
    sample: string;
    screenshotPending: string;
    result: string;
    live: string;
    repo: string;
    caseStudy: string;
  };
  about: {
    kicker: string;
    title: string;
    body: string[];
    timelineTitle: string;
  };
  testimonials: {
    kicker: string;
    title: string;
    sample: string;
  };
  stack: {
    kicker: string;
    title: string;
    groups: { label: string; items: string[] }[];
  };
  writing: {
    kicker: string;
    title: string;
    all: string;
    empty: string;
    indexLead: string;
  };
  contact: {
    kicker: string;
    title: string;
    lead: string;
    email: string;
    github: string;
    linkedin: string;
  };
  footer: {
    built: string;
  };
  post: {
    back: string;
    readingTime: string;
    sample: string;
  };
}
