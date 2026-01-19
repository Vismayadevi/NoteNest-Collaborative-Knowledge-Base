import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";

export default function DashboardPage() {
  return (
    <div className="flex">
      <Sidebar />

      <div className="flex-1">
        <Header />
        <main className="p-6">
          <h2 className="text-xl font-bold mb-2">Welcome 👋</h2>
          <p className="text-gray-600">
            This is your NoteNest dashboard.
          </p>
        </main>
      </div>
    </div>
  );
}
