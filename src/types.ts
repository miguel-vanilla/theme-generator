export interface ThemeConfig {
  // Fonts
  fontSans: string;
  fontMono: string;
  fontTitle?: string;
  useCustomTitleFont: boolean;

  // Breakpoints
  breakpointSm: number;
  breakpointMd: number;
  breakpointLg: number;
  breakpointXl: number;
  breakpoint2xl: number;

  // Colors
  colorBackground: string;
  colorText: string;
  colorTitle: string;
  colorLink: string;
  colorPrimary: string;
  colorSecondary: string;
  colorWarning: string;
  colorDanger: string;
  colorSuccess: string;
  colorInfo: string;
  colorSystem: string;

  // Typography
  lineHeight: number;
  paragraphSpacing: number;
  letterSpacingBody: number;
  letterSpacingTitle: number;

  // Roundness
  borderRadius: number;

  // Shadows
  boxShadow: string;

  // Input Styling
  inputPaddingY: number;
  inputPaddingX: number;
  inputBorderWidth: number;
  inputBackgroundColor: string;
  inputBorderColor: string;
  inputFocusColor: string;
  inputFocusBorderWidth: number;
  inputBorderWidth: number;
  inputBackgroundColor: string;
  inputBorderColor: string;
  inputFocusColor: string;
  inputFocusBorderWidth: number;
}

export interface StepProps {
  config: ThemeConfig;
  setConfig: (config: ThemeConfig) => void;
  onNext: () => void;
  onPrev: () => void;
  currentStep: number;
  totalSteps: number;
}