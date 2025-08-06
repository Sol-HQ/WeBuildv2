import Image from "next/image";
import Container from "./container";
import heroImg from "../public/img/hero.png";
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
            <p className="py-5 text-xl leading-normal text-darkblue-600 lg:text-xl xl:text-2xl dark:text-yellow-700">
            Am Currently Minting My Candy Machine Styled, Digital & Abstract, Pilot K.i.t.e Collection, on Solana's BlockChain! Home to The Digital Art's!
            Token Mint is Live P.A. EtYGHRkV9ZW7oAhNvspktvPdb4nxPq1UDBBNCpvwjups
            </p>
            
            <div className="flex flex-col items-start space-y-3 sm:space-x-3 sm:space-y-0 sm:items-center sm:flex-row">
              <a
                href="https://www.affirmamint.cloud"
                target="_blank"
                rel="noopener"
                className="px-8 py-4 text-lg font-medium text-center text-white bg-green-950 rounded-md ">
                K.i.t.e. MintLive
              </a>
              <a
                href="https://www.affirmamint.cloud"
                target="_blank"
                rel="noopener"
                className="flex items-center space-x-2 text-orange-900 dark:text-gray-300">
                <span> 4 of 24 Available, Limited Metric 1SOL 1JUP</span>
              </a>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center w-full lg:w-1/2">
          <div className="">
            <Image
              src={heroImg}
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









