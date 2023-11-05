"use client"
/* import { useRouter } from 'next/router';
import React from 'react';

const Park = () => {
    const router = useRouter();
        const { parkId } = router.query;
    return (
    <div>
    <h1>{parkId} history</h1>
    <h1>{parkId} arnold-arboretum</h1>
    <h1>{parkId} franklin-park</h1>
    </div>
);
} */
import { useRouter } from 'next/router'

export default function Page() {
const router = useRouter()
return (
    <p>{router.query.parkid} history</p>

)
}
