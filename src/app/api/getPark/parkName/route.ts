'use client'
import react from 'react'
import { NextResponse } from 'next/server'

export async function GET(
    req: Request,
    { params }: { params: { parkName: string } }
 ) {
      
    const parkName: string = "Park";
 return NextResponse.json({
           parkName: parkName,
        })
  }