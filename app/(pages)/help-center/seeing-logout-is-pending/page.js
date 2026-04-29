import { redirect } from 'next/navigation';

export default function SeeingLogoutIsPendingPage() {
  redirect('/help-center/seeing-devices-out-of-sync-message?platform=web');
}
