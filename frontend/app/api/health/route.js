export async function GET() {
  const API_BASE = process.env.NEXT_PUBLIC_API_BASE || 'http://127.0.0.1:5555';
  try {
    const r = await fetch(`${API_BASE}/health`, { cache: 'no-store' });
    const data = await r.json().catch(() => ({}));
    return new Response(JSON.stringify(data), {
      status: r.status,
      headers: { 'content-type': 'application/json' },
    });
  } catch (e) {
    return new Response(JSON.stringify({ ok: false, error: String(e) }), {
      status: 500,
      headers: { 'content-type': 'application/json' },
    });
  }
}
