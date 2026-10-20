export default function DashboardLayout({ children }) {
  return (
    <div className="min-h-screen">
      <aside className="border-r p-4">
        <h2 className="font-bold">DashBoard Menu</h2>
      </aside>

      <section>{children}</section>
    </div>
  );
}
