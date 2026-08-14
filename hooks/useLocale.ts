"use client";

import { useContext } from "react";
import {
  LocaleContext,
  type LocaleContextValue,
} from "@/context/LocaleContext";

export const useLocale = (): LocaleContextValue => {
  return useContext(LocaleContext);
};
