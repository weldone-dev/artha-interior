import type {Metadata} from 'next'
import type {ReactNode} from 'react'
import {Inter} from 'next/font/google'
import Navbar from "@/modules/layout/templates/navbar";
import Footer from "@/modules/layout/templates/footer";
import './globals.css';

const inter = Inter({subsets: ['latin']});

export const metadata: Metadata = {
    title: 'Artha Interior',
    description: 'Сreate a stylish and classy home interior design',
}

export default function RootLayout({children,}: { children: ReactNode }) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <Navbar />
                <main>{children}</main>
                <Footer />
            </body>
        </html>
    )

}
