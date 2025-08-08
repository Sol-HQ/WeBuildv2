import React from "react";
import Container from "./container";
//update august 5
const Cta = () => {
  return (
    <Container>
      <div className="flex flex-wrap items-center justify-between w-full max-w-6xl gap-5 mx-auto text-white bg-indigo-600 px-7 py-7 lg:px-12 lg:py-12 lg:flex-nowrap rounded-xl">
        <div className="flex-grow text-center lg:text-left">
          <h2 className="text-2xl font-medium lg:text-3xl">
            Kite NFT Collection Mint... is LIVE<br />
            Pilot AKA "High Flyers" Coin Mint... is LIVE
          </h2>
          <p className="mt-2 font-medium text-white text-opacity-90 lg:text-xl">
            Limited Collection Of Digital Pilot Kite NFT's<br />
            Mint & Tracking of PILOT Token<br />
            EtYGHRkV9ZW7oAhNvspktvPdb4nxPq1UDBBNCpvwjups
          </p>
        </div>
        <div className="flex flex-col mt-6 items-start space-y-3 sm:space-x-3 sm:space-y-0 sm:items-center sm:flex-row">
          <a
            href="https://www.affirmamint.cloud"
            target="_blank"
            rel="noopener"
            className="inline-block py-3 mx-auto text-lg font-medium text-center text-indigo-600 bg-white rounded-md px-7 lg:px-10 lg:py-5 ">
            Kite NFT LIVE 1SOL 1JUP
          </a>
        </div>
        <div className="flex flex-col mt-6 items-start space-y-3 sm:space-x-3 sm:space-y-0 sm:items-center sm:flex-row">
              <a
                href="https://jup.ag/tokens/EtYGHRkV9ZW7oAhNvspktvPdb4nxPq1UDBBNCpvwjups"
                target="_blank"
                rel="noopener"
                className="px-8 py-4 text-lg font-medium text-center text-white bg-blue-900 rounded-md ">
                Pilot Coin Live 
              </a>
            </div>
      </div>
    </Container>
  );
}

export default Cta;














