import React from 'react';
import { cn } from '../../lib/utils';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'neutral' | 'accent' | 'outline' | 'status';
  size?: 'sm' | 'md';
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  className,
  variant = 'neutral',
  size = 'sm',
  ...props
}) => {
  return (
    <span
      className={cn(
        'inline-flex items-center font-mono font-medium tracking-tight rounded-full transition-colors',
        size === 'sm' && 'text-[11px] px-2.5 py-0.5 gap-1.5',
        size === 'md' && 'text-xs px-3 py-1 gap-2',

        variant === 'neutral' &&
          'bg-surface-raised/80 text-primary-muted border border-border/80 hover:border-border hover:text-primary-text',
        variant === 'accent' &&
          'bg-accent/15 text-accent border border-accent/30 font-semibold',
        variant === 'outline' &&
          'bg-transparent text-primary-muted border border-border hover:text-primary-text',
        variant === 'status' &&
          'bg-[#121c16] text-[#4ade80] border border-[#22c55e]/30',

        className
      )}
      {...props}
    >
      {variant === 'status' && (
        <span className="relative flex h-1.5 w-1.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#22c55e] opacity-75"></span>
          <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#22c55e]"></span>
        </span>
      )}
      {children}
    </span>
  );
};
