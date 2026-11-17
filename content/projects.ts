import type { Project } from "./types";

/**
 * TODO: replace these three sample entries with real projects.
 * Covers are CSS gradients on purpose — swap in a real screenshot later by adding
 * an `image` field and using next/image, or just keep the gradient.
 */
export const projects: Project[] = [
  {
    slug: "analytics-dashboard",
    title: {
      en: "Analytics dashboard redesign",
      id: "Redesign dashboard analitik",
    },
    role: { en: "Frontend developer — solo", id: "Frontend developer — solo" },
    year: "2025",
    summary: {
      en: "Rebuilt a data-heavy dashboard around one question: what changed this week? A new hierarchy, keyboard-first filters, and charts that stay responsive with 40k rows.",
      id: "Membangun ulang dashboard padat data di sekitar satu pertanyaan: apa yang berubah minggu ini? Hierarki baru, filter dengan keyboard, dan chart yang tetap responsif untuk 40 ribu baris.",
    },
    result: {
      en: "Time to first insight went from 4 clicks to 1, and the main view stays under 120 kB of JavaScript.",
      id: "Waktu ke insight pertama turun dari 4 klik jadi 1, dan tampilan utama tetap di bawah 120 kB JavaScript.",
    },
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Recharts"],
    liveUrl: "",
    repoUrl: "",
    caseStudySlug: "case-study-redesign-dashboard",
    cover: { from: "#1c1917", to: "#57534e", initials: "01" },
    sample: true,
  },
  {
    slug: "storefront",
    title: {
      en: "Small-batch storefront",
      id: "Storefront produk small-batch",
    },
    role: { en: "Frontend — with one designer", id: "Frontend — bersama satu desainer" },
    year: "2024",
    summary: {
      en: "A catalogue and checkout flow for a maker selling in batches. Product pages built around stock, shipping cost and one clear action.",
      id: "Katalog dan alur checkout untuk pembuat produk batch kecil. Halaman produk dibangun di sekitar stok, ongkos kirim, dan satu aksi yang jelas.",
    },
    result: {
      en: "Cut the mobile checkout path from five screens to three; 92 Lighthouse accessibility on product pages.",
      id: "Alur checkout mobile dipangkas dari lima layar jadi tiga; skor aksesibilitas Lighthouse 92 di halaman produk.",
    },
    stack: ["Next.js", "Stripe", "Tailwind CSS", "Zod"],
    liveUrl: "",
    repoUrl: "",
    cover: { from: "#0f172a", to: "#475569", initials: "02" },
    sample: true,
  },
  {
    slug: "company-profile",
    title: {
      en: "Company profile site",
      id: "Website profil perusahaan",
    },
    role: { en: "Frontend developer", id: "Frontend developer" },
    year: "2024",
    summary: {
      en: "A content-managed marketing site for a services company, with a component library the marketing team could extend without touching layout code.",
      id: "Website marketing berbasis CMS untuk perusahaan jasa, dengan pustaka komponen yang bisa dikembangkan tim marketing tanpa menyentuh kode layout.",
    },
    result: {
      en: "Page build time for the marketing team dropped from days to hours.",
      id: "Waktu pembuatan halaman untuk tim marketing turun dari hitungan hari jadi jam.",
    },
    stack: ["Next.js", "TypeScript", "Sanity", "Tailwind CSS"],
    liveUrl: "",
    repoUrl: "",
    cover: { from: "#292524", to: "#a8a29e", initials: "03" },
    sample: true,
  },
];
