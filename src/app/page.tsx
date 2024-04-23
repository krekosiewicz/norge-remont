import "./page.css";
import Link from "next/link";


export default function Home() {
  return (
    <main>
      {/* section 1 */}
      <div className="section-home-bg h-screen justify-center">
        <div className="xs:justify-start mx-auto flex h-full items-end justify-center px-8 lg:max-w-6xl xl:px-0">
          {/*<div className="pb-40 text-white xl:pb-24">*/}
          {/*  <h1 className="text-5xl sm:text-8xl xl:text-10xl">high</h1>*/}
          {/*  <h1 className="text-5xl sm:text-8xl xl:text-10xl">maintenance</h1>*/}
          {/*</div>*/}
        </div>
      </div>

      <div className="page-section flex h-screen items-center justify-start bg-black px-8 py-24 lg:py-32">
        <div className="section-offer-bg mx-auto flex h-full w-full max-w-6xl items-end justify-start">
          <div className="p-8 sm:p-16">
            <h2 className="text-4xl text-white md:text-6xl">roof cleaning</h2>
            <h2 className="text-4xl text-white md:text-6xl">facade cleaning</h2>
            <h2 className="mb-6 text-4xl text-white md:text-6xl">painting</h2>
            <Link href={"/offer"} className="text-2xl text-white underline">
              our offer
            </Link>
          </div>
        </div>
      </div>

      <div className="page-section page-section-container flex w-screen bg-black max-h-6xl">
        <div className="mx-auto flex w-full max-w-6xl items-end justify-start">
          <div className="section-about-bg flex h-full w-full max-w-5xl items-end justify-start">
            <div className="p-16">
              <h2 className="text-4xl text-white md:text-6xl">
                profesionalism
              </h2>
              <h2 className="mb-6 text-4xl text-white md:text-6xl">
                and efficency
              </h2>
              <Link href={"/about"} className="text-2xl text-white underline">
                about us
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="page-section flex h-screen bg-black">
        <div
          className="mx-auto md:max-w-6xl relative flex h-full w-full items-end md:items-center justify-center p-16 py-24 pr-0 md:py-0">
          <div className="section-gallery-bg flex items-end h-full w-full md:h-3/5 md:ml-48">
            <div className="pl-16 pb-8 md:absolute md:pb-32 md:left-0">
              <h2 className="mb-6 text-4xl md:text-6xl text-white">gallery</h2>
              <Link href={"/gallery"} className="text-2xl text-white underline">
                see our projects
              </Link>
            </div>
          </div>
          {/*section-gallery-bg flex h-full w-full max-w-5xl items-end justify-start */}
          <div className=""></div>
        </div>
      </div>

      <div className="page-section page-section-container flex w-screen bg-black max-h-6xl pb-32">
        <div className="mx-auto flex w-full max-w-6xl items-end justify-start">
          <div className="section-contact-bg flex h-full w-full max-w-5xl items-end justify-start">
            <div className="p-16">
              <h2 className="text-4xl text-white md:text-6xl">
                contact
              </h2>
              <Link href={"/contact"} className="text-2xl text-white underline">
                reach out to us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
