/** Centered heading + body for optional mid-page anchors (e.g. Channels #explore) */
export default function FeatureSpotlightSection({
  id,
  headingId,
  title,
  description,
  className = '',
  borderClassName = 'border-[#e5e2db]',
  bgClassName = 'bg-[#FCF5EB]',
  bodyClassName = 'text-[#54656f]',
}) {
  return (
    <section
      id={id}
      className={`scroll-mt-24 border-t ${borderClassName} px-4 py-14 sm:px-6 md:px-8 ${bgClassName} ${className}`.trim()}
      aria-labelledby={headingId}
    >
      <div className="mx-auto max-w-2xl text-center">
        <h2 id={headingId} className="text-2xl font-semibold text-[#111b21]">
          {title}
        </h2>
        <p className={`mt-3 text-[17px] leading-relaxed ${bodyClassName}`}>{description}</p>
      </div>
    </section>
  );
}
