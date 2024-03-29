import React, { ReactNode } from "react";
import Link from "next/link";
import Head from "next/head";

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children, title = "This is the default title" }: Props) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <header>
      <nav>
        <Link legacyBehavior href="/">
          <a>Home</a>
        </Link>{" "}
        |{" "}
        <Link legacyBehavior href="/about">
          <a>About</a>
        </Link>
      </nav>
    </header>
    {children}
    <footer>
      <hr className="pb-2"/>
      <span className="">Footer</span>
    </footer>
  </div>
);

export default Layout;
