import { sansSerifFonts, monospaceFonts, serifFonts } from '../data/fonts';

export function generateGoogleFontsUrl(): string {
  const allFonts = [...sansSerifFonts, ...monospaceFonts, ...serifFonts];
  const fontFamilies = allFonts.map(font => {
    const weights = font.weights?.join(';') || '400';
    return `family=${font.name.replace(/ /g, '+')}:wght@${weights}`;
  });

  return `https://fonts.googleapis.com/css2?${fontFamilies.join('&')}&display=swap`;
}

export function createFontString(font: string, type: 'sans' | 'mono' | 'serif'): string {
  const fallbacks = {
    sans: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif',
    mono: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
    serif: 'Georgia, Cambria, "Times New Roman", Times, serif',
  };

  return `"${font}", ${fallbacks[type]}`;
}

export function extractFontName(fontString: string = ''): string {
  const match = fontString.match(/^([^,]+)/);
  return match ? match[1].replace(/["']/g, '') : '';
}