import React from 'react';
import { cn } from '../../lib/utils';

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  size?: 'default' | 'narrow' | 'wide';
}

export const Container: React.FC<ContainerProps> = ({
  children,
  className,
  size = 'default',
  ...props
}) => {
  return (
    <div
      className={cn(
        'w-full mx-auto px-4 sm:px-6 lg:px-8',
        size === 'default' && 'max-w-[1240px]',
        size === 'narrow' && 'max-w-[860px]',
        size === 'wide' && 'max-w-[1440px]',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};
