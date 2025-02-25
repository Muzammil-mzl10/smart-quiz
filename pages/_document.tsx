import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* ✅ Load GTM only if not in iframe */}
        <Script
          id="gtm-head"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              if (window.self === window.top) {
                (function(w,d,s,l,i){
                  w[l]=w[l]||[];
                  w[l].push({'gtm.start': new Date().getTime(), event:'gtm.js'});
                  var f=d.getElementsByTagName(s)[0],
                      j=d.createElement(s), dl=l!='dataLayer'?'&l='+l:'';
                  j.async=true;
                  j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
                  f.parentNode.insertBefore(j,f);
                })(window,document,'script','dataLayer','GTM-W9M93FKG');
              }
            `,
          }}
        />
      </Head>
      <body className="antialiased">
        {/* ✅ Conditionally remove noscript iframe if JS runs */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-W9M93FKG"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
            id="gtm-noscript"
          />
        </noscript>
        <Script
          id="remove-noscript"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              if (window.self === window.top) {
                const iframe = document.getElementById('gtm-noscript');
                if (iframe) iframe.parentNode.removeChild(iframe);
              }
            `,
          }}
        />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
