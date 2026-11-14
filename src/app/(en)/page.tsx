import { HomePage, homeMeta } from '@/lib/pages';

export const metadata = homeMeta('en');
export default function Page() {
  return <HomePage lang="en" />;
}
