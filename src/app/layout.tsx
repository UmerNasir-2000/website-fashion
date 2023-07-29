import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import "tw-elements/dist/css/tw-elements.min.css"
import "./globals.css"

const poppins = Poppins({
  weight: ["300", "400", "600", "700"],
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Fashionista",
  description: "Get latest fashion trends",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body className={poppins.className}>{children}</body>
    </html>
  )
}
