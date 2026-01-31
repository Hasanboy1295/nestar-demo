import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head> 
        <meta charSet="UTF-8" />
        <meta name="title" content="Nestar Demo" />
        <meta name="robots"  content="index, follow"/>
        <link rel="icon" href="/img/logo/favicon.svg" />
         
         { /* SEO META TAGS => search engine optimization */ }
        <meta name="keyword" content={"nestar, nestar.uz, devex mern, mern nestjs, fullstack"} />
        <meta name="describtion" content={
          "Buy and sell properties anywhere anytime in South Korea | " + 
          "Покупка и продажа недвижимости в Южной Корее в любое время и в любом месте | " + 
          "한국 어디에서든 언제든지 부동산을 사고팔 수 있습니다." 
        }
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
 