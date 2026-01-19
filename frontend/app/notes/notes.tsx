import Sidebar from "@/components/Sidebar";

const notes = [
  { id: 1, title: "Project Overview" },
  { id: 2, title: "Meeting Notes" },
];

export default function NotesPage() {
  return (
    <div className="flex">
      <Sidebar />

      <main className="flex-1 p-6">
        <h1 className="text-2xl font-bold mb-4">Notes</h1>

        <ul className="space-y-2">
          {notes.map((note) => (
            <li
              key={note.id}
              className="bg-white p-4 rounded shadow"
            >
              {note.title}
            </li>
          ))}
        </ul>

        <button className="mt-6 px-4 py-2 bg-black text-white rounded">
          Create Note
        </button>
      </main>
    </div>
  );
}
