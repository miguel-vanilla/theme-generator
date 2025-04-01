interface FontDefinition {
  name: string;
  weights?: string[];
  styles?: string[];
}

export const sansSerifFonts: FontDefinition[] = [
  { name: 'Inter', weights: ['400', '500', '600', '700'] },
  { name: 'Roboto', weights: ['400', '500', '700'] },
  { name: 'Open Sans', weights: ['400', '600', '700'] },
  { name: 'Montserrat', weights: ['400', '500', '600', '700'] },
  { name: 'Lato', weights: ['400', '700'] },
  { name: 'Poppins', weights: ['400', '500', '600', '700'] },
  { name: 'Source Sans Pro', weights: ['400', '600', '700'] },
  { name: 'Raleway', weights: ['400', '500', '600', '700'] },
  { name: 'Ubuntu', weights: ['400', '500', '700'] },
  { name: 'Nunito', weights: ['400', '600', '700'] },
];

export const monospaceFonts: FontDefinition[] = [
  { name: 'JetBrains Mono', weights: ['400', '500', '700'] },
  { name: 'Fira Code', weights: ['400', '500', '700'] },
  { name: 'Source Code Pro', weights: ['400', '500', '700'] },
  { name: 'IBM Plex Mono', weights: ['400', '500', '600'] },
  { name: 'Ubuntu Mono', weights: ['400', '700'] },
  { name: 'Roboto Mono', weights: ['400', '500', '700'] },
  { name: 'Inconsolata', weights: ['400', '500', '700'] },
];

export const serifFonts: FontDefinition[] = [
  { name: 'Playfair Display', weights: ['400', '600', '700'] },
  { name: 'Merriweather', weights: ['400', '700'] },
  { name: 'Lora', weights: ['400', '500', '600', '700'] },
  { name: 'PT Serif', weights: ['400', '700'] },
  { name: 'Crimson Text', weights: ['400', '600', '700'] },
  { name: 'Source Serif Pro', weights: ['400', '600', '700'] },
  { name: 'Libre Baskerville', weights: ['400', '700'] },
  { name: 'Cormorant', weights: ['400', '500', '600', '700'] },
];