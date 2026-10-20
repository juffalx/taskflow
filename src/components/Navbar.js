import Link from 'next/link';

export default function Navbar() {
  return (
    // flex items-center justify-between border-b p-4?
    <nav className="flex items-center justify-between border-b p">
      <Link href="/" className="text-center text-xl font-bold">
        TaskFlow
      </Link>

      <div className="flex gap-4">
        <Link href="/dashboard">Dashboard</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/profile">Profile</Link>
      </div>
    </nav>
  );
}
