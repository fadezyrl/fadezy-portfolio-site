"use client";

import { createContext } from "react";
import type { Dictionary, LocaleCode } from "@/data/dictionary";
import { defaultLocale, getDictionary } from "@/data/dictionary";

export type LocaleContextValue = {
  locale: LocaleCode;
  setLocale: (locale: LocaleCode) => void;
  t: Dictionary;
};

export const LocaleContext = createContext<LocaleContextValue>({
  locale: defaultLocale,
  setLocale: () => undefined,
  t: getDictionary(defaultLocale),
});
