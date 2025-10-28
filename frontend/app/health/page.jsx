export const dynamic = 'force-dynamic';
export default async function HealthPage() {
  const r = await fetch('/api/health', { cache: 'no-store' });
  const payload = await r.json();
  return (
    <main className="p-6 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">API Health</h1>
      <pre className="p-4 bg-gray-100 rounded">{JSON.stringify({ ok: r.ok, payload }, null, 2)}</pre>
    </main>
  );
}
