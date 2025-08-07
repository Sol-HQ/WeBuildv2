import Script from 'next/script'
import { useEffect } from 'react'

export default function JupiterWidget() {
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
        })
      }
    }

    const script = document.getElementById('jupiter-script')
    if (script) {
      script.addEventListener('load', handleScriptLoad)
    }

    return () => {
      if (script) {
        script.removeEventListener('load', handleScriptLoad)
      }
    }
  }, [])

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
          right: 24,
          zIndex: 10000,
          // No width, height, background, border, etc.
        }}
      />
    </>
  )
}
