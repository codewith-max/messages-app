export function PauseIcon({ className = 'h-5 w-5' }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden>
      <path d="M7 5a1 1 0 0 1 1-1h2.5a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1V5Zm6.5 0a1 1 0 0 1 1-1H17a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1h-2.5a1 1 0 0 1-1-1V5Z" />
    </svg>
  );
}

export function PlayIcon({ className = 'h-5 w-5' }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden>
      <path d="M8.5 5.26A1 1 0 0 1 10 4.4l8 6.6a1.25 1.25 0 0 1 0 1.94l-8 6.6A1 1 0 0 1 8.5 18.7V5.26Z" />
    </svg>
  );
}
