import type { Metadata } from 'next'
export const metadata: Metadata = { title: 'Money Note', description: '投資・節約・副業の最新情報' }
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="ja"><body style={{margin:0,fontFamily:'sans-serif'}}>{children}</body></html>
}