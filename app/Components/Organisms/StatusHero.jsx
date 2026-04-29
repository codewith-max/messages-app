const relatedResources = [
  {
    title: 'How to use WhatsApp on Meta AI glasses',
    href: 'https://faq.whatsapp.com/836751667595617',
  },
  {
    title: 'About end-to-end encryption',
    href: 'https://faq.whatsapp.com/820124435853543',
  },
  {
    title: 'About your privacy when using WhatsApp on Ray-Ban Stories',
    href: 'https://faq.whatsapp.com/174475292947430',
  },
];

export default function StatusHero() {
  return (
    <section className="border-b border-black/10 bg-[#f2f4f7] px-4 py-6 sm:px-6 md:px-8" aria-labelledby="meta-glasses-heading">
      <div className="mx-auto max-w-[1360px]">
        <div className="grid gap-6 lg:grid-cols-[280px,minmax(0,1fr)] lg:gap-0">
          <aside className="rounded-xl border border-black/10 bg-white lg:rounded-none lg:border-e lg:border-s-0 lg:border-y-0 lg:bg-[#f8f9fb]">
            <div className="border-b border-black/10 px-4 py-3">
              <h2 className="text-[16px] font-semibold text-[#111b21]">Help Center</h2>
            </div>
            <nav aria-label="Help center links" className="max-h-[74vh] overflow-y-auto px-3 py-3">
              <ul className="mb-3 space-y-1 text-[15px] text-[#111b21]">
                <li><a href="#meta-glasses-heading" className="flex items-center justify-between rounded px-2 py-2 hover:bg-black/5"><span>Get Started</span><span>⌄</span></a></li>
                <li><a href="#meta-glasses-heading" className="flex items-center justify-between rounded px-2 py-2 hover:bg-black/5"><span>Download and Installation</span><span>⌄</span></a></li>
                <li><a href="#meta-glasses-heading" className="flex items-center justify-between rounded px-2 py-2 hover:bg-black/5"><span>Registration</span><span>⌄</span></a></li>
                <li><a href="#meta-glasses-heading" className="flex items-center justify-between rounded bg-[#eaecf0] px-2 py-2 font-medium"><span>Linked Devices</span><span>⌃</span></a></li>
              </ul>

              <ul className="space-y-0.5 text-[14px] text-[#111b21]">
                <li><a href="#meta-glasses-heading" className="block rounded px-2 py-1.5 hover:bg-black/5">About linked devices</a></li>
                <li><a href="#meta-glasses-heading" className="block rounded px-2 py-1.5 hover:bg-black/5">How to link a device</a></li>
                <li><a href="#meta-glasses-heading" className="block rounded px-2 py-1.5 hover:bg-black/5">About message history on linked devices</a></li>
                <li><a href="#meta-glasses-heading" className="block rounded px-2 py-1.5 hover:bg-black/5">About linking WhatsApp to a second phone</a></li>
                <li><a href="#meta-glasses-heading" className="block rounded px-2 py-1.5 hover:bg-black/5">About WhatsApp for desktops</a></li>
                <li><a href="#meta-glasses-heading" className="block rounded px-2 py-1.5 hover:bg-black/5">About WhatsApp Web</a></li>
                <li><a href="#meta-glasses-heading" className="block rounded px-2 py-1.5 hover:bg-black/5">About WhatsApp for iPad</a></li>
                <li><a href="#meta-glasses-heading" className="block rounded px-2 py-1.5 hover:bg-black/5">About WhatsApp for Android tablets</a></li>
                <li><a href="#meta-glasses-heading" className="block rounded px-2 py-1.5 hover:bg-black/5">About WhatsApp for Wear OS</a></li>
                <li><a href="#meta-glasses-heading" className="block rounded px-2 py-1.5 hover:bg-black/5">About WhatsApp on Meta Quest</a></li>
                <li><a href="#meta-glasses-heading" className="block rounded px-2 py-1.5 hover:bg-black/5">How to link your Meta Quest</a></li>
                <li><a href="#meta-glasses-heading" className="block rounded bg-[#e8fede] px-2 py-1.5 font-medium text-[#1f7a39]">About WhatsApp on Meta AI glasses</a></li>
              </ul>
            </nav>
          </aside>

          <article className="rounded-xl border border-black/10 bg-white p-6 sm:p-8 lg:min-h-[74vh] lg:rounded-none lg:border-s-0 lg:border-y-0 lg:p-10">
            <div className="mx-auto w-full max-w-4xl">
              <div className="mb-6 flex items-center justify-between gap-3">
                <h1 id="meta-glasses-heading" className="text-[34px] font-semibold leading-tight text-[#111b21]">
                  About WhatsApp on Meta AI glasses
                </h1>
                <button type="button" className="rounded-full border border-black/10 bg-white px-4 py-2 text-sm text-[#111b21]">
                  Copy link
                </button>
              </div>

              <p className="mb-3 text-[16px] leading-7 text-[#2a3942]">
                Ray-Ban Stories, Ray-Ban Meta, Oakley Meta, and Meta Ray-Ban Display smart glasses launched in
                partnership between Meta and EssilorLuxottica.
              </p>
              <p className="mb-8 text-[16px] leading-7 text-[#2a3942]">
                You can use these AI glasses with some Meta platforms, including WhatsApp.
              </p>

              <h2 className="mb-3 text-[28px] font-semibold text-[#111b21]">Ray-Ban Stories</h2>
              <p className="mb-3 text-[16px] leading-7 text-[#2a3942]">
                You can use hands-free voice commands on Ray-Ban Stories to send and reply to messages and to decline
                and answer calls.
              </p>
              <p className="mb-8 text-[16px] leading-7 text-[#2a3942]">
                The voice commands can also announce when you receive messages and read them out loud in English,
                French, and Italian.
              </p>

              <h2 className="mb-3 text-[28px] font-semibold text-[#111b21]">Ray-Ban Meta and Oakley Meta</h2>
              <p className="mb-3 text-[16px] leading-7 text-[#2a3942]">
                You can complete even more actions with Ray-Ban Meta and Oakley Meta AI glasses. You can use
                hands-free voice commands to send and reply to messages and to decline and answer calls.
              </p>
              <p className="mb-3 text-[16px] leading-7 text-[#2a3942]">
                You can also share your view from your glasses camera during a WhatsApp video call while remaining
                aware of your surroundings.
              </p>
              <p className="mb-8 text-[16px] leading-7 text-[#2a3942]">
                If you have not linked WhatsApp in the Meta AI app yet, tap the glasses icon during your next call for
                setup instructions.
              </p>

              <h2 className="mb-3 text-[28px] font-semibold text-[#111b21]">About your privacy</h2>
              <p className="mb-3 text-[16px] leading-7 text-[#2a3942]">
                When you use AI glasses, your calls and personal messages are secured with end-to-end encryption. Audio
                content is not sent to Meta servers during a message or call.
              </p>
              <p className="mb-8 text-[16px] leading-7 text-[#2a3942]">
                Read our Privacy Policy for more information.
              </p>

              <div className="border-t border-black/10 pt-6">
                <h3 className="text-[22px] font-semibold text-[#111b21]">Related resources</h3>
                <ul className="mt-3 list-disc space-y-2 ps-5 text-[16px]">
                {relatedResources.map(({ title, href }) => (
                  <li key={href}>
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-teal-700 underline decoration-teal-700/40 underline-offset-4 transition-colors hover:text-teal-800"
                    >
                      {title}
                    </a>
                  </li>
                ))}
                </ul>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
