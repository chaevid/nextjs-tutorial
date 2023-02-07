import '@/styles/globals.css';

import NavBar from '@/components/NavBar';
import Layout from '@/components/Layout';

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />

      <style
        jsx
        global>
        {`
          a {
            color: gray;
            text-decoration: none;
          }
        `}
      </style>
    </Layout>
  );
}
