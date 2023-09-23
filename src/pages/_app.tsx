import Head from "next/head";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { type AppType } from "next/app";
import Navbar from "~/components/Navbar";
import { Roboto } from 'next/font/google'

import { api } from "~/utils/api";

import "~/styles/globals.css";

const roboto_font = Roboto({
  subsets: ['latin'],
  weight: ['400']
});

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <SessionProvider session={session}>
      <Head>
        <title>VegeRice</title>
        <meta name="description" content="For eaters, by eaters." />
        <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🍚</text></svg>" />
      </Head>
      <Navbar />
      <Component {...pageProps} className={roboto_font.className} />
    </SessionProvider>
  );
};

export default api.withTRPC(MyApp);
