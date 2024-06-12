import React from 'react'
import ReactQueryProvider from "./utils/providers/ReactQueryProvider";
import { CookiesProvider } from 'next-client-cookies/server';
import Header from './components/Header';
import Title from './components/Title';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body >
      <ReactQueryProvider>
        <CookiesProvider>
          <header>
          <Header >

</Header>

          </header>
          <section>
          <main>
      {children}
      </main>
          </section>
        
      </CookiesProvider>
      </ReactQueryProvider>
      </body>
    </html>
  );
}