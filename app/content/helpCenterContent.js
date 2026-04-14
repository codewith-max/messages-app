/** Help Center — structure mirrors faq.whatsapp.com-style layout */

export const sidebarCategories = [
  {
    id: 'get-started',
    label: 'Get Started',
    icon: 'flag',
    articles: [
      { title: 'How to download or uninstall WhatsApp', href: '#download-uninstall' },
      { title: 'About supported operating systems', href: '#supported-os' },
      { title: 'About supported devices', href: '#supported-devices' },
    ],
  },
  {
    id: 'download',
    label: 'Download and Installation',
    icon: 'download',
    articles: [
      { title: 'How to download or uninstall WhatsApp', href: '#download-uninstall' },
      { title: 'About supported operating systems', href: '#supported-os' },
      { title: 'About supported devices', href: '#supported-devices' },
      { title: 'About rooted phones and custom ROMs', href: '#rooted' },
      { title: 'Ending support for WhatsApp on KaiOS', href: '#kaios' },
    ],
  },
  {
    id: 'registration',
    label: 'Registration',
    icon: 'user',
    articles: [{ title: 'Verify your phone number', href: '#verify' }],
  },
  {
    id: 'chats',
    label: 'Chats',
    icon: 'chat',
    articles: [{ title: 'About chat backups', href: '#backups' }],
  },
  {
    id: 'business',
    label: 'Connect with Businesses',
    icon: 'store',
    articles: [{ title: 'Business profiles', href: '#business-profiles' }],
  },
  {
    id: 'calls',
    label: 'Voice and Video Calls',
    icon: 'phone',
    articles: [{ title: 'How to make a video call', href: '#video-call' }],
  },
  {
    id: 'communities',
    label: 'Communities',
    icon: 'users',
    articles: [{ title: 'About communities', href: '#communities-help' }],
  },
  {
    id: 'channels',
    label: 'Channels',
    icon: 'broadcast',
    articles: [{ title: 'About channels', href: '#channels-help' }],
  },
  {
    id: 'privacy',
    label: 'Privacy, Safety, and Security',
    icon: 'lock',
    articles: [{ title: 'How to stay safe on WhatsApp', href: '#stay-safe' }],
  },
  {
    id: 'accounts',
    label: 'Accounts and Account Bans',
    icon: 'userCircle',
    articles: [{ title: 'About temporarily banned accounts', href: '#banned' }],
  },
  {
    id: 'payments',
    label: 'Payments',
    icon: 'card',
    articles: [{ title: 'Payments availability', href: '#payments' }],
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
