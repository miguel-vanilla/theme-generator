import { ColorPicker } from '../components/ColorPicker';
import { StepProps } from '../types';
import { extractFontName } from '../utils/fonts';

export function ColorsStep({ config, setConfig }: StepProps) {
  const updateColor = (key: keyof typeof config) => (value: string) => {
    setConfig({ ...config, [key]: value });
  };

  const baseColors = [
    { key: 'colorBackground', label: 'Background' },
    { key: 'colorText', label: 'Text' },
    { key: 'colorTitle', label: 'Headings' },
    { key: 'colorLink', label: 'Links' },
  ] as const;

  const semanticColors = [
    { key: 'colorPrimary', label: 'Primary' },
    { key: 'colorSecondary', label: 'Secondary' },
    { key: 'colorWarning', label: 'Warning' },
    { key: 'colorDanger', label: 'Danger' },
    { key: 'colorSuccess', label: 'Success' },
    { key: 'colorInfo', label: 'Info' },
    { key: 'colorSystem', label: 'System' },
  ] as const;

  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Color Configuration</h2>

      <div className="space-y-8">
        <div>
          <h3 className="text-lg font-medium text-gray-900 mb-4">Base Colors</h3>
          <div className="grid grid-cols-4 gap-4">
            {baseColors.map(({ key, label }) => (
              <ColorPicker
                key={key}
                label={label}
                value={config[key]}
                onChange={updateColor(key)}
              />
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-lg font-medium text-gray-900 mb-4">Semantic Colors</h3>
          <div className="grid grid-cols-4 gap-4">
            {semanticColors.map(({ key, label }) => (
              <ColorPicker
                key={key}
                label={label}
                value={config[key]}
                onChange={updateColor(key)}
              />
            ))}
          </div>
        </div>

        <div className="mt-8 p-6 rounded-lg" style={{ backgroundColor: config.colorBackground }}>
          <h3 
            className="text-xl font-semibold mb-4" 
            style={{ 
              color: config.colorTitle,
              fontFamily: config.useCustomTitleFont 
                ? config.fontTitle 
                : config.fontSans
            }}
          >
            Preview
          </h3>
          <div className="space-y-4">
            <div>
              <p 
                className="mb-4" 
                style={{ 
                  color: config.colorText,
                  fontFamily: config.fontSans
                }}
              >
                This is how your text will look against the background. Here's a{' '}
                <a href="#" style={{ color: config.colorLink }}>
                  sample link
                </a>
                . The quick brown fox jumps over the lazy dog.
              </p>
            </div>
            
            <div className="grid grid-cols-4 gap-2">
              {semanticColors.map(({ key, label }) => (
                <div
                  key={key}
                  className="p-3 rounded text-white text-sm flex items-center justify-center font-medium"
                  style={{ 
                    backgroundColor: config[key],
                    fontFamily: config.fontSans
                  }}
                >
                  {label}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}