export const API_BASE = process.env.NEXT_PUBLIC_API_BASE || 'http://127.0.0.1:5555';

export async function api(path, opts = {}) {
  const res = await fetch(`${API_BASE}${path}`, {
    headers: { 'Content-Type': 'application/json', ...(opts.headers || {}) },
    cache: 'no-store',
    ...opts
  });
  const data = await res.json().catch(() => ({}));
  if (!res.ok) throw new Error(data?.error || res.statusText);
  return data;
}
