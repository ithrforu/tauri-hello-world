import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './App';

export const renderApp = (rootElementId: string) => {
  const rootElement = document.querySelector(rootElementId) as HTMLElement;
  const root = createRoot(rootElement);

  root.render(
    <StrictMode>
      <App />
    </StrictMode>
  );

  return root;
};
