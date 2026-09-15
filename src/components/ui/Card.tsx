import React from 'react';
import { cn } from '../../lib/utils';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  interactive?: boolean;
  accentBorderOnHover?: boolean;
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  (
    {
      children,
      className,
      interactive = false,
      accentBorderOnHover = true,
      ...props
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={cn(
          'relative bg-surface rounded-md border border-border p-6 transition-all duration-250',
          interactive && [
            'cursor-pointer',
            accentBorderOnHover && 'hover:border-accent/50 hover:shadow-[0_8px_30px_rgba(0,0,0,0.5)]',
            'hover:-translate-y-0.5 active:translate-y-0',
          ],
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Card.displayName = 'Card';
