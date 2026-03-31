export default function Home() {
  return (
    <main className="p-4">
      <h1 className="text-4xl font-bold">Welcome to Bonzai proxy chat</h1>
      <div className="inline-flex flex-col items-end">
        <code className="mt-4">process.env.NEXTAUTH_URL = {process.env.NEXTAUTH_URL}</code>
        <code className="mt-4">process.env.GITHUB_ID = {process.env.GITHUB_ID}</code>
        <code className="mt-4">process.env.GITHUB_CLIENT_ID = {process.env.GITHUB_CLIENT_ID}</code>
        <code className="mt-4">process.env.GITHUB_CLIENT_SECRET(4...) = {process.env.GITHUB_CLIENT_SECRET?.slice(0, 4)...}</code>
        <code className="mt-4">process.env.VERCEL_FORCE_NO_BUILD_CACHE = {process.env.VERCEL_FORCE_NO_BUILD_CACHE}</code>
      </div>
    </main>
  );
}
