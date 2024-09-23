import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Routes } from './routes/index.ts';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from './query-client.ts';

const router = createBrowserRouter([Routes]);

createRoot(document.getElementById('root')!).render(
  <QueryClientProvider client={queryClient}>
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
  </QueryClientProvider>
)
