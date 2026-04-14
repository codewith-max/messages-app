/** Copy for /for-business landing (WhatsApp Business–style layout) */

/** Top nav — keys map to `businessNavMenus` */
export const businessNav = [
  { label: 'Products', menuKey: 'products' },
  { label: 'Resources', menuKey: 'resources' },
  { label: 'Developers', menuKey: 'developers' },
  { label: 'Partners', menuKey: 'partners' },
];

/** Mega menu panels (WhatsApp Business–style) */
export const businessNavMenus = {
  products: {
    title: 'Products',
    columns: [
      {
        id: 'platform',
        icon: 'briefcase',
        heading: 'Business Platform',
        links: ['Overview', 'Features', 'Pricing', 'WhatsApp Flows'],
        subheading: 'Message categories:',
        sublinks: [
          'Marketing messages',
          'Authentication messages',
          'Utility messages',
          'Service messages',
        ],
      },
      {
        id: 'app',
        icon: 'store',
        heading: 'Business App',
        links: ['Overview', 'Features', 'How to get started'],
      },
      {
        id: 'ads',
        icon: 'send',
        heading: 'Ads that click to WhatsApp',
        links: ['Overview', 'How to create an ad'],
      },
    ],
  },
  resources: {
    title: 'Resources',
    items: [
      { icon: 'library', label: 'Resource Library', href: '#' },
      { icon: 'blog', label: 'Blog', href: '/blog' },
      { icon: 'chart', label: 'Success Stories', href: '#' },
      { icon: 'faq', label: 'FAQs', href: '/help-center' },
    ],
  },
  developers: {
    title: 'Developers',
    columns: [
      {
        id: 'platform',
        icon: 'layers',
        heading: 'Platform',
        links: ['Developer Hub', 'Get Started'],
      },
      {
        id: 'links',
        icon: 'link',
        heading: 'Developer Links',
        links: ['Community', 'Developer Support', 'API Status'],
      },
    ],
  },
  partners: {
    title: 'Partners',
    items: [
      { icon: 'store', label: 'Become a Partner', href: '#' },
      { icon: 'handshake', label: 'Find a Partner', href: '#' },
    ],
  },
};

export const announcement = {
  text: "What's next for business messaging and AI? Watch the Conversations keynote live on June 3.",
  linkText: 'Register now.',
  href: '#',
};

export const hero = {
  title: 'Do more with conversations',
  subtitle:
    'Engage audiences, accelerate sales and drive better customer support outcomes on the platform with more than 2 billion users around the world.',
  imageMain:
    'https://images.unsplash.com/photo-1551434678-e076c223a692?w=900&h=1100&fit=crop&q=80',
  imageAlt: 'WhatsApp Business manager preview',
};

export const productsIntro = {
  eyebrow: 'WhatsApp business for any company size',
  titleBefore: 'WhatsApp business products ',
  titleUnderline: 'support businesses from large to small,',
  titleAfter: ' see which product best fits your needs.',
};

export const productCards = [
  {
    id: 'platform',
    title: 'WhatsApp Business Platform',
    description:
      'For medium to large businesses communicating with customers at scale through programmatic access',
    linkText: 'Learn more',
    href: '#',
    icon: 'briefcase',
  },
  {
    id: 'app',
    title: 'WhatsApp Business App',
    description: 'For small businesses who personally manage conversations with customers',
    linkText: 'Download app',
    href: '#download',
    icon: 'store',
  },
];

export const whySection = {
  title: 'Why choose WhatsApp?',
  imageSrc: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=900&h=1000&fit=crop&q=80',
  imageAlt: 'Small business owner at work',
  items: [
    {
      id: 'meet',
      title: 'Meet customers where they already are',
      body: 'Reach people on a channel they use every day — no new app to download for your audience.',
    },
    {
      id: 'drive',
      title: 'Drive business outcomes',
      body: 'Turn chats into sales, bookings, and support resolutions with templates, automation, and rich media.',
    },
    {
      id: 'relationships',
      title: 'Build long-lasting customer relationships',
      body: 'Stay in touch with timely updates customers actually want to receive.',
    },
  ],
};

export const successStories = {
  eyebrow: 'Success Stories',
  title: 'From banking, e-commerce, and more, WhatsApp helps businesses drive results',
  cases: [
    {
      id: 'inter',
      caseTitle: 'Banco Inter',
      caseBody: 'Improving conversion rates by sending OTP authentication messages on WhatsApp',
      imageSrc: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&h=800&fit=crop&q=80',
      imageAlt: 'Modern office building',
    },
    {
      id: 'retail',
      caseTitle: 'Retail brand',
      caseBody: 'Scaling customer care with rich messaging and faster response times on WhatsApp',
      imageSrc: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200&h=800&fit=crop&q=80',
      imageAlt: 'Retail store interior',
    },
  ],
};

export const cta = {
  title: 'Take the next step',
  subtitle: 'Start transforming your customer experience on WhatsApp Business Platform.',
  buttonText: 'Learn more',
  href: '#',
};

export const businessFooter = {
  privacy: [
    'Trust & Safety',
    'Data Policy',
    'Privacy Protections',
    'Terms and Conditions',
    'Business Messaging Policy',
    'Terms and Privacy Policy',
  ],
  resources: [
    'Blog',
    'FAQ',
    'Help Center',
    'Success Stories',
    'Resource Library',
    'Compliance Center',
    'Ads in Status and Channels',
  ],
};
