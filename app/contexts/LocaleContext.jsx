'use client';

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { getFooterStrings, LANGUAGE_OPTIONS } from '../Components/Organisms/footerI18n';
import { getPageStrings } from '../Components/i18n/pageStrings';

const STORAGE_KEY = 'wa-locale';
const LEGACY_KEY = 'wa-footer-lang';

const LocaleContext = createContext(null);

function readStoredLocale() {
  try {
    const saved =
      localStorage.getItem(STORAGE_KEY) || localStorage.getItem(LEGACY_KEY);
    if (saved && LANGUAGE_OPTIONS.some((l) => l.code === saved)) return saved;
  } catch {
    /* ignore */
  }
  return 'en';
}

export function LocaleProvider({ children }) {
  const [locale, setLocaleState] = useState('en');

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- hydrate from localStorage after mount
    setLocaleState(readStoredLocale());
  }, []);

  const setLocale = useCallback((code) => {
    setLocaleState(code);
    try {
      localStorage.setItem(STORAGE_KEY, code);
      localStorage.removeItem(LEGACY_KEY);
    } catch {
      /* ignore */
    }
  }, []);

  useEffect(() => {
    if (typeof document === 'undefined') return;
    document.documentElement.lang = locale === 'zh' ? 'zh-Hans' : locale;
    document.documentElement.dir = ['ar', 'ur', 'he'].includes(locale) ? 'rtl' : 'ltr';
  }, [locale]);

  const value = useMemo(() => {
    const page = getPageStrings(locale);
    const footer = getFooterStrings(locale);
    return { locale, setLocale, page, footer };
  }, [locale, setLocale]);

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>;
}

export function useLocale() {
  const ctx = useContext(LocaleContext);
  if (!ctx) {
    throw new Error('useLocale must be used within LocaleProvider');
  }
  return ctx;
}
