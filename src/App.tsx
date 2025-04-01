import React, { useState, useMemo } from 'react';
import { Settings, Palette, Type, Layout, Circle, Box, Sliders, Download } from 'lucide-react';
import { getFontsUrl } from './api/fonts';
import { defaultConfig } from './defaultConfig';
import { ThemeConfig } from './types';
import { Navigation } from './components/Navigation';
import { FontsStep } from './steps/FontsStep';
import { BreakpointsStep } from './steps/BreakpointsStep';
import { ColorsStep } from './steps/ColorsStep';
import { TypographyStep } from './steps/TypographyStep';
import { RoundnessStep } from './steps/RoundnessStep';
import { ShadowsStep } from './steps/ShadowsStep';
import { InputsStep } from './steps/InputsStep';

function App() {
  const [currentStep, setCurrentStep] = useState(1);
  const [config, setConfig] = useState<ThemeConfig>(defaultConfig);
  const [showGenerateModal, setShowGenerateModal] = useState(false);

  const steps = [
    { icon: Type, component: FontsStep, title: 'Fonts' },
    { icon: Layout, component: BreakpointsStep, title: 'Breakpoints' },
    { icon: Palette, component: ColorsStep, title: 'Colors' },
    { icon: Settings, component: TypographyStep, title: 'Typography' },
    { icon: Circle, component: RoundnessStep, title: 'Roundness' },
    { icon: Box, component: ShadowsStep, title: 'Shadows' },
    { icon: Sliders, component: InputsStep, title: 'Input Styling' },
  ];

  // Load fonts
  React.useEffect(() => {
    const loadFonts = async () => {
      const url = await getFontsUrl();
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = url;
      document.head.appendChild(link);
    };
    loadFonts();
  }, []);

  const CurrentStepComponent = steps[currentStep - 1].component;
  const Icon = steps[currentStep - 1].icon;

  const PreviewContent = useMemo(() => {
    return (
      <div className="space-y-8 p-6 rounded-lg" style={{ backgroundColor: config.colorBackground }}>
        {/* Typography Section */}
        <div className="space-y-4 border-b border-gray-200 pb-6">
          <h4 className="text-sm font-medium text-gray-500">Typography</h4>
          <h2 
            style={{ 
              fontFamily: config.useCustomTitleFont ? config.fontTitle : config.fontSans,
              color: config.colorTitle,
              letterSpacing: `${config.letterSpacingTitle}px`,
              lineHeight: config.lineHeight,
            }}
            className="text-3xl font-bold"
          >
            Heading Example
          </h2>
          
          <div style={{ 
            fontFamily: config.fontSans,
            lineHeight: config.lineHeight,
            letterSpacing: `${config.letterSpacingBody}px`,
            color: config.colorText,
          }}>
            <p style={{ marginBottom: `${config.paragraphSpacing}rem` }}>
              This text demonstrates the typography settings with {config.lineHeight} line height and {config.letterSpacingBody}px letter spacing.
            </p>
            <a href="#" style={{ color: config.colorLink }}>Interactive link example</a>
          </div>
        </div>

        {/* Colors Section */}
        <div className="space-y-4 border-b border-gray-200 pb-6">
          <h4 className="text-sm font-medium text-gray-500">Color Palette</h4>
          <div className="grid grid-cols-3 gap-2">
            {[
              { color: config.colorPrimary, label: 'Primary' },
              { color: config.colorSecondary, label: 'Secondary' },
              { color: config.colorWarning, label: 'Warning' },
              { color: config.colorDanger, label: 'Danger' },
              { color: config.colorSuccess, label: 'Success' },
              { color: config.colorInfo, label: 'Info' },
            ].map(({ color, label }) => (
              <div
                key={label}
                className="p-4 rounded flex items-center justify-center text-white text-sm font-medium"
                style={{ 
                  backgroundColor: color,
                  borderRadius: `${config.borderRadius}rem`,
                  boxShadow: config.boxShadow,
                }}
              >
                {label}
              </div>
            ))}
          </div>
        </div>

        {/* Interactive Elements */}
        <div className="space-y-4 border-b border-gray-200 pb-6">
          <h4 className="text-sm font-medium text-gray-500">Interactive Elements</h4>
          <div className="grid grid-cols-2 gap-4">
            <button
              className="w-full text-white"
              style={{
                padding: `${config.inputPaddingY}rem ${config.inputPaddingX}rem`,
                borderRadius: `${config.borderRadius}rem`,
                backgroundColor: config.colorPrimary,
                boxShadow: config.boxShadow,
                fontFamily: config.fontSans,
              }}
            >
              Primary Button
            </button>
            <input
              type="text"
              placeholder="Text input"
              className="w-full border focus:outline-none transition-all duration-200"
              style={{
                padding: `${config.inputPaddingY}rem ${config.inputPaddingX}rem`,
                borderRadius: `${config.borderRadius}rem`,
                borderColor: config.inputBorderColor,
                backgroundColor: config.inputBackgroundColor,
                color: config.colorText,
                borderWidth: `${config.inputBorderWidth}px`,
                borderStyle: 'solid',
                fontFamily: config.fontSans,
              }}
            />
          </div>
        </div>

        {/* Code Example */}
        <div className="space-y-4">
          <h4 className="text-sm font-medium text-gray-500">Code Example</h4>
          <code 
            className="block p-3 bg-gray-800 text-gray-200 rounded"
            style={{ 
              fontFamily: config.fontMono,
              borderRadius: `${config.borderRadius}rem`,
              boxShadow: config.boxShadow,
            }}
          >
            {`const theme = {
  borderRadius: '${config.borderRadius}rem',
  shadow: '${config.boxShadow}'
};`}
          </code>
        </div>
      </div>
    );
  }, [config]);

  const handleNext = () => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrev = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const generateRawCSS = (config: ThemeConfig): string => {
    return `/* Generated by Tailwind CSS Theme Generator */
:root {
  /* Fonts */
  --font-sans: ${config.fontSans};
  --font-mono: ${config.fontMono};
  ${config.useCustomTitleFont ? `--font-title: ${config.fontTitle};` : ''}

  /* Colors */
  --color-background: ${config.colorBackground};
  --color-text: ${config.colorText};
  --color-title: ${config.colorTitle};
  --color-link: ${config.colorLink};
  --color-primary: ${config.colorPrimary};
  --color-secondary: ${config.colorSecondary};
  --color-warning: ${config.colorWarning};
  --color-danger: ${config.colorDanger};
  --color-success: ${config.colorSuccess};
  --color-info: ${config.colorInfo};
  --color-system: ${config.colorSystem};

  /* Typography */
  --line-height: ${config.lineHeight};
  --paragraph-spacing: ${config.paragraphSpacing}rem;
  --letter-spacing-body: ${config.letterSpacingBody}px;
  --letter-spacing-title: ${config.letterSpacingTitle}px;

  /* Roundness */
  --border-radius: ${config.borderRadius}rem;

  /* Shadows */
  --box-shadow: ${config.boxShadow};

  /* Input Styles */
  --input-padding-y: ${config.inputPaddingY}rem;
  --input-padding-x: ${config.inputPaddingX}rem;
  --input-border-color: var(--color-system);
  --input-focus-color: var(--color-primary);
}

/* Basic Resets & Defaults */
body {
  font-family: var(--font-sans);
  background-color: var(--color-background);
  color: var(--color-text);
  line-height: var(--line-height);
}

h1, h2, h3, h4, h5, h6 {
  font-family: ${config.useCustomTitleFont ? 'var(--font-title)' : 'var(--font-sans)'};
  color: var(--color-title);
}

p {
  margin-bottom: var(--paragraph-spacing);
}

a {
  color: var(--color-link);
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}

/* Form Elements */
input[type="text"],
input[type="email"],
input[type="password"],
input[type="number"],
input[type="search"],
input[type="tel"],
input[type="url"],
textarea,
select {
  padding: var(--input-padding-y) var(--input-padding-x);
  border: 1px solid var(--input-border-color);
  border-radius: var(--border-radius);
  background-color: var(--color-background);
  color: var(--color-text);
  line-height: var(--line-height);
  width: 100%;
}

input:focus,
textarea:focus,
select:focus {
  outline: 2px solid transparent;
  outline-offset: 2px;
  border-color: var(--input-focus-color);
  box-shadow: 0 0 0 2px var(--input-focus-color);
}

button {
  padding: var(--input-padding-y) var(--input-padding-x);
  background-color: var(--color-primary);
  color: white;
  border: none;
  border-radius: var(--border-radius);
  cursor: pointer;
  box-shadow: var(--box-shadow);
}

button:hover {
  opacity: 0.9;
}

button:focus {
  outline: 2px solid transparent;
  outline-offset: 2px;
  box-shadow: 0 0 0 2px var(--input-focus-color);
}

input[type="checkbox"],
input[type="radio"] {
  width: 1rem;
  height: 1rem;
  border: 2px solid var(--input-border-color);
  background-color: var(--color-background);
}

input[type="checkbox"] {
  border-radius: calc(var(--border-radius) * 0.25);
}

input[type="radio"] {
  border-radius: 50%;
}

input[type="checkbox"]:checked,
input[type="radio"]:checked {
  background-color: var(--color-primary);
  border-color: var(--color-primary);
}`;
  };

  const generateTailwindCSS = (config: ThemeConfig): string => {
    return `/* Generated by Tailwind CSS Theme Generator */

@layer base {
  :root {
    /* Fonts */
    --font-sans: ${config.fontSans};
    --font-mono: ${config.fontMono};
    ${config.useCustomTitleFont ? `--font-title: ${config.fontTitle};` : ''}
  }
}

@layer components {
  .btn {
    @apply px-4 py-2 rounded-md transition-all duration-200;
    border-radius: ${config.borderRadius}rem;
    box-shadow: ${config.boxShadow};
  }
  
  .btn-primary {
    @apply text-white;
    background-color: ${config.colorPrimary};
  }
  
  .input {
    @apply w-full transition-all duration-200;
    padding: ${config.inputPaddingY}rem ${config.inputPaddingX}rem;
    border-radius: ${config.borderRadius}rem;
    border: ${config.inputBorderWidth}px solid ${config.inputBorderColor};
    background-color: ${config.inputBackgroundColor};
    color: ${config.colorText};
  }
  
  .input:focus {
    @apply outline-none;
    border-color: ${config.inputFocusColor};
    box-shadow: 0 0 0 ${config.inputFocusBorderWidth}px ${config.inputFocusColor};
  }
}

@layer utilities {
  .text-title {
    font-family: ${config.useCustomTitleFont ? 'var(--font-title)' : 'var(--font-sans)'};
    color: ${config.colorTitle};
    letter-spacing: ${config.letterSpacingTitle}px;
  }
  
  .text-body {
    font-family: var(--font-sans);
    color: ${config.colorText};
    letter-spacing: ${config.letterSpacingBody}px;
    line-height: ${config.lineHeight};
  }
}`;
  };

  const downloadCSS = (css: string, filename: string) => {
    const blob = new Blob([css], { type: 'text/css' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const handleGenerateCSS = () => {
    setShowGenerateModal(true);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Generate CSS Modal */}
      {showGenerateModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 max-w-md w-full mx-4">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Generate CSS</h2>
            <p className="text-gray-600 mb-6">Choose your preferred CSS format:</p>
            <div className="space-y-4">
              <button
                onClick={() => {
                  downloadCSS(generateRawCSS(config), 'theme.css');
                  setShowGenerateModal(false);
                }}
                className="w-full px-4 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors flex items-center justify-center space-x-2"
              >
                <Download className="w-5 h-5" />
                <span>Download Raw CSS</span>
              </button>
              <button
                onClick={() => {
                  downloadCSS(generateTailwindCSS(config), 'tailwind.css');
                  setShowGenerateModal(false);
                }}
                className="w-full px-4 py-3 bg-cyan-500 text-white rounded-lg hover:bg-cyan-600 transition-colors flex items-center justify-center space-x-2"
              >
                <Download className="w-5 h-5" />
                <span>Download Tailwind CSS</span>
              </button>
              <button
                onClick={() => setShowGenerateModal(false)}
                className="w-full px-4 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="flex h-screen">
        {/* Left Column - Steps */}
        <div className="w-1/4 border-r border-gray-200 bg-white p-6 overflow-y-auto">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Theme Generator</h2>
          <div className="space-y-2">
            {steps.map((step, index) => {
              const StepIcon = step.icon;
              return (
                <button
                  key={step.title}
                  onClick={() => setCurrentStep(index + 1)}
                  className={`w-full flex items-center space-x-3 p-3 rounded-lg transition-colors ${
                    currentStep === index + 1
                      ? 'bg-blue-50 text-blue-700'
                      : 'hover:bg-gray-50 text-gray-600'
                  }`}
                >
                  <StepIcon className="w-5 h-5" />
                  <span className="font-medium">{step.title}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Middle Column - Current Step */}
        <div className="w-1/2 p-6 overflow-y-auto">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center space-x-3 mb-6">
              <div className="p-2 bg-blue-100 rounded-lg">
                <Icon className="w-6 h-6 text-blue-600" />
              </div>
              <h1 className="text-2xl font-bold text-gray-900">
                {steps[currentStep - 1].title}
              </h1>
            </div>

            <CurrentStepComponent
              config={config}
              setConfig={setConfig}
              onNext={handleNext}
              onPrev={handlePrev}
              currentStep={currentStep}
              totalSteps={steps.length}
            />

            <Navigation
              onNext={handleNext}
              onPrev={handlePrev}
              onGenerate={handleGenerateCSS}
              currentStep={currentStep}
              totalSteps={steps.length}
            />
          </div>
        </div>

        {/* Right Column - Preview */}
        <div className="w-1/4 border-l border-gray-200 bg-white p-6 overflow-y-auto">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Live Preview</h2>
          {PreviewContent}
        </div>
      </div>
    </div>
  );
}

export default App;