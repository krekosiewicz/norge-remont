// components/Footer.tsx
import Link from 'next/link'

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-400 text-white p-12">
      <div className="mx-auto flex justify-between flex-wrap items-center">
        <div className="mb-16">
          <h2 className="text-8xl">high</h2>
          <h2 className="text-8xl">maintenance</h2>
          <p className="text-xl text-red-500">Kacper Marszałkowski</p>
        </div>
        <div className="flex justify-between space-x-10 mb-16">
          <div>
            <h3 className="text-red-500 font-bold mb-2">menu</h3>
            <ul>
              <li className="hover:underline"><Link href={'./'}>home</Link></li>
              <li className="hover:underline"><Link href={'./offer'}>offer</Link></li>
              <li className="hover:underline"><Link href={'./about'}>about us</Link></li>
              <li className="hover:underline"><Link href={'./gallery'}>gallery</Link></li>
              <li className="hover:underline"><Link href={'./contact'}>contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-red-500 font-bold mb-2">contact</h3>
            <ul>
              <li>highmaintenance@gmail.com</li>
              <li>+00 000 000 000</li>
              <li>address placeholder</li>
            </ul>
          </div>
          <div>
            <h3 className="text-red-500 font-bold mb-2 invisible">privacy policy</h3>
            <h3 className="font-bold">privacy policy</h3>
          </div>
        </div>
      </div>
      <p className="text-red-500">site designed by Paulina Gudzowska & Kacper Rekosiewicz</p>
    </footer>
  );
};

export default Footer;