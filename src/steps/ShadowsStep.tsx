import { StepProps } from '../types';

const shadowPresets = {
  none: 'none',
  sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
  md: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
  lg: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
  xl: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
};

export function ShadowsStep({ config, setConfig }: StepProps) {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Shadow Configuration</h2>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Box Shadow Presets
        </label>
        <div className="grid grid-cols-5 gap-4">
          {Object.entries(shadowPresets).map(([key, value]) => (
            <button
              key={key}
              onClick={() => setConfig({ ...config, boxShadow: value })}
              className={`p-3 text-center bg-white rounded-lg transition-all ${
                config.boxShadow === value
                  ? 'ring-2 ring-blue-500'
                  : 'hover:ring-1 hover:ring-gray-300'
              }`}
              style={{ boxShadow: value }}
            >
              <div className="font-medium capitalize text-sm">{key}</div>
              <div className="text-xs text-gray-500 mt-1">
                {key === 'none' ? 'No shadow' : `Shadow ${key.toUpperCase()}`}
              </div>
            </button>
          ))}
        </div>
      </div>

      <div className="mt-8">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Custom Box Shadow
        </label>
        <input
          type="text"
          value={config.boxShadow}
          onChange={(e) => setConfig({ ...config, boxShadow: e.target.value })}
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          placeholder="e.g., 0 1px 3px 0 rgb(0 0 0 / 0.1)"
        />
      </div>

      <div className="mt-8">
        <h3 className="text-lg font-medium text-gray-900 mb-4">Preview</h3>
        <div className="space-y-6" style={{ backgroundColor: config.colorBackground, padding: '2rem', borderRadius: '0.5rem' }}>
          <div className="grid grid-cols-2 gap-6">
            <div
              className="aspect-video bg-white rounded-lg flex items-center justify-center"
              style={{ boxShadow: config.boxShadow }}
            >
              <p className="text-gray-500">Card with Shadow</p>
            </div>
            <div
              className="aspect-video bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg flex items-center justify-center"
              style={{ boxShadow: config.boxShadow }}
            >
              <p className="text-blue-600">Gradient Card</p>
            </div>
          </div>
          
          <div className="flex gap-4 justify-center">
            <button
              className="px-4 py-2 bg-white text-gray-700 rounded-lg"
              style={{ boxShadow: config.boxShadow }}
            >
              Button Example
            </button>
            <button
              className="px-4 py-2 bg-blue-500 text-white rounded-lg"
              style={{ boxShadow: config.boxShadow }}
            >
              Primary Button
            </button>
          </div>
          
          <div
            className="p-6 bg-gradient-to-tr from-purple-50 to-pink-50 rounded-lg"
            style={{ boxShadow: config.boxShadow }}
          >
            <h4 className="text-lg font-medium text-gray-900 mb-2">Content Card</h4>
            <p className="text-gray-600">
              This is how your content cards will look with the selected shadow style.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}