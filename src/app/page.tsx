'use client'
import React, { useState } from 'react'
import ParkName from '@/components/ParkName'
import MapPin from '@/components/MapPin'
import ParkNav from '../components/ParkNav'
import WelcomePage from '../components/WelcomePage'
import MapPage from './map/page'
import IdleTimer from 'react-idle-timer'
import { useIdleTimer } from 'react-idle-timer'

export default function App () {
  const [state, setState] = useState('Active')
  const [count, setCount] = useState<number>(0)
  const [remaining, setRemaining] = useState<number>(0)

  const onIdle = () => {
    setState('Idle')
  }

  const onActive = () => {
    setState('Active')
  }

  const onAction = () => {
    setCount(count + 1)
  }

  const { getRemainingTime } = useIdleTimer({
    onIdle,
    onActive,
    onAction,
    timeout: 120000, /* 120 seconds, timeout! */
    throttle: 500 /* Just to leave some time for processing */
  })

  return (state === 'Idle') ?
  (
    <WelcomePage />
  )  : (
    
  )
}
