// 'use client';

// import React from 'react';

// const Home: React.FC = () => {
//     return <main>hello</main>;
// };

// export default Home;

import { createClient } from '@/utils/supabase/server';

export default async function Instruments() {
    const supabase = await createClient();
    const { data: menus } = await supabase.from('menu').select();

    return <pre>{JSON.stringify(menus, null, 2)}</pre>;
}
