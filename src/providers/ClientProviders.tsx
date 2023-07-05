'use client'

import React, { ReactNode } from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'

interface Props {
  children: ReactNode
}

export const queryClient = new QueryClient()

const ClientProviders = ({children}: Props) => {
  return (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  )
}

export default ClientProviders
