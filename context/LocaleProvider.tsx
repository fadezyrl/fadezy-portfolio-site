"use client";

import { useMemo, useState, type ReactElement, type ReactNode } from "react";
import type { LocaleCode } from "@/data/dictionary";
import { defaultLocale, getDictionary } from "@/data/dictionary";
import { LocaleContext } from "./LocaleContext";

type LocaleProviderProps = {
  children: ReactNode;
};

export const LocaleProvider = ({
  children,
}: LocaleProviderProps): ReactElement => {
  const [locale, setLocale] = useState<LocaleCode>(defaultLocale);

  const value = useMemo(
    () => ({
      locale,
      setLocale,
      t: getDictionary(locale),
    }),
    [locale],
  );

  return (
    <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>
  );
};
