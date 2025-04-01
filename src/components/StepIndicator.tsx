import { Check } from 'lucide-react';

interface StepIndicatorProps {
  currentStep: number;
  totalSteps: number;
}

export function StepIndicator({ currentStep, totalSteps }: StepIndicatorProps) {
  return (
    <div className="flex items-center justify-between mb-8 px-4">
      {Array.from({ length: totalSteps }).map((_, index) => (
        <div 
          key={index}
          className="flex items-center"
        >
          <div className="flex items-center">
            <div
              className={`relative flex items-center justify-center w-8 h-8 rounded-full transition-all duration-200 ${
                index === currentStep - 1
                  ? 'bg-blue-500 ring-4 ring-blue-100'
                  : index < currentStep - 1
                  ? 'bg-blue-500'
                  : 'bg-gray-200'
              }`}
            >
              {index < currentStep - 1 ? (
                <Check className="w-5 h-5 text-white" />
              ) : (
                <span className={`text-sm font-medium ${
                  index === currentStep - 1 ? 'text-white' : 'text-gray-600'
                }`}>
                  {index + 1}
                </span>
              )}
            </div>
            {index < totalSteps - 1 && (
              <div
                className={`w-24 h-0.5 transition-colors duration-200 ${
                  index < currentStep - 1
                    ? 'bg-blue-500'
                    : 'bg-gray-200'
                }`}
              />
            )}
          </div>
        </div>
      ))}
    </div>
  );
}