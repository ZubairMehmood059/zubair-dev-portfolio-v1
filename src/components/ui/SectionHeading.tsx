import React from 'react';
import { cn } from '../../lib/utils';

export interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
  className?: string;
  align?: 'left' | 'center';
  rightElement?: React.ReactNode;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  eyebrow,
  title,
  description,
  className,
  align = 'left',
  rightElement,
}) => {
  return (
    <div
      className={cn(
        'mb-12 md:mb-16',
        align === 'center' ? 'text-center max-w-2xl mx-auto' : 'flex flex-col md:flex-row md:items-end md:justify-between gap-6',
        className
      )}
    >
      <div className={cn(align === 'center' ? 'w-full' : 'max-w-2xl')}>
        <div className="inline-flex items-center gap-2 font-mono text-xs text-accent tracking-wider uppercase font-semibold mb-3">
          <span className="w-1.5 h-1.5 rounded-full bg-accent inline-block"></span>
          <span>{eyebrow}</span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-primary-text">
          {title}
        </h2>
        {description && (
          <p className="mt-4 text-base sm:text-lg text-primary-muted leading-relaxed max-w-xl">
            {description}
          </p>
        )}
      </div>

      {rightElement && (
        <div className="shrink-0 md:mb-2">{rightElement}</div>
      )}
    </div>
  );
};
