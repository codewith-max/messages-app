/** Copy and layout config for /privacy — mirrors whatsapp.com/privacy structure */

export const exploreIntro = {
  lines: [
    { text: 'Explore more', accent: false },
    { text: 'WhatsApp privacy controls', accent: true },
  ],
  body:
    'Take a guided tour of your privacy settings and learn how to choose what you share — and with whom.',
};

export const discoverIntro = {
  lines: [
    { text: 'Discover', accent: false },
    { text: 'more features', accent: true },
  ],
  body: 'Learn more about what you can do on WhatsApp.',
};

export const faqIntro = {
  lines: [
    { text: 'Need more', accent: false },
    { text: 'help?', accent: true },
  ],
  seeAllHref: '#faqs',
};

export const splitFeatures = [
  {
    id: 'disappearing-messages',
    reverse: false,
    title: [
      { text: 'Disappearing', accent: true },
      { text: 'messages', accent: false },
    ],
    body:
      "With disappearing messages, you can control which messages stick around and for how long, by setting them up to disappear after you've sent them.",
    learnMoreHref: '#disappearing-messages',
    mockup: 'groupInfo',
  },
  {
    id: 'silence-callers',
    reverse: true,
    title: [
      { text: 'Silence', accent: true },
      { text: 'unknown callers', accent: false },
    ],
    body:
      'Screen out spam and unknown contacts from calling you, so you can focus on conversations that really matter to you.',
    learnMoreHref: '#silence-unknown-callers',
    learnMoreAccent: true,
    mockup: 'callsSilence',
  },
  {
    id: 'encrypted-backups',
    reverse: false,
    title: [
      { text: 'End-to-End', accent: true },
      { text: 'Encrypted', accent: true },
      { text: 'backups', accent: false },
    ],
    body:
      'Keep your online backups private. Turn on encrypted backups to extend the security of WhatsApp end-to-end encryption to your messages saved in iCloud or Google Drive.',
    learnMoreHref: '#encrypted-backups',
    mockup: 'backupEncryption',
  },
  {
    id: 'last-seen',
    reverse: true,
    title: [
      { text: 'Last seen', accent: true },
      { text: 'and online', accent: false },
    ],
    body:
      "Choose to be seen by only those you want. You can customize your privacy settings to choose who can see when you're online, and when you last used WhatsApp.",
    learnMoreHref: '#last-seen-online',
    mockup: 'lastSeenOnline',
  },
  {
    id: 'security-safety',
    reverse: false,
    title: [
      { text: 'Security', accent: true },
      { text: 'and safety', accent: false },
    ],
    body: 'Protect your account from hackers and scammers and stop unwanted chats.',
    learnMoreHref: '#security-safety',
    learnMoreChevron: true,
    mockup: 'securityStack',
  },
];

export const exploreCards = [
  {
    id: 'privacy-checkup',
    title: 'Privacy check up',
    description:
      'Review your privacy settings in one place and adjust who can reach you and see your information.',
    learnMoreHref: '#privacy-checkup',
    variant: 'illustration',
  },
  {
    id: 'view-once',
    title: 'View once',
    description: 'Send photos and videos that disappear after they have been opened.',
    learnMoreHref: '#view-once',
    variant: 'photo',
  },
  {
    id: 'app-lock',
    title: 'App lock',
    description: 'Require your fingerprint or device passcode to open WhatsApp.',
    learnMoreHref: '#app-lock',
    variant: 'dark',
  },
];

export const faqItems = [
  {
    question: 'What is end-to-end encryption?',
    href: '#faq-e2e',
    highlighted: true,
  },
  {
    question: 'What is two-step verification?',
    href: '#faq-2sv',
    highlighted: false,
  },
  {
    question: 'Is WhatsApp private and secure?',
    href: '#faq-private',
    highlighted: false,
  },
  {
    question: 'How to change your privacy settings on WhatsApp',
    href: '#faq-settings',
    highlighted: false,
  },
  {
    question: 'Answering your questions about privacy on WhatsApp',
    href: '#faq-answers',
    highlighted: false,
  },
];

export const discoverCards = [
  {
    id: 'calling',
    title: 'Calling',
    subtitle: 'Learn more',
    href: '/features/calling',
    visualClass: 'bg-gradient-to-br from-[#1a3a2e] to-[#0d1f18]',
  },
  {
    id: 'groups',
    title: 'Groups',
    subtitle: 'Learn more',
    href: '/groups',
    visualClass: 'bg-gradient-to-br from-[#2d2419] to-[#1a1510]',
  },
  {
    id: 'meta-ai',
    title: 'Meta AI',
    subtitle: 'Learn more',
    href: '/features/meta-ai',
    visualClass: 'bg-gradient-to-br from-[#3d1f4a] to-[#1f0f28]',
  },
];
