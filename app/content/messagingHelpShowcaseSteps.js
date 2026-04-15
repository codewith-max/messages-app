/** “Need more help?” autoplay FAQ showcase — /features/messaging */

export const MESSAGING_HELP_SLIDE_MS = 8500;

export const MESSAGING_HELP_STEPS = [
  {
    id: 'inbox-filters',
    title: 'How do I use Inbox Filters?',
    description:
      'Lists are customizable filters that can help you keep your chats organized. You have four default lists:',
    bullets: [
      { label: 'All:', text: 'The default view of all your messages.' },
      { label: 'Unread:', text: 'Chats with messages that you mark as unread or haven’t opened yet.' },
      { label: 'Favorites:', text: 'Chats from your favorite contacts.' },
      { label: 'Groups:', text: 'All your group chats in one place.' },
    ],
    ctaHref: '/help-center',
    imageSrc: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=1200&h=900&fit=crop&q=80',
    imageAlt: 'WhatsApp inbox with filters on a phone',
  },
  {
    id: 'pin-message',
    title: 'How do I pin a message?',
    description:
      'Pin important chats to the top of your inbox, or pin a specific message inside a chat so everyone can find it quickly.',
    imageSrc: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&h=900&fit=crop&q=80',
    imageAlt: 'Pinned chat in messaging app',
    ctaHref: '/help-center',
  },
  {
    id: 'format',
    title: 'How can I format my messages?',
    description:
      'Use bold, italics, strikethrough, monospace, and lists to add clarity and emphasis to what you send.',
    imageSrc: 'https://images.unsplash.com/photo-1542435503-956c469947f6?w=1200&h=900&fit=crop&q=80',
    imageAlt: 'Formatting text in a chat',
    ctaHref: '/help-center',
  },
  {
    id: 'translate',
    title: 'How do I translate a message?',
    description:
      'Tap translate on a message to read it in your language, then reply with confidence in the same conversation.',
    imageSrc: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1200&h=900&fit=crop&q=80',
    imageAlt: 'Connecting across languages',
    ctaHref: '/help-center',
  },
  {
    id: 'media',
    title: 'How do I send videos and photos?',
    description:
      'Share photos and HD video from your gallery or camera roll, add captions, and send multiple files at once.',
    imageSrc: 'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=1200&h=900&fit=crop&q=80',
    imageAlt: 'Sharing photos and video',
    ctaHref: '/help-center',
  },
];
