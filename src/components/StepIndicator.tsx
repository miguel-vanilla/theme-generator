import { Check } from 'lucide-react';

interface StepIndicatorProps {
  currentStep: number;
  totalSteps: number;
}

export function StepIndicator({ currentStep, totalSteps }: StepIndicatorProps) {
  // Get the step title dynamically
  const getStepTitle = (index: number) => {
    const titles = ['Fonts', 'Breakpoints', 'Colors', 'Typography', 'Roundness', 'Shadows', 'Inputs'];
    return titles[index] || `Step ${index + 1}`;
  };

  return (
    <div className="relative py-8 px-2 mb-8 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl shadow-inner overflow-x-auto md:overflow-visible">
      {/* Background decoration elements */}
      <div className="absolute top-0 right-0 w-20 h-20 bg-blue-100 rounded-full opacity-20 -mt-10 -mr-10"></div>
      <div className="absolute bottom-0 left-0 w-16 h-16 bg-indigo-100 rounded-full opacity-20 -mb-8 -ml-8"></div>
      
      <div className="flex items-center justify-between relative z-10 px-4">
        {Array.from({ length: totalSteps }).map((_, index) => (
          <div 
            key={index}
            className="flex flex-col items-center flex-shrink-0 group"
          >
            <div className="flex items-center">
              {/* Step circles with connecting lines */}
              <div className="relative">
                <div
                  className={`
                    relative flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full 
                    transition-all duration-300 shadow-md
                    ${
                      index === currentStep - 1
                        ? 'bg-gradient-to-br from-blue-500 to-indigo-600 ring-4 ring-blue-200 scale-110 z-20'
                        : index < currentStep - 1
                        ? 'bg-gradient-to-br from-blue-500 to-indigo-600 z-10'
                        : 'bg-gray-100 border-2 border-gray-200'
                    }
                  `}
                >
                  {index < currentStep - 1 ? (
                    <Check className="w-5 h-5 md:w-6 md:h-6 text-white drop-shadow-sm" />
                  ) : (
                    <span className={`text-sm md:text-base font-bold ${
                      index === currentStep - 1 ? 'text-white' : 'text-gray-500'
                    }`}>
                      {index + 1}
                    </span>
                  )}
                </div>
                
                {/* Pulsing animation for current step */}
                {index === currentStep - 1 && (
                  <div className="absolute top-0 left-0 w-full h-full rounded-full bg-blue-400 animate-ping opacity-20"></div>
                )}
              </div>
              
              {/* Connecting lines */}
              {index < totalSteps - 1 && (
                <div className="relative h-2 mx-1">
                  <div className="absolute top-1/2 -translate-y-1/2 w-12 md:w-16 lg:w-24 h-1 bg-gray-200"></div>
                  <div 
                    className={`absolute top-1/2 -translate-y-1/2 h-1 transition-all duration-500 ease-out bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full ${
                      index < currentStep - 1 ? 'w-full' : 'w-0'
                    }`}
                  ></div>
                </div>
              )}
            </div>
            
            {/* Step titles */}
            <span className={`
              mt-3 text-xs md:text-sm font-medium transition-colors duration-200
              ${index === currentStep - 1 
                ? 'text-blue-700 font-semibold' 
                : index < currentStep - 1 
                  ? 'text-blue-600' 
                  : 'text-gray-500'
              }
            `}>
              {getStepTitle(index)}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}