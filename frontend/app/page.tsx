import "../styles/globals.css";

import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">NoteNest</h1>
        <p className="text-gray-600 mb-6">
          Collaborative knowledge base for teams
        </p>
        <Link
          href="/login"
          className="px-6 py-2 bg-black text-white rounded"
        >
          Get Started
        </Link>
      </div>
    </main>
  );
}

