'use client'
import React from 'react'
import Image from 'next/image'
import { middleware } from '@/app/login/page'
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

interface LoginButtonProps {
    size: number
}

const LoginButton: React.FC<LoginButtonProps> = ({ size }) => {
    return (
        <div className="absolute top-80 left-70 mt-10 ml-10">
            <button onClick={middleware}>Login</button>
        </div>
    );
};

export default LoginButton;