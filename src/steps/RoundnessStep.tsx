import { StepProps } from '../types';

export function RoundnessStep({ config, setConfig }: StepProps) {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Border Radius Configuration</h2>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Border Radius (rem)
        </label>
        <input
          type="range"
          min="0"
          max="2"
          step="0.125"
          value={config.borderRadius}
          onChange={(e) =>
            setConfig({ ...config, borderRadius: parseFloat(e.target.value) })
          }
          className="w-full"
        />
        <div className="flex justify-between text-sm text-gray-500 mt-1">
          <span>0</span>
          <span>2rem</span>
        </div>
      </div>

      <div className="mt-8 space-y-4">
        <h3 className="text-lg font-medium text-gray-900 mb-4">Preview</h3>
        <div className="grid grid-cols-3 gap-4">
          <div
            className="h-16 bg-blue-500"
            style={{ borderRadius: `${config.borderRadius}rem` }}
          />
          <div
            className="h-16 bg-green-500"
            style={{ borderRadius: `${config.borderRadius}rem` }}
          />
          <div
            className="h-16 bg-purple-500"
            style={{ borderRadius: `${config.borderRadius}rem` }}
          />
        </div>
        <div className="flex space-x-4">
          <button
            className="px-4 py-2 bg-blue-500 text-white"
            style={{ borderRadius: `${config.borderRadius}rem` }}
          >
            Button Example
          </button>
          <input
            type="text"
            placeholder="Input Example"
            className="px-4 py-2 border border-gray-300"
            style={{ borderRadius: `${config.borderRadius}rem` }}
          />
        </div>
      </div>
    </div>
  );
}