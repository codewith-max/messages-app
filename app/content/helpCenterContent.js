/** Help Center — structure mirrors faq.whatsapp.com-style layout */

export const sidebarCategories = [
  {
    id: 'get-started',
    label: 'Get Started',
    icon: 'flag',
    articles: [
      { title: 'Download and Installation', href: '#download-installation', icon: 'download' },
      { title: 'Registration', href: '#registration', icon: 'user' },
      { title: 'Linked Devices', href: '#linked-devices', icon: 'card' },
      { title: 'Troubleshooting', href: '#get-started-troubleshooting', icon: 'chat' },
      { title: 'Contacts', href: '#contacts', icon: 'userCircle' },
      { title: 'Status', href: '#status', icon: 'broadcast' },
    ],
  },
  {
    id: 'chats',
    label: 'Chats',
    icon: 'chat',
    articles: [
      { title: 'Individual and Group Chats', href: '#individual-group-chats', icon: 'chat' },
      { title: 'Back Up and Restore', href: '#backup-restore', icon: 'download' },
      { title: 'Notifications', href: '#chat-notifications', icon: 'flag' },
      { title: 'Media', href: '#chat-media', icon: 'card' },
      { title: 'Voice Messages and Chats', href: '#voice-messages-chats', icon: 'phone' },
      { title: 'Video Notes', href: '#video-notes', icon: 'broadcast' },
      { title: 'AI Experiences', href: '#ai-experiences', icon: 'users' },
      { title: 'Troubleshooting', href: '#chats-troubleshooting', icon: 'chat' },
    ],
  },
  {
    id: 'business',
    label: 'Connect with Businesses',
    icon: 'store',
    articles: [
      { title: 'Message', href: '#business-message', icon: 'chat' },
      { title: 'Discover', href: '#business-discover', icon: 'broadcast' },
      { title: 'Shop', href: '#business-shop', icon: 'store' },
    ],
  },
  {
    id: 'calls',
    label: 'Voice and Video Calls',
    icon: 'phone',
    articles: [
      { title: 'Video Calls', href: '#video-calls', icon: 'card' },
      { title: 'Voice Calls', href: '#voice-calls', icon: 'phone' },
      { title: 'Troubleshooting', href: '#calls-troubleshooting', icon: 'chat' },
    ],
  },
  {
    id: 'communities',
    label: 'Communities',
    icon: 'users',
    articles: [
      { title: 'Get Started', href: '#communities-get-started', icon: 'flag' },
      { title: 'Admin', href: '#communities-admin', icon: 'userCircle' },
      { title: 'Member', href: '#communities-member', icon: 'users' },
    ],
  },
  {
    id: 'channels',
    label: 'Channels',
    icon: 'broadcast',
    articles: [
      { title: 'Get Started', href: '#channels-get-started', icon: 'flag' },
      { title: 'Channel Followers and Viewers', href: '#channel-followers-viewers', icon: 'users' },
      { title: 'Channel Admins', href: '#channel-admins', icon: 'userCircle' },
    ],
  },
  {
    id: 'privacy',
    label: 'Privacy, Safety, and Security',
    icon: 'lock',
    articles: [
      { title: 'Privacy', href: '#privacy', icon: 'lock' },
      { title: 'Safety', href: '#safety', icon: 'userCircle' },
      { title: 'Security', href: '#security', icon: 'lock' },
    ],
  },
  {
    id: 'accounts',
    label: 'Accounts and Account Bans',
    icon: 'userCircle',
    articles: [
      { title: 'Accounts', href: '#accounts', icon: 'user' },
      { title: 'Account Bans', href: '#account-bans', icon: 'userCircle' },
    ],
  },
  {
    id: 'payments',
    label: 'Payments',
    icon: 'card',
    articles: [
      { title: 'Setting Up Payments', href: '#setting-up-payments', icon: 'card' },
      { title: 'Security and Privacy', href: '#payments-security-privacy', icon: 'lock' },
    ],
  },
  {
    id: 'whatsapp-business',
    label: 'WhatsApp for Business',
    icon: 'store',
    articles: [
      { title: 'Setting Up an Account', href: '#wab-setting-up-account', icon: 'user' },
      { title: 'Connecting with Customers', href: '#wab-connecting-customers', icon: 'users' },
      { title: 'Business AI Experiences', href: '#wab-business-ai-experiences', icon: 'broadcast' },
      { title: 'Tools to Work Smarter', href: '#wab-tools-work-smarter', icon: 'chat' },
      { title: 'Selling Products and Services', href: '#wab-selling-products-services', icon: 'store' },
      { title: 'Troubleshooting', href: '#wab-troubleshooting', icon: 'flag' },
      { title: 'WhatsApp Premium Features', href: '#wab-premium-features', icon: 'card' },
      { title: 'WhatsApp Business Platform', href: '#wab-business-platform', icon: 'store' },
    ],
  },
];

export const popularTopics = [
  {
    id: 'pt-get-started',
    title: 'Get Started',
    description: 'Learn how to get started with using WhatsApp.',
    icon: 'devices',
  },
  {
    id: 'pt-safety',
    title: 'Safety and Security',
    description: 'Your privacy and security are important. Learn how to stay safe on WhatsApp.',
    icon: 'shield',
  },
  {
    id: 'pt-backup',
    title: 'Back Up or Restore Chats',
    description: 'Learn how to back up and restore your chat history.',
    icon: 'cloud',
  },
];

export const featuredTopics = [
  {
    id: 'ft-teens',
    title: 'Information for Teens',
    description: 'Learn more about information for teens on WhatsApp.',
    icon: 'teens',
  },
  {
    id: 'ft-ads',
    title: 'Ads in Status and Channels',
    description:
      'No ads in personal chats. Your personal messages remain end-to-end encrypted. Learn more.',
    icon: 'ads',
  },
  {
    id: 'ft-business',
    title: 'Business Features',
    description: "Learn about WhatsApp's business solutions and how to get started.",
    icon: 'business',
  },
];

export const highlightedArticles = [
  { title: 'About temporarily banned accounts', href: '#banned' },
  { title: 'About two-step verification', href: '#2sv' },
  { title: 'How to restore your chat history', href: '#restore' },
  { title: 'Received verification code without requesting it', href: '#verification-code' },
  { title: 'About ads in WhatsApp Status and Channels', href: '#ads-status' },
];

export const popularArticlesShort = [
  { title: 'How to make a video call', href: '#video-call' },
  { title: 'How to stay safe on WhatsApp', href: '#stay-safe' },
];

export const helpSiteFooter = {
  columns: [
    {
      title: 'Use WhatsApp',
      links: [
        { label: 'Features', href: '/features' },
        { label: 'WhatsApp Web', href: '#web' },
        { label: 'Download', href: '#download' },
      ],
    },
    {
      title: 'About Us',
      links: [
        { label: 'Business', href: '#business' },
        { label: 'Security', href: '/features/security' },
        { label: 'Privacy & Terms', href: '/privacy' },
      ],
    },
    {
      title: 'Get In Touch',
      links: [
        { label: 'Contact Us', href: '#contact' },
        { label: 'Facebook', href: 'https://www.facebook.com/WhatsApp' },
        { label: 'X (Twitter)', href: 'https://twitter.com/whatsapp' },
      ],
    },
  ],
};
