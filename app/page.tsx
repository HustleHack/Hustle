export default function Home() {
  return (
    <main style={{ padding: '2rem', fontFamily: 'system-ui, sans-serif' }}>
      <h1>Welcome to Hustle</h1>
      <p>Hustle Hack repository with Vercel Web Analytics integrated.</p>
      <div style={{ marginTop: '2rem', padding: '1rem', backgroundColor: '#f0f0f0', borderRadius: '8px' }}>
        <h2>Features</h2>
        <ul>
          <li>Next.js 15 with App Router</li>
          <li>TypeScript support</li>
          <li>Vercel Web Analytics integrated</li>
          <li>Ready for deployment to Vercel</li>
        </ul>
      </div>
    </main>
  );
}
