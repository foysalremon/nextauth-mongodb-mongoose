import Head from 'next/head';
import { SessionProvider } from 'next-auth/react';
import '../css/style.scss';

const App = ({ Component, pageProps: { session, ...pageProps } }) => {
  return (
    <SessionProvider session={session}>
      <Head>
        <title>Next Auth with Mongodb Mongoose</title>
      </Head>
      <Component {...pageProps} />
    </SessionProvider>
  );
};

export default App;
