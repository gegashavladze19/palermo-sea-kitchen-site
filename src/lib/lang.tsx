import { createContext, useContext, useState, type ReactNode } from "react";
import { t, type Lang } from "@/content/site";

const LangContext = createContext<{
  lang: Lang;
  setLang: (l: Lang) => void;
  d: (typeof t)["ka"];
}>({ lang: "ka", setLang: () => {}, d: t.ka });

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("ka");
  return (
    <LangContext.Provider value={{ lang, setLang, d: t[lang] }}>{children}</LangContext.Provider>
  );
}

export const useLang = () => useContext(LangContext);
