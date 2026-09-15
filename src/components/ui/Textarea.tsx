import React from 'react';
import { cn } from '../../lib/utils';

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  error?: string;
  helperText?: string;
}

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ id, name, label, error, helperText, className, required, rows = 5, ...props }, ref) => {
    const inputId = id || name || label.toLowerCase().replace(/\s+/g, '-');
    const errorId = `${inputId}-error`;
    const helperId = `${inputId}-helper`;

    return (
      <div className="w-full">
        <div className="flex justify-between items-center mb-2">
          <label
            htmlFor={inputId}
            className="block text-xs font-mono font-medium text-primary-text uppercase tracking-wider"
          >
            {label} {required && <span className="text-accent">*</span>}
          </label>
        </div>

        <textarea
          ref={ref}
          id={inputId}
          name={name || inputId}
          required={required}
          rows={rows}
          aria-invalid={error ? 'true' : 'false'}
          aria-describedby={error ? errorId : helperText ? helperId : undefined}
          className={cn(
            'w-full p-4 rounded-sm bg-surface border border-border text-primary-text placeholder:text-primary-muted/60 text-sm font-sans',
            'transition-colors duration-150 resize-y min-h-[120px]',
            'focus-visible:outline-none focus-visible:border-accent focus-visible:ring-1 focus-visible:ring-accent',
            'disabled:opacity-50 disabled:cursor-not-allowed',
            error && 'border-red-500/80 focus-visible:border-red-500 focus-visible:ring-red-500/50',
            className
          )}
          {...props}
        />

        {error && (
          <p id={errorId} className="mt-1.5 text-xs text-red-400 font-mono" role="alert">
            {error}
          </p>
        )}

        {!error && helperText && (
          <p id={helperId} className="mt-1.5 text-xs text-primary-muted font-mono">
            {helperText}
          </p>
        )}
      </div>
    );
  }
);

Textarea.displayName = 'Textarea';
