import Head from 'next/head';

import { styled } from '../styles/styled';

import { Header } from '../components/_landing/Header';
import { Home } from '../components/_landing/Home';
import { About } from '../components/_landing/About';
import { Donate } from '../components/_landing/Donate';
import { Participate } from '../components/_landing/Participate';

const Page = styled('div', {
  maxWidth: '1200px',
  width: '100%',
  margin: '0 auto',
});

export default function HomePage() {
  return (
    <Page>
      <Head>
        <title>GoDonate</title>

        <meta property='og:title' content='GoDonate' />
        <meta property='og:description' content='Concorra a bolsas de estudos' />
      </Head>

      <Header />

      <Home />
      <About />
      <Participate />
      <Donate />
    </Page>
  )
}
