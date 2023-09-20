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
      <Navbar />
      <Component {...pageProps} className={roboto_font.className} />
    </SessionProvider>
  );
};

export default api.withTRPC(MyApp);
