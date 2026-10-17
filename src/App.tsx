import { Printer } from './components/Icons';
import { PrintProfile } from './components/PrintProfile';

export default function App() {
  return <>
    <a className="skip-link" href="#main">Skip to biodata</a>
    <div className="page-shell">
      <div className="toolbar flex items-center justify-end">
        <button className="print-button inline-flex items-center gap-2" onClick={() => window.print()}>
          <Printer size={15}/><span>Print / Save as PDF</span>
        </button>
      </div>
      <main id="main"><PrintProfile/></main>
    </div>
  </>;
}
