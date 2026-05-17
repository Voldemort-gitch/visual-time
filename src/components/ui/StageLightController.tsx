'use client';

import { useEffect } from 'react';

type ThemePreset = 'gold' | 'cyber' | 'crimson';

export function StageLightController() {
  useEffect(() => {
    const themes: ThemePreset[] = ['gold', 'cyber', 'crimson'];
    
    // Select a random theme preset on reload
    const randomTheme = themes[Math.floor(Math.random() * themes.length)];
    
    // Set the theme attribute on root
    document.documentElement.setAttribute('data-stage-light', randomTheme);
  }, []);

  return null;
}
