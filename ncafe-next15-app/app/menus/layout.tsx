'use client';

import Basket from './components/Basket';

export default function MenuLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            {children}
            <Basket />
        </>
    );
}
