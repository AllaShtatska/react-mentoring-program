import React from "react";
import Head from "next/head";

function Seo(props) {
  return (
    <Head>
      <title>{props.title}</title>
      <meta name="description" content={props.description} />
      <meta
        name="viewport"
        content="width=device-width,initial-scale=1,shrink-to-fit=no"
      />
    </Head>
  );
}

export default Seo;
