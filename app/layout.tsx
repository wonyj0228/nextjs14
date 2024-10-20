import { Metadata } from 'next';
import Navigation from '../components/navigation';

// html -> head 태그 내에 들어가는 metadata
export const metadata: Metadata = {
  title: {
    template: '%s | Next Movies',
    default: 'Next Movies',
  },
  description: 'The best movies on the best framework',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
