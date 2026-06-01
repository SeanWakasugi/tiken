/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

declare module 'reveal.js' {
  export interface RevealOptions {
    hash?: boolean;
    controls?: boolean;
    progress?: boolean;
    center?: boolean;
    transition?: string;
  }

  export default class Reveal {
    constructor(options?: RevealOptions);
    initialize(): Promise<void>;
  }
}
