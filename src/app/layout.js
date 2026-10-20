import './globals.css';
import Navbar from '@/components/Navbar';

//le <head> ዳታ ይጠቀመዋል html ላይ እንዳለው</head>
export const metadata = {
  title: 'TaskFlow',
  description: 'Manage projects and tasks with TaskFlow',
};
// የ src  page.js children ላይ ስለሆነ current page ሚታየው children prop ላይ ነው ፤
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
