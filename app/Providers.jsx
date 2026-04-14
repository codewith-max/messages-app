'use client';

import { LocaleProvider } from './contexts/LocaleContext';

export default function Providers({ children }) {
  return <LocaleProvider>{children}</LocaleProvider>;
}
