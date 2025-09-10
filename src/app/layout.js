import { Inter, Fira_Code } from 'next/font/google';
import './globals.css';

// Setup fonts with Tailwind CSS variables for optimal performance
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const firaCode = Fira_Code({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  display: 'swap',
  variable: '--font-fira-code',
});

export const metadata = {
  title: 'Tharusha Udana',
  description: "Tharusha Udana's personal portfolio website showcasing skills in AI, backend development, and embedded systems.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Font Awesome CDN */}
        <link 
          rel="stylesheet" 
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" 
        />
      </head>
      <body className={`${inter.variable} ${firaCode.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}