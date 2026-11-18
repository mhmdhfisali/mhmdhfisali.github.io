"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { translations } from "@/lib/translations";

const LanguageContext = createContext({
  locale: "id",
  setLocale: () => {},
  toggleLocale: () => {},
  t: translations.id,
  isMounted: false,
});

export function LanguageProvider({ children }) {
  const [locale, setLocale] = useState("id");
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const saved = localStorage.getItem("portfolio_lang");
    if (saved === "en" || saved === "id") {
      setLocale(saved);
    }
  }, []);

  const handleSetLocale = (newLocale) => {
    setLocale(newLocale);
    localStorage.setItem("portfolio_lang", newLocale);
    if (typeof document !== "undefined") {
      document.documentElement.lang = newLocale;
    }
  };

  const toggleLocale = () => {
    const next = locale === "id" ? "en" : "id";
    handleSetLocale(next);
  };

  const t = translations[locale] || translations.id;

  return (
    <LanguageContext.Provider
      value={{
        locale,
        language: locale,
        setLocale: handleSetLocale,
        setLanguage: handleSetLocale,
        toggleLocale,
        t,
        isMounted,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
