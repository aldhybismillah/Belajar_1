/**
 * TODO: replace every placeholder below with your real details.
 * This is the only file you need for name, links and the CV.
 */
export const site = {
  name: { en: "Your Name", id: "Nama Kamu" },
  role: { en: "Frontend Developer", id: "Frontend Developer" },
  location: { en: "Jakarta, Indonesia", id: "Jakarta, Indonesia" },

  email: "you@example.com",
  github: "https://github.com/your-username",
  linkedin: "https://www.linkedin.com/in/your-username",
  /** Optional — leave "" to hide the WhatsApp link. */
  whatsapp: "",

  /** Used for metadata and canonical URLs once you have your Vercel domain. */
  url: "https://your-portfolio.vercel.app",

  /**
   * CV placeholder: drop your PDF at public/cv/cv.pdf, then set cvReady to true.
   * While it is false the hero shows a "CV coming soon" chip instead of a broken link.
   */
  cvReady: false,
  cvPath: "/cv/cv.pdf",
};

export type Site = typeof site;
