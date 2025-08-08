import Image from "next/image";
import Container from "./container";
import heroImg from "../public/img/user4.png";
//update august 5
const Hero = () => {
  return (
    <>
      <Container className="flex flex-wrap ">
        <div className="flex items-center w-full lg:w-1/2">
          <div className="max-w-2xl mb-8">
            <h1 className="text-4xl font-bold leading-snug tracking-tight text-gray-700 lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight dark:text-blue-950">
            Art & Life, The Colors & The Chords...
            </h1>
            <p className="py-5 text-xl leading-normal lg:text-xl xl:text-2xl dark:text-yellow-700">
            Minting: Pilot K.i.t.e. NFT's (limited)<br />
            Digital & Abstract, Generative Art, Progressive<br />
            Pilot Coin & K.i.t.e Collection on Solana BlockChain<br />
            Home for The Digital Art's...<br />
            Token Mint is Live on Jup.ag<br />
            P.A.EtYGHRkV9ZW7oAhNvspktvPdb4nxPq1UDBBNCpvwjups
            </p>
            
            <div className="flex flex-col items-start space-y-3 sm:space-x-3 sm:space-y-0 sm:items-center sm:flex-row">
              <a
                href="https://www.affirmamint.cloud"
                target="_blank"
                rel="noopener"
                className="px-8 py-4 text-lg font-medium text-center text-white bg-blue-950 rounded-md ">
                K.i.t.e.NFT MintLive
              </a>
              <a
                href="https://www.affirmamint.cloud"
                target="_blank"
                rel="noopener"
                className="flex items-center space-x-2 text-orange-900 dark:text-gray-300">
                <span> 4 of 24 Available, Limited Metric 1SOL 1JUP</span>
              </a>
            </div>
            <div className="flex flex-col mt-6 items-start space-y-3 sm:space-x-3 sm:space-y-0 sm:items-center sm:flex-row">
              <a
                href="https://jup.ag/tokens/EtYGHRkV9ZW7oAhNvspktvPdb4nxPq1UDBBNCpvwjups"
                target="_blank"
                rel="noopener"
                className="px-8 py-4 text-lg font-medium text-center text-white bg-blue-950 rounded-md ">
                Pilot Coin
              </a>
              <a
                href="https://jup.ag/tokens/EtYGHRkV9ZW7oAhNvspktvPdb4nxPq1UDBBNCpvwjups"
                target="_blank"
                rel="noopener"
                className="flex items-center space-x-2 text-blue-900 dark:text-blue-300">
                <span>Pilot Coin</span>
              </a>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center w-full lg:w-1/2">
          <div className="">
            <Image
              src={user4Img}
              width="630"
              height="610"
              className={"object-cover"}
              alt="Space Illustration"
              loading="eager"
              placeholder="blur"
            />
          </div>
        </div>
      </Container>
    </>
  );
}

export default Hero;


















