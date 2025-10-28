export default function Home() {
  return (
    <main className="p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">NUMÉWEB</h1>
      <p className="mb-6">Bienvenue sur le frontend. Choisis une page :</p>
      <ul className="list-disc ml-6 space-y-2">
        <li><a className="text-blue-600 underline" href="/health">API Health</a></li>
        <li><a className="text-blue-600 underline" href="/subscribe">Subscribe</a></li>
      </ul>
    </main>
  );
}
