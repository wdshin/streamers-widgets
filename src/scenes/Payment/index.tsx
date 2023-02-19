import { useState, useEffect } from 'react'
import io from 'socket.io-client'

import { IPaymentsEvent } from '../../types/payments'

import { Widget } from './Widget'

const socket = io(process.env.REACT_APP_API_URL || 'http://localhost:1000')
const USER_ID = 'vlad10'
const DISPLAY_TIME = 5000

export const Payment = () => {
  const [isConnected, setIsConnected] = useState(socket.connected)
  const [payment, setPayment] = useState<IPaymentsEvent | null>(null)
  const [queue, setQueue] = useState<IPaymentsEvent[]>([])

  useEffect(() => {
    socket.on('connect', () => {
      setIsConnected(true)

      socket.emit('register', USER_ID)
    })

    socket.on('disconnect', () => {
      setIsConnected(false)
    })

    socket.on('payment', (data: IPaymentsEvent) => {
      setQueue(payments => [...payments, data])
    })

    return () => {
      socket.off('connect')
      socket.off('disconnect')
      socket.off('payment')
    }
  }, [])

  useEffect(() => {
    let timer: NodeJS.Timeout

    if (payment) {
      timer = setTimeout(() => {
        setPayment(null)
      }, DISPLAY_TIME)
    }

    return () => {
      clearTimeout(timer)
    }
  }, [payment])

  useEffect(() => {
    if (!payment && queue.length > 0) {
      setPayment(queue[0])
      setQueue(prevQueue => prevQueue.slice(1))
    }
  }, [payment, queue])

  console.log('connected', isConnected)
  console.log('payment', payment)
  console.log('queue', queue)
  console.log('----------------')

  if (payment) {
    return (
      <Widget
        amount={payment.amount}
        nickname={payment.nickname}
        text={payment.text}
      />
    )
  }

  return null
}
