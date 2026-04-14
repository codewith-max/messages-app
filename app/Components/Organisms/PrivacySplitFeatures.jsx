import { splitFeatures } from '../../content/privacyPageContent';
import PrivacyDarkSplit from './PrivacyDarkSplit';

export default function PrivacySplitFeatures() {
  return (
    <>
      {splitFeatures.map((item) => (
        <PrivacyDarkSplit
          key={item.id}
          id={item.id}
          titleLines={item.title}
          body={item.body}
          learnMoreHref={item.learnMoreHref}
          learnMoreAccent={item.learnMoreAccent ?? false}
          learnMoreChevron={item.learnMoreChevron ?? false}
          reverse={item.reverse}
          mockup={item.mockup}
        />
      ))}
    </>
  );
}
