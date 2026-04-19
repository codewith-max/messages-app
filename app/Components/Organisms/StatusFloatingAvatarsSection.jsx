import Image from 'next/image';
import { STATUS_FLOATING_AVATARS } from '../../content/statusPageContent';

const POSITIONS = [
  'left-[4%] top-[8%] h-[72px] w-[72px] sm:h-[88px] sm:w-[88px]',
  'left-[12%] top-[38%] h-[64px] w-[64px] sm:h-[76px] sm:w-[76px]',
  'left-[42%] top-[4%] h-[80px] w-[80px] sm:h-[96px] sm:w-[96px]',
  'right-[18%] top-[22%] h-[70px] w-[70px] sm:h-[84px] sm:w-[84px]',
  'right-[6%] top-[48%] h-[68px] w-[68px] sm:h-[80px] sm:w-[80px]',
  'left-[28%] bottom-[12%] h-[60px] w-[60px] sm:bottom-[16%] sm:h-[72px] sm:w-[72px]',
];

export default function StatusFloatingAvatarsSection() {
  return (
    <section
      className="relative overflow-hidden border-b border-wa-muted/10 bg-[#FCF5EB] px-4 py-16 sm:px-6 sm:py-20 md:px-8"
      aria-labelledby="status-float-heading"
    >
      <p
        className="pointer-events-none absolute left-1/2 top-6 max-w-[min(92vw,56rem)] -translate-x-1/2 text-center text-[clamp(2.5rem,8vw,5.5rem)] font-semibold leading-[1.05] text-wa-bg/[0.06] sm:top-10"
        aria-hidden
      >
        always in control
      </p>

      <div className="relative mx-auto min-h-[min(72vw,26rem)] max-w-5xl sm:min-h-[min(48vw,22rem)]">
        {STATUS_FLOATING_AVATARS.map((av, i) => (
          <div
            key={av.id}
            className={`absolute ${POSITIONS[i] ?? POSITIONS[0]} rounded-full bg-[#FCF5EB] p-[3px] ring-[2.5px] ring-wa-muted`}
          >
            <div className="relative h-full w-full overflow-hidden rounded-full">
              <Image src={av.src} alt={av.alt} fill className="object-cover" sizes="96px" />
            </div>
          </div>
        ))}
      </div>

      <div className="relative z-[1] mx-auto mt-8 max-w-3xl px-2 text-center sm:mt-4">
        <h2 id="status-float-heading" className="sr-only">
          Share with people you trust
        </h2>
        <p className="text-[22px] font-semibold leading-snug tracking-tight text-wa-bg sm:text-[26px] md:text-[30px] md:leading-[1.35]">
          Go beyond words to share your everyday with the ones closest to you. You&apos;re always in control of who
          sees what you share, be as candid and real as you want.
        </p>
      </div>
    </section>
  );
}
