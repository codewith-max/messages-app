import Footer from '../Organisms/Footer';
import GroupsDiscoverAutoplaySection from '../Organisms/GroupsDiscoverAutoplaySection';
import GroupsHero from '../Organisms/GroupsHero';
import GroupsManageAutoplaySection from '../Organisms/GroupsManageAutoplaySection';
import GroupsNeedHelpSection from '../Organisms/GroupsNeedHelpSection';
import Header from '../Organisms/Header';

export default function GroupsMarketingPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <GroupsHero />
        <GroupsManageAutoplaySection />
        <GroupsDiscoverAutoplaySection />
        <GroupsNeedHelpSection />
        <div id="download" className="scroll-mt-24" />
      </main>
      <Footer />
    </>
  );
}
