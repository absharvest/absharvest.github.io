import { HowToPage, howToMeta } from '@/lib/pages';

export const metadata = howToMeta('en');
export default function Page() {
  return <HowToPage lang="en" />;
}
