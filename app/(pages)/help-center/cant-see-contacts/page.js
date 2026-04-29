import { redirect } from 'next/navigation';

export default function CantSeeContactsPage() {
  redirect('/help-center/contact-names-missing');
}
