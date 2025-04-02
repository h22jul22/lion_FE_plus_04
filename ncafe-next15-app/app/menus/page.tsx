'use client';

import Link from 'next/link';
import { FC, JSX } from 'react';

const MenuPage: FC = (): JSX.Element => {
    return (
        <main>
            목록 페이지
            <Link href='/menus/1'>상세페이지</Link>
            <Link href='/menus/2'>상세페이지</Link>
        </main>
    );
};

export default MenuPage;
