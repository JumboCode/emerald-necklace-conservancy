'use client'

import React, { useEffect, useRef } from 'react'
import { useRouter } from 'next/navigation'

export default function withTimeout(WrappedComponent : any) {
    return function TimeoutComponent(props : any) {
        const router = useRouter()
        const timeoutRef = useRef<NodeJS.Timeout | null>(null)

        const resetTimeout = () => {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current)
            }
            timeoutRef.current = setTimeout(() => {
                router.push('/')
            }, 30000)
        }

        useEffect(() => {
            const events = ['mousemove', 'keydown', 'mousedown', 'touchstart']
            const resetHandler = () => resetTimeout()

            for (const event of events) {
                document.addEventListener(event, resetHandler)
            }

            resetTimeout()

            return () => {
                for (const event of events) {
                    document.removeEventListener(event, resetHandler)
                }
                if (timeoutRef.current !== null) {
                    clearTimeout(timeoutRef.current)
                }
            }
        }, [])

        return <WrappedComponent {...props} />
    }
}