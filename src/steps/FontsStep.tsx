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
      <h2 className="text-gray-500 mb-6 text-sm">Please make your font configuration. You can always change it later.</h2>
      <hr className="border-gray-300 mb-6" />
      
      <div className="flex flex-col md:flex-row md:space-x-6">
        {/* Left Column - Font Selection */}
        <div className="md:w-1/2 space-y-5">
          <div className="bg-white p-5 rounded-lg border border-gray-100 shadow-sm">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Primary Font (Sans-Serif)
            </label>
            <Select
              value={extractFontName(config.fontSans)}
              onChange={(font) => setConfig({ ...config, fontSans: createFontString(font, 'sans') })}
              options={sansSerifFonts}
              createFontString={createFontString}
            />
          </div>

          <div className="bg-white p-5 rounded-lg border border-gray-100 shadow-sm">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Code Font (Monospace)
            </label>
            <Select
              value={extractFontName(config.fontMono)}
              onChange={(font) => setConfig({ ...config, fontMono: createFontString(font, 'mono') })}
              options={monospaceFonts}
              createFontString={createFontString}
            />
          </div>

          <div className="bg-white p-5 rounded-lg border border-gray-100 shadow-sm">
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
              <label htmlFor="useCustomTitleFont" className="ml-2 text-sm text-gray-700 font-medium">
                Use custom title/heading font
              </label>
            </div>

            {config.useCustomTitleFont && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Title Font (Serif)
                </label>
                <Select
                  value={config.fontTitle ? extractFontName(config.fontTitle) : serifFonts[0].name}
                  onChange={(font) => setConfig({ ...config, fontTitle: createFontString(font, 'serif') })}
                  options={serifFonts}
                  createFontString={createFontString}
                />
              </div>
            )}
          </div>
        </div>

        {/* Right Column - Preview */}
        <div className="md:w-1/2 mt-6 md:mt-0">
          <div className="bg-gradient-to-br from-gray-50 to-blue-50 p-6 rounded-xl shadow-md border border-blue-100">
            <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
              </svg>
              Font Preview
            </h3>
            
            <div className="space-y-6">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h4 className="text-sm font-medium text-blue-600 mb-2">Body Text</h4>
                <p style={{ fontFamily: createFontString(extractFontName(config.fontSans)) }} className="text-gray-800">
                  The quick brown fox jumps over the lazy dog. Pack my box with five dozen liquor jugs.
                </p>
                <p style={{ fontFamily: createFontString(extractFontName(config.fontSans)) }} className="text-gray-800 mt-2">
                  This will be the primary font used throughout your application for regular text content.
                </p>
              </div>
              
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h4 className="text-sm font-medium text-blue-600 mb-2">Code</h4>
                <code className="block p-3 bg-gray-800 text-gray-200 rounded" style={{ fontFamily: createFontString(extractFontName(config.fontMono)) }}>
                  {`const greeting = () => {
  console.log("Hello, World!");
};

// This is your monospace font`}
                </code>
              </div>
              
              {config.useCustomTitleFont ? (
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h4 className="text-sm font-medium text-blue-600 mb-2">Headings</h4>
                  <h2 
                    style={{ fontFamily: createFontString(extractFontName(config.fontTitle)) }}
                    className="text-2xl font-bold text-gray-900"
                  >
                    Typography Matters
                  </h2>
                  <p style={{ fontFamily: createFontString(extractFontName(config.fontTitle)) }} className="text-lg font-medium text-gray-700 mt-2">
                    Your headings will stand out with this custom font
                  </p>
                </div>
              ) : (
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h4 className="text-sm font-medium text-blue-600 mb-2">Headings (Using Primary Font)</h4>
                  <h2 
                    style={{ fontFamily: createFontString(extractFontName(config.fontSans)) }}
                    className="text-2xl font-bold text-gray-900"
                  >
                    Typography Matters
                  </h2>
                  <p style={{ fontFamily: createFontString(extractFontName(config.fontSans)) }} className="text-lg font-medium text-gray-700 mt-2">
                    Your headings will use the same font as body text
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}