import manifest from '@/lib/images.generated.json';

export type ImgKey = keyof typeof manifest;

type Props = {
  name: ImgKey;
  alt: string;
  sizes?: string;
  className?: string;
  priority?: boolean;
};

/** Responsive WebP image with intrinsic size (no layout shift) and a blurred placeholder. */
export function Img({ name, alt, sizes = '100vw', className, priority }: Props) {
  const m = manifest[name];
  const largest = m.srcs[m.srcs.length - 1];
  return (
    <img
      src={largest.src}
      srcSet={m.srcs.map((s) => `${s.src} ${s.w}w`).join(', ')}
      sizes={sizes}
      width={m.width}
      height={m.height}
      alt={alt}
      className={className}
      loading={priority ? 'eager' : 'lazy'}
      fetchPriority={priority ? 'high' : undefined}
      decoding="async"
      style={{ backgroundImage: `url(${m.blur})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    />
  );
}
