import { InjectionToken } from '@angular/core';

// Used as a unique identifier for injecting storages like the localStorage
export const STORAGE = new InjectionToken<Storage>('Storage');