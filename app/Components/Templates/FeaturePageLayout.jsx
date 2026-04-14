import Header from '../Organisms/Header';

/** Shared shell for feature marketing routes: sticky header + main landmark */
export default function FeaturePageLayout({ children }) {
  return (
    <>
      <Header />
      <main className="flex-1">{children}</main>
    </>
  );
}
