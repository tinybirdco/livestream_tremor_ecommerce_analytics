import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en" className='bg-white selection:text-orange-500 selection:bg-orange-500/10 h-full antialiased'>
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
