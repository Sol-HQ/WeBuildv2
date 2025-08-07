import Script from 'next/script'
import { useEffect } from 'react'

export default function JupiterWidget() {
  useEffect(() => {
    const tryInit = () => {
      if (typeof window.Jupiter !== 'undefined') {
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
        })
      }
    }
    // Wait a bit for script and div to exist
    const timer = setTimeout(tryInit, 500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <Script src="https://terminal.jup.ag/main-v4.js" strategy="afterInteractive" />
      <div
        id="jupiter-terminal"
        style={{
          position: 'fixed',
          bottom: 24,
          right: 24,
          zIndex: 10000,
          minWidth: 320,
          minHeight: 200,
          background: '#fff', // optional: helps visibility
        }}
      />
    </>
  )
}
