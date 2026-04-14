import Image from 'next/image';

export default function FloatingChat({ 
  imageSrc, 
  message, 
  time, 
  positionClass, 
  messageSide = 'right', // 'left' or 'right'
  messageBg = 'bg-white' // 'bg-white' or 'bg-[#dcf8c6]'
}) {
  return (
    <div className={`absolute ${positionClass} flex items-center gap-3`}>
      
      {/* If message is on the left */}
      {message && messageSide === 'left' && (
        <div className={`${messageBg} px-3 py-1.5 rounded-2xl shadow-md text-sm whitespace-nowrap flex items-end gap-2`}>
          <span className="text-gray-900 font-medium">{message}</span>
          <span className="text-[10px] text-gray-500 mb-0.5">{time}</span>
        </div>
      )}

      {/* Avatar Image */}
      <div className="w-12 h-12 rounded-full overflow-hidden shadow-md bg-gray-200 flex-shrink-0">
        <Image
          src={imageSrc}
          alt="User Avatar"
          fill
          sizes="48px"
          className="w-full h-full object-cover"
        />
      </div>

      {/* If message is on the right */}
      {message && messageSide === 'right' && (
        <div className={`${messageBg} px-3 py-1.5 rounded-2xl shadow-md text-sm whitespace-nowrap flex items-end gap-2`}>
          <span className="text-gray-900 font-medium">{message}</span>
          <span className="text-[10px] text-gray-500 mb-0.5">{time}</span>
        </div>
      )}

    </div>
  );
}
