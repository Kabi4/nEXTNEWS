import Link from "next/link";
import Head from "next/head";
import React from "react";
import Router from "next/router";

const Layout = ({ children, title, description, backbutton }) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="shortcut icon" href="./favicon.ico" />
      </Head>
      <div className="container">
        <nav>
          {backbutton && (
            <span
              onClick={() => {
                Router.back();
              }}
              className="backbutton"
            >
              &#x2b05;
            </span>
          )}
          <Link href="/">
            <a>
              <span className="main-title">nEXT NEWS</span>
            </a>
          </Link>
        </nav>
        {children}
      </div>
      <style jsx>
        {`
          .container {
            max-width: 800px;
            margin: 0 auto;
            background-color: #f6f6ef;
          }
          nav {
            padding: 1em;
            background-color: #f60;
            position: sticky;
            top: 0;
          }
          nav > * {
            display: inline-block;
            color: black;
          }
          nav > a {
            text-decoration: none;
          }
          nav > .main-title {
            font-weight: bold;
          }
          .backbutton {
            font-size: 1.6em;
            padding-right: 1em;
            font-weight: 800;
            cursor: pointer;
          }
        `}
      </style>
    </div>
  );
};

export default Layout;
