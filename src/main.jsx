import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {  RouterProvider } from 'react-router';
import { router } from './routes/Router';
import CallProvider from './components/context/CallProvider';



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CallProvider>
      <RouterProvider router={router} />
    </CallProvider>
  </StrictMode>
)
