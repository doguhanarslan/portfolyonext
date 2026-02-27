import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold gradient-text">404</h1>
        <p className="mt-4 text-lg text-zinc-500 dark:text-zinc-400">
          Page not found
        </p>
        <Link
          href="/tr/"
          className="mt-8 inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-accent text-white font-medium hover:bg-accent-hover transition-colors"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
}
