/** /features/security — section copy and carousel data */

export const SECURITY_PILLARS = [
  {
    id: 'default-privacy',
    title: 'Default privacy',
    body: 'No one can search for your phone number or read your personal messages.',
    icon: 'userShield',
  },
  {
    id: 'spam',
    title: 'Automatic spam detection',
    body: 'We catch and remove most spam and scam accounts before they can reach you or before anyone reports them.',
    icon: 'shieldSearch',
  },
  {
    id: 'alerts',
    title: 'Proactive security alerts',
    body: 'We prompt you to verify your identity if we detect suspicious or unauthorized attempts to take over your account.',
    icon: 'megaphone',
  },
];

export const SECURITY_TOOL_CARD_PAIRS = [
  {
    id: 'control-basics',
    headingId: 'security-control-heading',
    kicker: 'Take control of your experience',
    sub:
      'Check out these easy steps to stay safe with multiple layers of protection against hackers and scammers.',
    cards: [
      {
        id: '2sv',
        title: 'Enable two-step verification',
        body: 'Set up a secret PIN and never share it with anyone to help prevent someone from stealing your account.',
        mockup: 'twoStep',
      },
      {
        id: 'official',
        title: 'Always use the official WhatsApp',
        body: 'Using unofficial apps can put your privacy and security at serious risk.',
        mockup: 'official',
      },
    ],
  },
  {
    id: 'groups-scams',
    headingId: 'security-groups-heading',
    kicker: null,
    sub: null,
    cards: [
      {
        id: 'groups',
        title: 'Keep your groups safe',
        body: 'Control who can add you to groups and who can join your groups, and remove members or messages when needed.',
        mockup: 'groups',
      },
      {
        id: 'scams',
        title: 'Learn to spot scams',
        body: 'Get to know common scams and actions you can take to protect yourself and your loved ones.',
        mockup: 'scams',
      },
    ],
  },
];

export const SECURITY_UPDATES_CARDS = [
  {
    id: 'account-protect',
    title: 'New tools: account protection and device checks',
    href: '#',
    imageSrc: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=640&h=480&fit=crop&q=80',
    imageAlt: 'Hands holding a phone',
  },
  {
    id: 'e2e',
    title: 'How end-to-end encryption protects your chats',
    href: '/privacy',
    imageSrc: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=640&h=480&fit=crop&q=80',
    imageAlt: 'Security technology concept',
  },
  {
    id: 'business',
    title: 'Safety signals for businesses you message',
    href: '/for-business',
    imageSrc: 'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?w=640&h=480&fit=crop&q=80',
    imageAlt: 'Working on a laptop',
  },
];

export const SECURITY_DISCOVER_CARDS = [
  {
    id: 'privacy',
    title: 'Privacy',
    href: '/privacy',
    imageSrc: 'https://images.unsplash.com/photo-1529333166437-7750a6dd5a40?w=640&h=480&fit=crop&q=80',
    imageAlt: 'Friends outdoors',
  },
  {
    id: 'calling',
    title: 'Calling',
    href: '/features/calling',
    imageSrc: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=640&h=480&fit=crop&q=80',
    imageAlt: 'Video call',
  },
  {
    id: 'security',
    title: 'Security',
    href: '/features/security',
    imageSrc: 'https://images.unsplash.com/photo-1633265486064-086b219458ec?w=640&h=480&fit=crop&q=80',
    imageAlt: 'Securing a device',
  },
];

export const SECURITY_HELP_FAQ = [
  { id: 'safe', question: 'How do I stay safe on WhatsApp?' },
  { id: 'responsible', question: 'How do I use WhatsApp responsibly?' },
  { id: 'protect', question: 'How do I protect my WhatsApp account?' },
  { id: 'misinfo', question: 'How does WhatsApp tackle misinformation?' },
  { id: 'elections', question: 'How does WhatsApp prevent abuse during elections?' },
];
