import Script from 'next/script'
import { useEffect } from 'react'

export default function JupiterWidget() {
  useEffect(() => {
    // Ensures Jupiter is initialized after the script is loaded
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

    // Attach script load event
    const script = document.getElementById('jupiter-script')
    if (script) {
      script.addEventListener('load', handleScriptLoad)
    }

    // Clean up
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
          left: 24,
          zIndex: 10000,
          width: '90vw',
          maxWidth: 400,
          height: '60vh',
          minHeight: 320,
          background: '#fff',
          borderRadius: 12,
          boxShadow: '0 2px 12px rgba(0,0,0,0.15)',
        }}
      />
      <style jsx>{`
        #jupiter-terminal {
          transition: all 0.3s;
        }
        @media (max-width: 600px) {
          #jupiter-terminal {
            left: 5vw;
            bottom: 5vw;
            width: 90vw;
            height: 60vh;
            min-height: 220px;
            max-width: 95vw;
          }
        }
      `}</style>
    </>
  )
}
