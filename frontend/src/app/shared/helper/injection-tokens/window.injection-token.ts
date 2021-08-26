import { InjectionToken } from '@angular/core';

// Used as a unique identifier for injecting the window object
export const WINDOW = new InjectionToken<Window>('Window');