import Image from 'next/image';

const ICON_PATHS = {
  devices: '/image/help-topic1.png',
  shield: '/image/help-topic2.png',
  cloud: '/image/help-topic3.png',
  teens: '/image/help-topic4.png',
  ads: '/image/help-topic5.png',
  business: '/image/help-topic6.png',
};

export default function HelpTopicIllustration({ variant, className = '' }) {
  const src = ICON_PATHS[variant];

  return (
    <div className={`flex h-[120px] items-center justify-center ${className}`}>
      {src ? <Image src={src} alt="" width={96} height={96} className="h-24 w-24 object-contain" /> : null}
    </div>
  );
}
