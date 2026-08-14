import type { Dictionary, LocaleCode } from "./en";
import { en } from "./en";
import { ur } from "./ur";

export type { Dictionary, LocaleCode };

export const dictionaries: Record<LocaleCode, Dictionary> = {
  EN: en,
  UR: ur,
};

export const defaultLocale: LocaleCode = "EN";

export const getDictionary = (locale: LocaleCode): Dictionary =>
  dictionaries[locale];
