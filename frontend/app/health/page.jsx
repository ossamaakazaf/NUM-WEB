'use client';
import { useEffect, useState } from 'react';

export default function HealthPage() {
  const [state, setState] = useState({ ok: null, payload: null, error: null });

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const r = await fetch('/api/health', { cache: 'no-store' });
        const json = await r.json();
        if (!cancelled) setState({ ok: r.ok, payload: json, error: null });
      } catch (e) {
        if (!cancelled) setState({ ok: false, payload: null, error: String(e) });
      }
    })();
    return () => { cancelled = true; };
  }, []);

  return (
    <main className="p-6 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">API Health</h1>
      <pre className="p-4 bg-gray-100 rounded">
        {JSON.stringify(state, null, 2)}
      </pre>
    </main>
  );
}
