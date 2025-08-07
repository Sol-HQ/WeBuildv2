import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <Script src="https://terminal.jup.ag/main-v4.js" strategy="beforeInteractive" />
        {/* Optional: Add a style tag for bottom-left positioning */}
        <style>{`
          #jupiter-terminal {
            position: fixed;
            bottom: 24px;
            left: 24px;
            z-index: 10000;
          }
        `}</style>
      </Head>
      <body>
        {/* Jupiter terminal container */}
        <div id="jupiter-terminal"></div>
        {/* Jupiter terminal initialization */}
        <Script id="jupiter-init" strategy="afterInteractive">
          {`
            window.addEventListener('load', () => {
              if (typeof window.Jupiter !== 'undefined') {
                window.Jupiter.init({
                  displayMode: "widget",
                  endpoint: "https://mainnet.helius-rpc.com/?api-key=6cf235c9-8b64-4e86-bede-fbf0fd688c9f",
                  containerName: "jupiter-terminal",
                  refetchIntervalForTokenAccounts: 10,
                  strictTokenList: false,
                  formProps: {
                    fixedInputMint: true,
                    fixedOutputMint: true,
                    initialAmount: "1000000",
                    initialInputMint: "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v",
                    initialOutputMint: "So11111111111111111111111111111111111111112",
                  },
                });
              }
            });
          `}
        </Script>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
