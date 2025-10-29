'use client';
import { useState } from 'react';
import { API_BASE } from '../../lib/api';

export default function SubscribePage() {
  const [email, setEmail] = useState('');
  const [out, setOut] = useState(null);
  const [loading, setLoading] = useState(false);

  async function submit(e) {
    e.preventDefault();
    setLoading(true);
    setOut(null);
    try {
      const res = await fetch(`${API_BASE}/api/v1/subscribe`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      const data = await res.json().catch(() => ({}));
      setOut({ ok: res.ok, data });
    } catch (err) {
      setOut({ ok: false, error: String(err?.message || err) });
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="p-6 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">Subscribe</h1>
      <form onSubmit={submit} className="space-y-3">
        <input
          className="w-full border rounded p-2"
          type="email"
          placeholder="you@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button disabled={loading} className="px-4 py-2 rounded bg-black text-white">
          {loading ? 'Sending…' : 'Subscribe'}
        </button>
      </form>
      {out && (
        <pre className="mt-4 p-3 bg-gray-100 rounded text-sm">
          {JSON.stringify(out, null, 2)}
        </pre>
      )}
    </main>
  );
}
