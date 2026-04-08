import { ReactNode } from 'react';
import { createRoot } from 'react-dom/client';

type RenderOptions = {
  routesElement: ReactNode;
  errorHandler?: (error: Error) => void;
  loadingElement?: ReactNode;
  favicon?: string;
};

export function renderApp(options: RenderOptions) {
  const root = document.getElementById('root');
  if (!root) {
    throw new Error('Missing #root element');
  }

  if (options.favicon) {
    const existing = document.querySelector('link[rel="icon"]');
    if (existing) {
      existing.setAttribute('href', options.favicon);
    } else {
      const link = document.createElement('link');
      link.rel = 'icon';
      link.href = options.favicon;
      document.head.appendChild(link);
    }
  }

  if (options.errorHandler) {
    window.addEventListener('error', (event) => {
      options.errorHandler?.(event.error ?? new Error(event.message));
    });
    window.addEventListener('unhandledrejection', (event) => {
      const reason = event.reason;
      const err = reason instanceof Error ? reason : new Error(String(reason));
      options.errorHandler?.(err);
    });
  }

  createRoot(root).render(options.routesElement);
}

export function getConfig(path: string): unknown {
  const values: Record<string, unknown> = {
    '_system.env.type': 'cloudflare',
  };
  return values[path];
}
