import { ThemeConfig } from './types';

export const defaultConfig: ThemeConfig = {
  // Fonts
  fontSans: 'Inter, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif',
  fontMono: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
  useCustomTitleFont: false,
  fontTitle: undefined,

  // Breakpoints
  breakpointSm: 640,
  breakpointMd: 768,
  breakpointLg: 1024,
  breakpointXl: 1280,
  breakpoint2xl: 1536,

  // Colors
  colorBackground: '#ffffff',
  colorText: '#111827',
  colorTitle: '#111827',
  colorLink: '#2563eb',
  colorPrimary: '#3b82f6',
  colorSecondary: '#6b7280',
  colorWarning: '#f59e0b',
  colorDanger: '#ef4444',
  colorSuccess: '#22c55e',
  colorInfo: '#06b6d4',
  colorSystem: '#9ca3af',

  // Typography
  lineHeight: 1.6,
  paragraphSpacing: 1,
  letterSpacingBody: 0,
  letterSpacingTitle: -0.5,

  // Roundness
  borderRadius: 0.375,

  // Shadows
  boxShadow: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',

  // Input Styling
  inputPaddingY: 0.5,
  inputPaddingX: 0.75,
  inputBorderWidth: 1,
  inputBackgroundColor: '#ffffff',
  inputBorderColor: '#9ca3af',
  inputFocusColor: '#3b82f6',
  inputFocusBorderWidth: 2,
  inputBorderWidth: 1,
  inputBackgroundColor: '#ffffff',
  inputBorderColor: '#9ca3af',
  inputFocusColor: '#3b82f6',
  inputFocusBorderWidth: 2,
};