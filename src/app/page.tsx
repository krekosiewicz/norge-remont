import './page.css';
import Link from 'next/link' // Adjust the path to where your custom.css file is located

export default function Home() {
  return (
    <main>
      {/* section 1 */}
      <div className="section-home-bg h-screen lg:h-auto justify-center">
        <div className="max-w-6xl h-full flex items-end justify-start mx-auto">
          <div className="pb-24 text-white">
            <h1 className="text-8xl">high</h1>
            <h1 className="text-8xl">maintenance</h1>
          </div>
        </div>
        {/* Content for section HOME */}
      </div>

      <div className="section h-screen lg:h-auto flex items-end justify-start">
        <div className="section-offer-bg max-w-6xl h-4/5 flex items-end justify-start w-full mx-auto">
          <div className="p-16">
            <h2 className="text-6xl text-white">
              roof cleaning
            </h2>
            <h2 className="text-6xl text-white">
              facade cleaning
            </h2>
            <h2 className="text-6xl text-white mb-6">
              painting
            </h2>
            <Link href={'/offer'} className="text-white text-2xl underline">our offer</Link>
          </div>
        </div>
      </div>


      <div className="section h-screen lg:h-auto flex items-end justify-start">
        <div className="max-w-6xl flex h-4/5 items-end justify-start w-full mx-auto">
          <div className="section-about-bg max-w-5xl flex items-end justify-start w-full h-full">
            <div className="p-16">
              <h2 className="text-6xl text-white">
                profesionalism
              </h2>
              <h2 className="text-6xl text-white mb-6">
                and efficency
              </h2>
              <Link href={'/about'} className="text-white text-2xl underline">about us</Link>
            </div>
          </div>
        </div>
      </div>

      <div className="section h-screen lg:h-auto flex items-end">
        <div className="max-w-6xl flex h-full items-end w-full mx-auto">
          <div className="p-16 pb-64">
            <h2 className="text-6xl text-white mb-6">
              gallery
            </h2>
            <Link href={'/gallery'} className="text-white text-2xl underline">see our projects</Link>
          </div>
          <div className="section-gallery-bg max-w-5xl flex items-end justify-start w-full h-4/5 mb-16">
          </div>
        </div>
      </div>


      <div className="section h-screen lg:h-auto flex items-end justify-start">
        <div className="max-w-6xl flex h-4/5 items-end justify-start w-full mx-auto mb-32">
          <div className="section-contact-bg max-w-5xl flex items-end justify-start w-full h-full">
            <div className="p-16">
              <h2 className="text-6xl text-white mb-6">
                contact
              </h2>
              <Link href={'/contact'} className="text-white text-2xl underline">contact us</Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}