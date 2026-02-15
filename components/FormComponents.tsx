import React from 'react';

// Wrapper for a standard row in the form table
export const FormRow = ({ children, className = '' }: { children?: React.ReactNode; className?: string }) => (
  <div className={`flex flex-col md:flex-row border-b border-black ${className}`}>
    {children}
  </div>
);

// A cell with a label and an input
interface FormCellProps {
  label: React.ReactNode;
  subLabel?: React.ReactNode;
  value: string;
  onChange: (val: string) => void;
  className?: string;
  labelWidth?: string;
  uppercase?: boolean;
  placeholder?: string;
}

export const FormCell: React.FC<FormCellProps> = ({ 
  label, 
  subLabel, 
  value, 
  onChange, 
  className = 'flex-1',
  labelWidth = 'w-1/3',
  uppercase = true,
  placeholder = ''
}) => {
  return (
    <div className={`flex flex-col border-r border-black last:border-r-0 p-1 ${className}`}>
      <div className="text-xs font-bold text-gray-800 leading-tight">
        {label}
        {subLabel && <span className="block font-bengali font-normal text-[10px]">{subLabel}</span>}
      </div>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className={`w-full bg-transparent border-b border-dotted border-gray-400 focus:border-blue-500 focus:outline-none font-handwriting text-blue-700 text-lg md:text-xl px-1 mt-1 ${uppercase ? 'uppercase' : ''}`}
      />
    </div>
  );
};

// Checkbox group
interface CheckboxOption {
  label: string;
  bengaliLabel: string;
  value: string;
}

interface CheckboxGroupProps {
  label: string;
  bengaliLabel?: string;
  options: CheckboxOption[];
  selectedValue: string;
  onChange: (val: any) => void;
  className?: string;
}

export const CheckboxGroup: React.FC<CheckboxGroupProps> = ({
  label,
  bengaliLabel,
  options,
  selectedValue,
  onChange,
  className = ''
}) => {
  return (
    <div className={`p-1 border-r border-black last:border-r-0 ${className}`}>
      <div className="text-xs font-bold text-gray-800 mb-1">
        {label} {bengaliLabel && <span className="font-bengali font-normal">({bengaliLabel})</span>}
      </div>
      <div className="flex flex-wrap gap-4">
        {options.map((opt) => (
          <label key={opt.value} className="flex items-center cursor-pointer gap-1">
            <div className="relative w-5 h-5 border border-black flex items-center justify-center bg-white">
              {selectedValue === opt.value && (
                <span className="font-handwriting text-blue-700 text-2xl absolute -top-1">✓</span>
              )}
            </div>
            <span className="text-xs font-semibold">{opt.label} <span className="font-bengali font-normal">({opt.bengaliLabel})</span></span>
            {/* Hidden actual radio for accessibility */}
            <input 
              type="radio" 
              name={label} 
              value={opt.value} 
              checked={selectedValue === opt.value} 
              onChange={() => onChange(opt.value)}
              className="hidden"
            />
          </label>
        ))}
      </div>
    </div>
  );
};

// Section Header
export const SectionHeader = ({ title, bengaliTitle }: { title: string; bengaliTitle: string }) => (
  <div className="bg-gray-200 border-y border-black px-2 py-1 text-center">
    <span className="font-bold text-sm uppercase underline">{title}</span>
    <span className="font-bengali text-sm ml-2">({bengaliTitle})</span>
  </div>
);

// Boolean Checkbox
export const BooleanCheckbox = ({ label, checked, onChange }: { label: React.ReactNode; checked: boolean; onChange: (c: boolean) => void }) => (
  <label className="flex items-start gap-2 cursor-pointer p-1">
    <div className="relative w-5 h-5 border border-black flex-shrink-0 bg-white mt-1">
      {checked && (
         <span className="font-handwriting text-blue-700 text-2xl absolute -top-2 left-0">✓</span>
      )}
    </div>
    <div className="text-xs leading-tight select-none">
      {label}
      <input type="checkbox" checked={checked} onChange={(e) => onChange(e.target.checked)} className="hidden" />
    </div>
  </label>
);