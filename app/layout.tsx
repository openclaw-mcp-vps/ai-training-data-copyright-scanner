import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'CopyrightScan — AI Training Data Compliance',
  description: 'Scan AI training datasets for copyright violations and generate compliance reports instantly.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="472681a8-10b9-4840-a459-a5ff9209a8c8"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen font-sans antialiased">
        {children}
      </body>
    </html>
  )
}
