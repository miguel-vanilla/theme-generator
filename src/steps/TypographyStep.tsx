import { StepProps } from '../types';

export function TypographyStep({ config, setConfig }: StepProps) {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Typography Configuration</h2>

      <div className="grid grid-cols-3 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Line Height
          </label>
          <input
            type="number"
            min="1"
            max="2"
            step="0.1"
            value={config.lineHeight}
            onChange={(e) =>
              setConfig({ ...config, lineHeight: parseFloat(e.target.value) || 1.6 })
            }
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Body Letter Spacing (px)
          </label>
          <input
            type="number"
            min="-2"
            max="10"
            step="0.5"
            value={config.letterSpacingBody}
            onChange={(e) =>
              setConfig({
                ...config,
                letterSpacingBody: parseFloat(e.target.value) || 0,
              })
            }
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Title Letter Spacing (px)
          </label>
          <input
            type="number"
            min="-2"
            max="10"
            step="0.5"
            value={config.letterSpacingTitle}
            onChange={(e) =>
              setConfig({
                ...config,
                letterSpacingTitle: parseFloat(e.target.value) || -0.5,
              })
            }
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Paragraph Spacing (rem)
        </label>
        <input
          type="range"
          min="0"
          max="4"
          step="0.25"
          value={config.paragraphSpacing}
          onChange={(e) =>
            setConfig({
              ...config,
              paragraphSpacing: parseFloat(e.target.value) || 1,
            })
          }
          className="w-full"
        />
        <div className="flex justify-between text-xs text-gray-500 mt-1">
          <span>0</span>
          <span>4rem</span>
        </div>
      </div>

      <div className="mt-8 p-6 rounded-lg shadow" style={{ backgroundColor: config.colorBackground }}>
        <h3 className="text-lg font-medium text-gray-900 mb-4">Preview</h3>
        <div
          style={{
            lineHeight: config.lineHeight,
            fontFamily: config.fontSans,
            letterSpacing: `${config.letterSpacingBody}px`,
          }}
        >
          <h3 
            className="text-2xl font-bold mb-4"
            style={{
              fontFamily: config.useCustomTitleFont ? config.fontTitle : config.fontSans,
              letterSpacing: `${config.letterSpacingTitle}px`,
              color: config.colorTitle,
            }}
          >
            Typography Preview
          </h3>
          <p style={{ marginBottom: `${config.paragraphSpacing}rem` }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris.
          </p>
          <p style={{ marginBottom: `${config.paragraphSpacing}rem` }}>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident.
          </p>
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis.
          </p>
        </div>
      </div>
    </div>
  );
}