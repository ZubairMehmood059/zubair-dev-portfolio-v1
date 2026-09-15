import React from 'react';
import { cn } from '../../lib/utils';

export interface NavLinkProps {
  href: string;
  label: string;
  isActive?: boolean;
  onClick?: () => void;
  className?: string;
}

export const NavLink: React.FC<NavLinkProps> = ({
  href,
  label,
  isActive = false,
  onClick,
  className,
}) => {
  return (
    <a
      href={href}
      onClick={onClick}
      aria-current={isActive ? 'page' : undefined}
      className={cn(
        'relative text-sm font-medium transition-colors duration-200 px-3 py-1.5 rounded-sm select-none',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent',
        isActive
          ? 'text-accent font-semibold'
          : 'text-primary-muted hover:text-primary-text hover:bg-surface/60',
        className
      )}
    >
      <span>{label}</span>
      {isActive && (
        <span
          className="absolute bottom-0 left-3 right-3 h-[2px] bg-accent rounded-full"
          aria-hidden="true"
        />
      )}
    </a>
  );
};
