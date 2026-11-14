import { Fraunces, Instrument_Sans, Mukta } from 'next/font/google';

export const display = Fraunces({
  subsets: ['latin', 'latin-ext'],
  axes: ['SOFT', 'WONK', 'opsz'],
  style: ['normal', 'italic'],
  variable: '--f-display',
  display: 'swap',
});

export const body = Instrument_Sans({
  subsets: ['latin', 'latin-ext'],
  variable: '--f-body',
  display: 'swap',
});

export const deva = Mukta({
  subsets: ['devanagari', 'latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--f-deva',
  display: 'swap',
});
