import Image from 'next/image';

const MAIN_HERO =
  'https://images.unsplash.com/photo-1609220136736-443140cffec6?w=800&h=600&fit=crop&q=80';
const PIP =
  'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400&h=500&fit=crop&q=80';
const G1 = 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop&q=80';
const G2 = 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&q=80';
const G3 = 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&q=80';
const G4 = 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&q=80';

function ParticipantTile({ src, name, speaking }) {
  return (
    <div className={`relative rounded-md ${speaking ? 'bg-[#ff6b9d] p-[2px]' : 'bg-[#1a2329]'}`}>
      <div className="relative aspect-square w-full overflow-hidden rounded-[5px] bg-[#1a2329]">
        <Image src={src} alt="" fill className="object-cover" sizes="120px" />
        <p className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent px-1 py-1 text-center text-[8px] font-medium text-white sm:text-[9px]">
          {name}
        </p>
      </div>
    </div>
  );
}

export default function PhoneGroupCallMockup() {
  return (
    <div className="relative mx-auto w-full max-w-[320px] sm:max-w-[340px]">
      <div className="relative rounded-[2.35rem] border-[11px] border-[#1b2329] bg-[#1b2329] shadow-[0_36px_72px_-16px_rgba(17,27,33,0.55)]">
        <div className="relative aspect-[9/18.2] overflow-hidden rounded-[1.65rem] bg-[#0b141a]">
          <div className="absolute inset-x-0 top-0 z-20 flex items-center justify-between px-3 pt-2.5 text-white">
            <button
              type="button"
              className="flex h-8 w-8 items-center justify-center rounded-full bg-black/35 backdrop-blur-sm"
              aria-label="Back"
            >
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <div className="text-center">
              <p className="text-[11px] font-semibold tracking-tight sm:text-[12px]">Lunch Club</p>
              <p className="text-[9px] font-medium text-white/75">2:12</p>
            </div>
            <span className="h-8 w-8" aria-hidden />
          </div>

          <div className="absolute inset-x-0 bottom-0 top-0 flex flex-col pt-14 pb-[4.5rem]">
            <div className="relative min-h-0 flex-[1.15] px-1.5">
              <div className="relative h-full min-h-[120px] overflow-hidden rounded-lg bg-[#1a2329]">
                <Image src={MAIN_HERO} alt="" fill className="object-cover object-[center_25%]" sizes="300px" />
                <div
                  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/25 to-transparent"
                  aria-hidden
                />
                <div className="absolute bottom-1.5 left-2 text-[9px] font-medium text-white drop-shadow">Zafar</div>
              </div>
              <div className="absolute right-2 top-2 z-10 aspect-[3/4] w-[26%] max-w-[88px] overflow-hidden rounded-lg ring-2 ring-white/90 shadow-lg">
                <Image src={PIP} alt="" fill className="object-cover" sizes="90px" />
                <p className="absolute bottom-0 inset-x-0 bg-black/55 py-0.5 text-center text-[7px] font-medium text-white">
                  Yuna Nel
                </p>
              </div>
            </div>

            <div className="grid min-h-0 flex-1 grid-cols-2 grid-rows-2 gap-1 px-1.5 pb-1 pt-1">
              <ParticipantTile src={G1} name="Anika Chavan" speaking />
              <ParticipantTile src={G2} name="Marcus" />
              <ParticipantTile src={G3} name="Priya" />
              <ParticipantTile src={G4} name="Leo" />
            </div>
          </div>

          <div className="absolute inset-x-0 bottom-0 z-20 bg-gradient-to-t from-black/90 via-black/55 to-transparent px-3 pb-4 pt-10">
            <div className="mx-auto flex max-w-[280px] items-center justify-between gap-1 rounded-full bg-black/55 px-2 py-2 backdrop-blur-md">
              <button type="button" className="flex h-10 w-10 items-center justify-center rounded-full text-white/90" aria-label="More">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                  <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
                </svg>
              </button>
              <button type="button" className="flex h-10 w-10 items-center justify-center rounded-full text-white" aria-label="Video">
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </button>
              <button type="button" className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 text-white" aria-label="Speaker">
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                </svg>
              </button>
              <button type="button" className="flex h-10 w-10 items-center justify-center rounded-full bg-[#ea0038]/90 text-white" aria-label="Microphone muted">
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3zM3 3l18 18" />
                </svg>
              </button>
              <button
                type="button"
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#ea0038] text-white shadow-lg"
                aria-label="End call"
              >
                <svg className="h-5 w-5 rotate-[135deg]" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
