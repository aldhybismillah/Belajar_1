import type { Localized, LocalizedList } from "./types";

/**
 * TODO: replace with your real experience, stack and testimonials.
 * Everything marked `sample: true` is labelled on the page as a placeholder.
 */
export const timeline: {
  period: string;
  role: Localized;
  org: string;
  points: LocalizedList;
  sample?: boolean;
}[] = [
  {
    period: "2024 — now",
    role: { en: "Frontend Developer", id: "Frontend Developer" },
    org: "Company name",
    points: {
      en: [
        "Own the frontend of a product used daily by the internal operations team.",
        "Cut initial bundle size by 38% by removing three overlapping UI libraries.",
        "Set up the component patterns the rest of the team now builds on.",
      ],
      id: [
        "Memegang frontend produk yang dipakai harian oleh tim operasional.",
        "Menurunkan ukuran bundle awal 38% dengan menghapus tiga library UI yang tumpang tindih.",
        "Menyusun pola komponen yang sekarang dipakai seluruh tim.",
      ],
    },
    sample: true,
  },
  {
    period: "2022 — 2024",
    role: { en: "Frontend Developer", id: "Frontend Developer" },
    org: "Studio / campus project",
    points: {
      en: [
        "Built and shipped marketing pages and small web apps for small businesses.",
        "Worked directly with clients to turn vague briefs into scoped, shippable screens.",
      ],
      id: [
        "Membangun dan merilis halaman marketing serta web app kecil untuk usaha kecil.",
        "Bekerja langsung dengan klien untuk mengubah brief yang kabur jadi layar yang bisa dirilis.",
      ],
    },
    sample: true,
  },
];

export const stack = {
  groups: [
    { label: "Core", items: ["TypeScript", "React", "Next.js", "Tailwind CSS"] },
    { label: "Comfortable", items: ["Node.js", "REST APIs", "Zod", "Framer Motion"] },
    { label: "Tooling", items: ["Git", "Vercel", "Figma", "Playwright"] },
  ],
};

export const testimonials: {
  quote: Localized;
  author: string;
  role: Localized;
  sample?: boolean;
}[] = [
  {
    quote: {
      en: "Sample quote — replace this with a real sentence from a manager, client or teammate about how you work.",
      id: "Kutipan contoh — ganti dengan kalimat asli dari atasan, klien, atau rekan kerja tentang cara kamu bekerja.",
    },
    author: "Person's name",
    role: { en: "Product Manager, Company", id: "Product Manager, Perusahaan" },
    sample: true,
  },
  {
    quote: {
      en: "Second sample quote — one concrete detail is worth more than five adjectives.",
      id: "Kutipan contoh kedua — satu detail konkret lebih bernilai daripada lima kata sifat.",
    },
    author: "Person's name",
    role: { en: "Founder, Studio", id: "Founder, Studio" },
    sample: true,
  },
];
