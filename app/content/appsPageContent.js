/** Apps / download page — copy and card config */

export const otherDownloadIntro = {
  title: 'Other download options',
  subtitle: 'Stay connected with friends and family across your devices.',
};

export const downloadOptionCards = [
  {
    id: 'ipados',
    tag: 'NEW',
    platformLabel: 'Tablet',
    title: 'iPadOS',
    description:
      'All the features you love: chats, calling, status, screen sharing, and more, with a bigger screen using the WhatsApp iPad app.',
    requirements: 'Minimum Requirements: iPadOS 13.1 or newer',
    store: 'apple',
  },
  {
    id: 'ios',
    platformLabel: 'Mobile/Tablet',
    title: 'iOS',
    description:
      'Message and call privately on your iPhone or iPod touch with the same end-to-end encryption you expect from WhatsApp.',
    requirements: 'Minimum Requirements (Version 22.13.74) Requires iOS 12.0 or newer.',
    store: 'apple',
  },
  {
    id: 'android',
    platformLabel: 'Mobile',
    title: 'Android',
    description:
      'Get WhatsApp for Android phones and tablets from Google Play, with voice and video calling built in.',
    requirements: 'Requires Android OS 5.0 or newer.',
    store: 'google',
  },
  {
    id: 'mac',
    platformLabel: 'Desktop',
    title: 'Mac',
    description: 'Use WhatsApp on your Mac with native notifications, keyboard shortcuts, and a larger chat window.',
    requirements: 'Requires macOS 11 or newer.',
    store: 'apple',
  },
  {
    id: 'windows',
    platformLabel: 'Desktop',
    title: 'Windows',
    description: 'Download WhatsApp for Windows to link your phone and message from your computer.',
    requirements: 'Requires Windows 10 64-bit or newer.',
    store: 'microsoft',
  },
];

export const alreadyDownloadedIntro = {
  title: 'Already downloaded?',
  subtitle: 'Learn more about what you can do on WhatsApp.',
};

export const alreadyDownloadedCards = [
  {
    id: 'privacy',
    title: 'Privacy',
    href: '/privacy',
    visualClass: 'bg-gradient-to-br from-[#1a3a2e] to-[#0d1f18]',
  },
  {
    id: 'calling',
    title: 'Calling',
    href: '/features/calling',
    visualClass: 'bg-gradient-to-br from-[#2d2419] to-[#1a1510]',
  },
  {
    id: 'groups',
    title: 'Groups',
    href: '/groups',
    visualClass: 'bg-gradient-to-br from-[#1e2d4a] to-[#121a2e]',
  },
];
