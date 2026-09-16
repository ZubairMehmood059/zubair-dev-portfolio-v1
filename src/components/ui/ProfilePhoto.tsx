import React, { useState } from 'react';
import { Terminal } from 'lucide-react';

export interface ProfilePhotoProps {
  src?: string;
  alt?: string;
  className?: string;
}

export const ProfilePhoto: React.FC<ProfilePhotoProps> = ({
  src = '/profile.jpg',
  alt = 'Zubair Mehmood — Software Engineer',
  className = '',
}) => {
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div
      className={`relative group rounded-lg overflow-hidden border border-border bg-surface shadow-card transition-all duration-300 hover:border-accent/40 ${className}`}
    >
      {/* Corner crosshair accents for editorial technical aesthetic */}
      <div
        className="pointer-events-none absolute top-1.5 left-1.5 text-[10px] font-mono text-border group-hover:text-accent/60 transition-colors select-none z-20"
        aria-hidden="true"
      >
        +
      </div>
      <div
        className="pointer-events-none absolute top-1.5 right-1.5 text-[10px] font-mono text-border group-hover:text-accent/60 transition-colors select-none z-20"
        aria-hidden="true"
      >
        +
      </div>

      {/* Actual image when available */}
      {!hasError && (
        <img
          src={src}
          alt={alt}
          onLoad={() => setIsLoaded(true)}
          onError={() => setHasError(true)}
          className={`w-full h-full object-cover transition-opacity duration-300 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          loading="lazy"
        />
      )}

      {/* Graceful Fallback Frame when profile.jpg is not yet added */}
      {(hasError || !isLoaded) && (
        <div
          role="img"
          aria-label={alt}
          className="w-full h-full flex flex-col items-center justify-between p-5 bg-surface-raised/80 min-h-[220px]"
        >
          {/* Top metadata bar */}
          <div className="w-full flex items-center justify-between text-[10px] font-mono text-primary-muted/80 pb-2 border-b border-border/60">
            <span className="flex items-center gap-1">
              <Terminal className="w-3 h-3 text-accent" />
              <span>ENG.ID: 059</span>
            </span>
            <span className="text-accent uppercase font-semibold">ACTIVE</span>
          </div>

          {/* Central Monogram / Avatar Graphic */}
          <div className="my-auto text-center space-y-2 py-4">
            <div className="w-16 h-16 mx-auto rounded-full bg-surface border-2 border-accent/40 flex items-center justify-center text-accent group-hover:border-accent group-hover:scale-105 transition-all shadow-subtle-glow">
              <span className="font-mono text-xl font-extrabold tracking-tighter">
                ZM
              </span>
            </div>
            <div>
              <span className="font-mono text-xs font-bold text-primary-text block">
                Zubair Mehmood
              </span>
              <span className="text-[11px] font-mono text-primary-muted block">
                Software Engineer
              </span>
            </div>
          </div>

          {/* Bottom indicator */}
          <div className="w-full pt-2 border-t border-border/60 flex items-center justify-between text-[10px] font-mono text-primary-muted/70">
            <span>Karachi, PK</span>
            <span className="flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse"></span>
              <span>Available</span>
            </span>
          </div>
        </div>
      )}
    </div>
  );
};
