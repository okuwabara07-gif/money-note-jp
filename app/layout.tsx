import type { Metadata } from 'next'
export const metadata: Metadata = { title: 'Money Note', description: 'お金・投資・節約の最新情報' }
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="ja"><body>{children}</body></html>
}
