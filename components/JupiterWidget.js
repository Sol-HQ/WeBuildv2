import Script from 'next/script'
import { useEffect, useState } from 'react'

export default function JupiterWidget() {
  const [widgetLoaded, setWidgetLoaded] = useState(false)

  useEffect(() => {
    const handleScriptLoad = () => {
      if (window.Jupiter) {
        window.Jupiter.init({
          displayMode: 'widget',
          endpoint: 'https://mainnet.helius-rpc.com/?api-key=6cf235c9-8b64-4e86-bede-fbf0fd688c9f',
          containerName: 'jupiter-terminal',
          refetchIntervalForTokenAccounts: 10,
          strictTokenList: false,
          formProps: {
            fixedInputMint: true,
            fixedOutputMint: true,
            initialAmount: '1000000',
            initialInputMint: 'EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v',
            initialOutputMint: 'So11111111111111111111111111111111111111112',
          },
        });
        setWidgetLoaded(true);
      }
    };

  return (
    <>
      <Script
        id="jupiter-script"
        src="https://terminal.jup.ag/main-v4.js"
        strategy="afterInteractive"
      />
      <div
        id="jupiter-terminal"
        style={{
          position: 'fixed',
          bottom: 24,
          left: 24,
          zIndex: 10000,
          width: widgetLoaded ? '400px' : '0',
          height: widgetLoaded ? '600px' : '0',
          minHeight: widgetLoaded ? '320px' : '0',
          background: widgetLoaded ? '#fff' : 'transparent',
          borderRadius: widgetLoaded ? 12 : 0,
          boxShadow: widgetLoaded ? '0 2px 12px rgba(0,0,0,0.15)' : 'none',
          overflow: 'hidden',
          transition: 'all 0.3s',
        }}
      />
    </>
  );
}
