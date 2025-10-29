import { ClerkProvider } from "@clerk/nextjs";
import { Inter } from "next/font/google";
import '../globals.css'
import { title } from "process";


export const metadata = {
    title:'k-on',
    description: 'A Next.js 13 Meta K-on Application'
}

const inter = Inter({subsets: ["latin"]})

export default function RootLayout({
    children
}: {
    children: React.ReactNode
}){
    return <ClerkProvider>
        <html lang="ch">
            <body className={`${inter.className} bg-dark-1`}>
                {children}
            </body>
        </html>
    </ClerkProvider>
}