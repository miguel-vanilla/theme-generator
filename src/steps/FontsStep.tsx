import { sansSerifFonts, monospaceFonts, serifFonts } from '../data/fonts';
import { Select } from '../components/Select';
import { createFontString } from '../utils/fonts';
import { StepProps } from '../types';

const extractFontName = (fontString: string = ''): string => {
  const match = fontString.match(/^([^,]+)/);
  return match ? match[1].replace(/["']/g, '') : '';
};

export function FontsStep({ config, setConfig }: StepProps) {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Font Configuration</h2>
      
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Primary Font (Sans-Serif)
          </label>
          <Select
            value={extractFontName(config.fontSans)}
            onChange={(font) => setConfig({ ...config, fontSans: createFontString(font, 'sans') })}
            options={sansSerifFonts}
            createFontString={createFontString}
          />
          <p className="mt-2 text-sm text-gray-500" style={{ fontFamily: createFontString(extractFontName(config.fontSans)) }}>
            Example text in sans-serif font
          </p>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Code Font (Monospace)
          </label>
          <Select
            value={extractFontName(config.fontMono)}
            onChange={(font) => setConfig({ ...config, fontMono: createFontString(font, 'mono') })}
            options={monospaceFonts}
            createFontString={createFontString}
          />
          <p className="mt-2 text-sm text-gray-500" style={{ fontFamily: createFontString(extractFontName(config.fontMono)) }}>
            Example text in monospace font
          </p>
        </div>

        <div className="pt-4">
          <div className="flex items-center mb-4">
            <input
              type="checkbox"
              id="useCustomTitleFont"
              checked={config.useCustomTitleFont}
              onChange={(e) =>
                setConfig({ ...config, useCustomTitleFont: e.target.checked })
              }
              className="h-4 w-4 text-blue-500 rounded border-gray-300"
            />
            <label htmlFor="useCustomTitleFont" className="ml-2 text-sm text-gray-700">
              Use custom title/heading font
            </label>
          </div>

          {config.useCustomTitleFont && (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Title Font (Serif)
              </label>
              <Select
                value={config.fontTitle ? extractFontName(config.fontTitle) : serifFonts[0].name}
                onChange={(font) => setConfig({ ...config, fontTitle: createFontString(font, 'serif') })}
                options={serifFonts}
                createFontString={createFontString}
              />
              <h3
                className="mt-2 text-xl font-bold"
                style={{ fontFamily: config.useCustomTitleFont ? createFontString(extractFontName(config.fontTitle)) : createFontString(extractFontName(config.fontSans)) }}
              >
                The quick brown fox jumps over the lazy dog
              </h3>
            </div>
          )}
        </div>

        <div className="mt-8 p-6 bg-gray-50 rounded-lg">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Preview</h3>
          <div className="space-y-4">
            <div>
              <h4 className="text-sm font-medium text-gray-500 mb-2">Body Text</h4>
              <p style={{ fontFamily: createFontString(extractFontName(config.fontSans)) }}>
                The quick brown fox jumps over the lazy dog. Pack my box with five dozen liquor jugs.
              </p>
            </div>
            <div>
              <h4 className="text-sm font-medium text-gray-500 mb-2">Code</h4>
              <code className="block p-3 bg-gray-800 text-gray-200 rounded" style={{ fontFamily: createFontString(extractFontName(config.fontMono)) }}>
                console.log("Hello, World!");
              </code>
            </div>
            {config.useCustomTitleFont && (
              <div>
                <h4 className="text-sm font-medium text-gray-500 mb-2">Headings</h4>
                <h2 style={{ fontFamily: createFontString(extractFontName(config.fontTitle)) }}>
                  Typography Matters
                </h2>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}