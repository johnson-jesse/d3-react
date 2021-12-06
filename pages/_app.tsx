import '../styles/globals.css'
import type { AppProps } from 'next/app'
import pack from '../package.json'
import React from 'react'
import { useRouter } from 'next/router'

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()
  return (
    <div className='w-full h-screen flex flex-col'>
      <div className='flex-1 m-4 bg-gray-100'>
        <Component {...pageProps} />
      </div>
      <footer className='ml-4 mb-4'>
        {pack.version}{' '}
        <a
          href='https://fizzog.io/article/D3-React-TypeScript-Next-Tailwind-Tree-Graph'
          target='_blank'
          rel='noreferrer'
        >
          For Article: D3 React TypeScript Tailwind Next Tree Graph
        </a>
      </footer>
    </div>
  )
}

export default MyApp
