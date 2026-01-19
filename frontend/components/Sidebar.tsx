import Link from "next/link";

export default function Sidebar() {
  return (
    <aside className="w-60 bg-white border-r min-h-screen p-4">
      <h2 className="font-bold text-xl mb-6">NoteNest</h2>
      <nav className="space-y-2">
        <Link href="/dashboard" className="block text-gray-700">
          Dashboard
        </Link>
        <Link href="/notes" className="block text-gray-700">
          Notes
        </Link>
      </nav>
    </aside>
  );
}
