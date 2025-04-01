import { generateGoogleFontsUrl } from '../utils/fonts';

export async function getFontsUrl(): Promise<string> {
  return generateGoogleFontsUrl();
}