export default function Home() {
  return (
    <main className="p-4">
      <h1 className="text-4xl font-bold">Welcome to Bonzai proxy chat</h1>
      <div className="inline-flex flex-col items-end">
        <code className="mt-4">process.env.GITHUB_ID = {process.env.GITHUB_ID}</code>
        <code className="mt-4">GITHUB_ID (dev) = <span className="text-green-300">Iv23liubLAT97sui3VVn</span></code>
        <code className="mt-4">GITHUB_ID (dev) = <span className="text-red-300">Iv23li1DVKYIbTMRDh6j</span></code>
      </div>
    </main>
  );
}
