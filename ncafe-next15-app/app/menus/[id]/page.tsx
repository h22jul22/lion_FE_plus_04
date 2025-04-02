// 'use client';

import React, { JSX } from 'react';

//객체 타입 지정
type MenuPageParams = {
    params: {
        id: string;
    };
};

const DetailPage = async ({ params }: MenuPageParams): Promise<JSX.Element> => {
    const { id } = params;

    const fetchFc = async () => {
        const response = await fetch('https://next15-ts-ssr.new-cafe.com/api/menus', {
            headers: {
                Accept: 'application/json',
            },
            cache: 'no-store',
        });

        if (!response.ok) {
            throw new Error(`API 요청 실패: ${response.status}`);
        }

        return response.json();
    };

    let data = await fetchFc();
    console.log(data);

    return (
        <main>
            <h1>상세페이지 {id}</h1>
            <div>{data.menus[1].korName}</div>
        </main>
    );
};
export default DetailPage;
