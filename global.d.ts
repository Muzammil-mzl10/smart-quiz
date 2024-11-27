export {};

declare global {
  interface Window {
    parent: Window & {
      dataLayer?: any[];
    };
  }
}
