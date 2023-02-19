import { createBrowserRouter } from 'react-router-dom'

import { Payment } from '../scenes/Payment'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Payment />,
  },
])
