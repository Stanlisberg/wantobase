"use client";

import Image from "next/image";
import ReactPlayer from "react-player/youtube";

export default function Home() {
  return (
    <main className="w-full mx-auto max-w-full">
      <div className="mt-[70px] flex flex-col justify-center lg:flex-row gap-1 items-center">
        <Image
          src="https://res.cloudinary.com/drtzfu730/image/upload/v1719708744/68b4f8dd395c4d75bae7a21f1e3046e8_vgkssa.png"
          width={14}
          height={14}
          alt="US-flag"
          className="w-[580px] md:h-[500px] object-contain"
        />
        <div className="Main  flex justify-center items-center flex-col gap-2 md:gap-1 text-center ">
          <span className="text-[100px] lg:text-[150px] text-center flex justify-center items-center">
            $WAT
          </span>
          <div className="text-[16px] lg:text-[21px] flex flex-col gap-2">
            <p>Is on a mission to take over the base</p>
            <p> universe. The time has come for wat to</p>
            <p> show his greatness.</p>
            <p className="text-[12px] font-bold">
              CA: 0x9E8CEfDD5b2b29275e34Da24F33cab8EbEb56541
            </p>
          </div>
          <div className="mt-4 flex flex-row justify-center gap-3 items-center w-[70%] lg:w-[50%] px-6 py-1 border-[#ffffff] border-4 rounded-[40px] bg-[#10acdb]">
            <a
              href="https://t.me/watonbasectotg"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="https://res.cloudinary.com/drtzfu730/image/upload/v1719727178/7a856d1a17bcc4cc5f0db8fbe4069f78_lnzpab.png"
                width={14}
                height={14}
                alt="US-flag"
                className="w-[50px] h-[50px]  object-contain cursor-pointer"
              />
            </a>
            <a
              href="https://twitter.com/watonbasecto"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="https://res.cloudinary.com/drtzfu730/image/upload/v1719727548/48048dfe2c4cde7327f2d50578fa2b64_pbzvrp.png"
                width={14}
                height={14}
                alt="US-flag"
                className="w-[50px] h-[50px]  object-contain cursor-pointer"
              />
            </a>
            <a
              href="https://dexscreener.com/base/0x557A7C975165A522dE32872CD4e2BdF22d8B8C57"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="https://res.cloudinary.com/drtzfu730/image/upload/v1719727496/138eb1bc53a408258a96f9ee347d15c4_d5lc4k.png"
                width={14}
                height={14}
                alt="US-flag"
                className="w-[50px] h-[50px] object-contain cursor-pointer"
              />
            </a>
          </div>
          {/* <div></div> */}
          {/* </div> */}
        </div>
      </div>
      <div className="mx-auto mt-16 border-2 border-dashed border-[#ffffff] w-[85%] md:[75%]"></div>
      <div className="mx-auto border-2 border-dashed border-[#ffffff] w-[85%] md:[75%]"></div>
      <div className="px-3 lg:px-16">
        <h1 className="flex justify-center items-center text-[120px]">About</h1>
        <div className="flex w-full flex-col lg:flex-row justify-center gap-6 items-center">
          <div className="AboutText text-[16px] lg:text-[20px] flex flex-col gap-6">
            <p>
              THE BEAT: The creatures in Night Riders are unquestionably
              peculiar, how would you describe some of the characters? One of
              them looks like an almost rat/bat hybrid. How do you go about
              constructing these creatures?
            </p>
            <div>MATT FURIE</div>
            <p>
              Well, the main dude is a chilled-out frog. The frog&apos;s little
              buddy is a rat, but many will mistake him for a mouse. Rats are
              smarter than mice and domesticated rats are vert sweet creatures.
              The rat is inspired by my pet rat &quot;Wat&quot;. Wat loved to
              lick me and was very cute.
            </p>
          </div>
          <Image
            src="https://res.cloudinary.com/drtzfu730/image/upload/v1719729657/32db70a6b4bd4058b3b5f996771b5085_ohq7mz.png"
            width={14}
            height={14}
            alt="US-flag"
            className="w-[350px] h-[350px] object-contain rounded-[20px] "
          />
        </div>
      </div>
      <div className="mx-auto mt-6 md:mt-10 lg:mt-24 border-2 border-dashed border-[#ffffff] w-[85%] md:[75%]"></div>
      <div className="mx-auto border-2 border-dashed border-[#ffffff] w-[85%] md:[75%]"></div>
      <div className="px-4 lg:px-16 mt-4">
        <h1 className="flex font-bold justify-center items-center text-center text-[35px] lg:text-[100px]">
          Matt Furie&apos;s pet rat
        </h1>
        <div className="lg:h-[100%] lg:w-[100%] flex justify-center items-center mt-4 lg:mt-0 ">
          <ReactPlayer
            width="800px"
            height="200px"
            url="https://www.youtube.com/watch?v=53tRdsK50Pc&t=4s"
          />
        </div>
      </div>
      <div className="mx-auto mt-10 lg:mt-20 border-2 border-dashed border-[#ffffff] w-[85%] md:[75%]"></div>
      <div className="mx-auto border-2 border-dashed border-[#ffffff] w-[85%] md:[75%]"></div>
      <div className="flex flex-col w-full lg:flex-row  mt-16 sm:mt-10 md:mt-10 lg:mt-0 justify-center px-3 items-center gap-6 ">
        <Image
          src="https://res.cloudinary.com/drtzfu730/image/upload/v1719736422/c5036b85aded4da7c6c10c1469a8efce_rgwrfo.png"
          width={14}
          height={14}
          alt="US-flag"
          className="w-[500px] lg:h-[500px] object-contain"
        />
        <div className="Token text-[20px] lg:text-[30px] flex flex-col text-center gap-2 bg-[#BBB131]  py-3 px-6 mx-4 rounded-[30px]">
          <h1>Tokenomics</h1>
          <div className="text-center text-[17px] lg:text-[29px]">
            <p>Token Supply: 420,690B</p>
            <p> No Taxes Forever, No None Sense,</p>
            <p> LP Tokens Burned & Contract</p>
            <p> Ownership Renounced</p>
          </div>
        </div>
      </div>
      <div className="mx-auto border-2 mt-16 lg:mt-0 border-dashed border-[#ffffff] w-[85%] md:[75%]"></div>
      <div className="mx-auto border-2 border-dashed border-[#ffffff] w-[85%] md:[75%]"></div>
      <div>
        <h1 className="flex font-bold justify-center items-center text-[65px] lg:text-[100px]">
          ROADMAP
        </h1>
        <div className="px-3 flex flex-col lg:flex-row gap-6 lg:gap-12 justify-center items-center">
          <Image
            src="https://res.cloudinary.com/drtzfu730/image/upload/v1719736380/920e88972a1c382623f01a0ff48ebd1b_eitfym.png"
            width={14}
            height={14}
            alt="US-flag"
            className="w-[250px] lg:h-[300px] object-contain"
          />
          <div className="font-bold text-[25px] flex flex-col text-center gap-2 bg-[#BBB131]  py-4 px-4 rounded-[30px]">
            <div className="text-center flex flex-col text-[15px] lg:text-[20px]">
              <div>Phase 1: fun begins, memes spread, ​community</div>
              <p>builds</p>
              <p> Phase 2: 100,000 holders</p>
              <p> Phase 3: takeover the meme universe</p>
            </div>
          </div>
          <Image
            src="https://res.cloudinary.com/drtzfu730/image/upload/v1719736380/920e88972a1c382623f01a0ff48ebd1b_eitfym.png"
            width={14}
            height={14}
            alt="US-flag"
            className="w-[250px] lg:h-[300px] object-contain"
          />
        </div>
      </div>
      <div className="mx-auto mt-12 lg:mt-0 border-2 border-dashed border-[#ffffff] w-[85%] md:[75%]"></div>
      <div className="mx-auto border-2 border-dashed border-[#ffffff]  w-[85%] md:[75%]"></div>
      <div className="">
        <h1 className="flex font-bold justify-center items-center text-center text-[55px] lg:text-[100px]">
          How To Buy
        </h1>
        <div className="px-3 lg:px-10 py-10 mx-auto grid  lg:grid-cols-2 gap-16">
          <div className="flex flex-col justify-center items-center gap-6">
            <Image
              src="https://res.cloudinary.com/drtzfu730/image/upload/v1719739887/18d548138c6b99d79837d14dcda0d119_wde3yi.png"
              width={14}
              height={14}
              alt="US-flag"
              className="Image w-[80px] h-[80px] object-contain"
            />
            <div className="flex flex-col justify-center items-center w-full">
              <h1 className="text-[28px] font-[800]">Make Wallet</h1>
              <div className="hidden md:block text-[12px] lg:text-[13px] font-[800]">
                <p>
                  Download metamask or your wallet of choice from the app store
                  or google
                </p>
                <p>
                  ​play store for free. Desktop users, download the google
                  chrome extension
                </p>
                <p className="text-center">​by going to metamask.io.</p>
              </div>
              <p className="md:hidden text-center text-[12px] lg:text-[13px] font-[800]">
                Download metamask or your wallet of choice from the app store or
                google ​play store for free. Desktop users, download the google
                chrome extension ​by going to metamask.io.
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center gap-6">
            <Image
              src="https://res.cloudinary.com/drtzfu730/image/upload/v1719739919/42f829ca60894cc1b34b9507a6ff6505_ptmq3j.png"
              width={14}
              height={14}
              alt="US-flag"
              className="Image w-[80px] h-[80px] object-contain"
            />
            <div className="flex flex-col justify-center items-center w-full">
              <h1 className="text-[28px] font-[800]">Get Some Eth</h1>
              <div className="hidden md:block text-[12px] lg:text-[13px] font-[800]">
                <p>
                  Have ETH in your wallet to switch to $​WAT. If you don&apos;t
                  have any ETH, you ca​n
                </p>
                <p>
                  {" "}
                  buy directly on metamask, transfer from another wallet, or buy
                  on anothe​r
                </p>

                <p className="text-center">
                  exchange and send it to your wallet​.
                </p>
              </div>
              <p className="lg:hidden text-center text-[12px] lg:text-[13px] font-[800]">
                Have ETH in your wallet to switch to $​WAT. If you don&apos;t
                have any ETH, you ca​n buy directly on metamask, transfer from
                another wallet, or buy on anothe​r exchange and send it to your
                wallet​.
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center gap-6">
            <Image
              src="https://res.cloudinary.com/drtzfu730/image/upload/v1719740058/8373cf6efe7091961e3b20416d84fc98_fomxmc.png"
              width={14}
              height={14}
              alt="US-flag"
              className="Image w-[80px] h-[80px] object-contain"
            />
            <div className="flex flex-col justify-center items-center w-full ">
              <h1 className="text-[28px] font-[800]">Go to Uniswap</h1>
              <div className="hidden md:block text-[13px] font-[800]">
                <p>
                  Connect to Uniswap. Go to app.uniswap.org in google chrome or
                  on the browser
                </p>
                <p>
                  {" "}
                  ​inside your Metamask app. Connect your wallet. Paste the
                  $​WAT token
                </p>
                <p>
                  {" "}
                  ​address into Uniswap, select $​WAT coin, and confirm. When
                  Metamask prompt​s
                </p>
                <p className="text-center">
                  you for a wallet signature, sign​.
                </p>
              </div>
              <p className="md:hidden text-center text-[12px] lg:text-[13px] font-[800]">
                Connect to Uniswap. Go to app.uniswap.org in google chrome or on
                the browser ​inside your Metamask app. Connect your wallet.
                Paste the $​DADDY token ​address into Uniswap, select $​WAT
                coin, and confirm. When Metamask prompt​s you for a wallet
                signature, sign​.
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center gap-6">
            <Image
              src="https://res.cloudinary.com/drtzfu730/image/upload/v1719740042/67c6ca7d405ac8fd9b462a5f6d3bb299_fvpyfw.png"
              width={14}
              height={14}
              alt="US-flag"
              className="Image w-[80px] h-[80px] object-contain"
            />
            <div className="flex flex-col justify-center items-center  w-full ">
              <h1 className="text-[28px] font-[800]">Switch ETH for $WAT</h1>
              <div className="hidden md:block text-[13px] font-[800]">
                <p>
                  Switch ETH for $​WAT. We have ZERO taxes so you don&apos;t
                  need to worry abou​t
                </p>
                <p>
                  buying with a specific slippage, although you may need to use
                  slippage durin​g
                </p>
                <p className="text-center">​times of market volatility​.</p>
              </div>
              <p className="md:hidden text-center text-[12px] font-[800]">
                Switch ETH for $​WAT. We have ZERO taxes so you don&apos;t need
                to worry abou​t buying with a specific slippage, although you
                may need to use slippage durin​g times of market volatility​.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="mb-6 flex justify-center px-3 items-center ">
        <Image
          src="https://res.cloudinary.com/drtzfu730/image/upload/v1719752630/cf2a60b6c43565fa5acab4fb9b5955a7_fwugoq.png"
          width={14}
          height={14}
          alt="US-flag"
          className="w-[800px] md:h-[380px] object-contain"
        />
      </div>
      <div className="mx-auto border-2 border-dashed border-[#ffffff] w-[85%] md:[75%]"></div>
      <div className="mx-auto border-2 border-dashed border-[#ffffff]  w-[85%] md:[75%]"></div>
      <div className="flex flex-col justify-center gap-1 items-center my-3">
        <Image
          src="https://res.cloudinary.com/drtzfu730/image/upload/v1719752687/ca2dd99eb6efc95ad3e4d3cf51e71cbd_rpkcof.png"
          width={14}
          height={14}
          alt="US-flag"
          className="Image w-[120px] h-[120px] object-contain"
        />
        <div className="Main text-[60px] font-[800]">$WAT</div>
        <div className="flex flex-row gap-5">
          <a
            href="https://t.me/watonbasectotg"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="https://res.cloudinary.com/drtzfu730/image/upload/v1719727178/7a856d1a17bcc4cc5f0db8fbe4069f78_lnzpab.png"
              width={14}
              height={14}
              alt="US-flag"
              className="Image w-[48px] h-[48px] object-contain"
            />
          </a>
          <a
            href="https://twitter.com/watonbasecto"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="https://res.cloudinary.com/drtzfu730/image/upload/v1719727548/48048dfe2c4cde7327f2d50578fa2b64_pbzvrp.png"
              width={14}
              height={14}
              alt="US-flag"
              className="Image w-[48px] h-[48px] object-contain"
            />
          </a>
        </div>
        <div className="hidden md:block w-full text-center text-[13px] font-[800]">
          <p>
            $WAT coin has no association with Matt Furie or his creation
            &quot;The Night Riders&quot;. This token is ​
          </p>
          <p>
            simply paying homage to a beloved meme we all love and recognize.
          </p>
          <p>contact@watonBase.com</p>
        </div>
        <p className="md:hidden text-center text-[13px] font-[800]">
          $WAT coin has no association with Matt Furie or his creation &quot;The
          Night Riders&quot;. This token is ​simply paying homage to a beloved
          meme we all love and recognize. contact@watonBase.com
        </p>
      </div>
    </main>
  );
}
