import WhatsAppDownloadLink from '../Atoms/WhatsAppDownloadLink';

/** Bottom “Get WhatsApp” band used on feature detail pages */
export default function GetWhatsAppSection({
  headingId,
  title = 'Get WhatsApp',
  description,
  downloadHref = '#',
  borderClassName = 'border-[#e8e4dc]',
}) {
  return (
    <section
      id="download"
      className={`scroll-mt-24 border-t ${borderClassName} bg-white px-4 py-16 sm:px-6 md:px-8`}
      aria-labelledby={headingId}
    >
      <div className="mx-auto max-w-2xl text-center">
        <h2 id={headingId} className="text-2xl font-semibold text-[#111b21]">
          {title}
        </h2>
        <p className="mt-3 text-[17px] leading-relaxed text-[#111b21]/85">{description}</p>
        <div className="flex justify-center">
          <WhatsAppDownloadLink href={downloadHref} variant="section" />
        </div>
      </div>
    </section>
  );
}
