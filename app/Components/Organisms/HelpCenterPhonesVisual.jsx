import Image from 'next/image';

export default function HelpCenterPhonesVisual() {
  return (
    <div className="mx-auto w-full max-w-[420px] rounded-2xl bg-[#eef2f4] p-2">
      <Image
        src="/image/help center.webp"
        alt="WhatsApp help center preview"
        width={820}
        height={420}
        className="h-auto w-full rounded-xl object-cover"
        priority={false}
      />
    </div>
  );
}
