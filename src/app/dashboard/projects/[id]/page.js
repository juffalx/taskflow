export default async function ProjectsPage({ params }) {
  const { id } = await params;

  return (
    <main>
      <h1>project Details</h1>

      <p className="p-8">Project ID: {id}</p>
    </main>
  );
}
