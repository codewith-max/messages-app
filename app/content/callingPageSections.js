/** Copy + media for extended Calling page sections */

export const CALLING_DEVICE_SLIDES = [
  {
    id: 'ipad',
    cardTitle: 'Call with WhatsApp on iPad',
    cardDescription: 'Chat and make calls, share your status, and get more done on a bigger screen.',
    imageSrc: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=800&h=560&fit=crop&q=80',
    imageAlt: 'Tablet on a desk',
  },
  {
    id: 'desktop',
    cardTitle: 'Connect on desktop',
    cardDescription:
      'Use WhatsApp Web or our desktop apps to chat or call from your computer, even when your phone is away.',
    imageSrc: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=560&fit=crop&q=80',
    imageAlt: 'Laptop with messaging app',
  },
  {
    id: 'phone',
    cardTitle: 'Take calls on the go',
    cardDescription: 'Switch between Wi-Fi and mobile data with reliable voice and video on Android and iPhone.',
    imageSrc: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=560&fit=crop&q=80',
    imageAlt: 'Person using a smartphone',
  },
];

export const CALLING_HELP_FAQ = [
  { id: '1', question: 'How do I make a group voice call on WhatsApp?' },
  { id: '2', question: 'How do I make a group video call on WhatsApp?' },
  { id: '3', question: 'How do I use screen sharing on WhatsApp?' },
  { id: '4', question: 'How do I schedule a call or create an event on WhatsApp?' },
  { id: '5', question: 'How do I use WhatsApp on other devices?' },
];

/** Interactive “Discover more features” block on the Calling page (autoplay + synced image) */
export const CALLING_DISCOVER_AUTOPLAY_MS = 8500;

export const CALLING_DISCOVER_AUTOPLAY_STEPS = [
  {
    id: 'privacy',
    title: 'Privacy',
    description:
      'End-to-end encryption and privacy controls help you choose who reaches you — for calls, chats, and your profile.',
    href: '/privacy',
    imageSrc: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=960&h=1200&fit=crop&q=80',
    imageAlt: 'Privacy and security on a smartphone',
  },
  {
    id: 'calling',
    title: 'Calling',
    description:
      'Crystal-clear voice and video with the people who matter — on Wi‑Fi or mobile data, with encryption you can trust.',
    href: '/features/calling',
    imageSrc: 'https://images.unsplash.com/photo-1606761568499-6d2451b23e66?w=960&h=1200&fit=crop&q=80',
    imageAlt: 'Relaxed video call at home',
  },
  {
    id: 'meta-ai',
    title: 'Meta AI',
    description:
      'Get quick answers, ideas, and help right in WhatsApp when you need it — with safety built in.',
    href: '/features/meta-ai',
    imageSrc: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=960&h=1200&fit=crop&q=80',
    imageAlt: 'Using AI assistance on a phone',
  },
  {
    id: 'groups',
    title: 'Groups',
    description:
      'Plan together, share updates, and start group voice or video calls with up to 32 people in one tap.',
    href: '/groups',
    imageSrc: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=960&h=1200&fit=crop&q=80',
    imageAlt: 'Friends gathered outdoors',
  },
];

export const CALLING_DISCOVER_CARDS = [
  {
    id: 'private',
    title: 'Message privately',
    href: '/features/messaging',
    imageSrc: 'https://images.unsplash.com/photo-1529333166437-7750a6dd5a40?w=640&h=480&fit=crop&q=80',
    imageAlt: 'Friends talking',
  },
  {
    id: 'community',
    title: 'Build community',
    href: '/groups',
    imageSrc: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=640&h=480&fit=crop&q=80',
    imageAlt: 'Group of people',
  },
  {
    id: 'meta-ai',
    title: 'Do more with Meta AI',
    href: '/features/meta-ai',
    imageSrc: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=640&h=480&fit=crop&q=80',
    imageAlt: 'AI assistant concept',
  },
  {
    id: 'status',
    title: 'Share everyday moments',
    href: '/features/status',
    imageSrc: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=640&h=480&fit=crop&q=80',
    imageAlt: 'Creative portrait',
  },
];
