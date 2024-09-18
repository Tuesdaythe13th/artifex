// This is the root layout component for your Next.js app.
// Learn more: https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts#root-layout-required
import { Rowdies, DM_Sans } from 'next/font/google';
import { cn } from '@/lib/utils'



// Import Rowdies for headings
const fontHeading = Rowdies({
  subsets: ['latin'],
  weight: ['300', '400', '700'],  // Define weights for light, regular, and bold
  display: 'swap',
  variable: '--font-heading',
});

// Import DM Sans for body text
const fontBody = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '700'],  // Define weights for light, regular, and bold
  display: 'swap',
  variable: '--font-body',
});


interface LayoutProps {
  children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <body 
        className={cn(
          'antialiased',
          fontHeading.variable,
          fontBody.variable
        )}
      >
        {children}
      </body>
    </html>
  )
}
