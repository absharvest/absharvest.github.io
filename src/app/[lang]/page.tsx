import { HomePage, homeMeta } from '@/lib/pages';
import type { Lang } from '@/lib/i18n';

type Props = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Props) {
  return homeMeta((await params).lang as Lang);
}
export default async function Page({ params }: Props) {
  return <HomePage lang={(await params).lang as Lang} />;
}
