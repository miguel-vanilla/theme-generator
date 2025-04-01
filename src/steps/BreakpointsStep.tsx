import { StepProps } from '../types';

export function BreakpointsStep({ config, setConfig }: StepProps) {
  const breakpoints = [
    { key: 'breakpointSm', label: 'Mobile (sm)', default: 640, min: 320, max: 767 },
    { key: 'breakpointMd', label: 'Tablet (md)', default: 768, min: 640, max: 1023 },
    { key: 'breakpointLg', label: 'Desktop (lg)', default: 1024, min: 768, max: 1279 },
    { key: 'breakpointXl', label: 'Large Desktop (xl)', default: 1280, min: 1024, max: 1535 },
    { key: 'breakpoint2xl', label: 'Extra Large (2xl)', default: 1536, min: 1280, max: 1920 },
  ] as const;

  const handleBreakpointChange = (key: keyof typeof config, value: number, breakpoint: typeof breakpoints[0]) => {
    const validValue = Math.max(breakpoint.min, Math.min(breakpoint.max, value));
    setConfig({ ...config, [key]: validValue });
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Breakpoint Configuration</h2>
      
      <div className="space-y-4">
        {breakpoints.map((breakpoint) => (
          <div key={breakpoint.key} className="space-y-2">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              {breakpoint.label}
            </label>
            <div className="flex items-center space-x-4">
              <div className="flex-1">
                <input
                  type="range"
                  min={breakpoint.min}
                  max={breakpoint.max}
                  value={config[breakpoint.key]}
                  onChange={(e) => handleBreakpointChange(breakpoint.key, parseInt(e.target.value), breakpoint)}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-500"
                />
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>{breakpoint.min}px</span>
                  <span>{breakpoint.max}px</span>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <input
                  type="number"
                  min={breakpoint.min}
                  max={breakpoint.max}
                  value={config[breakpoint.key]}
                  onChange={(e) => handleBreakpointChange(breakpoint.key, parseInt(e.target.value) || breakpoint.default, breakpoint)}
                  className="w-24 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                />
                <span className="text-gray-500">px</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8">
        <h3 className="text-sm font-medium text-gray-700 mb-3">Visual Representation</h3>
        <div className="relative h-8 bg-gray-100 rounded-lg overflow-hidden">
          {breakpoints.map((breakpoint, index) => (
            <div
              key={breakpoint.key}
              className="absolute h-full bg-blue-200"
              style={{
                left: `${(index === 0 ? 0 : config[breakpoints[index - 1].key]) / 16}%`,
                width: `${(config[breakpoint.key] - (index === 0 ? 0 : config[breakpoints[index - 1].key])) / 16}%`,
                backgroundColor: `rgba(59, 130, 246, ${0.2 + index * 0.15})`,
              }}
            />
          ))}
        </div>
        <div className="flex justify-between mt-1 text-xs text-gray-500">
          <span>0</span>
          <span>1600px</span>
        </div>
      </div>
    </div>
  );
}