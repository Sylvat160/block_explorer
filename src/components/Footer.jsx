import React, {useState} from 'react'
import { blackether, map } from '../assets'
import { Community, Products, Companies } from '../constants';

const Footer = () => {
  const [address, setAddress] = useState(
    "0x452A12ad65C41D9A88f2515Af6c6F364060D4CE8"
  );

  const onTop = () => {
    window.scrollTo(0, 0)
  }
  return (
    <footer className="mt-10 bg-primaryBgLight pb-0 pt-10 dark:bg-primaryBgDark">
      <div className="m-auto px-5">
        <div className="border-b border-b-secondaryBgLight">
          <div className="mb-3 flex flex-wrap justify-between md:flex-nowrap">
            <div className="flex w-24 justify-between">
              <a
                href="https://github.com/Sylvat160"
                target="blank"
                className="social-link flex items-center gap-2 rounded-full bg-primaryBgLight p-1"
              >
                <svg
                  height="20"
                  width="20"
                  viewBox="0 0 16 16"
                  className="rounded-full fill-slate-500"
                >
                  <path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"></path>
                </svg>
              </a>
              <a
                href="https://twitter.com/@ttagnabou"
                target="blank"
                className="social-link flex items-center gap-2 rounded-full bg-primaryBgLight p-1"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  height="20"
                  width="20"
                  viewBox="0 0 30 30"
                  className="rounded-full bg-primaryBgLight fill-slate-500"
                >
                  <path d="M28,6.937c-0.957,0.425-1.985,0.711-3.064,0.84c1.102-0.66,1.947-1.705,2.345-2.951c-1.03,0.611-2.172,1.055-3.388,1.295 c-0.973-1.037-2.359-1.685-3.893-1.685c-2.946,0-5.334,2.389-5.334,5.334c0,0.418,0.048,0.826,0.138,1.215 c-4.433-0.222-8.363-2.346-10.995-5.574C3.351,6.199,3.088,7.115,3.088,8.094c0,1.85,0.941,3.483,2.372,4.439 c-0.874-0.028-1.697-0.268-2.416-0.667c0,0.023,0,0.044,0,0.067c0,2.585,1.838,4.741,4.279,5.23 c-0.447,0.122-0.919,0.187-1.406,0.187c-0.343,0-0.678-0.034-1.003-0.095c0.679,2.119,2.649,3.662,4.983,3.705 c-1.825,1.431-4.125,2.284-6.625,2.284c-0.43,0-0.855-0.025-1.273-0.075c2.361,1.513,5.164,2.396,8.177,2.396 c9.812,0,15.176-8.128,15.176-15.177c0-0.231-0.005-0.461-0.015-0.69C26.38,8.945,27.285,8.006,28,6.937z"></path>
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/sylvain-tagnabou-b06b81227/"
                target="blank"
                className="social-link flex items-center gap-2 rounded-full bg-primaryBgLight p-1"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  height="20"
                  width="20"
                  viewBox="0 0 30 30"
                  className="rounded-full bg-primaryBgLight fill-slate-500"
                >
                  <path d="M9,25H4V10h5V25z M6.501,8C5.118,8,4,6.879,4,5.499S5.12,3,6.501,3C7.879,3,9,4.121,9,5.499C9,6.879,7.879,8,6.501,8z M27,25h-4.807v-7.3c0-1.741-0.033-3.98-2.499-3.98c-2.503,0-2.888,1.896-2.888,3.854V25H12V9.989h4.614v2.051h0.065 c0.642-1.18,2.211-2.424,4.551-2.424c4.87,0,5.77,3.109,5.77,7.151C27,16.767,27,25,27,25z"></path>
                </svg>
              </a>
            </div>

            <button
              onClick={onTop}
              className="text-sm font-medium outline-0 hover:text-activeLight"
            >
              &#8593; Back to Top
            </button>
          </div>
        </div>

        <div className="mt-5 block lg:flex">
          <div>
            <div className="lg:h-16 lg:min-h-[300px]">
              <div className="flex">
                <img src={blackether} alt="" />
                <h4 className="ml-1 inline-flex items-center font-normal">
                  Powered by Alchemy SDK
                </h4>
              </div>
              <div>
                <p className="mt-2 w-full text-xs text-secondaryBgDark dark:text-secondaryBgLight lg:w-[300px]">
                  <span className="font-semibold text-activeLight dark:text-yellow-300">
                    X-Plorer
                  </span>{" "}
                  is a user-friendly Ethereum block explorer and analytics
                  platform powered by Alchemy SDK, enabling developers to
                  explore, verify and analyze blockchain data.
                </p>
              </div>

              <picture className="hidden lg:block">
                <img width="300" src={map} alt="map" />
              </picture>
            </div>
          </div>
          <section className="mx-0 my-5 flex w-full flex-row lg:ml-20 lg:mt-0">
            <div className="w-full px-0 sm:w-1/3 lg:px-3">
              <h3 className="font-medium">Company</h3>
              <ul>
                {Companies.map((company) => (
                  <li className="my-4 text-xs" key={company.name}>
                    <a href={company.link}>{ company.name }</a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="w-full px-0 sm:w-1/3 lg:px-3">
              <h3 className="font-medium">Community</h3>
              <ul>
                {Community.map((community) => (
                  <li className="my-4 text-xs" key={community.name}>
                    <a href={Community.link}>{ community.name }</a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="w-full px-0 sm:w-1/3 lg:px-3">
              <h3 className="font-medium">Products & Services</h3>
              <ul>
                {Products.map((product) => (
                  <li className="my-4 text-xs" key={product.name}>
                    <a href={product.link}>{ product.name }</a>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        </div>
        <div className="flex flex-col justify-between text-xs text-primaryTextLight dark:text-primaryTextDark md:flex-row">
          <p className="my-2">X-Plorer &#169; 2023</p>
          <div className="flex items-center">
            {/* <CopyToClipboard text={address} /> */}
            <p className="my-2">
              Donations:
              <span className="mx-1 text-activeLight dark:text-activeDark">
                {address ? address : "..."}
              </span>
              ❤️
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer