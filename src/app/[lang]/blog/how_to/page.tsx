import { HowToPage, howToMeta } from '@/lib/pages';
import type { Lang } from '@/lib/i18n';

type Props = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Props) {
  return howToMeta((await params).lang as Lang);
}
export default async function Page({ params }: Props) {
  return <HowToPage lang={(await params).lang as Lang} />;
}
