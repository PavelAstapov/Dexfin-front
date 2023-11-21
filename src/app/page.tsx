'use client';

import Image from 'next/image'
import "../styles/home-page.scss";
import Link from 'next/link';

export default function Home() {
  const scrollToForm = () => {
    const element = document.getElementById("form");
    element!.scrollIntoView({behavior: "smooth"});
  }
  return (
    <main >
      <header id="main" className='first-section'>
        <div className='logo-header'>
            <Link href="/">
              <Image
                src="/white-logo.svg"
                width={133}
                height={32}
                alt="Dexfin logo"
                priority
              />
            </Link>
            <button type="button" onClick={scrollToForm} className='small-transparent-button'>
              Join waitlist now
            </button>
        </div>
        <div className='main-content'>
          <h1>DeFi Aggregator powered <span>by AI</span></h1>
          <Image
            className='logos-img'
            src="/icons-gif.gif"
            width={587}
            height={584}
            alt="Dexfin"
            quality={80}
            placeholder="blur"
            loading = 'lazy'
            blurDataURL='/main-logos.svg'
          />
          <form action="">
            <p>Earn yield, trade, borrow, lend, hedge, view performance, and automate tedious tasks in one-click. Save time and money with Dexfin.</p>
            <div>
              <input type="email" placeholder='Enter your e-mail' />
              <button className='main-button' type="submit">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 16H24M24 16L16 24M24 16L16 8" stroke="#060729" strokeWidth="2" strokeLinecap="square"/>
                </svg>
              </button>
            </div>
          </form>
        </div>
      </header>

      <section id="description">
        <div>
          <p>In the current age, where data is <span>as valuable as currency</span>, reevaluating our methods of handling financial transactions <span>becomesimperative</span>, especially in the rapidly evolving domain of decentralized finance (DeFi).</p>
          <p className='blue-text'>the world’s premier DeFi Aggregator</p>
        </div>
        <div>
          <p className='blue-text'>AI-driven</p>
          <p>The Dexfin DeFi AI Aggregator <span>steps forward as an innovator</span><br /> in this transformed environment, merging <span>artificial intelligence</span> with the steadfast framework of <span>blockchain technology</span></p>
          <button type="button" onClick={scrollToForm} className='main-button'>Join waitlist now</button>
        </div>
      </section>

      <section id="unlock">
       <div className='title-wrapper'>
        <h2>Unlock DeFi&apos;s Full <span>Potential</span></h2>
        <p className='blue-text'>Platform features</p>
       </div>
       <p>Swap, Trade, Earn, Lend and Borrow all on Dexfin</p>
       <div className="card-wrapper">
        <div className="card">
          <h3>swap <sup>1</sup> </h3>
          <div>
            <span>
              1000+ tokens
              <Image
                src="/check.svg"
                width={22}
                height={22}
                alt="Dexfin"
                loading='lazy'
              />
            </span>
            <span>
              Low fees
              <Image
                src="/check.svg"
                width={22}
                height={22}
                alt="Dexfin"
                loading='lazy'
              />
            </span>
            <span>
              Fast execution
              <Image
                src="/check.svg"
                width={22}
                height={22}
                alt="Dexfin"
                loading='lazy'
              />
            </span>
          </div>
        </div>
        <div className="card">
          <h3>trade <sup>2</sup></h3>
          <div>
            <span>
              Orderbook
              <Image
                src="/check.svg"
                width={22}
                height={22}
                alt="Dexfin"
                loading='lazy'
              />
            </span>
            <span>
              Fast transactions
              <Image
                src="/check.svg"
                width={22}
                height={22}
                alt="Dexfin"
                loading='lazy'
              />
            </span>
            <span>
              Deep liquidity
              <Image
                src="/check.svg"
                width={22}
                height={22}
                alt="Dexfin"
                loading='lazy'
              />
            </span>
          </div>
        </div>
        <div className="card">
          <h3>Earn <sup>3</sup></h3>
          <div>
            <span>
              Competitive APY
              <Image
                src="/check.svg"
                width={22}
                height={22}
                alt="Dexfin"
                loading='lazy'
              />
            </span>
            <span>
              Custom strategies
              <Image
                src="/check.svg"
                width={22}
                height={22}
                alt="Dexfin"
                loading='lazy'
              />
            </span>
            <span>
              Risk-Adjusted
              <Image
                src="/check.svg"
                width={22}
                height={22}
                alt="Dexfin"
                loading='lazy'
              />
            </span>
          </div>
        </div>
        <div className="card">
          <h3>Lend & Borrow <sup>4</sup></h3>
          <div>
            <span>
              Best rates
              <Image
                src="/check.svg"
                width={22}
                height={22}
                alt="Dexfin"
                loading='lazy'
              />
            </span>
            <span>
              Various protocols
              <Image
                src="/check.svg"
                width={22}
                height={22}
                alt="Dexfin"
                loading='lazy'
              />
            </span>
            <span>
              Various chains
              <Image
                src="/check.svg"
                width={22}
                height={22}
                alt="Dexfin"
                loading='lazy'
              />
            </span>
          </div>
        </div>
       </div>
      </section>

      <section id="core">
        <p className='blue-text'>BENEFITS OF OUR AGGREGATOR</p>
        <h2>Core Benefits</h2>
        <p>An exceptionally versatile tool for data analysis, access, and transactionexecution spanning across multiple blockchains and protocols.</p>
        <div className='core-cards-wrapper'>
          <div className='core-card'>
            <h3>Portfolio Management</h3>
            <p>Track tokens, view history, analyze performance, setalerts, automate rebalancing.</p>
          </div>
          <div className='core-card'>
            <h3>Data Aggregation</h3>
            <p>Real-time tokenprices, history, metrics. Make Informed decisions & DeFiactivity tracking.</p>
          </div>
          <div className='core-card'>
            <h3>Bundle DeFiactions</h3>
            <p>Optimize actions in one transaction. Group multiple DeFi operations, reduce gas fees.</p>
          </div>
          <div className='core-card'>
            <h3>Cross-chain Defi</h3>
            <p>Enjoy seamless DeFi interactions across different blockchains with our interoperability protocol.</p>
          </div>
        </div>
        <button type="button" onClick={scrollToForm} className="main-button">Join waitlist now</button>
      </section>

      <section id="trade">
        <div className='left-content'>
        <div className="blue-text-wrapper">
            <p className='blue-text'>Our features</p>
            <p className='blue-text'>— 01</p>
          </div>
          <div>
            <h2><span>Trade & Swap</span> Across 100+ Chains</h2>
          </div>
          <div>
            <p>Find and compare the best routes across chains, bridgesand DEXs</p>
            <p>Multi-token swaps. allows you to batch sell tokens intoone token</p>
            <div className='icons-wrapper'>
              <div className='icon-card'>
                <div />
                <p>Etherium</p>
              </div>
              <div className='icon-card'>
                <div />
                <p>Arbitrum</p>
              </div>
              <div className='icon-card'>
                <div />
                <p>Optimism</p>
              </div>
              <div className='icon-card'>
                <div />
                <p>Polygon</p>
              </div>
              <div className='icon-card'>
                <div />
                <p>Binance</p>
              </div>
              <div className='icon-card'>
                <div />
                <p>Avalanche</p>
              </div>
              <div className='icon-card'>
                <div />
                <p>Gnosis</p>
              </div>
              <div className='icon-card'>
                <div />
                <p>Fantom</p>
              </div>
              <div className='icon-card'>
                <div />
                <p>Cronos</p>
              </div>
              <div className='icon-card'>
                <div />
                <p>Okx</p>
              </div>
              <div className='icon-card'>
                <div />
                <p>Aurora</p>
              </div>
              <div className='icon-card'>
                <div />
                <p>Harmony</p>
              </div>
              <div className='icon-card'>
                <div />
                <p>Celo</p>
              </div>
              <div className='icon-card'>
                <div />
                <p>Fuse</p>
              </div>
              <div className='icon-card'>
                <div />
                <p>Moonbeam</p>
              </div>
              <div className='icon-card'>
                <div />
                <p>Moonriver</p>
              </div>
              <div className='icon-card'>
                <div />
                <p>Boba</p>
              </div>
              <div className='icon-card'>
                <div />
                <p>Evmos</p>
              </div>
              <div className='icon-card'>
                <div />
                <p>Linea</p>
              </div>
              <div className='icon-card'>
                <div />
                <p>Solana</p>
              </div>
              <div className='icon-card'>
                <div />
                <p>Bitcoin</p>
              </div>
            </div>
          </div>
        </div>
        <div className='right-content'>
          <div className="blue-text-wrapper">
            <p className='blue-text'>01 —</p>
            <p className='blue-text'>Our features</p>
          </div>
          <div className='right-content-cards-wrapper'>
            <div className='card'>
              <p>Uniswap</p>
              <Image
                src="/img-1.svg"
                width={106}
                height={106}
                alt="Dexfin"
                loading='lazy'
              />
            </div>
            <div className='card'>
              <p>Linch</p>
              <Image
                src="/img-2.svg"
                width={106}
                height={106}
                alt="Dexfin"
                loading='lazy'
              />
            </div>
            <div className='card'>
              <p>0x</p>
              <Image
                src="/img-3.svg"
                width={106}
                height={106}
                alt="Dexfin"
                loading='lazy'
              />
            </div>
            <div className='card'>
              <p>Paraswap</p>
              <Image
                src="/img-4.svg"
                width={106}
                height={106}
                alt="Dexfin"
                loading='lazy'
              />
            </div>
            <div className='card'>
              <p>Thorswap</p>
              <Image
                src="/img-10.svg"
                width={106}
                height={106}
                alt="Dexfin"
                loading='lazy'
              />
            </div>
          </div>
        </div>
      </section>

      <section id="ai">
        <div className='left-content'>
          <div className='blue-text-wrapper'>
            <p className='blue-text'>Our features</p>
            <p className='blue-text'>— 02</p>
          </div>
          <div className='card'>
            <Image
              src="/img-5.svg"
              width={106}
              height={106}
              alt="Dexfin"
              loading='lazy'
            />
            <p>Compound</p>
          </div>
          <div className='card'>
            <Image
              src="/img-6.svg"
              width={106}
              height={106}
              alt="Dexfin"
              loading='lazy'
            />
            <p>Aave</p>
          </div>
          <div className='card'>
            <Image
              src="/img-11.svg"
              width={106}
              height={106}
              alt="Dexfin"
              loading='lazy'
            />
            <p>Radiant Capital</p>
          </div>
          <div className='card'>
            <Image
              src="/img-12.svg"
              width={106}
              height={106}
              alt="Dexfin"
              loading='lazy'
            />
            <p>Spark Finance</p>
          </div>
        </div>
        <div className='right-content'>
          <div className='blue-text-wrapper'>
            <p className='blue-text'>Our features</p>
            <p className='blue-text'>— 02</p>
          </div>
          <h2><span>Borrow & Lend</span> money markets Across EVM Chains </h2>
          <div>
            <p>Leverage decentralized finance (DeFi) platforms thatsupport cross-chain interactions, enabling to lend orborrow assets across different EVM chains.</p>
            <p>Join platforms offering high liquidity and competitiveinterest rates for both lenders and borrowers.</p>
          </div>
        </div>
      </section>

      <section id="way">
        <div className='left-content'>
        <div className="blue-text-wrapper">
            <p className='blue-text'>Our features</p>
            <p className='blue-text'>— 03</p>
          </div>
          <div>
            <h2>Discover <span>the easiest way to profit</span> from crypto currencies</h2>
          </div>
          <div>
            <p>Stake Proof of Stake (PoS) cryptocurrencies for regularrewards.</p>
            <p>Engage in yield farming by providing liquidity todecentralized finance (DeFi) platforms.</p>
          </div>
        </div>
        <div className='right-content'>
          <div className="blue-text-wrapper">
            <p className='blue-text'>03 —</p>
            <p className='blue-text'>Our features</p>
          </div>
          <div className='right-content-cards-wrapper'>
            <div className='card'>
              <p>Lido</p>
              <Image
                src="/img-7.svg"
                width={106}
                height={106}
                alt="Dexfin"
                loading='lazy'
              />
            </div>
            <div className='card'>
              <p>Curve</p>
              <Image
                src="/img-8.svg"
                width={106}
                height={106}
                alt="Dexfin"
                loading='lazy'
              />
            </div>
            <div className='card'>
              <p>Convex</p>
              <Image
                src="/img-9.svg"
                width={106}
                height={106}
                alt="Dexfin"
                loading='lazy'
              />
            </div>
            <div className='card'>
              <p>Yearn Finance</p>
              <Image
                src="/img-13.svg"
                width={106}
                height={106}
                alt="Dexfin"
                loading='lazy'
              />
            </div>
          </div>
        </div>
      </section>

      <section id="process">
        <p className='blue-text'>Trading process</p>
        <h2>Dexfin AI Makes <span>defi Easy</span></h2>
        <p>Trade your favorite tokens instantly, interact with DeFi protocols, get market insights using our Dexfin AI</p>
        <div className='wrapper'>
          <div className='first-column'>
            <div>
              <h4>In-depth Project Insights</h4>
              <p>Gain comprehensive knowledge about any Web3project</p>
            </div>
            <div>
              <h4>Comparative Analysis</h4>
              <p>Compare and contrast multiple Web3 projects, spotlighting their unique attributes</p>
            </div>
            <div>
              <h4>Real-time News & Updates</h4>
              <p>Stay updated with the latest happenings and dynamics around projects of your choice.</p>
            </div>
          </div>
          <div>
            <Image
              src="/polygon-1.svg"
              width={221}
              height={221}
              alt="Dexfin "
              loading="lazy"
              className='absolute'
            />
            <Image
              src="/polygon-2.svg"
              width={221}
              height={221}
              alt="Dexfin "
              loading="lazy"
              className='absolute'
            />
            <Image
              src="/screen.png"
              fill
              alt="Dexfin"
              loading="lazy"
            />
          </div>
          <div className='last-column'>
            <div>
              <h4>Trending Airdrop Alerts</h4>
              <p>Discover trending airdrop projects in the crypto sphere</p>
            </div>
            <div>
              <h4>Airdrop Participation Guide</h4>
              <p>Navigate how to join in onpopular airdrop opportunities</p>
            </div>
            <div>
              <h4>Token Price Tracker & Analysis</h4>
              <p>Fetch the latest token prices and dive deep into the reasons behind their fluctuations</p>
            </div>
          </div>
        </div>

        <button type="button" onClick={scrollToForm} className="main-button">Join waitlist now</button>
      </section>

      <section id="form">
        <p className='blue-text'>Join waitlist now</p>
        <div>
          <h2>Save time and money <span>with Dexfin</span></h2>
          <p>Earn yield, trade, borrow, lend, hedge, view performance, and <span>automate tedious tasks in one-click</span></p>
        </div>
        <form action="">
          <input type="email" placeholder='Enter your e-mail' />
          <button className='main-button' type="submit">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 16H24M24 16L16 24M24 16L16 8" stroke="#060729" strokeWidth="2" strokeLinecap="square"/>
            </svg>
          </button>
          </form>
      </section>

      <footer>
        <div className="wrapper">
          <h2>
            <a href="mailto:hello@dexfin.com">hello@dexfin.com</a>
            <a href="tel:636-642-528">636-642-528</a>
          </h2>
          <div>
            <a href="/">
              <Image
                src="/insta.svg"
                width={32}
                height={32}
                alt="Dexfix"
                loading='lazy'
              />
            </a>
            <a href="/">
              <Image
                src="/in.svg"
                width={32}
                height={32}
                alt="Dexfix"
                loading='lazy'
              />
            </a>
            <a href="/">
              <Image
                src="/facebook.svg"
                width={32}
                height={32}
                alt="Dexfix"
                loading='lazy'
              />
            </a>
            <a href="/">
              <Image
                src="/twitter.svg"
                width={32}
                height={32}
                alt="Dexfix"
                loading='lazy'
              />
            </a>
            <a href="/">
              <Image
                src="/telegram.svg"
                width={32}
                height={32}
                alt="Dexfix"
                loading='lazy'
              />
            </a>
          </div>
        </div>
        <div className="small-wrapper">
          <p>© Dexfin Copyright 2023</p>
          <button type="button" onClick={scrollToForm} className='small-transparent-button'>Join waitlist now</button>
        </div>
        <svg className='desktop footer-svg' viewBox="0 0 1456 124" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M260.276 105.846C260.276 119.424 258.781 131.51 255.791 142.105C252.801 152.597 248.574 161.752 243.11 169.569C237.749 177.387 231.253 184.021 223.624 189.473C216.098 194.925 207.695 199.296 198.416 202.588C189.137 205.88 179.136 208.297 168.414 209.84C157.692 211.28 146.505 212 134.855 212H0V0H134.546C146.196 0 157.382 0.77147 168.105 2.31441C178.827 3.75449 188.828 6.12033 198.107 9.41194C207.489 12.7035 215.995 17.0752 223.624 22.5269C231.253 27.8758 237.749 34.5104 243.11 42.4309C248.574 50.2484 252.801 59.4032 255.791 69.8952C258.781 80.3872 260.276 92.3707 260.276 105.846ZM202.437 105.846C202.437 95.6623 201.097 86.8161 198.416 79.3071C195.839 71.7982 191.611 65.6264 185.735 60.7918C179.961 55.8544 172.383 52.2028 163.001 49.837C153.619 47.3683 142.175 46.1339 128.669 46.1339H57.3752V165.866H128.669C142.175 165.866 153.619 164.683 163.001 162.317C172.383 159.849 179.961 156.146 185.735 151.208C191.611 146.168 195.839 139.893 198.416 132.384C201.097 124.875 202.437 116.029 202.437 105.846Z" fill="#61E786"/>
          <path d="M303.201 212V0H518.319V45.2081H362.123V80.2329H510.277V125.441H362.123V166.792H520.484V212H303.201Z" fill="#61E786"/>
          <path d="M707.079 103.223L807.911 212H739.091L672.592 140.562L606.402 212H537.737L638.414 103.223L542.686 0H611.505L672.592 66.3464L733.988 0H802.807L707.079 103.223Z" fill="#61E786"/>
          <path d="M893.364 45.2081V82.0844H1031.47V127.293H893.364V212H835.989V0H1039.04V45.2081H893.364Z" fill="#61E786"/>
          <path d="M1078.57 212V0H1135.94V212H1078.57Z" fill="#61E786"/>
          <path d="M1393.83 212L1250.47 66.3464V212H1193.09V0H1255.42L1398.93 146.271V0H1456V212H1393.83Z" fill="#61E786"/>
        </svg>
        <svg className='mobile footer-svg' width="382" height="176" viewBox="0 0 382 176" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M123.065 51.6011C123.065 58.0211 122.358 63.7358 120.944 68.7453C119.531 73.7062 117.532 78.0348 114.948 81.7311C112.413 85.4275 109.342 88.5645 105.735 91.1422C102.176 93.7199 98.2033 95.7869 93.816 97.3433C89.4286 98.8996 84.7001 100.043 79.6302 100.772C74.5604 101.453 69.2712 101.793 63.7627 101.793H0V1.55469H63.6165C69.125 1.55469 74.4142 1.91946 79.484 2.649C84.5538 3.3299 89.2824 4.44853 93.6697 6.00488C98.1058 7.56123 102.128 9.62826 105.735 12.206C109.342 14.735 112.413 17.8721 114.948 21.617C117.532 25.3134 119.531 29.642 120.944 34.6028C122.358 39.5637 123.065 45.2298 123.065 51.6011ZM95.7172 51.6011C95.7172 46.7862 95.0834 42.6035 93.816 39.053C92.5973 35.5026 90.5986 32.5845 87.82 30.2986C85.09 27.964 81.5071 26.2375 77.071 25.1188C72.6349 23.9516 67.2238 23.3679 60.8378 23.3679H27.1284V79.9802H60.8378C67.2238 79.9802 72.6349 79.4209 77.071 78.3023C81.5071 77.135 85.09 75.3841 87.82 73.0496C90.5986 70.6664 92.5973 67.6996 93.816 64.1492C95.0834 60.5988 95.7172 56.4161 95.7172 51.6011Z" fill="#61E786"/>
          <path d="M143.361 101.793V1.55469H245.074V22.9302H171.22V39.4908H241.272V60.8663H171.22V80.418H246.098V101.793H143.361Z" fill="#61E786"/>
          <path d="M334.324 50.3609L382 101.793H349.461L318.018 68.0158L286.722 101.793H254.255L301.858 50.3609L256.595 1.55469H289.135L318.018 32.9249L347.048 1.55469H379.587L334.324 50.3609Z" fill="#61E786"/>
          <path d="M27.1284 136.795V154.231H92.4267V175.607H27.1284V215.659H0V115.42H96.0097V136.795H27.1284Z" fill="#61E786"/>
          <path d="M114.697 215.659V115.42H141.825V215.659H114.697Z" fill="#61E786"/>
          <path d="M263.761 215.659L195.977 146.79V215.659H168.848V115.42H198.317L266.174 184.58V115.42H293.156V215.659H263.761Z" fill="#61E786"/>
        </svg>


      </footer>
    </main>
  )
}
