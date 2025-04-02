'use client';

import RootFooter from './components/RootFooter';
import RootHeader from './components/RootHeader';

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang='en'>
            <body>
                <RootHeader />
                {children}
                <RootFooter />
            </body>
        </html>
    );
}
