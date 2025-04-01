import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

interface SelectProps {
  value: string;
  onChange: (value: string) => void;
  options: { name: string; weights?: string[] }[];
  label?: string;
  className?: string;
  createFontString?: (font: string) => string;
}

export function Select({ value, onChange, options, label, className = '', createFontString }: SelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelect = (name: string) => {
    onChange(name);
    setIsOpen(false);
  };

  const getFontStyle = (fontName: string) => {
    if (!createFontString || !fontName) return undefined;
    const style = { fontFamily: createFontString(fontName) };
    // Add font-display: swap to prevent FOIT
    return {
      ...style,
      fontDisplay: 'swap' as const,
    };
  };

  return (
    <div ref={containerRef} className={`relative ${className}`}>
      {label && (
        <label className="block text-sm font-medium text-gray-700 mb-1">
          {label}
        </label>
      )}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-3 py-2 text-left bg-white border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      >
        <div className="flex items-center justify-between">
          <span style={getFontStyle(value)}>
            {value || 'Select...'}
          </span>
          <ChevronDown
            className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${
              isOpen ? 'transform rotate-180' : ''
            }`}
          />
        </div>
      </button>
      {isOpen && (
        <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-auto">
          {options.map((option) => (
            <button
              key={option.name}
              type="button"
              onClick={() => handleSelect(option.name)}
              className={`w-full px-3 py-2 text-left hover:bg-blue-50 focus:bg-blue-50 focus:outline-none ${
                option.name === value ? 'bg-blue-50 text-blue-700' : 'text-gray-900'
              }`}
              style={getFontStyle(option.name)}
            >
              {option.name}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}