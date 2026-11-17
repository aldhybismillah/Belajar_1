import { en } from "@/content/dictionaries/en";
import { id } from "@/content/dictionaries/id";
import type { Dictionary } from "@/content/dictionaries/types";

export const locales = ["en", "id"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

export function otherLocale(locale: Locale): Locale {
  return locale === "en" ? "id" : "en";
}

export function getDictionary(locale: Locale): Dictionary {
  return locale === "en" ? en : id;
}
