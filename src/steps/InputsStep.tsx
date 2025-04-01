import type { StepProps } from '../types';
import { ColorPicker } from '../components/ColorPicker';

export function InputsStep({ config, setConfig }: StepProps) {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Input Styling Configuration</h2>

      <div className="grid grid-cols-4 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Vertical Padding (rem)
          </label>
          <input
            type="number"
            min="0"
            max="4"
            step="0.125"
            value={config.inputPaddingY}
            onChange={(e) =>
              setConfig({ ...config, inputPaddingY: parseFloat(e.target.value) || 0.5 })
            }
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Horizontal Padding (rem)
          </label>
          <input
            type="number"
            min="0"
            max="4"
            step="0.125"
            value={config.inputPaddingX}
            onChange={(e) =>
              setConfig({ ...config, inputPaddingX: parseFloat(e.target.value) || 0.75 })
            }
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Border Width (px)
          </label>
          <input
            type="number"
            min="0"
            max="5"
            step="1"
            value={config.inputBorderWidth}
            onChange={(e) =>
              setConfig({ ...config, inputBorderWidth: parseInt(e.target.value) || 1 })
            }
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Focus Border Width (px)
          </label>
          <input
            type="number"
            min="0"
            max="5"
            step="1"
            value={config.inputFocusBorderWidth}
            onChange={(e) =>
              setConfig({ ...config, inputFocusBorderWidth: parseInt(e.target.value) || 2 })
            }
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <ColorPicker
          label="Background Color"
          value={config.inputBackgroundColor}
          onChange={(value) => setConfig({ ...config, inputBackgroundColor: value })}
        />

        <ColorPicker
          label="Border Color"
          value={config.inputBorderColor}
          onChange={(value) => setConfig({ ...config, inputBorderColor: value })}
        />

        <ColorPicker
          label="Focus Color"
          value={config.inputFocusColor}
          onChange={(value) => setConfig({ ...config, inputFocusColor: value })}
        />
      </div>

      <div className="mt-8">
        <h3 className="text-lg font-medium text-gray-900 mb-4">Preview</h3>
        <div className="space-y-4 p-6 rounded-lg" style={{ backgroundColor: config.colorBackground }}>
          <div>
            <label className="block text-sm font-medium mb-1" style={{ 
              color: config.colorText,
              fontFamily: config.fontSans,
            }}>
              Text Input
            </label>
            <input
              type="text"
              placeholder="Sample input"
              className="w-full focus:outline-none transition-all duration-200"
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

          <div>
            <label className="block text-sm font-medium mb-1" style={{ 
              color: config.colorText,
              fontFamily: config.fontSans,
            }}>
              Select Input
            </label>
            <select
              className="w-full focus:outline-none transition-all duration-200"
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
            >
              <option>Option 1</option>
              <option>Option 2</option>
              <option>Option 3</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1" style={{ 
              color: config.colorText,
              fontFamily: config.fontSans,
            }}>
              Textarea
            </label>
            <textarea
              placeholder="Sample textarea"
              rows={3}
              className="w-full focus:outline-none transition-all duration-200"
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

          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              className="focus:outline-none transition-all duration-200"
              style={{
                borderRadius: `${config.borderRadius * 0.25}rem`,
                borderColor: config.inputBorderColor,
                backgroundColor: config.inputBackgroundColor,
                borderWidth: `${config.inputBorderWidth}px`,
                borderStyle: 'solid',
              }}
            />
            <label className="text-sm" style={{ 
              color: config.colorText,
              fontFamily: config.fontSans,
            }}>
              Checkbox
            </label>
          </div>

          <div className="flex items-center space-x-2">
            <input
              type="radio"
              name="radio-example"
              className="focus:outline-none transition-all duration-200"
              style={{
                borderColor: config.inputBorderColor,
                backgroundColor: config.inputBackgroundColor,
                borderWidth: `${config.inputBorderWidth}px`,
                borderStyle: 'solid',
              }}
            />
            <label className="text-sm" style={{ 
              color: config.colorText,
              fontFamily: config.fontSans,
            }}>
              Radio Button
            </label>
          </div>

          <button
            className="w-full text-white transition-all duration-200"
            style={{
              padding: `${config.inputPaddingY}rem ${config.inputPaddingX}rem`,
              borderRadius: `${config.borderRadius}rem`,
              backgroundColor: config.colorPrimary,
              boxShadow: config.boxShadow,
              fontFamily: config.fontSans,
            }}
          >
            Sample Button
          </button>
        </div>
      </div>
    </div>
  );
}