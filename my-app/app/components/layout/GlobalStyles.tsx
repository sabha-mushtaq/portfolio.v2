"use client";

export function GlobalStyles() {
  return (
    <style jsx global>{`
      @import url("https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300..700;1,9..144,300..600&family=Inter:wght@300..600&display=swap");

      :root {
        --font-serif: "Fraunces", Georgia, serif;
        --font-sans: "Inter", system-ui, -apple-system, sans-serif;
      }

      html, body {
        background-color: #e8ecf2;
        -webkit-font-smoothing: antialiased;
        text-rendering: optimizeLegibility;
        overflow-x: hidden;
      }

      @media (min-width: 1024px) {
        html, body { height: 100vh; overflow: hidden; }
      }

      .font-serif { font-family: var(--font-serif); font-feature-settings: "ss01" on; }
      .font-sans { font-family: var(--font-sans); letter-spacing: -0.005em; }
      .font-mono { font-family: ui-monospace, SFMono-Regular, Menlo, monospace; }

      h1, h2, h3 { font-optical-sizing: auto; }

      .no-scrollbar { scrollbar-width: none; -ms-overflow-style: none; }
      .no-scrollbar::-webkit-scrollbar { display: none; }

      [data-reveal] {
        opacity: 0;
        transform: translateY(22px);
        transition: opacity 0.9s cubic-bezier(0.22, 1, 0.36, 1),
          transform 0.9s cubic-bezier(0.22, 1, 0.36, 1);
        will-change: opacity, transform;
      }
      [data-reveal].revealed { opacity: 1; transform: translateY(0); }

      @keyframes floatY {
        0%, 100% { transform: translateY(0); }
        50% { transform: translateY(-18px); }
      }
      @keyframes blobDrift {
        0%, 100% { transform: translate(0, 0) scale(1); }
        33% { transform: translate(4%, -3%) scale(1.05); }
        66% { transform: translate(-3%, 4%) scale(0.97); }
      }
      .animate-blob-slow { animation: blobDrift 30s ease-in-out infinite; }
      .animate-blob-slower { animation: blobDrift 40s ease-in-out infinite; }
      .animate-float-slow { animation: floatY 8s ease-in-out infinite; }

      @media (prefers-reduced-motion: reduce) {
        *, *::before, *::after {
          animation-duration: 0.001ms !important;
          animation-iteration-count: 1 !important;
          transition-duration: 0.001ms !important;
        }
        [data-reveal] { opacity: 1; transform: none; }
      }
    `}</style>
  );
}