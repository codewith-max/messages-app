/** Circular outline share buttons — Facebook, X, LinkedIn, Email, Link */

const items = [
  { label: 'Share on Facebook', href: 'https://www.facebook.com/sharer/sharer.php', icon: 'fb' },
  { label: 'Share on X', href: 'https://twitter.com/intent/tweet', icon: 'x' },
  { label: 'Share on LinkedIn', href: 'https://www.linkedin.com/sharing/share-offsite', icon: 'in' },
  { label: 'Share by email', href: 'mailto:', icon: 'mail' },
  { label: 'Copy link', href: '#', icon: 'link' },
];

function Icon({ name }) {
  if (name === 'fb')
    return (
      <span className="text-[11px] font-bold" aria-hidden>
        f
      </span>
    );
  if (name === 'x')
    return (
      <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    );
  if (name === 'in')
    return (
      <span className="text-[9px] font-bold tracking-tight" aria-hidden>
        in
      </span>
    );
  if (name === 'mail')
    return (
      <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    );
  return (
    <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
    </svg>
  );
}

export default function BlogSocialShare() {
  return (
    <div className="flex items-center gap-2">
      {items.map((item) => (
        <a
          key={item.label}
          href={item.href}
          aria-label={item.label}
          className="flex h-8 w-8 items-center justify-center rounded-full border border-[#cfd4d6] text-[#3b4a54] transition hover:border-[#25D366] hover:text-[#25D366]"
        >
          <Icon name={item.icon} />
        </a>
      ))}
    </div>
  );
}
