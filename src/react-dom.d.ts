// Typed subset of React DOM's public API used by this app.
declare module 'react-dom/client' {
  import type { ReactNode } from 'react';
  interface Root { render(children: ReactNode): void; unmount(): void }
  const ReactDOM: { createRoot(container: Element | DocumentFragment): Root };
  export default ReactDOM;
}
