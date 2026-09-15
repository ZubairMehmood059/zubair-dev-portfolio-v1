import React from 'react';
import { cn } from '../../lib/utils';
import { Loader2 } from 'lucide-react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  asChild?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      className,
      variant = 'primary',
      size = 'md',
      isLoading = false,
      leftIcon,
      rightIcon,
      disabled,
      ...props
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        disabled={disabled || isLoading}
        className={cn(
          // Base styles
          'relative inline-flex items-center justify-center font-medium transition-all duration-200 select-none cursor-pointer',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg',
          'disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none active:scale-[0.98]',

          // Variants
          variant === 'primary' && [
            'bg-accent text-black font-semibold shadow-sm',
            'hover:bg-[#d7ff33] hover:shadow-[0_0_20px_rgba(200,255,0,0.3)]',
          ],
          variant === 'secondary' && [
            'bg-surface-raised text-primary-text border border-border',
            'hover:border-accent hover:text-white hover:bg-[#222838]',
          ],
          variant === 'outline' && [
            'bg-transparent text-primary-text border border-border',
            'hover:border-accent hover:text-accent hover:bg-surface/50',
          ],
          variant === 'ghost' && [
            'bg-transparent text-primary-muted hover:text-primary-text hover:bg-surface-raised/60',
          ],

          // Sizes
          size === 'sm' && 'h-9 px-3.5 text-xs rounded-sm gap-1.5',
          size === 'md' && 'h-11 px-5 text-sm rounded-md gap-2',
          size === 'lg' && 'h-13 px-7 text-base rounded-md gap-2.5 font-medium',

          className
        )}
        {...props}
      >
        {isLoading ? (
          <Loader2 className="w-4 h-4 animate-spin" aria-hidden="true" />
        ) : (
          leftIcon && <span className="inline-flex shrink-0">{leftIcon}</span>
        )}
        <span>{children}</span>
        {!isLoading && rightIcon && (
          <span className="inline-flex shrink-0">{rightIcon}</span>
        )}
      </button>
    );
  }
);

Button.displayName = 'Button';
