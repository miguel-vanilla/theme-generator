import { ArrowLeft, ArrowRight, Download } from 'lucide-react';

interface NavigationProps {
  onNext: () => void;
  onPrev: () => void;
  onGenerate: () => void;
  currentStep: number;
  totalSteps: number;
}

export function Navigation({ onNext, onPrev, onGenerate, currentStep, totalSteps }: NavigationProps) {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-center gap-3 mt-8">
      <button
        onClick={onPrev}
        disabled={currentStep === 1}
        className={`w-full sm:w-auto px-4 py-2 rounded-md transition-colors duration-200 ${
          currentStep === 1
            ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
            : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50 hover:border-gray-400 shadow-sm hover:shadow active:shadow-inner'
        } flex items-center justify-center sm:justify-start gap-2`}
      >
        <ArrowLeft className="w-4 h-4" />
        <span className="hidden sm:inline">Previous</span>
      </button>
      <button
        onClick={currentStep === totalSteps ? onGenerate : onNext}
        className="w-full sm:w-auto px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-all duration-200 shadow-sm hover:shadow-md active:shadow-inner flex items-center justify-center gap-2"
      >
        {currentStep === totalSteps ? (
          <>
            <span>Generate CSS</span>
            <Download className="w-4 h-4" />
          </>
        ) : (
          <>
            <span>Next</span>
            <ArrowRight className="w-4 h-4" />
          </>
        )}
      </button>
    </div>
  );
}