import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import Providers from '@/app/providers';
import Navbar from '@/app/components/Navbar';

const geistSans = localFont({
    src: './fonts/GeistVF.woff',
    variable: '--font-geist-sans',
    weight: '100 900',
});
const geistMono = localFont({
    src: './fonts/GeistMonoVF.woff',
    variable: '--font-geist-mono',
    weight: '100 900',
});

export const metadata: Metadata = {
    title: 'Archilux | Turning Houses into Homes, One Design at a Time',
    description: 'Archilux combines thoughtful design and lighting to transform spaces into inspiring, functional environments. We create customized solutions for homes, offices, and more.'
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body
            className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
        <Providers>
            <Navbar />
            {children}
        </Providers>
        </body>
        </html>
    );
}
